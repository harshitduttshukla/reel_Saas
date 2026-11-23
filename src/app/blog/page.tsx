import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instagram Reels Tips & Guides – Blog",
  description: "Guides on downloading, saving and backing up Instagram Reels: no watermark, with music, troubleshooting and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <JsonLd data={[breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }])]} />
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Instagram Reels Guides</h1>
      <p className="mt-3 text-slate-600">Practical tips for saving, downloading and backing up Instagram Reels.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {POSTS.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:ring-brand-500">
            <h2 className="text-lg font-semibold group-hover:text-brand-600">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            <p className="mt-3 text-xs text-slate-400">{p.readMinutes} min read</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
