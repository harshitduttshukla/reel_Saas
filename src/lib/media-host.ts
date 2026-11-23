/**
 * SSRF guard for media URLs. Only https URLs on known media CDN hosts
 * (plus explicitly configured extras) may ever be fetched by the server.
 */
const DEFAULT_SUFFIXES = [".cdninstagram.com", ".fbcdn.net"];

function extraHosts(): string[] {
  return (process.env.MEDIA_ALLOWED_HOSTS ?? "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
}

function isIpLiteral(host: string): boolean {
  return /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(":") || host.startsWith("[");
}

export function isAllowedMediaUrl(value: string, extras: string[] = extraHosts()): boolean {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  if (url.protocol !== "https:") return false;
  if (url.username || url.password) return false;
  if (url.port && url.port !== "443") return false;
  const host = url.hostname.toLowerCase();
  if (!host || isIpLiteral(host) || host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) return false;

  const rules = [...DEFAULT_SUFFIXES, ...extras];
  return rules.some((rule) => (rule.startsWith(".") ? host.endsWith(rule) && host.length > rule.length : host === rule));
}
