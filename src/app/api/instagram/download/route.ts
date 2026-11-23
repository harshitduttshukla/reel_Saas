import { isValidShortcode } from "@/lib/instagram-url";
import { MediaError } from "@/lib/errors";
import { isAllowedMediaUrl } from "@/lib/media-host";
import { resolveReel } from "@/lib/providers";
import { checkRateLimit } from "@/lib/rate-limit";
import { errorResponse, readSmallBody, toErrorCode } from "@/lib/request";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_REDIRECTS = 3;
const MAX_VIDEO_BYTES = 300 * 1024 * 1024;

/** Fetches a media URL following redirects manually so every hop is re-validated (SSRF guard). */
async function fetchMedia(startUrl: string): Promise<Response> {
  let url = startUrl;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    if (!isAllowedMediaUrl(url)) throw new MediaError("DOWNLOAD_FAILED");
    let res: Response;
    try {
      res = await fetch(url, { redirect: "manual", cache: "no-store", signal: AbortSignal.timeout(50_000) });
    } catch {
      throw new MediaError("DOWNLOAD_FAILED");
    }
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      if (!location) throw new MediaError("DOWNLOAD_FAILED");
      url = new URL(location, url).toString();
      continue;
    }
    if (res.status === 403 || res.status === 410) throw new MediaError("TEMPORARILY_UNAVAILABLE"); // expired signed URL
    if (res.status === 404) throw new MediaError("NOT_FOUND");
    if (!res.ok || !res.body) throw new MediaError("DOWNLOAD_FAILED");
    return res;
  }
  throw new MediaError("DOWNLOAD_FAILED");
}

export async function POST(req: Request) {
  if (!checkRateLimit(req.headers, "download")) return errorResponse("RATE_LIMITED");
  try {
    const body = await readSmallBody(req);
    // The browser only sends a shortcode. The media URL is re-resolved on the
    // server, so client-supplied URLs are never fetched.
    if (!isValidShortcode(body.shortcode)) return errorResponse("INVALID_URL");
    const shortcode = body.shortcode;

    const media = await resolveReel({ shortcode, canonicalUrl: `https://www.instagram.com/reel/${shortcode}/` });
    const upstream = await fetchMedia(media.videoUrl);

    const type = upstream.headers.get("content-type") ?? "";
    if (!type.startsWith("video/")) throw new MediaError("UNSUPPORTED_MEDIA");
    const length = Number(upstream.headers.get("content-length") ?? "0");
    if (length > MAX_VIDEO_BYTES) throw new MediaError("UNSUPPORTED_MEDIA");

    const headers = new Headers({
      "Content-Type": type.includes("mp4") ? "video/mp4" : type,
      "Content-Disposition": `attachment; filename="instagram-reel-${shortcode}.mp4"`,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    if (length > 0) headers.set("Content-Length", String(length));

    // Streamed straight through: the video is never buffered in function memory.
    return new Response(upstream.body, { status: 200, headers });
  } catch (err) {
    return errorResponse(toErrorCode(err));
  }
}
