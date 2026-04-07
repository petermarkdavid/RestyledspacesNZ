import { Link, createFileRoute, redirect } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { getCaseStudy } from "#/lib/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const c = getCaseStudy(params.slug);
    return {
      meta: c
        ? [
            { title: c.seoTitle },
            { name: "description", content: c.seoDescription },
          ]
        : [{ title: "Case study" }],
    };
  },
  beforeLoad: ({ params }) => {
    if (params.slug === "wellington-living-room") {
      throw redirect({ to: "/portfolio/wellington-bedroom", replace: true });
    }
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const c = getCaseStudy(slug);

  if (!c) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-ink">Case study not found</h1>
        <Link to="/portfolio" className="mt-6 inline-block font-semibold text-brand hover:underline">
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-16">
      <section className="relative">
        <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
          <img src={publicAsset(c.afterSrc)} alt={`${c.title} hero`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,68,205,0.2)_0%,rgba(29,68,205,0.62)_68%,rgba(29,68,205,0.85)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Before and after project</p>
            <h1 className="font-heading mt-3 max-w-xl text-4xl font-bold leading-[1.03] text-white sm:text-6xl">
              {c.title
                .replace("bedroom", "Living Room")
                .replace("Wellington", "Wellington")}
              <br />
              Transformation
            </h1>
          </div>
        </div>
      </section>

      <section className="surface-low">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink">The Challenge</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{c.problem}</p>

            <div className="surface-high mt-8 rounded-xl p-6">
              <h3 className="font-heading text-2xl font-semibold text-ink">Julie&apos;s Approach</h3>
              <ul className="mt-4 space-y-3">
                {c.approach.map((step) => (
                  <li key={step} className="flex gap-3 text-muted">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-tonal rounded-xl p-6">
              <h3 className="font-heading text-2xl font-semibold text-ink">The Result</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{c.outcome}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="surface-low rounded-lg p-3">
                  <p className="text-2xl font-bold text-brand">14</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted">Days to style</p>
                </div>
                <div className="surface-low rounded-lg p-3">
                  <p className="text-2xl font-bold text-brand">85%</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted">Fewer new purchases</p>
                </div>
              </div>
            </div>

            <div className="primary-btn rounded-xl p-5">
              <p className="text-sm font-semibold text-white">Ready for your transformation?</p>
              <p className="mt-1 text-xs text-white/85">Let&apos;s discuss your project and timeline.</p>
              <Link
                to="/contact"
                className="secondary-btn mt-4 inline-flex w-full items-center justify-center px-4 py-2 text-sm font-semibold"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold text-ink">The Visual Journey</h2>
          <p className="text-xs uppercase tracking-wide text-muted">Before / After</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.35fr]">
          <figure className="card-tonal overflow-hidden rounded-xl">
            <img src={publicAsset(c.beforeSrc)} alt={`${c.title} before`} className="h-full w-full object-cover grayscale-[35%]" />
          </figure>
          <figure className="card-tonal overflow-hidden rounded-xl">
            <img src={publicAsset(c.afterSrc)} alt={`${c.title} after`} className="h-full w-full object-cover" />
          </figure>
        </div>
      </section>

      <section className="surface-low">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand/70">Final insight</p>
          <h2 className="font-heading mt-3 text-4xl font-bold leading-tight text-brand sm:text-5xl">
            Restyling is about the details.
            <span className="block text-muted">It&apos;s where life happens.</span>
          </h2>
          <Link to="/portfolio" className="ghost-btn mt-6 inline-flex px-5 py-2 text-sm font-semibold">
            See more projects
          </Link>
        </div>
      </section>
    </article>
  );
}
