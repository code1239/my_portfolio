"use client";

import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {profile.name} · {t.footer}
    </footer>
  );
}
