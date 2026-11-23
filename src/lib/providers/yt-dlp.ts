import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { MediaError } from "../errors";
import type { ReelMedia } from "../types";
import type { MediaProvider, ReelLookup } from "./types";

/**
 * Uses the yt-dlp CLI: locally the installed binary, on Vercel the pinned Linux
 * binary bundled at build time (scripts/fetch-yt-dlp.mjs -> bin/yt-dlp).
 * TEMPORARY provider: replace with a licensed provider for long-term production.
 * - No cookies/login are passed, so private Reels are never accessed.
 * - Instagram may rate-limit or require login; such errors are reported, not bypassed.
 * - Scraping-based retrieval may conflict with Instagram's Terms of Use:
 *   use for personal testing only, not for a public service.
 */
interface YtDlpInfo {
  url?: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  uploader?: string;
  channel?: string;
  vcodec?: string;
}

function runYtDlp(url: string): Promise<{ stdout: string; stderr: string; failed: boolean }> {
  const bundled = path.join(process.cwd(), "bin", "yt-dlp");
  const bin = process.env.YTDLP_PATH?.trim() || (existsSync(bundled) ? bundled : "yt-dlp");
  // execFile with an args array: no shell, so no command injection. The URL is
  // our own canonical https://www.instagram.com/reel/<validated-code>/ string.
  const args = ["-J", "--no-playlist", "--no-cache-dir", "--no-warnings", "-f", "b[ext=mp4]/b", "--", url];
  return new Promise((resolve) => {
    execFile(bin, args, { timeout: 30_000, maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      resolve({ stdout: String(stdout), stderr: String(stderr), failed: Boolean(err) });
    });
  });
}

export class YtDlpProvider implements MediaProvider {
  readonly name = "yt_dlp";

  isConfigured(): boolean {
    return true;
  }

  async resolve({ canonicalUrl }: ReelLookup): Promise<ReelMedia> {
    const { stdout, stderr, failed } = await runYtDlp(canonicalUrl);
    if (failed) {
      const msg = stderr.toLowerCase();
      if (msg.includes("enoent") || msg.includes("not found: yt-dlp")) throw new MediaError("PROVIDER_NOT_CONFIGURED");
      if (msg.includes("private") || msg.includes("login") || msg.includes("cookies")) throw new MediaError("PRIVATE_OR_INACCESSIBLE");
      if (msg.includes("404") || msg.includes("not available") || msg.includes("does not exist")) throw new MediaError("NOT_FOUND");
      if (msg.includes("rate") || msg.includes("429")) throw new MediaError("TEMPORARILY_UNAVAILABLE");
      if (msg.includes("no video")) throw new MediaError("UNSUPPORTED_MEDIA");
      throw new MediaError("TEMPORARILY_UNAVAILABLE");
    }
    let info: YtDlpInfo;
    try {
      info = JSON.parse(stdout) as YtDlpInfo;
    } catch {
      throw new MediaError("TEMPORARILY_UNAVAILABLE");
    }
    if (!info.url || info.vcodec === "none") throw new MediaError("UNSUPPORTED_MEDIA");
    const author = info.uploader || info.channel || null;
    return {
      title: author ? `Instagram Reel by @${author}` : "Instagram Reel",
      thumbnail: info.thumbnail ?? null,
      videoUrl: info.url,
      author,
      caption: info.description ? info.description.slice(0, 300) : null,
    };
  }
}
