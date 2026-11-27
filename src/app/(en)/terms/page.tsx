import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}, the free Instagram Reels downloader: acceptable use, copyright and your responsibilities.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 23, 2026">
      <p>By using {SITE_NAME} you agree to these terms.</p>
      <h2>Permitted use</h2>
      <ul>
        <li>Download only Reels you own or that you have the right or the creator&apos;s permission to download.</li>
        <li>Respect copyright, creators&apos; rights and Instagram&apos;s Terms of Use.</li>
        <li>Do not use the service to access private content, to automate bulk requests, or to overload the service.</li>
      </ul>
      <h2>No affiliation</h2>
      <p>{SITE_NAME} is an independent tool and is not affiliated with, endorsed by or sponsored by Instagram or Meta Platforms, Inc. &quot;Instagram&quot; is a trademark of its owner.</p>
      <h2>Availability</h2>
      <p>The service depends on third-party media sources and may be limited or unavailable at any time. Some Reels cannot be retrieved. The service is provided &quot;as is&quot; without warranties of any kind.</p>
      <h2>Liability</h2>
      <p>You are responsible for how you use downloaded content. To the extent permitted by law, we are not liable for any damages arising from use of the service.</p>
      <h2>Changes</h2>
      <p>We may change these terms by posting an updated version on this page.</p>
    </LegalPage>
  );
}
