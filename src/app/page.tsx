import type { Metadata } from "next";
import { Downloader } from "@/components/downloader";
import { AboutSection, FaqSection, FeaturesSection, GuidesSection, HowToSection, PrivacySection } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { FAQS, HOW_TO_STEPS } from "@/lib/content";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const jsonLd = [
  { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: SITE_URL, logo: `${SITE_URL}/logo.svg` },
  { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, description: SITE_DESCRIPTION, publisher: { "@id": `${SITE_URL}/#org` } },
  { "@type": "WebApplication", name: "Instagram Reels Downloader", url: SITE_URL, applicationCategory: "MultimediaApplication", operatingSystem: "Any", browserRequirements: "Requires a modern web browser", isAccessibleForFree: true, publisher: { "@id": `${SITE_URL}/#org` } },
  { "@type": "HowTo", name: "How to Download Instagram Reels", step: HOW_TO_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })) },
  { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section aria-labelledby="hero-title" className="relative overflow-hidden px-4 pb-16 pt-14 text-center sm:pt-20">
        <div className="ig-gradient pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl" aria-hidden />
        <h1 id="hero-title" className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Instagram <span className="ig-text">Reels</span> Downloader
        </h1>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-base text-slate-600 sm:text-lg">
          Download Instagram Reels videos quickly and easily. Paste a public Reel link below to get started.
        </p>
        <Downloader />
      </section>
      <HowToSection />
      <GuidesSection />
      <AboutSection />
      <FeaturesSection />
      <FaqSection />
      <PrivacySection />
    </>
  );
}
