import type { Metadata } from "next";
import { RootShell, rootMetadata, rootViewport } from "@/components/root-shell";

export const metadata: Metadata = {
  ...rootMetadata,
  openGraph: { ...rootMetadata.openGraph, locale: "hi_IN" },
};
export const viewport = rootViewport;

export default function HindiRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="hi">{children}</RootShell>;
}
