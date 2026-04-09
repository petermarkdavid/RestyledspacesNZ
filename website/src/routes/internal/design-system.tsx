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
  { name: "primary (brand blue)", className: "bg-brand", hex: "#3b6ebe", textClass: "text-on-primary" },
  { name: "brand-2 (= brand)", className: "bg-brand-2", hex: "#3b6ebe", textClass: "text-on-primary" },
  {
    name: "secondary fill (gold tint)",
    className: "bg-tertiary-container",
    hex: "#dbc06f · on #1e293b",
    textClass: "text-on-tertiary-container",
  },
  { name: "accent (deep gold)", className: "bg-accent", hex: "#b8941f", textClass: "text-white" },
  { name: "tertiary (blue-grey)", className: "bg-tone-tertiary", hex: "#94a3b8", textClass: "text-ink" },
  { name: "page (warm neutral)", className: "bg-page", hex: "#fdfcfa", textClass: "text-ink" },
  {
    name: "surface-low",
    className: "bg-surface-low",
    hex: "oklab: 9% #dbc06f + white",
    textClass: "text-ink",
  },
  {
    name: "surface-high",
    className: "bg-surface-high",
    hex: "oklab: 14% #dbc06f + warm base",
    textClass: "text-ink",
  },
  { name: "surface", className: "bg-surface", hex: "#ffffff", textClass: "text-ink" },
  { name: "chip (mix)", className: "bg-chip", hex: "page + tertiary (oklab)", textClass: "text-ink" },
  {
    name: "primary-fixed (brand tint)",
    className: "bg-primary-fixed",
    hex: "mix: brand 10% + white",
    textClass: "text-on-primary-fixed",
  },
  {
    name: "secondary-fixed (gold tint)",
    className: "bg-secondary-fixed",
    hex: "mix: #dbc06f 20% + page",
    textClass: "text-on-secondary-fixed",
  },
  { name: "ink", className: "bg-ink", hex: "#1e293b", textClass: "text-white" },
  { name: "muted", className: "bg-muted", hex: "#64748b", textClass: "text-white" },
  {
    name: "line (borders)",
    className: "border-2 border-line bg-surface",
    hex: "tertiary @ 32% (oklab)",
    textClass: "text-ink",
  },
] as const;

const designSystemPath = "/internal/design-system" as const;
const designSystemUrlProduction = `${site.url}${designSystemPath}`;

