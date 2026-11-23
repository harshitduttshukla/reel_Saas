import type { Metadata } from "next";
import Link from "next/link";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";
import { HINGLISH_GUIDES } from "@/lib/hinglish-guides";

const TITLE = "Instagram Reel Download Kaise Kare? Free Reel Downloader (2026)";
const DESC =
  "Instagram reel download kaise kare – link copy karo, yahan paste karo aur reel video gallery me save karo. Free, bina app, bina login, bina watermark. इंस्टाग्राम रील डाउनलोड करें।";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "instagram reel download kaise kare",
    "insta reel download kaise kare",
    "reel download kaise kare",
    "instagram reel download",
    "reel video download",
    "instagram video download kaise kare",
    "reel gallery me kaise save kare",
    "इंस्टाग्राम रील डाउनलोड",
  ],
  alternates: { canonical: "/hi", languages: { en: "/", hi: "/hi", "x-default": "/" } },
  openGraph: { title: TITLE, description: DESC, url: "/hi", locale: "hi_IN" },
};

const STEPS = [
  { t: "Reel ka link copy karein", d: "Instagram app me reel kholein, Share (✈️) icon par tap karein aur “Copy link” chunein." },
  { t: "Link yahan paste karein", d: "Upar diye box me link paste karein. Paste karte hi reel automatic check hone lagegi." },
  { t: "Preview dekhein", d: "Kuch hi second me reel ka preview aa jayega." },
  { t: "Download Video dabayein", d: "“Download Video” par tap karein – reel MP4 me aapke phone ya computer me save ho jayegi." },
];

const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "Android phone me Instagram reel kaise download kare?",
    p: [
      "Chrome browser kholein, reel ka link ReelSave me paste karein aur Download Video dabayein. Video Downloads folder me save hoti hai aur Gallery / Google Photos me apne-aap dikh jati hai.",
      "Tip: Chrome menu (⋮) › “Add to Home screen” karke ReelSave ko app jaisa use karein – koi app install karne ki zarurat nahi.",
    ],
  },
  {
    h: "iPhone me Instagram reel kaise download kare?",
    p: [
      "Safari me ReelSave kholein, link paste karke Download Video dabayein. Video Files › Downloads me save hogi. Wahan video kholein, Share dabayein aur “Save Video” chunein – reel Photos (Gallery) me aa jayegi.",
    ],
  },
  {
    h: "Reel gallery me kaise save kare?",
    p: [
      "Instagram ka bookmark (Save) button reel ko sirf app ke andar save karta hai – phone ki gallery me nahi. Gallery me rakhne ke liye reel ko MP4 file ke roop me download karna padta hai, jo ReelSave se ek click me ho jata hai.",
    ],
  },
  {
    h: "Bina watermark reel kaise download kare?",
    p: [
      "Instagram ka apna download option video par Instagram logo aur username laga deta hai. ReelSave apni taraf se koi watermark nahi lagata – aapko reel waise hi milti hai jaise Instagram par chalti hai.",
    ],
  },
  {
    h: "Gaane / audio ke sath reel kaise download kare?",
    p: [
      "ReelSave se download ki gayi reel me original music aur awaaz dono hoti hai. Screen recording me aksar awaaz nahi aati – isliye download karna behtar hai.",
    ],
  },
  {
    h: "Reel download karne wala app ya website?",
    p: [
      "Kisi app ki zarurat nahi hai. ReelSave ek website hai jo har phone aur computer ke browser me chalti hai – na install, na login, na Instagram password. Anjaan APK apps install karne se bachein, unme virus ka khatra hota hai.",
    ],
  },
];

const FAQS = [
  { q: "Kya ReelSave free hai?", a: "Haan, ReelSave poori tarah free hai. Koi sign-up, subscription ya app nahi chahiye." },
  { q: "Kya Instagram login karna padega?", a: "Nahi. Hum kabhi aapka Instagram username ya password nahi maangte. Bas reel ka link paste karein." },
  { q: "Video ki quality kaisi hogi?", a: "Aapko wahi original MP4 file milti hai jo Instagram dikhata hai – music aur awaaz ke sath, bina compression ke." },
  { q: "Private account ki reel download ho sakti hai?", a: "Nahi. Sirf public reels download hoti hain. Private reels ko kabhi access nahi kiya jata." },
  { q: "Download ki hui reel kahan milegi?", a: "Android me Downloads folder aur Gallery me. iPhone me Files › Downloads me – wahan se Share › Save Video karke Photos me rakhein." },
  { q: "Reel download nahi ho rahi, kya karein?", a: "Check karein ki link me /reel/ ho, account public ho aur reel delete na hui ho. Internet badal kar (WiFi / mobile data) dobara try karein." },
  { q: "Kya download ki hui reel dobara upload kar sakte hain?", a: "Sirf apni reels ya creator ki permission se. Hamesha creator ko credit dein." },
];

export default function HindiPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "Reel Download Kaise Kare", url: `${SITE_URL}/hi` }]),
          { "@type": "HowTo", name: "Instagram Reel Download Kaise Kare", inLanguage: "hi", step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
          { "@type": "FAQPage", inLanguage: "hi", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <section className="px-4 pb-14 pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Instagram <span className="ig-text">Reel</span> Download Kaise Kare?
        </h1>
        <p className="mt-2 text-lg font-semibold text-slate-500">इंस्टाग्राम रील डाउनलोडर – Free</p>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-slate-600 sm:text-lg">
          Reel ka link neeche paste karein aur video seedha apni gallery me save karein. Bina app, bina login, bina watermark.
        </p>
        <Downloader />
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-4 pb-16 text-slate-700">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Instagram reel download karne ke 4 aasan steps</h2>
          <ol className="mt-5 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="ig-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white">{i + 1}</span>
                <div><h3 className="font-semibold text-slate-900">{s.t}</h3><p className="mt-1 text-sm">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Puri guides padhein</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {HINGLISH_GUIDES.map((g) => (
              <Link key={g.slug} href={`/hi/${g.slug}`} className="rounded-2xl bg-white p-5 font-semibold ring-1 ring-slate-200 transition hover:text-brand-600 hover:ring-brand-500">
                {g.title} →
              </Link>
            ))}
          </div>
        </section>

        {SECTIONS.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-bold text-slate-900">{s.h}</h2>
            {s.p.map((p) => <p key={p} className="mt-3 leading-relaxed">{p}</p>)}
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold text-slate-900">ReelSave kyun use karein?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>100% free – koi app ya login nahi</li>
            <li>Original quality MP4, music aur awaaz ke sath</li>
            <li>Hamari taraf se koi watermark nahi</li>
            <li>Android, iPhone, PC aur Mac – sab par chalta hai</li>
            <li>Aapke link ya video kabhi save nahi kiye jate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Aksar puche jane wale sawal (FAQ)</h2>
          {FAQS.map((f) => (
            <div key={f.q} className="mt-5"><h3 className="font-semibold text-slate-900">{f.q}</h3><p className="mt-1">{f.a}</p></div>
          ))}
        </section>
        <p className="text-sm"><Link href="/" className="text-brand-600 hover:underline">Read in English →</Link></p>
      </div>
    </div>
  );
}
