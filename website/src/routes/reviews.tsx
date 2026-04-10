import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { testimonials } from "#/lib/testimonials";
import { socialLinks } from "#/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "What our clients have to say" },
      {
        name: "description",
        content:
          "Testimonials from homeowners and real estate partners who’ve worked with Restyled spaces NZ — home staging and restyling in Wellington and online.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What our clients have to say</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        Real feedback from people we&apos;ve styled for — homeowners preparing to sell and industry partners.
      </p>
      <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
        {testimonials.map((r) => (
          <li key={r.id} className="card-tonal rounded-none p-6 ring-1 ring-black/5 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                src={publicAsset(r.imageSrc)}
                alt=""
                className="h-20 w-20 shrink-0 object-cover shadow-sm ring-1 ring-line"
                loading="lazy"
                decoding="async"
              />
              <div className="relative min-w-0 flex-1">
                <p className="text-accent" aria-hidden>
                  ★★★★★
                </p>
                <div className="relative mt-3">
                  <span
                    className="pointer-events-none absolute -left-0 -top-1 font-heading text-4xl leading-none text-tertiary-container/50 select-none sm:text-5xl"
                    aria-hidden
                  >
                    ❝
                  </span>
                  <blockquote className="relative z-10 pb-8 pl-9 pr-9 text-base leading-relaxed text-muted sm:pl-10 sm:pr-10">
                    {r.quote}
                    <span
                      className="pointer-events-none absolute bottom-0 right-0 font-heading text-4xl leading-none text-tertiary-container/45 select-none sm:text-5xl"
                      aria-hidden
                    >
                      ❞
                    </span>
                  </blockquote>
                </div>
                <p className="mt-5 pl-9 text-sm font-semibold text-ink sm:pl-10">{r.name}</p>
                <p className="pl-9 text-xs text-muted sm:pl-10">{r.detail}</p>
              </div>
            </div>
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
          Request a consultation
        </Link>
      </div>
    </div>
  );
}
