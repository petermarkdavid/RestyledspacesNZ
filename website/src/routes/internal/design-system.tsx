import { Link, createFileRoute } from "@tanstack/react-router";
import { site } from "#/lib/site";

export const Route = createFileRoute("/internal/design-system")({
  head: () => ({
    meta: [
      { title: `${site.name} — design system (internal)` },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Internal visual reference for brand colours, type, and UI patterns." },
    ],
  }),
  component: DesignSystemPage,
});

const colors = [
  { name: "brand (blue)", className: "bg-brand", hex: "#1D44CD", textClass: "text-on-primary" },
  { name: "brand-2 (= brand)", className: "bg-brand-2", hex: "#1D44CD", textClass: "text-on-primary" },
  { name: "accent (gold)", className: "bg-tertiary-container", hex: "#ECDF15", textClass: "text-on-tertiary-container" },
  { name: "page", className: "bg-page", hex: "#f8f5f0", textClass: "text-ink" },
  { name: "surface-low", className: "bg-surface-low", hex: "#f2ede6", textClass: "text-ink" },
  { name: "surface-high", className: "bg-surface-high", hex: "#e8e2d9", textClass: "text-ink" },
  { name: "surface", className: "bg-surface", hex: "#ffffff", textClass: "text-ink" },
  { name: "chip (blue tint)", className: "bg-chip", hex: "mix(brand 14%, white)", textClass: "text-ink" },
  { name: "ink", className: "bg-ink", hex: "#1c1917", textClass: "text-white" },
  { name: "muted", className: "bg-muted", hex: "#45474c", textClass: "text-white" },
] as const;

function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-12 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">Internal reference</p>
        <h1 className="font-heading mt-2 text-3xl font-bold text-ink sm:text-4xl">Design system</h1>
        <p className="mt-3 max-w-2xl text-muted">
          This page is not linked from the public site. Share the URL with your client for review. Colours,
          typography, and components match the live {site.name} experience.
        </p>
        <p className="mt-4 text-sm text-muted">
          Public entry points:{" "}
          <Link to="/" className="font-semibold text-brand hover:underline">
            Home
          </Link>
          {" · "}
          <Link to="/contact" className="font-semibold text-brand hover:underline">
            Contact
          </Link>
        </p>
      </div>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-brand">Colour</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Core palette from site tokens — warm neutrals, brand blue <span className="font-mono">#1D44CD</span> only for
          saturated blue (tints use the same hue), and gold accent.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((c) => (
            <li
              key={c.name}
              className={`flex min-h-[5.5rem] flex-col justify-end rounded-xl p-4 ${c.className} ${c.textClass}`}
            >
              <span className="font-heading text-sm font-semibold capitalize">{c.name.replace(/-/g, " ")}</span>
              <span className="mt-1 font-mono text-xs opacity-90">{c.hex}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-brand">Typography</h2>
        <div className="mt-6 space-y-8 rounded-2xl bg-surface p-6 sm:p-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Heading — Plus Jakarta Sans</p>
            <p className="font-heading mt-2 text-4xl font-extrabold tracking-tight text-brand">Style your sanctuary</p>
            <p className="font-heading mt-4 text-2xl font-bold text-ink">Section title weight</p>
            <p className="font-heading mt-2 text-sm font-semibold text-brand">Eyebrow / label</p>
          </div>
          <div className="tonal-stacking-top pt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Body — Public Sans</p>
            <p className="mt-2 max-w-prose text-lg leading-relaxed text-muted">
              We specialise in restyling what you already own — practical staging and styling for Wellington homes
              and online consultations NZ-wide.
            </p>
            <p className="mt-4 text-sm text-ink">
              Small print and form labels use tighter leading for scanability.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-brand">Buttons</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <button type="button" className="primary-btn px-6 py-3 text-sm font-semibold shadow-sm">
            Primary
          </button>
          <button type="button" className="secondary-btn px-6 py-3 text-sm font-semibold shadow-sm">
            Secondary
          </button>
          <button type="button" className="ghost-btn border border-line px-6 py-3 text-sm font-semibold">
            Ghost
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-brand">Surfaces & cards</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="surface-low rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-brand">surface-low</p>
            <p className="mt-2 text-sm text-muted">Section bands and alternating page rhythm.</p>
          </div>
          <div className="surface-high rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-brand">surface-high</p>
            <p className="mt-2 text-sm text-muted">Nested emphasis inside a low surface.</p>
          </div>
          <div className="card-tonal col-span-full rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-brand">card-tonal</p>
            <p className="mt-2 text-sm text-muted">White card with soft lift shadow — forms and elevated panels.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-brand">Form patterns</h2>
        <div className="mt-6 max-w-md space-y-4 rounded-2xl bg-surface p-6">
          <label className="block text-sm font-medium text-ink">
            Sample input
            <input
              type="text"
              readOnly
              placeholder="Rounded ghost field"
              className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
            />
          </label>
          <div>
            <p className="text-sm font-medium text-ink">Choice chips</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink">
                <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
                Selected style
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink opacity-80">
                Alternate
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-xl font-bold text-brand">Iconography</h2>
        <p className="mt-2 text-sm text-muted">
          Material Symbols Outlined (loaded globally) — e.g. before/after slider control.
        </p>
        <div className="mt-4 flex items-center gap-4 rounded-2xl bg-surface-high px-6 py-4">
          <span className="material-symbols-outlined text-brand" aria-hidden>
            swap_horiz
          </span>
          <span className="text-sm text-ink">swap_horiz</span>
        </div>
      </section>

      <p className="border-t border-line pt-8 text-center text-xs text-muted">
        Route: <code className="rounded bg-surface-high px-2 py-0.5 font-mono text-ink">/internal/design-system</code>
        {" — "}
        <span className="sr-only">Not indexed: </span>marked noindex for search engines.
      </p>
    </div>
  );
}
