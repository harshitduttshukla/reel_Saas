export const SITE_NAME = "ReelSave";

/** Normalizes NEXT_PUBLIC_SITE_URL: adds https:// if missing, strips trailing slashes. */
function normalizeSiteUrl(raw: string | undefined): string {
  const value = (raw ?? "").trim().replace(/\/+$/, "");
  if (!value) return "http://localhost:3000";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_TITLE = "Instagram Reels Downloader - Download Instagram Reels Videos";
export const SITE_DESCRIPTION = "Download Instagram Reels videos easily by pasting a Reel link into our downloader.";
