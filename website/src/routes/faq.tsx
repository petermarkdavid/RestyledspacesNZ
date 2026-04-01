import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Find out more about home staging and styling" },
      {
        name: "description",
        content:
          "Frequently asked questions about occupied staging, restyling with your furniture, Wellington visits, and online consultations.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Do you only work with homes that are fully furnished?",
    a: "No—we specialise in using what you already have as the starting point. We don’t typically stage completely empty homes, but we can help with select empty rooms alongside your existing pieces.",
  },
  {
    q: "Can we stay living in the home while you style?",
    a: "Yes. Occupied staging is a core part of the service. We plan edits that reduce disruption and help you keep daily life running.",
  },
  {
    q: "Do you cover areas outside Wellington?",
    a: "In-person work is Wellington-based. Online consultations are available NZ-wide and internationally.",
  },
  {
    q: "Is this full furniture hire staging?",
    a: "No. The focus is practical styling with your furniture and décor, with selective purchases or swaps only where they add clear value.",
  },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Find out more about home staging and styling
      </h1>
      <p className="mt-4 text-lg text-muted">
        Quick answers to common questions. Add or edit copy anytime as your process evolves.
      </p>
      <dl className="mt-12 space-y-10">
        {faqs.map((item) => (
          <div key={item.q}>
            <dt className="font-heading text-lg font-semibold text-brand-2">{item.q}</dt>
            <dd className="mt-2 text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-14 text-muted">
        Still unsure?{" "}
        <Link to="/contact" className="font-semibold text-brand-2 hover:underline">
          Get in touch
        </Link>{" "}
        and we&apos;ll point you in the right direction.
      </p>
    </div>
  );
}
