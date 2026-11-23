"use client";

import { useState, type ClipboardEvent, type FormEvent } from "react";
import { AlertCircle, ClipboardPaste, Download, Loader2, X } from "lucide-react";
import { parseReelUrl } from "@/lib/instagram-url";
import { ERROR_MESSAGES } from "@/lib/errors";
import { inspectReel } from "@/lib/api-client";
import type { InspectSuccess } from "@/lib/types";
import { VideoResult } from "./video-result";

export function Downloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<InspectSuccess["data"] | null>(null);

  async function handlePaste() {
    try {
      const text = (await navigator.clipboard.readText()).trim();
      setError(null);
      if (text) {
        setUrl(text);
        void submit(text);
      }
    } catch {
      setError("Clipboard access was blocked. Long-press or press Ctrl/⌘+V to paste.");
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    void submit(url);
  }

  /** Auto-submit when a valid Reel link is pasted into the input. */
  function handleInputPaste(e: ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("text").trim();
    if (parseReelUrl(text).ok) {
      e.preventDefault();
      setUrl(text);
      void submit(text);
    }
  }

  async function submit(value: string) {
    if (loading) return;
    setResult(null);
    const parsed = parseReelUrl(value);
    if (!parsed.ok) return setError(ERROR_MESSAGES[parsed.reason]);

    setError(null);
    setLoading(true);
    const res = await inspectReel(parsed.canonicalUrl);
    setLoading(false);
    if (res.success) setResult(res.data);
    else setError(res.error.message);
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-2 shadow-xl shadow-pink-900/10 ring-1 ring-slate-200">
        <label htmlFor="reel-url" className="sr-only">Instagram Reel URL</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <input
              id="reel-url"
              type="url"
              inputMode="url"
              autoComplete="off"
              spellCheck={false}
              maxLength={500}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onPaste={handleInputPaste}
              placeholder="Paste Instagram Reel URL here"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "reel-error" : undefined}
              className="h-14 w-full rounded-xl bg-slate-50 pl-4 pr-28 text-base outline-none ring-1 ring-transparent placeholder:text-slate-400 focus:bg-white focus:ring-brand-500"
            />
            <div className="absolute inset-y-0 right-2 flex items-center gap-1">
              {url && (
                <button type="button" onClick={() => { setUrl(""); setError(null); setResult(null); }} aria-label="Clear" className="rounded-md p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700">
                  <X className="size-4" />
                </button>
              )}
              <button type="button" onClick={handlePaste} className="flex items-center gap-1 rounded-lg bg-white px-2.5 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100">
                <ClipboardPaste className="size-4" aria-hidden /> Paste
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} className="ig-gradient flex h-14 items-center justify-center gap-2 rounded-xl px-7 text-base font-semibold text-white shadow-md transition hover:opacity-95 disabled:opacity-70">
            {loading ? <Loader2 className="size-5 animate-spin" aria-hidden /> : <Download className="size-5" aria-hidden />}
            {loading ? "Processing…" : "Download"}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {error && (
          <p id="reel-error" role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-left text-sm text-red-700 ring-1 ring-red-200">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {error}
          </p>
        )}
        {result && <VideoResult media={result} />}
      </div>
    </div>
  );
}
