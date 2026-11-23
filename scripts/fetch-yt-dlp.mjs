// Downloads a pinned, SHA-256-verified standalone yt-dlp Linux binary into ./bin
// for Vercel builds. Skipped on non-Linux machines (local dev uses your installed yt-dlp).
import { createHash } from "node:crypto";
import { chmod, mkdir, writeFile, access } from "node:fs/promises";

const VERSION = process.env.YTDLP_VERSION || "2026.10.26";
const ASSET = "yt-dlp_linux";
const BASE = `https://github.com/yt-dlp/yt-dlp/releases/download/${VERSION}`;
const OUT = "bin/yt-dlp";

if (process.platform !== "linux" && !process.env.FORCE_YTDLP_FETCH) {
  console.log("[yt-dlp] not Linux, skipping bundle (local yt-dlp will be used)");
  process.exit(0);
}

const get = async (url) => {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`[yt-dlp] ${url} -> HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
};

try {
  await access(OUT);
  console.log("[yt-dlp] already present");
} catch {
  const sums = (await get(`${BASE}/SHA2-256SUMS`)).toString();
  const expected = sums.split("\n").find((l) => l.trim().endsWith(` ${ASSET}`))?.split(/\s+/)[0];
  if (!expected) throw new Error("[yt-dlp] checksum not found");
  const bin = await get(`${BASE}/${ASSET}`);
  const actual = createHash("sha256").update(bin).digest("hex");
  if (actual !== expected) throw new Error("[yt-dlp] checksum mismatch, refusing to bundle");
  await mkdir("bin", { recursive: true });
  await writeFile(OUT, bin);
  await chmod(OUT, 0o755);
  console.log(`[yt-dlp] bundled ${VERSION} (${(bin.length / 1e6).toFixed(1)} MB, sha256 ok)`);
}
