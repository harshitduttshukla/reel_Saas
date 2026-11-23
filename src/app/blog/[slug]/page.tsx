import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { POSTS, getPost } from "@/lib/blog";
import { GUIDES } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.metaTitle, description: post.description, url: `/blog/${post.slug}`, publishedTime: post.published, modifiedTime: post.updated },
    twitter: { title: post.metaTitle, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const ld: object[] = [
    breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.title, url }]),
    {
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      dateModified: post.updated,
      mainEntityOfPage: url,
      image: `${SITE_URL}/opengraph-image`,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` } },
    },
  ];
  if (post.faqs?.length) {
    ld.push({ "@type": "FAQPage", mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  }

  return (
    <article className="px-4 py-10">
      <JsonLd data={ld} />
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <ChevronRight className="size-4" aria-hidden />
          <Link href="/blog" className="hover:text-slate-900">Blog</Link>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          Updated <time dateTime={post.updated}>{new Date(post.updated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time> · {post.readMinutes} min read
        </p>
        <p className="mt-6 text-lg text-slate-700">{post.intro}</p>
      </div>

      <div className="my-10"><Downloader /></div>

      <div className="mx-auto max-w-3xl space-y-10 text-slate-700">
        {post.sections.map((s) => {
          const List = s.ordered ? "ol" : "ul";
          return (
            <section key={s.heading}>
              <h2 className="text-2xl font-bold text-slate-900">{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p} className="mt-3 leading-relaxed">{p}</p>)}
              {s.list && (
                <List className={`mt-3 space-y-2 pl-6 ${s.ordered ? "list-decimal" : "list-disc"}`}>
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </List>
              )}
            </section>
          );
        })}
        {post.faqs && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            {post.faqs.map((f) => (
              <div key={f.q} className="mt-4">
                <h3 className="font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-1">{f.a}</p>
              </div>
            ))}
          </section>
        )}
        <aside className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="font-semibold text-slate-900">Related guides</h2>
          <ul className="mt-3 space-y-2">
            {related.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-brand-600 hover:underline">{p.title}</Link></li>)}
            {GUIDES.map((g) => <li key={g.slug}><Link href={`/${g.slug}`} className="text-brand-600 hover:underline">{g.title}</Link></li>)}
          </ul>
        </aside>
      </div>
    </article>
  );
}
