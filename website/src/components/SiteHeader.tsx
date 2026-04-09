import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { publicAsset } from "#/lib/baseUrl";
import { mainNavItems } from "#/lib/site";

/** Shared nav styles; active uses yellow-gold bottom border (`border-tertiary-container`), inactive uses transparent. */
const navLinkShared =
  "font-heading text-sm tracking-tight transition-colors pb-1 border-b-2";

const headerLogoSrc = publicAsset("/images/not-portfolio/restyled-spaces-nz-logo-text.png");

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-10">
        <Link
          to="/"
          className="relative flex min-w-0 shrink-0 items-center"
          title="Restyled spaces NZ — Home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={headerLogoSrc}
            alt="Restyled spaces NZ"
            width={220}
            height={44}
            className="h-9 w-auto max-h-10 max-w-[min(100%,12rem)] shrink-0 object-contain object-left sm:h-10 sm:max-w-[14rem]"
            fetchPriority="high"
          />
        </Link>

        <nav
          className="hidden h-full items-center space-x-8 md:flex md:translate-y-[10px] md:self-stretch"
          aria-label="Primary"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={item.href === "/" ? { exact: true } : undefined}
              className={navLinkShared}
              activeProps={{
                className: `${navLinkShared} border-tertiary-container font-semibold text-ink`,
              }}
              inactiveProps={{
                className: `${navLinkShared} border-transparent font-medium text-ink hover:opacity-80`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex h-full items-center gap-3">
          <Link
            to="/contact"
            className="bg-brand text-on-primary hidden rounded-lg px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-80 active:scale-95 sm:inline-flex sm:items-center sm:justify-center sm:self-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-surface px-5 py-4 shadow-lg sm:px-10 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeOptions={item.href === "/" ? { exact: true } : undefined}
                className="rounded-lg px-3 py-2.5 font-heading text-sm font-medium text-ink transition hover:bg-surface-low"
                activeProps={{
                  className:
                    "rounded-lg border-l-4 border-tertiary-container bg-surface-high py-2.5 pr-3 pl-2.5 font-heading text-sm font-semibold text-ink",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand text-on-primary mt-2 inline-flex items-center justify-center rounded-lg px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
