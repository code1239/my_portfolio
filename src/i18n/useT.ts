"use client";

import { useLang } from "./LanguageProvider";
import { dictionaries } from "./dictionaries";
import { resume } from "@/content/resume";

export function useT() {
  const { lang } = useLang();
  return { lang, t: dictionaries[lang], r: resume[lang] };
}
