import { ERROR_MESSAGES } from "./errors";
import type { ApiFailure, InspectResponse } from "./types";

const networkFailure = (): ApiFailure => ({
  success: false,
  error: { code: "TEMPORARILY_UNAVAILABLE", message: "Network error. Check your connection and try again." },
});

export async function inspectReel(url: string): Promise<InspectResponse> {
  try {
    const res = await fetch("/api/instagram/inspect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const body = (await res.json().catch(() => null)) as InspectResponse | null;
    return body ?? { success: false, error: { code: "INTERNAL_ERROR", message: ERROR_MESSAGES.INTERNAL_ERROR } };
  } catch {
    return networkFailure();
  }
}

/** Downloads through our API (which re-validates server-side) and saves the file. */
export async function downloadReel(shortcode: string): Promise<{ ok: true } | ApiFailure> {
  try {
    const res = await fetch("/api/instagram/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shortcode }),
    });
    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as ApiFailure | null;
      return body ?? { success: false, error: { code: "DOWNLOAD_FAILED", message: ERROR_MESSAGES.DOWNLOAD_FAILED } };
    }
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = `instagram-reel-${shortcode}.mp4`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 10_000);
    return { ok: true };
  } catch {
    return networkFailure();
  }
}
