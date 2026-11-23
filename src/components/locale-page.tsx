import type { Metadata } from "next";
import Link from "next/link";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { guidesFor } from "@/lib/locale-guides";
import { HOME_LANGUAGES, LOCALES, type LocalePage } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

export function localeMetadata(l: LocalePage): Metadata {
  return {
    title: { absolute: l.title },
    description: l.description,
    keywords: l.keywords,
    alternates: { canonical: `/${l.code}`, languages: HOME_LANGUAGES },
    openGraph: { title: l.title, description: l.description, url: `/${l.code}`, locale: l.ogLocale },
  };
}

export function LocaleHome({ l }: { l: LocalePage }) {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: l.breadcrumb, url: `${SITE_URL}/${l.code}` }]),
          { "@type": "WebApplication", name: "ReelSave", url: `${SITE_URL}/${l.code}`, inLanguage: l.code, applicationCategory: "MultimediaApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
          { "@type": "HowTo", name: l.stepsTitle, inLanguage: l.code, step: l.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
          { "@type": "FAQPage", inLanguage: l.code, mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <section className="px-4 pb-14 pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{l.h1}</h1>
        <p className="mt-2 text-lg font-semibold text-slate-500">{l.tagline}</p>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-slate-600 sm:text-lg">{l.intro}</p>
        <Downloader lang={l.code} />
      </section>
      <div className="mx-auto max-w-3xl space-y-12 px-4 pb-16 text-slate-700">
        <section id="how-to" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900">{l.stepsTitle}</h2>
          <ol className="mt-5 space-y-3">
            {l.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="ig-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white">{i + 1}</span>
                <div><h3 className="font-semibold text-slate-900">{s.t}</h3><p className="mt-1 text-sm">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <div className="grid gap-3 sm:grid-cols-3">
          {guidesFor(l.code).map((g) => (
            <Link key={g.slug} href={`/${l.code}/${g.slug}`} className="rounded-2xl bg-white p-5 font-semibold ring-1 ring-slate-200 transition hover:text-brand-600 hover:ring-brand-500">{g.title} →</Link>
          ))}
        </div>
        {l.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-bold text-slate-900">{s.h}</h2>
            <p className="mt-3 leading-relaxed">{s.p}</p>
          </section>
        ))}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">{l.whyTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">{l.why.map((w) => <li key={w}>{w}</li>)}</ul>
        </section>
        <section id="faq" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-slate-900">{l.faqTitle}</h2>
          {l.faqs.map((f) => (
            <div key={f.q} className="mt-5"><h3 className="font-semibold text-slate-900">{f.q}</h3><p className="mt-1">{f.a}</p></div>
          ))}
        </section>
        <nav aria-label={l.otherLangs} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="font-semibold text-slate-900">{l.otherLangs}</h2>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li><Link href="/" hrefLang="en" className="text-brand-600 hover:underline">English</Link></li>
            <li><Link href="/hi" hrefLang="hi" className="text-brand-600 hover:underline">हिंदी</Link></li>
            {LOCALES.filter((o) => o.code !== l.code).map((o) => (
              <li key={o.code}><Link href={`/${o.code}`} hrefLang={o.code} className="text-brand-600 hover:underline">{o.name}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
