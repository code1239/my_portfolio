"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useT } from "@/i18n/useT";
import { useLang } from "@/i18n/LanguageProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useT();
  return (
    <button
      type="button"
      className="inline-flex size-9 items-center justify-center border border-border transition hover:border-fg"
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
    <button
      type="button"
      className="inline-flex h-9 items-center gap-1.5 border border-border px-3 font-mono text-xs transition hover:border-fg"
      aria-label={t.aria.toggleLang}
      onClick={toggle}
    >
      <span className={lang === "en" ? "font-semibold text-fg underline underline-offset-4" : "text-muted"}>EN</span>
      <span className="text-muted">/</span>
      <span className={lang === "tr" ? "font-semibold text-fg underline underline-offset-4" : "text-muted"}>TR</span>
    </button>
  );
}
