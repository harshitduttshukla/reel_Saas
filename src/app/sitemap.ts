import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { POSTS } from "@/lib/blog";
import { LOCALES } from "@/lib/locales";
import { LOCALE_GUIDES } from "@/lib/locale-guides";
import { HINGLISH_GUIDES } from "@/lib/hinglish-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-23");
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...GUIDES.map((g) => ({ url: `${SITE_URL}/${g.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/hi`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...HINGLISH_GUIDES.map((g) => ({ url: `${SITE_URL}/hi/${g.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...LOCALES.map((l) => ({ url: `${SITE_URL}/${l.code}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...LOCALE_GUIDES.map((g) => ({ url: `${SITE_URL}/${g.lang}/${g.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.updated), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
