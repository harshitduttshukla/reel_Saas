import type { Metadata } from "next";
import Link from "next/link";
import { Downloader } from "@/components/downloader";
import { JsonLd, breadcrumbLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";

const TITLE = "Instagram Reel Download Kaise Kare – इंस्टाग्राम रील डाउनलोडर";
const DESC = "इंस्टाग्राम रील्स को फ्री में डाउनलोड करें। Reel का लिंक पेस्ट करें और MP4 वीडियो ओरिजिनल क्वालिटी में सेव करें – बिना ऐप, बिना लॉगिन, बिना वॉटरमार्क।";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/hi", languages: { en: "/", hi: "/hi", "x-default": "/" } },
  openGraph: { title: TITLE, description: DESC, url: "/hi", locale: "hi_IN" },
};

const STEPS = [
  { t: "रील का लिंक कॉपी करें", d: "Instagram में रील खोलें, शेयर (✈️) आइकन पर टैप करें और “Copy link” चुनें।" },
  { t: "लिंक पेस्ट करें", d: "ऊपर दिए गए बॉक्स में लिंक पेस्ट करें। पेस्ट करते ही चेक अपने-आप शुरू हो जाएगा।" },
  { t: "प्रीव्यू देखें", d: "कुछ ही सेकंड में रील का प्रीव्यू दिखेगा।" },
  { t: "वीडियो सेव करें", d: "“Download Video” पर टैप करें – MP4 फाइल आपके फोन या कंप्यूटर में सेव हो जाएगी।" },
];

const FAQS = [
  { q: "क्या ReelSave फ्री है?", a: "हाँ, ReelSave पूरी तरह फ्री है। कोई साइन-अप, सब्सक्रिप्शन या ऐप की ज़रूरत नहीं है।" },
  { q: "क्या Instagram लॉगिन करना पड़ेगा?", a: "नहीं। हम कभी आपका Instagram यूज़रनेम या पासवर्ड नहीं माँगते। बस रील का लिंक पेस्ट करें।" },
  { q: "वीडियो की क्वालिटी कैसी होगी?", a: "आपको वही ओरिजिनल MP4 फाइल मिलती है जो Instagram दिखाता है – आवाज़ और म्यूज़िक के साथ, बिना कम्प्रेशन के।" },
  { q: "क्या प्राइवेट अकाउंट की रील डाउनलोड हो सकती है?", a: "नहीं। सिर्फ पब्लिक रील्स ही डाउनलोड होती हैं। प्राइवेट रील्स को कभी एक्सेस नहीं किया जाता।" },
  { q: "डाउनलोड की गई रील कहाँ सेव होती है?", a: "Android में Downloads फोल्डर और Gallery में। iPhone में Files › Downloads में – वहाँ से Share › Save Video करके Photos में रखें।" },
  { q: "क्या डाउनलोड की गई रील दोबारा अपलोड कर सकते हैं?", a: "सिर्फ अपनी रील्स या क्रिएटर की अनुमति से। हमेशा क्रिएटर को क्रेडिट दें।" },
];

export default function HindiPage() {
  return (
    <div lang="hi">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", url: SITE_URL }, { name: "हिंदी", url: `${SITE_URL}/hi` }]),
          { "@type": "HowTo", name: "Instagram Reel Download Kaise Kare", inLanguage: "hi", step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
          { "@type": "FAQPage", inLanguage: "hi", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />
      <section className="px-4 pb-14 pt-14 text-center sm:pt-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          इंस्टाग्राम <span className="ig-text">रील</span> डाउनलोडर
        </h1>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-slate-600 sm:text-lg">
          Instagram Reels को फ्री में डाउनलोड करें। नीचे पब्लिक रील का लिंक पेस्ट करें और वीडियो सेव करें।
        </p>
        <Downloader />
      </section>
      <div className="mx-auto max-w-3xl space-y-12 px-4 pb-16 text-slate-700">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Instagram Reel Download Kaise Kare? (4 आसान स्टेप)</h2>
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
          <h2 className="text-2xl font-bold text-slate-900">ReelSave क्यों इस्तेमाल करें?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>पूरी तरह फ्री – कोई ऐप या लॉगिन नहीं</li>
            <li>ओरिजिनल क्वालिटी MP4, म्यूज़िक और आवाज़ के साथ</li>
            <li>हमारी तरफ से कोई वॉटरमार्क नहीं</li>
            <li>Android, iPhone, PC और Mac – सब पर चलता है</li>
            <li>आपके लिंक या वीडियो कभी सेव नहीं होते</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900">अक्सर पूछे जाने वाले सवाल</h2>
          {FAQS.map((f) => (
            <div key={f.q} className="mt-5"><h3 className="font-semibold text-slate-900">{f.q}</h3><p className="mt-1">{f.a}</p></div>
          ))}
        </section>
        <p className="text-sm"><Link href="/" className="text-brand-600 hover:underline">Read in English →</Link></p>
      </div>
    </div>
  );
}
