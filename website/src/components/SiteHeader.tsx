import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { LogoMark } from "#/components/LogoMark";
import { mainNavItems, site } from "#/lib/site";

const navLinkBase =
  "font-heading text-sm tracking-tight transition-colors pb-1 border-b-2 border-transparent";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-brand-2 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link
          to="/"
          className="text-brand flex min-w-0 shrink-0 items-center gap-3"
          title={`${site.name} — Home`}
          onClick={() => setMobileOpen(false)}
        >
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="font-wordmark min-w-0 text-lg tracking-tight sm:text-xl">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex" aria-label="Primary">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={item.href === "/" ? { exact: true } : undefined}
              className={navLinkBase}
              activeProps={{
                className: `${navLinkBase} border-brand font-semibold text-brand`,
              }}
              inactiveProps={{
                className: `${navLinkBase} font-medium text-brand/85 hover:text-brand`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="border-brand text-brand hidden rounded-lg border-2 px-6 py-2 text-sm font-semibold transition-colors hover:bg-white/10 active:scale-95 sm:inline-flex sm:items-center sm:justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="text-brand inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
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
          className="border-t border-white/15 bg-brand-2 px-4 py-4 shadow-lg md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeOptions={item.href === "/" ? { exact: true } : undefined}
                className="rounded-lg px-3 py-2.5 font-heading text-sm font-medium text-brand/85 transition hover:bg-white/10 hover:text-brand"
                activeProps={{
                  className:
                    "rounded-lg bg-white/10 px-3 py-2.5 font-heading text-sm font-semibold text-brand",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="border-brand text-brand mt-2 inline-flex items-center justify-center rounded-lg border-2 px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
