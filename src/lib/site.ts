export const SITE_NAME = "ReelSave";

/** Normalizes NEXT_PUBLIC_SITE_URL: adds https:// if missing, strips trailing slashes. */
function normalizeSiteUrl(raw: string | undefined): string {
  const value = (raw ?? "").trim().replace(/\/+$/, "");
  if (!value) return "http://localhost:3000";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_TITLE = "Instagram Reels Downloader – Download Reels Videos Free, No Watermark";
export const SITE_DESCRIPTION = "Free Instagram Reels downloader. Paste a Reel link to download Instagram Reels videos in original quality as MP4, with no watermark, no app and no login.";
