import { Link, createFileRoute } from "@tanstack/react-router";
import { socialLinks } from "#/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "What our clients have to say" },
      {
        name: "description",
        content: "Testimonials from homeowners and partners who’ve worked with Restyled spaces NZ.",
      },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    id: "vendor-example",
    quote:
      "My home sold in 2 days and $15,000 over asking price. Julie made the process feel manageable while we were still living in the house.",
    name: "Example client",
    detail: "Wellington vendor",
  },
  {
    id: "homeowner-example",
    quote:
      "We were overwhelmed by clutter and mismatched rooms. The refresh was practical and affordable—we used so much of what we already owned.",
    name: "Example client",
    detail: "Homeowner",
  },
  {
    id: "agent-example",
    quote:
      "Clear communication and reliable timelines. I’m happy to refer Julie to vendors who need a calm, practical eye before listing.",
    name: "Example agent",
    detail: "Real estate",
  },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What our clients have to say</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        Social proof matters—especially if you&apos;re unsure where to start. Replace these examples with your
        real testimonials and link out to Google reviews when ready.
      </p>
      <ul className="mt-12 grid gap-8 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.id} className="card-tonal rounded-2xl p-6">
            <p className="text-amber-600" aria-hidden>
              ★★★★★
            </p>
            <blockquote className="mt-3 text-muted">&ldquo;{r.quote}&rdquo;</blockquote>
            <p className="mt-4 text-sm font-semibold text-ink">{r.name}</p>
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
