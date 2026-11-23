import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { HINGLISH_GUIDES } from "@/lib/hinglish-guides";
import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900"><LogoMark size={28} />{SITE_NAME}</Link>
        <nav aria-label="Guides" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/${g.slug}`} className="text-slate-600 hover:text-slate-900">Reels on {g.device}</Link>
          ))}
          {HINGLISH_GUIDES.map((g) => (
            <Link key={g.slug} href={`/hi/${g.slug}`} className="text-slate-600 hover:text-slate-900">{g.short}</Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE_NAME}. Not affiliated with Instagram or Meta.</p>
        <nav aria-label="Footer" className="flex gap-4">
          <Link href="/#how-to" className="hover:text-slate-900">How to</Link>
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
          <Link href="/hi" className="hover:text-slate-900">हिंदी</Link>
          <Link href="/#faq" className="hover:text-slate-900">FAQ</Link>
          <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
