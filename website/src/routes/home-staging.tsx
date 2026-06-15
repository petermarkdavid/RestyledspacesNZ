import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";
import { testimonials } from "#/lib/testimonials";

export const Route = createFileRoute("/home-staging")({
  head: () => ({
    meta: [
      { title: "Home Staging & Property Styling Services | Restyled Spaces NZ" },
      {
        name: "description",
        content:
          "Home staging and property styling services to help New Zealand homeowners prepare their homes for sale. Occupied staging, DIY reports, and online consultations across NZ.",
      },
    ],
  }),
  component: HomeStagingPage,
});

const stagingFaqs = [
  {
    q: "Is home staging worth the cost in New Zealand?",
    a: "Yes — staged homes consistently sell faster and for more than unstaged ones. Buyers make decisions emotionally, often within seconds of walking in or seeing photos online. Professional staging helps buyers picture themselves in the home, which drives offers.",
  },
  {
    q: "What is the difference between home staging and property styling?",
    a: "The terms are used interchangeably in New Zealand. Both refer to preparing a home for sale by arranging furniture, editing décor, and presenting each room to appeal to buyers. At Restyled Spaces NZ we use your existing pieces as the foundation.",
  },
  {
    q: "What rooms should be staged first?",
    a: "Living room, kitchen, and master bedroom have the biggest impact on buyers. These are the rooms buyers photograph in their minds and return to when deciding. We prioritise them in every staging project.",
  },
  {
    q: "Can you stage a home using existing furniture?",
    a: "Yes — this is our core approach. We work with what you already own, editing, rearranging, and styling to make each room feel balanced and buyer-ready. We suggest selective additions only where they genuinely lift the result.",
  },
  {
    q: "How long does staging take?",
    a: "A typical occupied home takes one to two days depending on size and scope. We plan around your timeline and photography schedule.",
  },
  {
    q: "Do you stage vacant homes?",
    a: "We don't typically stage fully vacant homes from scratch. However, we can help with select rooms alongside existing pieces, and our online consultation service is well suited to homeowners who want a DIY staging plan.",
  },
  {
    q: "How do I prepare my house for photography?",
    a: "Declutter every surface, clear benchtops, remove personal photos, add fresh flowers or greenery, and ensure every room has good light. Our pre-photography checklist covers this in detail — ask when you enquire.",
  },
  {
    q: "What is occupied home staging?",
    a: "Occupied staging means styling a home while you are still living in it. We work with your existing furniture and daily life to create a clean, balanced look for open homes and photography — without asking you to move out.",
  },
  {
    q: "How much does home staging cost in New Zealand?",
    a: "Cost depends on the size of the home and the scope of work. We offer a free initial consultation to understand your needs and provide a tailored quote. Contact us to discuss your property.",
  },
  {
    q: "What is a DIY home staging report?",
    a: "A written room-by-room guide tailored to your specific home. We review photos and a brief you provide, then deliver clear, actionable staging instructions you can implement yourself — ideal for those outside Wellington or on a tighter budget.",
  },
  {
    q: "Can I book an online home staging consultation?",
    a: "Yes. Online consultations are available NZ-wide and internationally. We review your space via video walk-through and provide clear priorities and next steps you can act on straight away.",
  },
];

