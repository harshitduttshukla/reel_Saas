import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Lightbulb } from "lucide-react";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => GUIDES.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.description,
    alternates: { canonical: `/${guide.slug}` },
    openGraph: { title: guide.metaTitle, description: guide.description, url: `/${guide.slug}`, type: "article" },
    twitter: { title: guide.metaTitle, description: guide.description },
  };
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const url = `${SITE_URL}/${guide.slug}`;
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <article className="px-4 py-10">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: guide.title, url }]),
          { "@type": "HowTo", name: guide.title, description: guide.description, step: guide.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })) },
          { "@type": "FAQPage", mainEntity: guide.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <nav aria-label="Breadcrumb" className="mx-auto mb-6 flex max-w-3xl items-center gap-1 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <ChevronRight className="size-4" aria-hidden />
        <span aria-current="page">{guide.device}</span>
      </nav>
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{guide.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">{guide.intro}</p>
      </header>
      <div className="mt-8">
        <Downloader />
      </div>
      <div className="mx-auto mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Step-by-step: download Reels on {guide.device}</h2>
        <ol className="mt-6 space-y-4">
          {guide.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <span className="ig-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h2 className="mt-12 text-2xl font-bold">Tips for {guide.device}</h2>
        <ul className="mt-4 space-y-2">
          {guide.tips.map((t) => (
            <li key={t} className="flex gap-2 text-slate-700"><Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />{t}</li>
          ))}
        </ul>
        <h2 className="mt-12 text-2xl font-bold">FAQ</h2>
        <div className="mt-4 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {guide.faqs.map((f) => (
            <div key={f.q} className="p-5">
              <h3 className="font-medium">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
        <aside className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="font-semibold">More guides</h2>
          <ul className="mt-3 space-y-2">
            {others.map((g) => (
              <li key={g.slug}><Link href={`/${g.slug}`} className="text-brand-600 hover:underline">{g.title}</Link></li>
            ))}
            <li><Link href="/" className="text-brand-600 hover:underline">Instagram Reels Downloader</Link></li>
          </ul>
        </aside>
      </div>
    </article>
  );
}


