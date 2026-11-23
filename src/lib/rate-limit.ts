import { createHash } from "node:crypto";

/**
 * Best-effort, in-memory, per-serverless-instance fixed-window limiter.
 * Keys are one-way hashes of the client IP held only in memory for ~1 minute;
 * nothing is persisted or logged. For stronger guarantees enable Vercel's
 * Firewall / rate-limiting rules (see README).
 */
const WINDOW_MS = 60_000;
const MAX_KEYS = 5_000;
const buckets = new Map<string, { count: number; resetAt: number }>();

function clientKey(headers: Headers): string {
  const ip = headers.get("x-real-ip") ?? headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  return createHash("sha256").update(ip).digest("base64url").slice(0, 16);
}

export function checkRateLimit(headers: Headers, scope: string): boolean {
  const limit = Number(process.env.RATE_LIMIT_PER_MINUTE) || 20;
  const now = Date.now();
  if (buckets.size > MAX_KEYS) {
    for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k);
    if (buckets.size > MAX_KEYS) buckets.clear();
  }
  const key = `${scope}:${clientKey(headers)}`;
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= limit;
}
