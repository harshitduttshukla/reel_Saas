import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { getLocale } from "@/lib/locales";
import { guidesFor, topicLanguages, type LocaleGuide } from "@/lib/locale-guides";
import { ui } from "@/lib/ui-strings";
import { SITE_URL } from "@/lib/site";

export function localeGuideMetadata(g: LocaleGuide): Metadata {
  const path = `/${g.lang}/${g.slug}`;
  return {
    title: { absolute: g.title },
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: path, languages: topicLanguages(g.topic) },
    openGraph: { type: "article", title: g.title, description: g.description, url: path, locale: getLocale(g.lang)!.ogLocale },
  };
}

export function LocaleGuidePage({ g }: { g: LocaleGuide }) {
  const l = getLocale(g.lang)!;
  const t = ui(g.lang);
  const home = `/${g.lang}`;
  const others = guidesFor(g.lang).filter((o) => o.slug !== g.slug);
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 text-slate-700">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: l.breadcrumb, url: `${SITE_URL}${home}` }, { name: g.title, url: `${SITE_URL}${home}/${g.slug}` }]),
          { "@type": "HowTo", name: g.title, inLanguage: g.lang, step: g.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, text: s })) },
          { "@type": "FAQPage", inLanguage: g.lang, mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        <Link href={home} className="hover:text-slate-900">{t.home}</Link>
        <ChevronRight className="size-4" aria-hidden />
        <Link href={home} className="hover:text-slate-900">{l.breadcrumb}</Link>
      </nav>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{g.title}</h1>
      <p className="mt-4 text-lg leading-relaxed">{g.intro}</p>
      <div className="my-10"><Downloader lang={g.lang} /></div>
      <ol className="space-y-3">
        {g.steps.map((s, i) => (
          <li key={s} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <span className="ig-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white">{i + 1}</span>
            <p className="self-center">{s}</p>
          </li>
        ))}
      </ol>
      {g.tips.map((tip) => (
        <section key={tip.h} className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900">{tip.h}</h2>
          <p className="mt-3 leading-relaxed">{tip.p}</p>
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">{l.faqTitle}</h2>
        {g.faqs.map((f) => (
          <div key={f.q} className="mt-5"><h3 className="font-semibold text-slate-900">{f.q}</h3><p className="mt-1">{f.a}</p></div>
        ))}
      </section>
      <aside className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="font-semibold text-slate-900">{t.guides}</h2>
        <ul className="mt-3 space-y-2">
          <li><Link href={home} className="text-brand-600 hover:underline">{l.h1}</Link></li>
          {others.map((o) => <li key={o.slug}><Link href={`${home}/${o.slug}`} className="text-brand-600 hover:underline">{o.title}</Link></li>)}
        </ul>
        <h2 className="mt-6 font-semibold text-slate-900">{l.otherLangs}</h2>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {Object.entries(topicLanguages(g.topic)).filter(([k]) => k !== g.lang).map(([k, href]) => (
            <li key={k}><Link href={href} hrefLang={k} className="text-brand-600 hover:underline">{k === "en" ? "English" : getLocale(k)?.name ?? k}</Link></li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
