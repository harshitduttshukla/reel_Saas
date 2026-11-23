import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE_NAME}. Not affiliated with Instagram or Meta.</p>
        <nav aria-label="Footer" className="flex gap-4">
          <Link href="/#how-to" className="hover:text-slate-900">How to</Link>
          <Link href="/#faq" className="hover:text-slate-900">FAQ</Link>
          <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-900">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
