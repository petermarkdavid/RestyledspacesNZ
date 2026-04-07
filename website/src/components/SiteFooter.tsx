import type { LucideIcon } from "lucide-react";
import { ExternalLink, Facebook, Home, Instagram, Linkedin, Mail, MapPin, Pin } from "lucide-react";
import { site, socialLinks } from "#/lib/site";

const iconBySocialLabel: Record<(typeof socialLinks)[number]["label"], LucideIcon> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  "Google Maps": MapPin,
  Pinterest: Pin,
  Houzz: Home,
};

export function SiteFooter() {
  return (
    <footer className="tonal-stacking-top w-full bg-surface-low py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-8 md:grid-cols-2 md:gap-8">
        <div>
          <span className="font-heading text-lg font-bold text-ink">{site.name}</span>
          <p className="font-heading mt-2 text-xs leading-loose tracking-widest text-muted uppercase">
            © {new Date().getFullYear()} {site.name}.
          </p>
          <p className="mt-3 text-xs text-muted">Web design by Ander Studio</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-muted sm:gap-5 md:justify-end">
          {socialLinks.map((link) => {
            const Icon = iconBySocialLabel[link.label] ?? ExternalLink;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand"
                aria-label={link.label}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            );
          })}
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand" aria-label="Email">
            <Mail className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
