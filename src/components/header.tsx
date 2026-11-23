import Link from "next/link";
import { Download } from "lucide-react";
import { SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#how-to", label: "How to Download" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="ig-gradient grid size-8 place-items-center rounded-lg text-white"><Download className="size-4" aria-hidden /></span>
          <span>{SITE_NAME}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 overflow-x-auto text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 ${item.label === "How to Download" ? "hidden sm:block" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
