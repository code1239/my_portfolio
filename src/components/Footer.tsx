import { profile } from "@/content/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-8 font-mono text-xs text-muted sm:px-8">© {profile.name}</div>
    </footer>
  );
}
