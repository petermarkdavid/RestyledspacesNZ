import type { LucideIcon } from "lucide-react";
import { ExternalLink, Facebook, Home, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { PinterestIcon } from "#/components/SocialBrandIcons";
import { site, socialLinks } from "#/lib/site";

const iconBySocialLabel: Partial<Record<(typeof socialLinks)[number]["label"], LucideIcon>> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  "Google Maps": MapPin,
  Houzz: Home,
};

function SocialIcon({ label, className }: { label: (typeof socialLinks)[number]["label"]; className: string }) {
  if (label === "Pinterest") {
    return <PinterestIcon className={className} />;
  }
  const Lucide = iconBySocialLabel[label] ?? ExternalLink;
  return <Lucide className={className} strokeWidth={1.75} aria-hidden />;
}

export function SiteFooter() {
  return (
    <footer className="tonal-stacking-top w-full bg-surface-low py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 sm:px-10 md:grid-cols-2 md:gap-8">
        <div>
          <span className="font-heading text-lg font-bold text-ink">{site.name}</span>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Copyright© 2021 Restyled spaces NZ, All Rights Reserved.
          </p>
          <p className="mt-3 text-xs text-muted">Web design by Ander Studio</p>
        </div>
        <nav aria-label="Social and contact links" className="md:justify-self-end">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-6 sm:gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-2.5 py-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline sm:w-auto"
                >
                  <SocialIcon label={link.label} className="h-4 w-4 shrink-0 text-ink opacity-90" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex w-full items-center gap-2.5 py-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline sm:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0 text-ink opacity-90" strokeWidth={1.75} aria-hidden />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
