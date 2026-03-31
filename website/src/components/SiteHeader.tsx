import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { mainNavItems } from "#/lib/site";

const navLinkBase =
  "font-heading text-sm tracking-tight transition-colors pb-1 border-b-2 border-transparent";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          title="Restyled spaces NZ — Home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Restyled spaces NZ"
            width={140}
            height={56}
            className="h-10 w-auto"
            fetchPriority="high"
          />
          <span className="font-heading text-xl font-bold tracking-tighter text-slate-900">Restyled Spaces</span>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex" aria-label="Primary">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={item.href === "/" ? { exact: true } : undefined}
              className={navLinkBase}
              activeProps={{
                className: `${navLinkBase} border-slate-900 font-semibold text-slate-900`,
              }}
              inactiveProps={{
                className: `${navLinkBase} font-medium text-slate-500 hover:text-slate-900`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-brand text-on-primary hidden rounded-lg px-6 py-2.5 text-sm font-semibold transition-all hover:opacity-80 active:scale-95 sm:inline-flex sm:items-center sm:justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
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
          className="border-t border-slate-200/80 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeOptions={item.href === "/" ? { exact: true } : undefined}
                className="rounded-lg px-3 py-2.5 font-heading text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                activeProps={{ className: "rounded-lg bg-slate-100 px-3 py-2.5 font-heading text-sm font-semibold text-slate-900" }}
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
              Contact Us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
