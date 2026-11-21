"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useT } from "@/i18n/useT";
import { useLang } from "@/i18n/LanguageProvider";

const btn =
  "inline-flex h-9 items-center justify-center rounded-full border border-border bg-card px-3 text-sm font-medium transition hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useT();
  return (
    <button
      type="button"
      className={`${btn} w-9 !px-0`}
      aria-label={t.aria.toggleTheme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}

export function LanguageToggle() {
  const { lang, toggle } = useLang();
  const { t } = useT();
  return (
    <button type="button" className={`${btn} gap-1 font-mono`} aria-label={t.aria.toggleLang} onClick={toggle}>
      <span className={lang === "en" ? "text-accent" : "text-muted"}>EN</span>
      <span className="text-muted">/</span>
      <span className={lang === "tr" ? "text-accent" : "text-muted"}>TR</span>
    </button>
  );
}
