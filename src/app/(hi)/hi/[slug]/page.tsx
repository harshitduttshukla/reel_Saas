import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { HINGLISH_GUIDES, getHinglishGuide } from "@/lib/hinglish-guides";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => HINGLISH_GUIDES.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getHinglishGuide((await params).slug);
  if (!g) return {};
  const path = `/hi/${g.slug}`;
  return {
    title: { absolute: g.metaTitle },
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: path, languages: g.enPath ? { hi: path, en: g.enPath } : undefined },
    openGraph: { title: g.metaTitle, description: g.description, url: path, locale: "hi_IN", type: "article" },
    twitter: { title: g.metaTitle, description: g.description },
  };
}

export default async function HinglishGuidePage({ params }: Props) {
  const g = getHinglishGuide((await params).slug);
  if (!g) notFound();
  const url = `${SITE_URL}/hi/${g.slug}`;
  const others = HINGLISH_GUIDES.filter((o) => o.slug !== g.slug);

  return (
    <article className="px-4 py-10">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "Reel Download Kaise Kare", url: `${SITE_URL}/hi` }, { name: g.title, url }]),
          { "@type": "HowTo", name: g.title, inLanguage: "hi", description: g.description, step: g.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
          { "@type": "FAQPage", inLanguage: "hi", mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <ChevronRight className="size-4" aria-hidden />
          <Link href="/hi" className="hover:text-slate-900">Reel Download Kaise Kare</Link>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{g.title}</h1>
        <p className="mt-4 text-lg text-slate-700">{g.intro}</p>
      </div>

      <div className="my-10"><Downloader /></div>

      <div className="mx-auto max-w-3xl space-y-12 text-slate-700">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step tarika</h2>
          <ol className="mt-5 space-y-3">
            {g.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="ig-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white">{i + 1}</span>
                <div><h3 className="font-semibold text-slate-900">{s.t}</h3><p className="mt-1 text-sm">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </section>
        {g.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-bold text-slate-900">{s.h}</h2>
            {s.p.map((p) => <p key={p} className="mt-3 leading-relaxed">{p}</p>)}
          </section>
        ))}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Aksar puche jane wale sawal</h2>
          {g.faqs.map((f) => (
            <div key={f.q} className="mt-5"><h3 className="font-semibold text-slate-900">{f.q}</h3><p className="mt-1">{f.a}</p></div>
          ))}
        </section>
        <aside className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="font-semibold text-slate-900">Aur guides</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/hi" className="text-brand-600 hover:underline">Instagram Reel Download Kaise Kare?</Link></li>
            {others.map((o) => <li key={o.slug}><Link href={`/hi/${o.slug}`} className="text-brand-600 hover:underline">{o.title}</Link></li>)}
          </ul>
        </aside>
      </div>
    </article>
  );
}
