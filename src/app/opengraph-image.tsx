import { ImageResponse } from "next/og";

export const alt = "Instagram Reels Downloader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, color: "white", background: "linear-gradient(135deg,#f58529,#dd2a7b 45%,#8134af 75%,#515bd4)" }}>
        <div style={{ fontSize: 72, fontWeight: 800 }}>Instagram Reels Downloader</div>
        <div style={{ fontSize: 34, marginTop: 24, opacity: 0.9 }}>Paste a public Reel link. Get the video.</div>
      </div>
    ),
    size,
  );
}
