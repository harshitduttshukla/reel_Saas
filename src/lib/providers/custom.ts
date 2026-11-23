import { MediaError } from "../errors";
import type { ErrorCode, ReelMedia } from "../types";
import type { MediaProvider, ReelLookup } from "./types";

/**
 * Generic adapter for a licensed third-party media provider whose terms
 * explicitly permit this use. Contract:
 *   POST CUSTOM_PROVIDER_ENDPOINT  {"url": "<canonical reel url>"}
 *   200 -> {"title"?, "thumbnail"?, "videoUrl", "author"?}
 *   4xx/5xx -> {"error": {"code": "<one of our ErrorCode values>"}}
 */
const PASSTHROUGH: ErrorCode[] = ["PRIVATE_OR_INACCESSIBLE", "NOT_FOUND", "UNSUPPORTED_MEDIA", "TEMPORARILY_UNAVAILABLE"];

export class CustomProvider implements MediaProvider {
  readonly name = "custom";

  isConfigured(): boolean {
    const endpoint = process.env.CUSTOM_PROVIDER_ENDPOINT ?? "";
    return endpoint.startsWith("https://") && Boolean(process.env.CUSTOM_PROVIDER_API_KEY);
  }

  async resolve({ canonicalUrl }: ReelLookup): Promise<ReelMedia> {
    let res: Response;
    try {
      res = await fetch(process.env.CUSTOM_PROVIDER_ENDPOINT!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.CUSTOM_PROVIDER_API_KEY}` },
        body: JSON.stringify({ url: canonicalUrl }),
        cache: "no-store",
        redirect: "error",
        signal: AbortSignal.timeout(10_000),
      });
    } catch {
      throw new MediaError("TEMPORARILY_UNAVAILABLE");
    }
    const body = (await res.json().catch(() => null)) as Record<string, unknown> | null;

    if (!res.ok) {
      const code = (body?.error as { code?: string } | undefined)?.code as ErrorCode | undefined;
      if (code && PASSTHROUGH.includes(code)) throw new MediaError(code);
      if (res.status === 404) throw new MediaError("NOT_FOUND");
      if (res.status === 401 || res.status === 403) throw new MediaError("PROVIDER_NOT_CONFIGURED");
      throw new MediaError("TEMPORARILY_UNAVAILABLE");
    }
    if (!body || typeof body.videoUrl !== "string") throw new MediaError("UNSUPPORTED_MEDIA");
    return {
      title: typeof body.title === "string" ? body.title.slice(0, 200) : "Instagram Reel",
      thumbnail: typeof body.thumbnail === "string" ? body.thumbnail : null,
      videoUrl: body.videoUrl,
      author: typeof body.author === "string" ? body.author : null,
      caption: null,
    };
  }
}
