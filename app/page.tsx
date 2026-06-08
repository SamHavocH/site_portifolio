import { cookies, headers } from "next/headers";
import Portfolio from "@/components/portfolio";
import type { Locale } from "@/data/projects";

const localeStorageKey = "samuel-fersil-locale";

function resolveInitialLocale(): Locale {
  const savedLocale = cookies().get(localeStorageKey)?.value;
  if (savedLocale === "pt-BR" || savedLocale === "en-US") {
    return savedLocale;
  }

  const acceptLanguage = headers().get("accept-language")?.toLowerCase() ?? "";
  return acceptLanguage.startsWith("pt") ? "pt-BR" : "en-US";
}

export default function Home() {
  return <Portfolio initialLocale={resolveInitialLocale()} />;
}
