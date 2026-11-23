export interface HinglishGuide {
  slug: string;
  short: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  steps: { t: string; d: string }[];
  sections: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
  /** English equivalent page, for hreflang. */
  enPath?: string;
}

export const HINGLISH_GUIDES: HinglishGuide[] = [
  {
    slug: "iphone-me-reel-kaise-download-kare",
    short: "iPhone me reel download",
    title: "iPhone me Instagram Reel Kaise Download Kare?",
    metaTitle: "iPhone me Instagram Reel Kaise Download Kare? (Photos me Save)",
    description: "iPhone me Instagram reel download karne ka sabse aasan tarika – Safari me link paste karo aur reel Photos/Gallery me save karo. Free, bina app, bina login.",
    keywords: ["iphone me reel kaise download kare", "iphone me instagram reel download", "iphone reel save kaise kare", "ios reel download"],
    intro: "iPhone par Instagram reel download karne ke liye kisi app ki zarurat nahi hai. Safari browser se ReelSave use karke reel seedha aapke iPhone me save ho jati hai – aur 2 tap me Photos me bhi aa jati hai.",
    steps: [
      { t: "Reel ka link copy karein", d: "Instagram app me reel kholein, Share (✈️) icon dabayein aur “Copy link” chunein." },
      { t: "Safari me ReelSave kholein", d: "Safari browser me reelsave.vrumo.in kholein aur upar box me link paste karein." },
      { t: "Download Video dabayein", d: "Preview aane par “Download Video” dabayein aur “Download” confirm karein." },
      { t: "Files app me video kholein", d: "Files app › Downloads me jaayein – aapki reel wahan MP4 file ke roop me hogi." },
      { t: "Photos me save karein", d: "Video kholein, Share button dabayein aur “Save Video” chunein. Ab reel aapki Photos (Gallery) me hai." },
    ],
    sections: [
      { h: "Download ki hui reel iPhone me kahan milti hai?", p: ["Safari se download hui files default roop se Files › On My iPhone › Downloads me jaati hain. Aap Settings › Apps › Safari › Downloads me jaakar location badal sakte hain, jaise iCloud Drive."] },
      { h: "iPhone me download button kaam nahi kar raha?", p: ["iOS 13 ya usse purane version me Safari files download nahi kar sakta – iOS update karein. Agar Chrome use kar rahe hain aur problem aa rahi hai, to Safari me try karein. Content blocker ya VPN on ho to use band karke dobara try karein."] },
      { h: "Kya iPad par bhi kaam karta hai?", p: ["Haan. iPadOS par bhi steps bilkul same hain – Safari me link paste karein aur reel download karein."] },
    ],
    faqs: [
      { q: "iPhone me reel download karne ke liye app chahiye?", a: "Nahi. ReelSave Safari browser me chalta hai – koi app install nahi karni." },
      { q: "Reel Photos me kaise laayein?", a: "Files › Downloads me video kholein, Share dabayein aur “Save Video” chunein." },
      { q: "Kya awaaz/music ke sath download hogi?", a: "Haan, reel original audio aur music ke sath download hoti hai." },
    ],
    enPath: "/download-instagram-reels-iphone",
  },
  {
    slug: "reel-gallery-me-kaise-save-kare",
    short: "Reel gallery me save",
    title: "Instagram Reel Gallery me Kaise Save Kare?",
    metaTitle: "Instagram Reel Gallery me Kaise Save Kare? (Android & iPhone)",
    description: "Instagram ka Save button reel ko gallery me nahi rakhta. Jaaniye reel ko phone ki Gallery me MP4 video ke roop me kaise save kare – Android aur iPhone dono par.",
    keywords: ["reel gallery me kaise save kare", "instagram reel gallery me save kaise kare", "insta reel gallery me kaise laye", "reel phone me save kaise kare"],
    intro: "Bahut log Instagram par bookmark (🔖 Save) button dabate hain aur sochte hain ki reel phone me save ho gayi – lekin woh sirf Instagram app ke andar save hoti hai, Gallery me nahi. Reel ko Gallery me rakhne ke liye use video file ke roop me download karna padta hai.",
    steps: [
      { t: "Reel ka link copy karein", d: "Reel par Share (✈️) icon dabayein aur “Copy link” chunein." },
      { t: "ReelSave me paste karein", d: "Browser me ReelSave kholein aur link paste karein – check apne-aap shuru ho jayega." },
      { t: "Download Video dabayein", d: "Reel MP4 file ke roop me aapke phone me download ho jayegi." },
      { t: "Gallery me dekhein", d: "Android me reel seedha Gallery / Google Photos me dikhegi. iPhone me Files › Downloads se “Save Video” karke Photos me laayein." },
    ],
    sections: [
      { h: "Instagram ka Save button aur Gallery me save – fark kya hai?", p: ["Instagram ka Save (🔖) button reel ko sirf aapke Instagram “Saved” collection me rakhta hai. Agar creator reel delete kar de ya gaana copyright ki wajah se hat jaye, to woh aapke collection se bhi gayab ho jati hai. Gallery me download ki hui reel hamesha aapke phone me rehti hai – offline bhi chalti hai."] },
      { h: "Android me reel Gallery me nahi dikh rahi?", p: ["File Manager › Downloads folder check karein. Kuch phones me Gallery ko refresh hone me thoda time lagta hai. Google Photos me “Library › Download” folder bhi dekhein."] },
      { h: "Screen recording se kyun nahi?", p: ["Screen recording me quality kam ho jati hai, notification aur buttons bhi record ho jate hain, aur kai phones me awaaz record nahi hoti. Download karne se original quality aur poora audio milta hai."] },
    ],
    faqs: [
      { q: "Kya Instagram ka Save button reel ko gallery me rakhta hai?", a: "Nahi, woh sirf Instagram app ke andar save karta hai. Gallery ke liye reel download karni padti hai." },
      { q: "Gallery me save ki hui reel bina internet chalegi?", a: "Haan, download ki hui reel aapke phone me file hai – bina internet ke bhi chalegi." },
      { q: "Kya yeh free hai?", a: "Haan, ReelSave poori tarah free hai – bina app aur bina login." },
    ],
  },
  {
    slug: "android-me-reel-kaise-download-kare",
    short: "Android me reel download",
    title: "Android Phone me Instagram Reel Kaise Download Kare?",
    metaTitle: "Android me Instagram Reel Kaise Download Kare? (Bina App)",
    description: "Android phone me Instagram reel download karne ka tarika – Chrome me link paste karo aur reel Gallery me save karo. Free, bina app, bina login.",
    keywords: ["android me reel kaise download kare", "mobile me instagram reel download kaise kare", "phone me reel download kaise kare"],
    intro: "Android phone me Instagram reel download karna sabse aasan hai – Chrome browser me link paste karo aur reel seedha Gallery me aa jati hai. Kisi APK ya app ki zarurat nahi.",
    steps: [
      { t: "Reel ka link copy karein", d: "Instagram app me reel kholein, Share (✈️) icon dabayein aur “Copy link” chunein." },
      { t: "Chrome me ReelSave kholein", d: "Chrome me reelsave.vrumo.in kholein aur link paste karein – check apne-aap shuru hoga." },
      { t: "Download Video dabayein", d: "Reel Downloads folder me MP4 ke roop me save ho jayegi." },
      { t: "Gallery me dekhein", d: "Gallery ya Google Photos kholein – reel wahan dikh jayegi." },
    ],
    sections: [
      { h: "ReelSave ko app jaisa kaise use karein?", p: ["Chrome menu (⋮) › “Add to Home screen” dabayein. ReelSave ka icon aapki home screen par aa jayega aur ek tap me khulega – bilkul app ki tarah, bina install kiye."] },
      { h: "Anjaan reel downloader APK se bachein", p: ["Play Store ke bahar ke APK apps me aksar ads, virus aur data chori ka khatra hota hai. ReelSave ek website hai – koi permission ya install nahi maangti."] },
      { h: "Samsung, Xiaomi, Vivo, Oppo – sab par chalega?", p: ["Haan. Chrome, Samsung Internet, Firefox ya kisi bhi browser me chalta hai – har Android phone par."] },
    ],
    faqs: [
      { q: "Android me reel kahan save hoti hai?", a: "Downloads folder me, aur Gallery / Google Photos me bhi dikhti hai." },
      { q: "Kya reel download karne ke liye app chahiye?", a: "Nahi, ReelSave browser me chalta hai." },
      { q: "Kitna data lagega?", a: "Ek reel aam taur par 1–10 MB ki hoti hai – utna hi jitna Instagram par ek baar dekhne me lagta hai." },
    ],
    enPath: "/download-instagram-reels-android",
  },
  {
    slug: "bina-watermark-reel-kaise-download-kare",
    short: "Bina watermark reel",
    title: "Bina Watermark Instagram Reel Kaise Download Kare?",
    metaTitle: "Bina Watermark Instagram Reel Kaise Download Kare? (HD)",
    description: "Instagram ke download option se reel par logo aur username aa jata hai. Jaaniye bina watermark, original quality me reel kaise download kare.",
    keywords: ["bina watermark reel kaise download kare", "without watermark reel download", "instagram reel download without watermark hindi"],
    intro: "Instagram ka apna “Download” option reel par chalta hua Instagram logo aur creator ka username laga deta hai. Agar aapko apni reel ki saaf (clean) copy chahiye – jaise YouTube Shorts par daalne ke liye – to yeh tarika use karein.",
    steps: [
      { t: "Reel ka link copy karein", d: "Share (✈️) › “Copy link”." },
      { t: "ReelSave me paste karein", d: "Link paste karte hi reel check hogi." },
      { t: "Download Video dabayein", d: "Reel original MP4 me download hogi – ReelSave koi watermark nahi lagata." },
    ],
    sections: [
      { h: "Instagram ke download me watermark kyun aata hai?", p: ["Instagram public reels ko download karne par ek nayi copy banata hai jisme logo aur @username hota hai, taaki repost hone par creator ka credit rahe. App me jo original video chalta hai usme koi watermark nahi hota – ReelSave wahi original deta hai."] },
      { h: "Quality kam to nahi hogi?", p: ["Nahi. ReelSave video ko dobara compress nahi karta. Aapko wahi file milti hai jo Instagram stream karta hai – aam taur par 720p ya 1080p, original awaaz ke sath."] },
      { h: "Zimmedari se use karein", p: ["Apni reels bina watermark freely download karein. Dusre creators ki reel repost karne se pehle permission lein aur credit zarur dein."] },
    ],
    faqs: [
      { q: "Kya ReelSave apna watermark lagata hai?", a: "Nahi, download hui reel par ReelSave ka koi logo nahi hota." },
      { q: "Apni reel bina watermark kaise save karein?", a: "Post karne se pehle Reels editor me download (⬇) button dabayein, ya post hone ke baad ReelSave se link paste karke download karein." },
    ],
    enPath: "/blog/download-instagram-reels-without-watermark",
  },
];

export const getHinglishGuide = (slug: string) => HINGLISH_GUIDES.find((g) => g.slug === slug);
