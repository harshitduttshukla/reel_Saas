import { ImageResponse } from "next/og";
import { OgLogo } from "@/lib/logo-image";

export const alt = "ReelSave – Instagram Reels Downloader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0f172a", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <OgLogo size={110} />
          <div style={{ fontSize: 60, fontWeight: 800 }}>ReelSave</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, marginTop: 40, lineHeight: 1.1 }}>Instagram Reels Downloader</div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#cbd5e1" }}>Paste a Reel link · Download the MP4 · No sign-up</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 14, background: "linear-gradient(90deg,#f58529,#dd2a7b,#8134af,#515bd4)" }} />
      </div>
    ),
    size,
  );
}
