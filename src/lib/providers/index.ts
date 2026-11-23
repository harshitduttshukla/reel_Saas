import { MediaError } from "../errors";
import { isAllowedMediaUrl } from "../media-host";
import type { ReelMedia } from "../types";
import { CustomProvider } from "./custom";
import { InstagramGraphProvider } from "./instagram-graph";
import { YtDlpProvider } from "./yt-dlp";
import type { MediaProvider, ReelLookup } from "./types";

function selectProvider(): MediaProvider | null {
  switch ((process.env.MEDIA_PROVIDER ?? "none").trim().toLowerCase()) {
    case "instagram_graph":
      return new InstagramGraphProvider();
    case "yt_dlp":
      return new YtDlpProvider();
    case "custom":
      return new CustomProvider();
    default:
      return null;
  }
}

/** Resolves a Reel through the configured provider and validates the result. */
export async function resolveReel(lookup: ReelLookup): Promise<ReelMedia> {
  const provider = selectProvider();
  if (!provider || !provider.isConfigured()) throw new MediaError("PROVIDER_NOT_CONFIGURED");

  const media = await provider.resolve(lookup);
  // Never pass through a media URL outside the allowlist, even from a provider.
  if (!isAllowedMediaUrl(media.videoUrl)) throw new MediaError("UNSUPPORTED_MEDIA");
  if (media.thumbnail && !isAllowedMediaUrl(media.thumbnail)) media.thumbnail = null;
  return media;
}
