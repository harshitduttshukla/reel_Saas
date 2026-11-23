import { MediaError } from "../errors";
import type { ReelMedia } from "../types";
import type { MediaProvider, ReelLookup } from "./types";

/**
 * Official Instagram API (Instagram Login, graph.instagram.com).
 * LIMITATION: the official API only exposes media owned by the account whose
 * access token is configured. It cannot fetch other people's Reels, so this
 * provider serves Reels from YOUR own professional account only.
 */
interface GraphMedia {
  id: string;
  media_type?: string;
  media_product_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  shortcode?: string;
  caption?: string;
  username?: string;
}
interface GraphPage {
  data?: GraphMedia[];
  paging?: { next?: string };
  error?: { code?: number; type?: string };
}

const FIELDS = "id,media_type,media_product_type,media_url,thumbnail_url,permalink,shortcode,caption,username";

export class InstagramGraphProvider implements MediaProvider {
  readonly name = "instagram_graph";

  private get token() {
    return process.env.INSTAGRAM_ACCESS_TOKEN?.trim() ?? "";
  }

  isConfigured(): boolean {
    return this.token.length > 20;
  }

  async resolve({ shortcode }: ReelLookup): Promise<ReelMedia> {
    const version = (process.env.INSTAGRAM_GRAPH_VERSION || "v21.0").replace(/[^v0-9.]/g, "");
    const maxPages = Math.min(Number(process.env.INSTAGRAM_MAX_PAGES) || 8, 20);
    let next: string | undefined =
      `https://graph.instagram.com/${version}/me/media?fields=${FIELDS}&limit=25&access_token=${encodeURIComponent(this.token)}`;

    for (let page = 0; next && page < maxPages; page++) {
      const pageData = await this.fetchPage(next);
      const match = pageData.data?.find(
        (m) => m.shortcode === shortcode || (m.permalink ?? "").includes(`/${shortcode}/`),
      );
      if (match) return this.toReel(match);
      next = pageData.paging?.next;
      // Only follow pagination back to the Graph API host.
      if (next && new URL(next).hostname !== "graph.instagram.com") next = undefined;
    }
    // Not owned by the configured account -> not authorized through this provider.
    throw new MediaError("PRIVATE_OR_INACCESSIBLE");
  }

  private async fetchPage(url: string): Promise<GraphPage> {
    let res: Response;
    try {
      res = await fetch(url, { cache: "no-store", redirect: "error", signal: AbortSignal.timeout(8_000) });
    } catch {
      throw new MediaError("TEMPORARILY_UNAVAILABLE");
    }
    const body = (await res.json().catch(() => ({}))) as GraphPage;
    if (res.ok) return body;
    const code = body.error?.code;
    if (code === 190 || code === 10 || code === 200) throw new MediaError("PROVIDER_NOT_CONFIGURED"); // bad/expired token or permission
    if (code === 4 || code === 17 || code === 32 || res.status === 429) throw new MediaError("TEMPORARILY_UNAVAILABLE");
    throw new MediaError("TEMPORARILY_UNAVAILABLE");
  }

  private toReel(m: GraphMedia): ReelMedia {
    if (m.media_type !== "VIDEO" || !m.media_url) throw new MediaError("UNSUPPORTED_MEDIA");
    return {
      title: m.username ? `Instagram Reel by @${m.username}` : "Instagram Reel",
      thumbnail: m.thumbnail_url ?? null,
      videoUrl: m.media_url,
      author: m.username ?? null,
      caption: m.caption ? m.caption.slice(0, 300) : null,
    };
  }
}
