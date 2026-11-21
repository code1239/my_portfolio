"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Lang } from "@/content/types";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

const KEY = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let next: Lang = "en";
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "tr" || stored === "en") next = stored;
      else if (navigator.language?.toLowerCase().startsWith("tr")) next = "tr";
    } catch {
      if (navigator.language?.toLowerCase().startsWith("tr")) next = "tr";
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "en" ? "tr" : "en"), [lang, setLang]);

  return <LanguageContext value={{ lang, setLang, toggle }}>{children}</LanguageContext>;
}

export const useLang = () => useContext(LanguageContext);
