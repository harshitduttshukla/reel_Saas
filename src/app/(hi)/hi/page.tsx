import type { Metadata } from "next";
import Link from "next/link";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { HOME_LANGUAGES } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";
import { HINGLISH_GUIDES } from "@/lib/hinglish-guides";

const TITLE = "Instagram Reels Download Kaise Kare? 3 Aasan Tarike";
const DESC =
  "Instagram reels download kaise kare – 3 aasan tarike. Link copy karo, paste karo aur reel gallery me save karo. Free, bina app, bina login, bina watermark.";

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
    "instagram reels download kaise karen",
    "instagram reels video download kaise kare",
    "instagram se reels kaise download kare",
    "insta ki reel kaise download kare",
    "instagram reels download kaise kare gallery me",
    "how to download instagram reels in hindi",
    "इंस्टाग्राम रील्स डाउनलोड कैसे करें",
  ],
  alternates: { canonical: "/hi", languages: HOME_LANGUAGES },
  openGraph: { title: TITLE, description: DESC, url: "/hi", locale: "hi_IN" },
};

const STEPS = [
  { t: "Reel ka link copy karein", d: "Instagram app me reel kholein, Share (✈️) icon par tap karein aur “Copy link” chunein." },
  { t: "Link yahan paste karein", d: "Upar diye box me link paste karein. Paste karte hi reel automatic check hone lagegi." },
  { t: "Preview dekhein", d: "Kuch hi second me reel ka preview aa jayega." },
  { t: "Download Video dabayein", d: "“Download Video” par tap karein – reel MP4 me aapke phone ya computer me save ho jayegi." },
];

/** Paste your YouTube video ID here (e.g. "dQw4w9WgXcQ") once the tutorial is live. */
const YT_VIDEO_ID = "";

const METHODS = [
  {
    h: "तरीका 1: Instagram app से सीधे डाउनलोड करें",
    steps: ["Instagram खोलें और मनचाही Reel चुनें।", "नीचे दिए गए Share (✈️) आइकन पर टैप करें।", "अगर विकल्प उपलब्ध हो, तो Download पर टैप करें। वीडियो आपकी गैलरी में सेव हो जाएगा।"],
    note: "Kami: yeh option sirf kuch public reels par aata hai, aur video par Instagram ka logo + username (watermark) lag jata hai. Copyright music wali reels me kai baar audio hat jata hai.",
  },
  {
    h: "तरीका 2: ReelSave website से (बिना ऐप, बिना वॉटरमार्क)",
    steps: ["Reel पर Share (✈️) › “Copy link” दबाएँ।", "ऊपर दिए बॉक्स में लिंक पेस्ट करें।", "“Download Video” दबाएँ – रील MP4 में गैलरी में सेव हो जाएगी।"],
    note: "Fayda: har public reel par chalta hai, original quality, poora music/audio, koi watermark nahi, koi app ya login nahi.",
  },
  {
    h: "तरीका 3: Screen recording से",
    steps: ["Phone ka Screen Recorder on karein (Android: Quick Settings, iPhone: Control Center).", "Reel ko shuru se aakhir tak chalayein.", "Recording band karein – video Gallery me aa jayega."],
    note: "Kami: quality kam hoti hai, notification/buttons bhi record hote hain aur kai phones me awaaz record nahi hoti. Isliye Tarika 2 sabse behtar hai.",
  },
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
  { q: "Instagram reels download kaise karen bina app ke?", a: "Reel ka link copy karein, ReelSave me paste karein aur Download Video dabayein. Kisi app ki zarurat nahi – browser hi kaafi hai." },
  { q: "Instagram me download button kyun nahi dikh raha?", a: "Instagram ka Download option sirf tab aata hai jab creator ne downloads allow kiye hon aur account public ho. Na dikhe to ReelSave se link paste karke download karein." },
  { q: "Kya download ki hui reel dobara upload kar sakte hain?", a: "Sirf apni reels ya creator ki permission se. Hamesha creator ko credit dein." },
];

export default function HindiPage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "Reel Download Kaise Kare", url: `${SITE_URL}/hi` }]),
          { "@type": "HowTo", name: "Instagram Reel Download Kaise Kare", inLanguage: "hi", step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
          ...(YT_VIDEO_ID ? [{ "@type": "VideoObject", name: "Instagram Reels Download Kaise Kare", description: DESC, inLanguage: "hi", thumbnailUrl: `https://i.ytimg.com/vi/${YT_VIDEO_ID}/hqdefault.jpg`, embedUrl: `https://www.youtube.com/embed/${YT_VIDEO_ID}`, contentUrl: `https://www.youtube.com/watch?v=${YT_VIDEO_ID}`, uploadDate: "2026-11-23" }] : []),
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
        <Downloader lang="hi" />
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-4 pb-16 text-slate-700">
        <section id="how-to" className="scroll-mt-20">
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
          <h2 className="text-2xl font-bold text-slate-900">Instagram Reels download karne ke 3 tarike</h2>
          <p className="mt-2">इंस्टाग्राम रील्स डाउनलोड कैसे करें – teeno tarike, unke fayde aur kamiyan:</p>
          {METHODS.map((m) => (
            <div key={m.h} className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-slate-900">{m.h}</h3>
              <ol className="mt-3 list-decimal space-y-1 pl-6">{m.steps.map((t) => <li key={t}>{t}</li>)}</ol>
              <p className="mt-3 text-sm text-slate-600">{m.note}</p>
            </div>
          ))}
        </section>

        {YT_VIDEO_ID && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Video dekhkar seekhein</h2>
            <div className="mt-4 aspect-video overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <iframe className="size-full" src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}`} title="Instagram Reels Download Kaise Kare" loading="lazy" allowFullScreen />
            </div>
          </section>
        )}

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

        <section id="faq" className="scroll-mt-20">
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
