import { profile } from "@/content/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {profile.name}
    </footer>
  );
}
