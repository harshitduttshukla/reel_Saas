/**
 * Instagram Reel URL validation, shared by the browser and the server.
 * Accepts: https://(www.|m.)instagram.com/reel/<code>/ and /reels/<code>/
 * (optionally prefixed with a username segment), with or without query string.
 */
const ALLOWED_HOSTS = new Set(["instagram.com", "www.instagram.com", "m.instagram.com"]);
const SHORTCODE_RE = /^[A-Za-z0-9_-]{5,64}$/;
export const MAX_URL_LENGTH = 500;

export type ParseResult =
  | { ok: true; shortcode: string; canonicalUrl: string }
  | { ok: false; reason: "EMPTY_INPUT" | "INVALID_URL" };

export function parseReelUrl(input: unknown): ParseResult {
  if (typeof input !== "string" || input.trim() === "") return { ok: false, reason: "EMPTY_INPUT" };
  let raw = input.trim();
  if (raw.length > MAX_URL_LENGTH) return { ok: false, reason: "INVALID_URL" };
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { ok: false, reason: "INVALID_URL" };
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return { ok: false, reason: "INVALID_URL" };
  if (url.username || url.password || url.port) return { ok: false, reason: "INVALID_URL" };
  if (!ALLOWED_HOSTS.has(url.hostname.toLowerCase())) return { ok: false, reason: "INVALID_URL" };

  const parts = url.pathname.split("/").filter(Boolean);
  const idx = parts.findIndex((p) => p === "reel" || p === "reels");
  // "reel" must be first, or second after a username segment.
  if (idx < 0 || idx > 1 || parts.length < idx + 2) return { ok: false, reason: "INVALID_URL" };
  const shortcode = parts[idx + 1];
  if (!SHORTCODE_RE.test(shortcode)) return { ok: false, reason: "INVALID_URL" };

  return { ok: true, shortcode, canonicalUrl: `https://www.instagram.com/reel/${shortcode}/` };
}

export function isValidShortcode(value: unknown): value is string {
  return typeof value === "string" && SHORTCODE_RE.test(value);
}
