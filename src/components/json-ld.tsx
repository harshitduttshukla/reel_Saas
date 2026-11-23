/** Renders schema.org JSON-LD safely (escapes "<" to prevent script injection). */
export function JsonLd({ data }: { data: object[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": data }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
