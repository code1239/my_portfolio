"use client";

import { useState } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";
import { useT } from "@/i18n/useT";

type Status = "idle" | "sending" | "success" | "error" | "unavailable" | "invalid" | "tooMany";

const field =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const { t } = useT();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else if (res.status === 400) setStatus("invalid");
      else if (res.status === 429) setStatus("tooMany");
      else if (res.status === 503) setStatus("unavailable");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "success"
      ? t.contact.success
      : status === "error"
        ? t.contact.error
        : status === "unavailable"
          ? t.contact.unavailable
          : status === "invalid"
            ? t.contact.invalid
            : status === "tooMany"
              ? t.contact.tooMany
              : null;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={field} name="name" required maxLength={100} placeholder={t.contact.name} aria-label={t.contact.name} />
        <input className={field} name="email" type="email" required maxLength={200} placeholder={t.contact.email} aria-label={t.contact.email} />
      </div>
      <textarea
        className={`${field} min-h-36 resize-y`}
        name="message"
        required
        minLength={10}
        maxLength={4000}
        placeholder={t.contact.message}
        aria-label={t.contact.message}
      />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 text-sm font-semibold text-[#04140f] transition hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
          {status === "sending" ? t.contact.sending : t.contact.send}
        </button>
        {message && (
          <p
            role="status"
            className={`flex items-center gap-1.5 text-sm ${status === "success" ? "text-accent" : "text-red-500"}`}
          >
            {status === "success" && <Check className="size-4" />}
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
