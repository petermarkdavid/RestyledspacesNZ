import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { testimonials } from "#/lib/testimonials";

export const Route = createFileRoute("/home-styling")({
  head: () => ({
    meta: [
      { title: "Home Styling for Real Homes | Restyled Spaces NZ" },
      {
        name: "description",
        content:
          "Home styling, colour advice, and practical design guidance for homeowners and tenants across New Zealand. Create a beautiful, functional space you love living in.",
      },
    ],
  }),
  component: HomeStylingPage,
});

const stylingFaqs = [
  {
    q: "What is home styling?",
    a: "Home styling is the art of arranging and presenting your existing furniture and décor to make your space feel more beautiful, functional, and 'you'. Unlike interior design, it doesn't require a renovation — we work with what you already own.",
  },
  {
    q: "How is home styling different from home staging?",
    a: "Home staging is specifically about preparing a home for sale and appealing to buyers. Home styling is about creating a space you love living in — it's personal, not performative. Both draw on the same eye for space, proportion, and layering.",
  },
  {
    q: "Do I need to buy new furniture?",
    a: "Not necessarily. We start with what you already have and rearrange, edit, and restyle to make the most of it. If something new would make a real difference, we'll suggest it — but we never push unnecessary purchases.",
  },
  {
    q: "Can you help with colour choices?",
    a: "Yes. Colour consultations are one of our most popular services. We help you choose wall colours, soft furnishings, and accents that work together and suit the light in your space.",
  },
  {
    q: "Do you work with renters or tenants?",
    a: "Absolutely. You don't need to own your home to benefit from styling. We focus on what you can control — furniture arrangement, soft furnishings, lighting, and accessories — to make a rented space feel like home.",
  },
  {
    q: "Can I book an online home styling consultation?",
    a: "Yes. Online consultations are available NZ-wide and internationally. You share photos or a video walk-through of your space and we provide clear, practical advice you can act on straight away.",
  },
  {
    q: "How does a room refresh work?",
    a: "We visit your home, assess each room, and work with you to restyle the space using your existing pieces. It typically takes a few hours per room and the results are immediate.",
  },
  {
    q: "I'm downsizing — can you help?",
    a: "Yes. Downsizing is one of our specialities. We help you decide what to keep, how to arrange it in a smaller space, and how to make the new home feel considered and calm rather than cramped.",
  },
];

function HomeStylingPage() {
  const stylingTestimonials = testimonials.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
              Home Styling for Real Homes
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              Helping homeowners and tenants create beautiful, functional spaces they love living in.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="primary-btn inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
              >
                Book a styling consultation
              </Link>
              <Link
                to="/home-staging"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Selling instead? See staging →
              </Link>
            </div>
          </div>
          <div className="relative mt-12 aspect-[21/9] overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={publicAsset("/images/portfolio/living-room-after.jpg")}
              alt="Beautifully styled living room — Restyled Spaces NZ"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading mx-auto max-w-3xl text-3xl font-bold text-ink sm:text-4xl">
            Home styling services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Room refreshes",
                body: "Transform one room or your whole home using what you already own. We restyle, rearrange, and layer in thoughtful touches for an immediate uplift.",
              },
              {
                title: "Furniture & layout advice",
                body: "The right furniture arrangement can make a room feel twice as large and twice as liveable. We help you find the layout that works best for how you actually use the space.",
              },
              {
                title: "Colour guidance",
                body: "Choosing wall colours, soft furnishings, and accent tones that work together and suit the light in your home. We take the guesswork out of colour.",
              },
              {
                title: "Home styling consultations",
                body: "An in-person walk-through and styling session tailored to your home, your taste, and your budget.",
              },
              {
                title: "Online home styling advice",
                body: "Practical styling guidance for clients anywhere in New Zealand or internationally. Share photos or video and receive a clear, actionable plan.",
              },
            ].map((svc) => (
              <div key={svc.title} className="surface-high rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-brand">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">Who this service is for</h2>
          <p className="mt-4 text-lg text-muted">
            Home styling isn&apos;t just for people with big budgets or blank-canvas homes. It&apos;s for real
            people with real homes.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "New homeowners settling in",
              "Homeowners downsizing or right-sizing",
              "Empty nesters reimagining their space",
              "Busy professionals who want a calmer home",
              "Renovators choosing finishes and furnishings",
              "Airbnb hosts wanting better guest experience",
              "Tenants making a rental feel like home",
              "Anyone who loves their home but knows something is off",
            ].map((who) => (
              <li key={who} className="surface-high flex items-start gap-3 rounded-xl p-4 text-sm text-muted">
                <span className="mt-0.5 text-brand" aria-hidden>✓</span>
                {who}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">How it works</h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                step: "1",
                title: "Tell us about your space",
                body: "Get in touch and tell us what you're hoping to achieve. We'll chat about your home, your lifestyle, and your budget.",
              },
              {
                step: "2",
                title: "Consultation",
                body: "We visit your home (Wellington) or connect via video. We assess each room and talk through the possibilities.",
              },
              {
                step: "3",
                title: "Styling session or plan",
                body: "We either style the space with you on the day, or deliver a written plan you can implement at your own pace.",
              },
              {
                step: "4",
                title: "A home you love",
                body: "The result is a space that feels considered, calm, and genuinely you — without a renovation or a big spend.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="font-heading flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-on-primary">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              to="/contact"
              className="primary-btn inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
            >
              Book a styling consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">See the results</h2>
          <p className="mt-4 text-lg text-muted">
            Browse before and after transformations — real homes, real results.
          </p>
          <Link
            to="/portfolio"
            className="primary-btn mt-8 inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
          >
            View our portfolio
          </Link>
        </div>
      </section>

      {/* Reviews */}
      {stylingTestimonials.length > 0 && (
        <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What our clients say</h2>
            <div className="mt-8 space-y-6">
              {stylingTestimonials.map((t) => (
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
      <section className="surface-whisper px-5 pt-16 pb-16 sm:px-10 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Questions you may be asking about home styling
          </h2>
          <dl className="mt-10 space-y-8">
            {stylingFaqs.map((item) => (
              <div key={item.q}>
                <dt className="font-heading text-lg font-semibold text-brand">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <p className="text-muted">Ready to love your home again?</p>
            <Link
              to="/contact"
              className="primary-btn mt-4 inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
