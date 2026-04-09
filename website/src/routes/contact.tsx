import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "#/components/ContactForm";
import { publicAsset } from "#/lib/baseUrl";
import { site } from "#/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in touch about your home staging or property styling needs" },
      {
        name: "description",
        content:
          "Request a consultation for occupied home staging, restyling, or online support — Wellington and NZ-wide.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Get in touch about your home staging or property styling needs
          </h1>
          <p className="mt-4 text-lg text-muted">
            Request a consultation. Tell us whether you&apos;re in Wellington or looking for online support,
            and what you&apos;re hoping to achieve.
          </p>
          <p className="mt-4 text-sm text-muted">
            Email:{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            Mobile:{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-brand hover:underline">
              {site.phone}
            </a>
          </p>
          <div className="card-tonal relative mt-10 aspect-[4/3] max-w-md overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src={publicAsset("/images/portfolio/living-room-after.jpg")}
              alt="Living room styled by Restyled spaces NZ"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="surface-high mt-10 rounded-2xl p-6">
            <h2 className="font-heading text-sm font-semibold text-brand">What to expect next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
              <li>We review your details (usually within 1–2 business days).</li>
              <li>We confirm the best next step—visit, call, or online session.</li>
              <li>We outline scope, timing, and any deposit/payment details with your quote.</li>
            </ol>
          </div>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
