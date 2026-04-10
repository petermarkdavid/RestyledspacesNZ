import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Restyled spaces NZ" },
      {
        name: "description",
        content:
          "Meet Julie and learn how Restyled spaces NZ helps Wellington homeowners stage and style using what they already own.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">About Restyled spaces NZ</h1>
        <p className="mt-4 text-lg text-muted">
          Restyled spaces NZ helps homeowners transform their homes using what they already have as a starting
          point—making spaces feel warmer, more functional, and easier to live in or sell.
        </p>
        <div className="card-tonal relative mt-10 aspect-[16/10] overflow-hidden shadow-xl ring-1 ring-black/5">
          <img
            src={publicAsset("/images/not-portfolio/julie-cushion-fluff-logo-shirt.jpg")}
            alt="Julie — Restyled spaces NZ"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="prose prose-neutral mt-10 max-w-none text-muted">
          <p>
            I&apos;m Julie—your practical, down-to-earth styling partner. I work with real homes: kids, pets,
            busy schedules, and tight timelines. You don&apos;t need a showroom budget to make a meaningful
            difference in how a space feels and photographs.
          </p>
          <p>
            Whether you&apos;re preparing to sell or settling in for the long haul, we&apos;ll use your existing
            furniture and décor as the foundation, then edit, rearrange, and layer in thoughtful touches. When
            something new would help, I&apos;ll suggest options that fit your budget.
          </p>
          <p>
            Based in Wellington, I also offer online consultations for clients across New Zealand and
            internationally.
          </p>
        </div>
        <Link
          to="/contact"
          className="primary-btn mt-10 inline-flex px-6 py-3 text-sm font-semibold shadow-sm transition hover:brightness-110"
        >
          Request a consultation
        </Link>
      </div>
    </div>
  );
}
