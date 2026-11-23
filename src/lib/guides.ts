export interface Guide {
  slug: string;
  device: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  steps: { title: string; text: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "download-instagram-reels-iphone",
    device: "iPhone",
    title: "How to Download Instagram Reels on iPhone",
    metaTitle: "Download Instagram Reels on iPhone (Save to Photos)",
    description: "Step-by-step guide to download Instagram Reels on iPhone and iPad with Safari and save the video to your Photos app. No app needed.",
    intro: "You don't need to install an app to save a Reel on your iPhone. ReelSave works right in Safari or Chrome on iOS. Copy the Reel link, paste it here and the MP4 is saved to your Files app, from where you can move it to Photos.",
    steps: [
      { title: "Copy the Reel link", text: "In the Instagram app, open the Reel, tap the paper-plane (Share) icon and choose “Copy link”." },
      { title: "Open ReelSave in Safari", text: "Open Safari, go to ReelSave and tap the Paste button next to the input box." },
      { title: "Tap Download", text: "Tap Download. A preview of the Reel appears in a few seconds." },
      { title: "Save the video", text: "Tap “Download Video”, then confirm. Safari saves the MP4 in Files › Downloads." },
      { title: "Move it to Photos", text: "Open the Files app, tap the video, tap Share and choose “Save Video” to add it to Photos." },
    ],
    tips: [
      "If the Paste button is blocked, long-press inside the input box and choose Paste.",
      "Downloads go to Files › On My iPhone › Downloads by default. You can change this in Settings › Safari › Downloads.",
      "On iOS 13 and older, Safari can't download files. Update iOS or use a computer.",
    ],
    faqs: [
      { q: "Do I need an app to download Reels on iPhone?", a: "No. ReelSave runs in Safari or any iOS browser, with nothing to install." },
      { q: "Where do downloaded Reels go on iPhone?", a: "Safari saves them to Files › Downloads. Use Share › Save Video to move a Reel into Photos." },
      { q: "Does it work on iPad?", a: "Yes. The steps are the same on iPadOS with Safari." },
    ],
  },
  {
    slug: "download-instagram-reels-android",
    device: "Android",
    title: "How to Download Instagram Reels on Android",
    metaTitle: "Download Instagram Reels on Android (Save to Gallery)",
    description: "Learn how to download Instagram Reels on any Android phone with Chrome and save the MP4 to your Gallery. Free, fast and no app required.",
    intro: "On Android, saving a Reel takes a few seconds in Chrome or any other browser. The video goes to your Downloads folder and shows up in Gallery or Google Photos automatically.",
    steps: [
      { title: "Copy the Reel link", text: "Open the Reel in Instagram, tap the Share icon and choose “Copy link”." },
      { title: "Open ReelSave in Chrome", text: "Open Chrome, visit ReelSave and tap Paste, or long-press the input and paste." },
      { title: "Tap Download", text: "Tap Download and wait for the Reel preview to load." },
      { title: "Save the MP4", text: "Tap “Download Video”. Chrome saves the file to your Downloads folder." },
      { title: "Find it in Gallery", text: "Open Gallery, Google Photos or Files › Downloads to watch the Reel offline." },
    ],
    tips: [
      "Add ReelSave to your home screen from Chrome's menu (⋮ › Add to Home screen) for one-tap access.",
      "If the video doesn't show up in Gallery, check Files › Downloads.",
      "Works with Chrome, Samsung Internet, Firefox and Edge.",
    ],
    faqs: [
      { q: "Is there an Android app?", a: "No app is needed. ReelSave works in your Android browser and you can add it to your home screen." },
      { q: "Where are downloaded Reels saved on Android?", a: "In the Downloads folder. Most Gallery apps and Google Photos show them automatically." },
      { q: "Does it use a lot of data?", a: "A typical Reel is 1–10 MB, about the same as watching it once in Instagram." },
    ],
  },
  {
    slug: "download-instagram-reels-pc",
    device: "PC & Mac",
    title: "How to Download Instagram Reels on PC and Mac",
    metaTitle: "Download Instagram Reels on PC & Mac (Windows, macOS)",
    description: "Download Instagram Reels on Windows PC, Mac or Chromebook using any browser. Copy the Reel URL, paste it into ReelSave and save the MP4.",
    intro: "On a computer, ReelSave works in Chrome, Edge, Safari, Firefox and Brave, with no extension or software to install. The Reel is saved as an MP4 you can play in any video player or edit in any video editor.",
    steps: [
      { title: "Open the Reel on instagram.com", text: "Open the Reel in your browser and copy the URL from the address bar (it contains /reel/)." },
      { title: "Paste it into ReelSave", text: "Open ReelSave in another tab and paste the link with Ctrl+V (Windows) or ⌘+V (Mac)." },
      { title: "Click Download", text: "Click Download to load the Reel preview." },
      { title: "Save the MP4", text: "Click “Download Video”. The file is saved to your Downloads folder." },
    ],
    tips: [
      "The file is a standard MP4 that plays in VLC, QuickTime, Windows Media Player and video editors.",
      "Working on several Reels? Download them one at a time to avoid rate limits.",
      "Works on Chromebook too.",
    ],
    faqs: [
      { q: "Do I need a browser extension?", a: "No. ReelSave works in any modern browser without extensions." },
      { q: "What format is the downloaded Reel?", a: "MP4 (H.264 video with AAC audio), which plays almost everywhere." },
      { q: "Can I download Reels on a Mac?", a: "Yes. Use Safari, Chrome or any browser on macOS and follow the same steps." },
    ],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
