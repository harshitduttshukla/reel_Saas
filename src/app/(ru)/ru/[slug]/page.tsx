import { notFound } from "next/navigation";
import { LocaleGuidePage, localeGuideMetadata } from "@/components/locale-guide-page";
import { getLocaleGuide, guidesFor } from "@/lib/locale-guides";

export const dynamicParams = false;
export const generateStaticParams = () => guidesFor("ru").map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const g = getLocaleGuide("ru", (await params).slug);
  return g ? localeGuideMetadata(g) : {};
}

export default async function Page({ params }: Props) {
  const g = getLocaleGuide("ru", (await params).slug);
  if (!g) notFound();
  return <LocaleGuidePage g={g} />;
}
