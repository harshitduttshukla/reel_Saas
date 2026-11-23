import { NextResponse } from "next/server";
import { parseReelUrl } from "@/lib/instagram-url";
import { resolveReel } from "@/lib/providers";
import { checkRateLimit } from "@/lib/rate-limit";
import { errorResponse, readSmallBody, toErrorCode } from "@/lib/request";
import type { InspectSuccess } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  if (!checkRateLimit(req.headers, "inspect")) return errorResponse("RATE_LIMITED");
  try {
    const body = await readSmallBody(req);
    const parsed = parseReelUrl(body.url);
    if (!parsed.ok) return errorResponse(parsed.reason);

    const media = await resolveReel({ shortcode: parsed.shortcode, canonicalUrl: parsed.canonicalUrl });
    const payload: InspectSuccess = { success: true, data: { ...media, shortcode: parsed.shortcode } };
    // Media URLs are temporary and signed: never cache.
    return NextResponse.json(payload, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    // Intentionally no logging of request data or media URLs.
    return errorResponse(toErrorCode(err));
  }
}
