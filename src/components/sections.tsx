import { ClipboardCopy, Link2, MonitorSmartphone, MousePointerClick, ShieldCheck, Zap, Lock, Download, EyeOff, Ban } from "lucide-react";
import Link from "next/link";
import { Apple, Laptop, Smartphone } from "lucide-react";
import { FAQS, HOW_TO_STEPS } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

const STEP_ICONS = [ClipboardCopy, Link2, MousePointerClick, Download];

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 id={id} className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export function HowToSection() {
  return (
    <section id="how-to" aria-labelledby="how-to-title" className="scroll-mt-20 px-4 py-16">
      <SectionHeading id="how-to-title" title="How to Download Instagram Reels" subtitle="Save a Reel in four simple steps." />
      <ol className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_TO_STEPS.map((step, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <li key={step.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-3">
                <span className="ig-gradient grid size-10 place-items-center rounded-xl text-white"><Icon className="size-5" aria-hidden /></span>
                <span className="text-sm font-semibold text-slate-400">Step {i + 1}</span>
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{step.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const FEATURES = [
  { icon: Zap, title: "Fast and simple", text: "Paste a link, press Download. No extra steps." },
  { icon: MonitorSmartphone, title: "Works on every device", text: "Responsive on iPhone, Android, tablets and desktop browsers." },
  { icon: Lock, title: "No sign-up", text: "No account, no login, no app to install." },
  { icon: EyeOff, title: "Privacy first", text: "No database. Your links and downloads are never stored." },
  { icon: ShieldCheck, title: "Safe by design", text: "Strict link validation and server-side checks on every request." },
  { icon: Ban, title: "No watermark added", text: "You get the Reel exactly as Instagram serves it, in original quality, with audio." },
  { icon: Download, title: "Auto download on paste", text: "Paste a Reel link and the check starts instantly. No extra clicks." },
];

export function FeaturesSection() {
  return (
    <section id="features" aria-labelledby="features-title" className="scroll-mt-20 bg-white px-4 py-16">
      <SectionHeading id="features-title" title="Features of Instagram Reels Downloader" />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 rounded-2xl p-5 ring-1 ring-slate-200">
            <Icon className="size-6 shrink-0 text-brand-500" aria-hidden />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 px-4 py-16">
      <SectionHeading id="faq-title" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              <h3>{f.q}</h3>
              <span className="text-xl text-slate-400 transition group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section id="privacy-safety" aria-labelledby="privacy-safety-title" className="scroll-mt-20 bg-white px-4 py-16">
      <SectionHeading id="privacy-safety-title" title="Privacy and Safety Information" />
      <ul className="mx-auto grid max-w-4xl gap-3 text-sm text-slate-700 sm:grid-cols-2">
        {[
          "We don't store the Reel links you paste.",
          "We don't keep download history or video files.",
          "No analytics, tracking cookies or advertising pixels.",
          "Private Reels and access controls are never bypassed.",
          "Download only content you own or have permission to use.",
          "This site is not affiliated with Instagram or Meta.",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 rounded-xl bg-slate-50 p-4"><ShieldCheck className="size-4 shrink-0 text-emerald-600 mt-0.5" aria-hidden />{t}</li>
        ))}
      </ul>
    </section>
  );
}

const GUIDE_ICONS = [Apple, Smartphone, Laptop];

export function GuidesSection() {
  return (
    <section id="guides" aria-labelledby="guides-title" className="scroll-mt-20 px-4 pb-16">
      <SectionHeading id="guides-title" title="Download Reels on Any Device" subtitle="Detailed guides for iPhone, Android and computers." />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {GUIDES.map((g, i) => {
          const Icon = GUIDE_ICONS[i] ?? Smartphone;
          return (
            <Link key={g.slug} href={`/${g.slug}`} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:ring-brand-500">
              <Icon className="size-6 text-brand-500" aria-hidden />
              <h3 className="mt-3 font-semibold group-hover:text-brand-600">{g.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{g.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-4 text-slate-700">
        <h2 id="about-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Free Instagram Reels Downloader Online</h2>
        <p>
          ReelSave is a free online Instagram Reels downloader. It saves a public Reel as an MP4 video file in its original
          quality, straight from your browser. There is no app to install, no account to create and no browser extension to add.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-slate-900">Save Reels in original quality</h3>
        <p>
          We deliver the same video file Instagram serves, so the resolution and audio are not re-compressed. The download
          is a standard MP4 that plays on phones, computers, smart TVs and in video editors.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-slate-900">Built for Reels links</h3>
        <p>
          Paste any link that contains <code className="rounded bg-slate-100 px-1">instagram.com/reel/</code> or{" "}
          <code className="rounded bg-slate-100 px-1">instagram.com/reels/</code>, including links copied from the
          Instagram app share sheet with tracking parameters. ReelSave cleans the link and fetches only the Reel itself.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-slate-900">Use downloads responsibly</h3>
        <p>
          Save Reels you created, or ones you have the creator&apos;s permission to keep. Always credit creators and respect
          copyright when you share content again.
        </p>
      </div>
    </section>
  );
}
