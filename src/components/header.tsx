import Link from "next/link";
import { LogoMark } from "./logo";
import { SITE_NAME } from "@/lib/site";
import { ui } from "@/lib/ui-strings";

export function Header({ lang = "en" }: { lang?: string }) {
  const t = ui(lang);
  const home = lang === "en" ? "/" : `/${lang}`;
  const nav = [
    { href: home, label: t.home, cls: "" },
    { href: `${home === "/" ? "" : home}/#how-to`.replace("//", "/"), label: t.howTo, cls: "hidden sm:block" },
    ...(lang === "en" || lang === "hi" ? [{ href: "/blog", label: t.blog, cls: "" }] : []),
    { href: `${home === "/" ? "" : home}/#faq`.replace("//", "/"), label: t.faq, cls: "" },
    lang === "en" ? { href: "/hi", label: "हिंदी", cls: "" } : { href: "/", label: "English", cls: "" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={home} className="flex items-center gap-2 text-lg font-bold" aria-label={`${SITE_NAME} ${t.home}`}>
          <LogoMark size={32} />
          <span>{SITE_NAME}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 overflow-x-auto text-sm">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 ${item.cls}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
