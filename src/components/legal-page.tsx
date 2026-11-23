export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mt-2 [&_p]:text-slate-700 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:text-slate-700">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-slate-500">Last updated: {updated}</p>
      {children}
    </article>
  );
}