function HomeStagingPage() {
  const stagingTestimonials = testimonials.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
              Home Staging &amp; Property Styling Services
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted">
              Helping New Zealand homeowners prepare their homes for sale.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="primary-btn inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
              >
                Book a staging consultation
              </Link>
              <Link
                to="/home-styling"
                className="inline-flex items-center font-semibold text-brand hover:underline"
              >
                Looking to refresh instead? →
              </Link>
            </div>
          </div>
          <div className="relative mt-12 aspect-[21/9] overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={publicAsset("/images/portfolio/hero-living.png")}
              alt="Professionally staged living room — Restyled Spaces NZ"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* What is Home Staging */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            What is home staging and property styling?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Home staging — also called property styling — is the art of preparing a home for sale by
              presenting it in its best possible light. The goal is to help buyers visualise themselves
              living in the space, which encourages faster offers and stronger sale prices.
            </p>
            <p>
              At Restyled Spaces NZ, we take a practical approach. Rather than bringing in expensive
              rental furniture, we work with what you already own — rearranging, editing, and layering
              in thoughtful touches to make each room feel spacious, warm, and buyer-ready.
            </p>
            <p>
              The result is a home that photographs beautifully and shows well at open homes — without
              the disruption or cost of a full furniture hire.
            </p>
          </div>
        </div>
      </section>

      {/* Why Stage */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Why stage and style your home before selling?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Better photos",
                body: "Online listings are the first showing. Staged homes photograph far better, attracting more clicks and enquiries.",
              },
              {
                title: "Faster sale",
                body: "Buyers make emotional decisions quickly. A well-presented home creates an immediate positive impression that drives offers.",
              },
              {
                title: "Higher sale price",
                body: "Staged homes consistently sell for more than unstaged ones — often well above the cost of staging.",
              },
              {
                title: "Fewer days on market",
                body: "A home that shows well from day one attracts serious buyers sooner and spends less time on the market.",
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

      {/* How It Works */}
      <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            How our home staging process works
          </h2>
          <ol className="mt-8 space-y-6">
            {[
              {
                step: "1",
                title: "Initial consultation",
                body: "We discuss your property, timeline, and goals. In-person in Wellington or online for clients across NZ.",
              },
              {
                step: "2",
                title: "Staging plan",
                body: "We assess each room and create a room-by-room plan — what moves, what stays, and what small additions could make the biggest difference.",
              },
              {
                step: "3",
                title: "Staging day",
                body: "We arrive and work through the plan with you, editing, rearranging, and styling each space to photograph beautifully.",
              },
              {
                step: "4",
                title: "Photography ready",
                body: "Your home is ready for the photographer and open homes, presented in its best possible light.",
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
        </div>
      </section>

      {/* Services */}
      <section className="surface-whisper px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading mx-auto max-w-3xl text-3xl font-bold text-ink sm:text-4xl">
            Home staging and property styling services
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Occupied home staging & styling",
                body: "Style your home while you're still living in it. We work around your daily life and use your existing furniture as the foundation.",
              },
              {
                title: "Partial home staging & styling",
                body: "Focus on the rooms that matter most — living areas, kitchen, master bedroom — for maximum impact within your budget.",
              },
              {
                title: "Vacant home staging & styling",
                body: "Working with furnished vacant homes or select rooms alongside existing pieces. Ask us about what's possible for your property.",
              },
              {
                title: "DIY home staging & styling report",
                body: "A written room-by-room guide tailored to your home. Ideal for those outside Wellington or who prefer to implement the changes themselves.",
              },
              {
                title: "Online home staging consultations",
                body: "Video walk-throughs and written plans for clients anywhere in New Zealand or internationally. Practical, actionable, and great value.",
              },
            ].map((svc) => (
              <div key={svc.title} className="surface-high rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-brand">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted">{svc.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="primary-btn inline-flex items-center justify-center px-7 py-3 text-base font-semibold shadow-lg transition hover:opacity-90"
            >
              Request a staging consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {stagingTestimonials.length > 0 && (
        <section className="bg-page px-5 pt-16 pb-12 sm:px-10 md:pt-20 md:pb-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">What our clients say</h2>
            <div className="mt-8 space-y-6">
              {stagingTestimonials.map((t) => (
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
            Questions you may be asking about home staging
          </h2>
          <dl className="mt-10 space-y-8">
            {stagingFaqs.map((item) => (
              <div key={item.q}>
                <dt className="font-heading text-lg font-semibold text-brand">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <p className="text-muted">Still have questions?</p>
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
