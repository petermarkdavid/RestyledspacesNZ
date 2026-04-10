import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ExternalLink, Facebook, Home, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { PinterestIcon } from "#/components/SocialBrandIcons";
import { publicAsset } from "#/lib/baseUrl";
import { site, socialLinks } from "#/lib/site";

const footerLogoSrc = publicAsset("/images/not-portfolio/restyled-spaces-nz-logo-text.png");

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
    <footer className="tonal-stacking-top w-full bg-surface-low py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 sm:px-10 md:grid-cols-2 md:gap-8">
        <div>
          <Link to="/" className="inline-flex max-w-full" title={`${site.name} — Home`}>
            <img
              src={footerLogoSrc}
              alt={site.name}
              width={220}
              height={44}
              className="h-10 w-auto max-h-11 max-w-[min(100%,14rem)] object-contain object-left sm:h-11 sm:max-w-[16rem]"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Copyright© 2021 Restyled spaces NZ, All Rights Reserved.
          </p>
          <p className="mt-3 text-xs text-muted">Web design by Ander Studio</p>
        </div>
        <nav aria-label="Social and contact links" className="w-full md:justify-self-start">
          <ul className="grid w-full grid-cols-2 justify-items-start gap-x-6 gap-y-2.5 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.href} className="min-w-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full min-w-0 items-center gap-2.5 py-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  <SocialIcon label={link.label} className="h-4 w-4 shrink-0 text-ink opacity-90" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li className="min-w-0">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex w-full min-w-0 items-center gap-2.5 py-1.5 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline"
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
