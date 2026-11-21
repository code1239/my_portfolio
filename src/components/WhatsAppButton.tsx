"use client";

import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { WhatsAppIcon } from "./icons";
import { btnSecondary } from "./ui/Section";

function useWhatsAppUrl() {
  const { t } = useT();
  return `https://wa.me/${profile.phoneIntl}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
}

export function WhatsAppButton({ className = "" }: { className?: string }) {
  const { t } = useT();
  const url = useWhatsAppUrl();
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} ${className}`}>
      <WhatsAppIcon className="size-4 text-[#25D366]" />
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
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center bg-[#25D366] text-white shadow-md transition hover:scale-105"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