function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="mb-8 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">Internal reference</p>
        <h1 className="font-heading mt-2 text-3xl font-bold text-ink sm:text-4xl">Design system</h1>
        <div className="mt-6 rounded-xl border border-brand/20 bg-primary-fixed p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Share this link</p>
          <p className="mt-2 break-all font-mono text-sm font-medium text-brand">
            <a href={designSystemUrlProduction} className="underline decoration-brand/30 underline-offset-2 hover:decoration-brand">
              {designSystemUrlProduction}
            </a>
          </p>
          <p className="mt-3 text-xs text-muted">
            Local dev:{" "}
            <span className="font-mono text-ink">
              http://localhost:3000{designSystemPath}
            </span>{" "}
            (same path when you run <code className="font-mono text-ink">npm run dev</code>).
          </p>
          <p className="mt-3">
            <Link
              to={designSystemPath}
              className="text-sm font-semibold text-brand hover:underline"
            >
              Open this page in the current environment
            </Link>
          </p>
        </div>
        <p className="mt-6 text-sm text-muted">
          Public site:{" "}
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
        <h2 className="font-heading text-xl font-bold text-ink">Colour</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Brand blue <span className="font-mono text-ink">#3b6ebe</span>, gold fill (from the{" "}
          <span className="font-mono text-ink">#d2b14c</span> family){" "}
          <span className="font-mono text-ink">#dbc06f</span>, deeper gold accent{" "}
          <span className="font-mono text-ink">#b8941f</span>, UI blue-grey{" "}
          <span className="font-mono text-ink">#94a3b8</span>, warm page{" "}
          <span className="font-mono text-ink">#fdfcfa</span>. Section surfaces use{" "}
          <span className="font-medium text-ink">oklab</span> mixes in{" "}
          <code className="font-mono text-xs text-ink">@theme</code> — swatches below are authoritative for class names;
          printed hex for mixes is shorthand.
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
        <h2 className="font-heading text-xl font-bold text-ink">Usage (current site)</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
          <li>
            <span className="font-medium text-ink">Section headings</span> on key marketing blocks (e.g. home) use{" "}
            <code className="font-mono text-xs text-ink">text-ink</code> — not brand blue.
          </li>
          <li>
            <span className="font-medium text-ink">Brand blue</span>{" "}
            <code className="font-mono text-xs text-ink">#3b6ebe</code> for primary buttons, links, selected portfolio
            filters, and emphasis (e.g. stats).
          </li>
          <li>
            <span className="font-medium text-ink">Secondary gold fill</span>{" "}
            <code className="font-mono text-xs text-ink">#dbc06f</code> (lighter tint from the{" "}
            <code className="font-mono text-xs text-ink">#d2b14c</code> family) for secondary buttons, before/after
            slider, and active nav (
            <code className="font-mono text-xs text-ink">border-tertiary-container</code>).
          </li>
          <li>
            <span className="font-medium text-ink">Deep gold</span>{" "}
            <code className="font-mono text-xs text-ink">#b8941f</code> (
            <code className="font-mono text-xs text-ink">text-accent</code>) for stars and small highlights.
          </li>
          <li>
            <span className="font-medium text-ink">Blue-grey tertiary</span>{" "}
            <code className="font-mono text-xs text-ink">#94A3B8</code> drives borders, chips, and footer dividers via
            tokens.
          </li>
          <li>
            <span className="font-medium text-ink">Header logo</span> — combined mark + wordmark PNG:{" "}
            <code className="break-all font-mono text-xs text-ink">
              /images/not-portfolio/restyled-spaces-nz-logo-text.png
            </code>
            . Desktop primary nav links use a slight downward shift (
            <code className="font-mono text-xs text-ink">md:translate-y-[10px]</code>) to align with the logo.
          </li>
          <li>
            <span className="font-medium text-ink">Home hero</span> — full-bleed photo with warm charcoal gradients and
            soft tint overlays (see <code className="font-mono text-xs text-ink">src/routes/index.tsx</code>); image
            path and <code className="font-mono text-xs text-ink">object-cover</code> + CSS filters are per deploy, not
            theme tokens.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-ink">Typography</h2>
        <div className="mt-6 space-y-8 rounded-2xl bg-surface p-6 sm:p-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">Heading — Plus Jakarta Sans</p>
            <p className="font-heading mt-2 text-4xl font-extrabold tracking-tight text-ink">Section title (marketing)</p>
            <p className="font-heading mt-4 text-2xl font-bold text-brand">Inline emphasis / UI label</p>
            <p className="font-heading mt-2 text-sm font-semibold text-muted">Eyebrow / muted label</p>
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
        <h2 className="font-heading text-xl font-bold text-ink">Buttons</h2>
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
        <h2 className="font-heading text-xl font-bold text-ink">Surfaces & cards</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="surface-low rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-ink">surface-low</p>
            <p className="mt-2 text-sm text-muted">Section bands and alternating page rhythm.</p>
          </div>
          <div className="surface-high rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-ink">surface-high</p>
            <p className="mt-2 text-sm text-muted">Nested emphasis inside a low surface.</p>
          </div>
          <div className="card-tonal col-span-full rounded-2xl p-6">
            <p className="font-heading text-sm font-semibold text-ink">card-tonal</p>
            <p className="mt-2 text-sm text-muted">White card with soft lift shadow — forms and elevated panels.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-heading text-xl font-bold text-ink">Form patterns</h2>
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
        <h2 className="font-heading text-xl font-bold text-ink">Iconography</h2>
        <p className="mt-2 text-sm text-muted">
          Material Symbols Outlined (loaded globally) — e.g. before/after slider control.
        </p>
        <div className="mt-4 flex items-center gap-4 rounded-2xl bg-surface-high px-6 py-4">
          <span className="material-symbols-outlined text-black" aria-hidden>
            swap_horiz
          </span>
          <span className="text-sm text-ink">swap_horiz</span>
        </div>
      </section>

      <p className="border-t border-line pt-8 text-center text-xs text-muted">
        Path{" "}
        <code className="rounded bg-surface-high px-2 py-0.5 font-mono text-ink">{designSystemPath}</code> · marked{" "}
        <span className="font-mono text-ink">noindex</span> for search engines.
      </p>
    </div>
  );
}
