import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles your data: no database, no stored links, no tracking.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 23, 2026">
      <p>{SITE_NAME} is built to collect as little as possible. This policy explains exactly what happens when you use it.</p>
      <h2>What we do not collect or store</h2>
      <ul>
        <li>The Instagram Reel links you paste.</li>
        <li>Your download history.</li>
        <li>Video files. Videos are streamed through our server to your device and are never saved.</li>
        <li>Personal information. There are no accounts, no forms and no database.</li>
        <li>IP addresses in any application analytics. We do not run analytics or tracking.</li>
      </ul>
      <h2>Cookies</h2>
      <p>We do not set cookies and we do not use advertising or tracking pixels.</p>
      <h2>How a request is processed</h2>
      <p>When you press Download, your link is sent to our server, checked, and passed to the configured media retrieval provider to look up the Reel. The result is returned to your browser and then discarded. Our application code does not log request contents or media URLs.</p>
      <h2>Abuse protection</h2>
      <p>To prevent abuse we apply a short-lived rate limit. It uses a one-way hash of your IP address kept only in server memory for about one minute and is never written to disk.</p>
      <h2>Infrastructure logging</h2>
      <p>The site is hosted on Vercel. Like any hosting provider, Vercel may automatically record standard request metadata (such as IP address, time, requested path and status code) in short-lived platform logs for security and operations. Request bodies, which contain the links you paste, are not part of these logs. See Vercel&apos;s privacy policy for details.</p>
      <h2>Media providers</h2>
      <p>If the site is configured to use an Instagram API or a third-party media provider, the Reel link is shared with that provider solely to retrieve the video. Their own privacy policies apply.</p>
      <h2>Children</h2>
      <p>This service is not directed at children under 13.</p>
      <h2>Changes</h2>
      <p>We may update this policy. Changes are posted on this page with a new date.</p>
    </LegalPage>
  );
}
