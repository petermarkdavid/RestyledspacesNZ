import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Property staging and home styling services we offer" },
      {
        name: "description",
        content:
          "Occupied home staging, restyling with your furniture, decluttering guidance, renovator advice, and online consultations — Wellington and online.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Property staging and home styling services
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        A flexible, practical service that works with what you already own. We don&apos;t stage completely
        empty homes as a rule, but we can help with select empty rooms alongside your existing pieces.
      </p>

      <div className="card-tonal relative mt-10 aspect-[21/9] max-w-4xl overflow-hidden shadow-xl ring-1 ring-black/5">
        <img
          src={publicAsset("/images/portfolio/hero-living.png")}
          alt="Professionally staged living space"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article id="sell" className="card-tonal rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brand">Home staging &amp; styling to sell</h2>
          <p className="mt-3 text-muted">
            Prepare your home for photography and open homes using your furniture and décor. We focus on flow,
            light, and a clear story for buyers—so the space feels spacious and easy to imagine living in.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
            <li>Occupied staging with your existing pieces</li>
            <li>Room-by-room or whole-home scope</li>
            <li>Practical edits that support your campaign timeline</li>
          </ul>
        </article>
        <article id="stay" className="surface-high rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brand">Restyling to stay</h2>
          <p className="mt-3 text-muted">
            Love the space you&apos;re in: clearer layout, calmer layers, and smarter use of rooms. We can
            recommend selective purchases where they&apos;ll make the biggest impact.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted">
            <li>Restyling using what you have as the starting point</li>
            <li>Optional shopping list for key pieces or accessories</li>
            <li>Budget-conscious, achievable outcomes</li>
          </ul>
        </article>
      </div>

      <h2 className="font-heading mt-16 text-2xl font-bold text-ink">Supporting services</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="surface-low rounded-2xl p-6">
          <h3 className="font-heading font-semibold text-brand">Decluttering guidance</h3>
          <p className="mt-2 text-sm text-muted">
            What to pack away, what to keep, and how to create breathing room—especially when you&apos;re
            still living in the home.
          </p>
        </div>
        <div className="surface-low rounded-2xl p-6">
          <h3 className="font-heading font-semibold text-brand">Advice for renovators</h3>
          <p className="mt-2 text-sm text-muted">
            Interiors guidance while you plan or mid-project—so finishes and layout support how you actually
            live.
          </p>
        </div>
        <div className="surface-low rounded-2xl p-6">
          <h3 className="font-heading font-semibold text-brand">Online consultations</h3>
          <p className="mt-2 text-sm text-muted">
            DIY-friendly support for clients anywhere: video walk-throughs, clear priorities, and actionable
            next steps.
          </p>
        </div>
      </div>

      <section id="payment" className="surface-high mt-16 rounded-2xl p-8">
        <h2 className="font-heading text-xl font-bold text-ink">Payment &amp; deposits</h2>
        <p className="mt-2 text-muted">
          Details about deposits, milestones, and payment options will be confirmed with your quote. Ask when
          you{" "}
          <Link to="/contact" className="font-semibold text-brand hover:underline">
            request a consultation
          </Link>
          .
        </p>
      </section>

      <div className="mt-14">
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
