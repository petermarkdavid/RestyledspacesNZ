import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { caseStudies } from "#/lib/portfolio";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Homes we’ve staged or styled" },
      {
        name: "description",
        content:
          "Before and after case studies from Restyled spaces NZ — real homes, practical styling, Wellington and online.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Homes we&apos;ve staged or styled</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        Each project starts with what you already have. Here&apos;s how problem, approach, and outcome come
        together—drag the sliders on the case study pages to compare.
      </p>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <Link to={`/portfolio/${c.slug}`} className="group block">
              <div className="card-tonal relative aspect-[4/3] overflow-hidden rounded-2xl transition group-hover:shadow-md">
                <img
                  src={publicAsset(c.coverSrc)}
                  alt={c.title}
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <h2 className="font-heading mt-4 text-xl font-semibold text-brand-2 group-hover:underline">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{c.excerpt}</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand-2">View case study →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
