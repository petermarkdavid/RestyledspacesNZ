import { Link } from "@tanstack/react-router";
import {
  FacebookIcon,
  GoogleMapsIcon,
  HouzzIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
} from "#/components/SocialBrandIcons";
import { publicAsset } from "#/lib/baseUrl";
import { navItems, site, socialLinks } from "#/lib/site";

const footerLogoSrc = publicAsset("/images/not-portfolio/restyled-spaces-nz-logo-text.png");

type SocialLabel = (typeof socialLinks)[number]["label"];

function SocialIcon({ label, className }: { label: SocialLabel; className: string }) {
  switch (label) {
    case "Pinterest":
      return <PinterestIcon className={className} />;
    case "Facebook":
      return <FacebookIcon className={className} />;
    case "Instagram":
      return <InstagramIcon className={className} />;
    case "LinkedIn":
      return <LinkedinIcon className={className} />;
    case "Google Maps":
      return <GoogleMapsIcon className={className} />;
    case "Houzz":
      return <HouzzIcon className={className} />;
    default:
      throw new Error(`Unsupported social icon label: ${label}`);
  }
}

export function SiteFooter() {
  return (
    <footer className="tonal-stacking-top w-full bg-white pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
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
            <div className="mt-4 space-y-1 text-xs text-ink">
              <p>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="hover:underline"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-heading text-sm font-medium text-ink transition hover:opacity-70"
                    activeProps={{ className: "font-heading text-sm font-semibold text-ink" }}
                    activeOptions={item.href === "/" ? { exact: true } : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex items-center justify-center text-ink transition hover:opacity-60"
                  >
                    <SocialIcon label={link.label} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-line pt-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink">
            Copyright© 2021 Restyled spaces NZ, All Rights Reserved.
          </p>
          <p className="text-xs text-ink">Web design by Ander Studio</p>
        </div>
      </div>
    </footer>
  );
}
