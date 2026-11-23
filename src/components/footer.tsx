import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { HINGLISH_GUIDES } from "@/lib/hinglish-guides";
import { POSTS } from "@/lib/blog";
import { LOCALES } from "@/lib/locales";
import { LOCALE_GUIDES } from "@/lib/locale-guides";
import { ui } from "@/lib/ui-strings";
import { LogoMark } from "./logo";

const linkCls = "text-slate-600 hover:text-slate-900";

export function Footer({ lang = "en" }: { lang?: string }) {
  const t = ui(lang);
  const home = lang === "en" ? "/" : `/${lang}`;
  const localGuides = LOCALE_GUIDES.filter((g) => g.lang === lang);
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link href={home} className="flex items-center gap-2 font-bold text-slate-900"><LogoMark size={28} />{SITE_NAME}</Link>
        {localGuides.length > 0 && (
          <nav aria-label={t.guides} className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {localGuides.map((g) => <Link key={g.slug} href={`/${lang}/${g.slug}`} className={linkCls}>{g.title.replace(/\s*[（(].*$/, "")}</Link>)}
          </nav>
        )}
        <nav aria-label="Guides" className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {GUIDES.map((g) => <Link key={g.slug} href={`/${g.slug}`} className={linkCls}>Reels on {g.device}</Link>)}
          {HINGLISH_GUIDES.map((g) => <Link key={g.slug} href={`/hi/${g.slug}`} className={linkCls}>{g.short}</Link>)}
          <Link href="/hi" className={linkCls}>Reel download kaise kare</Link>
        </nav>
        <nav aria-label="Blog" className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {POSTS.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`} className={linkCls}>{p.title.replace(/\s*\(.*\)$/, "")}</Link>)}
        </nav>
        <nav aria-label={t.languages} className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/" hrefLang="en" className={linkCls}>English</Link>
          <Link href="/hi" hrefLang="hi" className={linkCls}>हिंदी</Link>
          {LOCALES.map((l) => <Link key={l.code} href={`/${l.code}`} hrefLang={l.code} className={linkCls}>{l.name}</Link>)}
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE_NAME}. {t.notAffiliated}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          <Link href={`${lang === "en" ? "" : home}/#how-to`} className="hover:text-slate-900">{t.howTo}</Link>
          <Link href="/blog" className="hover:text-slate-900">{t.blog}</Link>
          <Link href={`${lang === "en" ? "" : home}/#faq`} className="hover:text-slate-900">{t.faq}</Link>
          <Link href="/privacy" className="hover:text-slate-900">{t.privacy}</Link>
          <Link href="/terms" className="hover:text-slate-900">{t.terms}</Link>
        </nav>
      </div>
    </footer>
  );
}
