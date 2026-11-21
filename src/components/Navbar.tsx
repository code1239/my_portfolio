"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/i18n/useT";
import { LanguageToggle, ThemeToggle } from "./Toggles";

export function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight" onClick={() => setOpen(false)}>
          Yusuf Macit
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-fg hover:underline hover:underline-offset-4">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center border border-border transition hover:border-fg md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto max-w-5xl px-5 sm:px-8">
            {links.map((l) => (
              <li key={l.href} className="border-b border-border last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-2xl transition hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
