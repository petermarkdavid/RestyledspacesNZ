import { Link, createFileRoute } from "@tanstack/react-router";
import { facebookReviewsSummary, testimonials } from "#/lib/testimonials";
import { site, socialLinks } from "#/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "What our clients have to say" },
      {
        name: "description",
        content:
          "Testimonials from homeowners and real estate partners who’ve worked with Restyled spaces NZ — 100% recommend on Facebook.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const facebookHref = site.social.facebook;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What our clients have to say</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        Real feedback from people we&apos;ve styled for — homeowners preparing to sell and industry partners.
        {facebookHref ? (
          <>
            {" "}
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              {facebookReviewsSummary}
            </a>
            .
          </>
        ) : (
          <> {facebookReviewsSummary}.</>
        )}
      </p>
      <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
        {testimonials.map((r) => (
          <li key={r.id} className="card-tonal rounded-2xl p-6 sm:p-8">
            <p className="text-amber-600" aria-hidden>
              ★★★★★
            </p>
            <blockquote className="mt-3 text-base leading-relaxed text-muted">&ldquo;{r.quote}&rdquo;</blockquote>
            <p className="mt-5 text-sm font-semibold text-ink">{r.name}</p>
            <p className="text-xs text-muted">{r.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-center text-sm text-muted">
        Also on{" "}
        {socialLinks.map((link, i) => (
          <span key={link.href}>
            {i > 0 && (i === socialLinks.length - 1 ? " and " : ", ")}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              {link.label}
            </a>
          </span>
        ))}
        .
      </p>
      <div className="mt-10 text-center">
        <Link
          to="/contact"
          className="primary-btn inline-flex px-6 py-3 text-sm font-semibold shadow-sm transition hover:brightness-110"
        >
          Request a Consultation
        </Link>
      </div>
    </div>
  );
}
