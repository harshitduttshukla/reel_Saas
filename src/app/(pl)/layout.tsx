import type { Metadata } from "next";
import { RootShell, rootMetadata, rootViewport } from "@/components/root-shell";
import { getLocale } from "@/lib/locales";

const l = getLocale("pl")!;
export const metadata: Metadata = { ...rootMetadata, openGraph: { ...rootMetadata.openGraph, locale: l.ogLocale } };
export const viewport = rootViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pl">{children}</RootShell>;
}
