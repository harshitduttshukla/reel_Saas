import { LocaleHome, localeMetadata } from "@/components/locale-page";
import { getLocale } from "@/lib/locales";

const l = getLocale("pt")!;
export const metadata = localeMetadata(l);

export default function Page() {
  return <LocaleHome l={l} />;
}
