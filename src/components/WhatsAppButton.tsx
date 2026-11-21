"use client";

import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { WhatsAppIcon } from "./icons";

function useWhatsAppUrl() {
  const { t } = useT();
  return `https://wa.me/${profile.phoneIntl}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
}

export function WhatsAppButton({ className = "" }: { className?: string }) {
  const { t } = useT();
  const url = useWhatsAppUrl();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#06310f] shadow-sm transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${className}`}
    >
      <WhatsAppIcon className="size-4" />
      {t.contact.whatsapp}
    </a>
  );
}

export function FloatingWhatsApp() {
  const { t } = useT();
  const url = useWhatsAppUrl();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsapp}
      title={t.contact.whatsapp}
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
