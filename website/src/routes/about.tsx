import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { testimonials } from "#/lib/testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Restyled Spaces NZ — Meet Julie" },
      {
        name: "description",
        content:
          "Meet Julie, the founder of Restyled Spaces NZ. Learn why she started the business, her approach to home staging and styling, and the areas she works in.",
      },
    ],
  }),
  component: AboutPage,
});

const aboutFaqs = [
  {
    q: "Where are you based and where do you work?",
    a: "I'm based in Wellington and work across the Wellington region in person. Online consultations are available for clients anywhere in New Zealand and internationally.",
  },
  {
    q: "Do you work with all types of homes?",
    a: "Yes — apartments, family homes, baches, and rentals. Real homes with real furniture and real lives. I don't only work with pristine showroom spaces.",
  },
  {
    q: "What makes your service different?",
    a: "I don't push new furniture or expensive accessories. I start with what you already own and work with it creatively. It's practical, sustainable, and genuinely achieves results.",
  },
];

function AboutPage() {
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Meet Julie
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              Founder of Restyled Spaces NZ — helping Wellington homeowners and clients across New Zealand
              stage and style their homes.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="aspect-[16/9] overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src={publicAsset("/images/not-portfolio/julie-cushion-fluff-logo-shirt.jpg")}
                alt="Julie — Restyled Spaces NZ"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why I started */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Why I started Restyled Spaces NZ
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I believe that every home has a &ldquo;soul&rdquo; that often gets buried under the clutter
              of everyday life. I started Restyled Spaces NZ because I kept seeing beautiful homes —
              full of great furniture and lovely things — that weren&apos;t quite working. A piece in
              the wrong place. A room with no clear purpose. A home that felt busy when it should feel calm.
            </p>
            <p>
              I wanted to help people see the potential in what they already owned, rather than
              immediately reaching for the credit card. It turns out that most homes just need a
              thoughtful eye, not a new sofa.
            </p>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">My approach</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I work with real homes: kids, pets, busy schedules, and tight timelines. My approach
              is practical and honest. I focus on spatial harmony — how a room flows, how light moves
              through it, how it feels to walk in — rather than chasing a particular &ldquo;look&rdquo;.
            </p>
            <p>
              Whether you&apos;re preparing to sell or creating a space you love living in, we start with
              what you already have. We edit, rearrange, and layer in thoughtful touches. When
              something new would genuinely help, I&apos;ll suggest it — but I&apos;ll always tell
              you why, and I&apos;ll never push an unnecessary spend.
            </p>
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            What makes my service different
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "We start with what you own",
                body: "No furniture hire fees, no pressure to buy. Your existing pieces are the starting point.",
              },
              {
                title: "Practical and sustainable",
                body: "Restyling what you have is better for your budget and better for the planet.",
              },
              {
                title: "Real homes, real results",
                body: "I work with occupied homes, busy families, and real budgets — not just show-home scenarios.",
              },
              {
                title: "Online consultations available",
                body: "Clients anywhere in New Zealand and internationally can access advice via video consultation.",
              },
            ].map((item) => (
              <div key={item.title} className="surface-high rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Areas I work in</h2>
          <p className="mt-4 text-lg text-muted">
            In-person home staging and styling consultations are available across the Wellington region,
            including Wellington city, the Hutt Valley, Porirua, and Kāpiti Coast.
          </p>
          <p className="mt-4 text-lg text-muted">
            Online consultations — including video walk-throughs and written reports — are available for
            clients anywhere in New Zealand and internationally.
          </p>
        </div>
      </section>

      {/* Reviews */}
      {featuredTestimonials.length > 0 && (
        <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What clients say</h2>
            <div className="mt-8 space-y-6">
              {featuredTestimonials.map((t) => (
                <blockquote key={t.id} className="surface-high rounded-2xl p-6">
                  <p className="font-heading text-lg font-semibold leading-snug text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm text-muted">
                    — {t.name} · {t.detail}
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/reviews" className="font-semibold text-brand hover:underline">
                Read all client reviews →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-8 space-y-8">
            {aboutFaqs.map((item) => (
              <div key={item.q}>
                <dt className="font-heading text-lg font-semibold text-brand">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-page px-5 pt-16 pb-16 sm:px-10 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Whether you&apos;re preparing to sell or creating a home you love — I&apos;d love to help.
          </p>
          <Link
            to="/contact"
            className="primary-btn mt-8 inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
          >
            Request a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
