"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Download, Loader2 } from "lucide-react";
import { downloadReel } from "@/lib/api-client";
import type { InspectSuccess } from "@/lib/types";

export function VideoResult({ media }: { media: InspectSuccess["data"] }) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setState("loading");
    setError(null);
    const res = await downloadReel(media.shortcode);
    if ("ok" in res) setState("done");
    else {
      setState("idle");
      setError(res.error.message);
    }
  }

  return (
    <section aria-label="Video preview" className="mt-6 grid gap-5 rounded-2xl bg-white p-4 text-left shadow-lg ring-1 ring-slate-200 sm:grid-cols-[200px_1fr]">
      <div className="overflow-hidden rounded-xl bg-slate-900 aspect-[9/16] w-full max-w-[220px] mx-auto">
        {/* Signed, expiring CDN URLs: rendered directly (not via the image optimizer) so they are never cached by us. */}
        <video src={media.videoUrl} poster={media.thumbnail ?? undefined} controls playsInline preload="metadata" className="size-full object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-lg font-semibold">{media.title}</h2>
        {media.caption && <p className="line-clamp-4 text-sm text-slate-600">{media.caption}</p>}
        <button type="button" onClick={handleDownload} disabled={state === "loading"} className="ig-gradient mt-2 flex h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold text-white disabled:opacity-70 sm:w-fit">
          {state === "loading" ? <Loader2 className="size-5 animate-spin" aria-hidden /> : <Download className="size-5" aria-hidden />}
          {state === "loading" ? "Downloading…" : "Download Video"}
        </button>
        {state === "done" && <p className="flex items-center gap-1.5 text-sm text-emerald-700"><CheckCircle2 className="size-4" aria-hidden /> Download started.</p>}
        {error && <p role="alert" className="flex items-center gap-1.5 text-sm text-red-700"><AlertCircle className="size-4" aria-hidden /> {error}</p>}
      </div>
    </section>
  );
}
