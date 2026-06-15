import { Link, createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "#/lib/baseUrl";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Home Staging & Home Styling FAQ | Restyled Spaces NZ" },
      {
        name: "description",
        content:
          "Answers to common questions about home staging, property styling, and home styling from Restyled Spaces NZ — Wellington and online NZ-wide.",
      },
    ],
  }),
  component: FaqPage,
});

const stagingFaqs = [
  {
    q: "Is home staging worth the cost in New Zealand?",
    a: "Yes — staged homes consistently sell faster and for more than unstaged ones. Buyers make decisions emotionally, often within seconds of walking through the door or viewing photos online. Professional staging helps buyers picture themselves in the home, which drives offers.",
  },
  {
    q: "What rooms should be staged first?",
    a: "The living room, kitchen, and master bedroom have the biggest impact on buyers. These are the rooms buyers photograph in their minds and return to when deciding. We prioritise them in every staging project.",
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
    a: "We don't typically stage fully vacant homes from scratch. We can help with select rooms alongside existing pieces. Our online consultation and DIY report services are also well suited to homeowners who want a staging plan they can implement themselves.",
  },
  {
    q: "What is the difference between home staging and interior styling?",
    a: "Home staging is specifically about preparing a home for sale — it's designed to appeal to buyers broadly. Interior styling (or home styling) is about creating a space you love living in — it's personal, not performative. Both draw on the same skills.",
  },
  {
    q: "How do I prepare my house for photography?",
    a: "Declutter every surface, clear benchtops, remove personal photos, add fresh flowers or greenery, and ensure every room has good light. Our pre-photography checklist covers this in detail — ask when you enquire.",
  },
  {
    q: "Can I stay living in the home during staging?",
    a: "Yes. Occupied staging is a core part of our service. We plan edits that reduce disruption and help you keep daily life running.",
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
    q: "Do you offer online home staging consultations?",
    a: "Yes. Online consultations are available NZ-wide and internationally. We review your space via video walk-through and provide clear priorities and next steps you can act on straight away.",
  },
  {
    q: "Do you cover areas outside Wellington?",
    a: "In-person work is Wellington-based, covering the wider Wellington region. Online consultations are available for clients anywhere in New Zealand and internationally.",
  },
];

const stylingFaqs = [
  {
    q: "What is home styling?",
    a: "Home styling is the art of arranging and presenting your existing furniture and décor to make your space feel more beautiful, functional, and 'you'. Unlike interior design, it doesn't require a renovation — we work with what you already own.",
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
    q: "I'm downsizing — can you help?",
    a: "Yes. Downsizing is one of our specialities. We help you decide what to keep, how to arrange it in a smaller space, and how to make the new home feel considered and calm rather than cramped.",
  },
  {
    q: "Can I book an online home styling consultation?",
    a: "Yes. Online consultations are available NZ-wide and internationally. You share photos or a video walk-through of your space and we provide clear, practical advice you can act on straight away.",
  },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Home staging &amp; home styling — frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-muted">
          Answers to common questions about our home staging, property styling, and home styling services.
        </p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden shadow-xl ring-1 ring-line">
          <img
            src={publicAsset("/images/portfolio/case-wellington-after.jpg")}
            alt="Bedroom after home staging"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h2 className="font-heading mt-14 text-2xl font-bold text-ink">
          Questions about home staging &amp; property styling
        </h2>
        <dl className="mt-8 space-y-8">
          {stagingFaqs.map((item) => (
            <div key={item.q}>
              <dt className="font-heading text-lg font-semibold text-brand">{item.q}</dt>
              <dd className="mt-2 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <Link to="/home-staging" className="font-semibold text-brand hover:underline">
            Learn more about our home staging services →
          </Link>
        </div>

        <h2 className="font-heading mt-16 text-2xl font-bold text-ink">
          Questions about home styling
        </h2>
        <dl className="mt-8 space-y-8">
          {stylingFaqs.map((item) => (
            <div key={item.q}>
              <dt className="font-heading text-lg font-semibold text-brand">{item.q}</dt>
              <dd className="mt-2 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <Link to="/home-styling" className="font-semibold text-brand hover:underline">
            Learn more about our home styling services →
          </Link>
        </div>

        <p className="mt-14 text-muted">
          Still unsure?{" "}
          <Link to="/contact" className="font-semibold text-brand hover:underline">
            Get in touch
          </Link>{" "}
          and we&apos;ll point you in the right direction.
        </p>
      </div>
    </div>
  );
}
