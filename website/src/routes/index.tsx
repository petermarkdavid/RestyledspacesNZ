import { Link, createFileRoute } from "@tanstack/react-router";
import { BeforeAfterSlider } from "#/components/BeforeAfterSlider";
import { publicAsset } from "#/lib/baseUrl";
import { caseStudies } from "#/lib/portfolio";
import { site } from "#/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restyled spaces NZ" },
      { name: "description", content: site.description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = caseStudies[0]!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-page px-4 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="z-10 flex-1 space-y-8">
            <span className="inline-block rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-secondary-fixed">
              The Curated Sanctuary
            </span>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-brand md:text-6xl lg:text-7xl">
              Style your home using what you already have.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Transform your living space without the waste of new furniture. We specialise in restyling what
              you already own to create a professional, decluttered, and balanced sanctuary—whether
              you&apos;re selling or settling in.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:pt-4">
              <Link
                to="/contact"
                className="primary-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold shadow-lg transition hover:opacity-90"
              >
                Request a Consultation
              </Link>
              <Link
                to="/portfolio"
                className="secondary-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition hover:opacity-90"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="relative w-full flex-1">
            <div className="relative z-20 translate-x-2 translate-y-2 overflow-hidden rounded-2xl shadow-2xl sm:translate-x-4 sm:translate-y-4">
              <img
                src={publicAsset("/images/hero-living.png")}
                alt="Warmly styled living room with neutral sofa and natural light"
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div
              className="border-tertiary-container absolute inset-0 -z-0 hidden rounded-2xl border-2 md:block md:-translate-x-8 md:-translate-y-8"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* The Magic of Restyling */}
      <section className="surface-low overflow-hidden px-4 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16 md:text-left">
            <h2 className="font-heading mb-4 text-4xl font-bold text-brand md:text-5xl">The Magic of Restyling</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted md:mx-0">
              See how we breathe new life into rooms using the same pieces you already love.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <BeforeAfterSlider
              beforeSrc={publicAsset(featured.beforeSrc)}
              afterSrc={publicAsset(featured.afterSrc)}
              beforeAlt="Bedroom before restyling"
              afterAlt="Bedroom after restyling"
              label="Bedroom transformation"
            />
            <div className="space-y-6">
              <div className="rounded-2xl bg-surface p-8 tonal-shift-bottom">
                <h3 className="font-heading mb-4 text-2xl font-bold text-brand">Intentional Arrangement</h3>
                <p className="leading-relaxed text-muted">
                  We don&apos;t just move furniture; we create flow. By understanding the bones of your home and
                  your lifestyle, we curate a space that feels both fresh and familiar—using staging and styling
                  with what you already have.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="surface-high rounded-2xl p-6">
                  <div className="font-heading mb-2 text-3xl font-bold text-brand">200+</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted">Rooms transformed</div>
                </div>
                <div className="surface-high rounded-2xl p-6">
                  <div className="font-heading mb-2 text-3xl font-bold text-brand">0</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted">New items required</div>
                </div>
              </div>
              <p className="text-sm text-muted">
                <Link to={`/portfolio/${featured.slug}`} className="font-semibold text-brand hover:underline">
                  Open full case study
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Julie */}
      <section className="bg-page px-4 py-16 sm:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row-reverse md:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading text-4xl font-bold leading-tight text-brand md:text-5xl">Meet Julie</h2>
            <p className="text-lg leading-relaxed text-muted">
              Hi, I&apos;m Julie. I believe that every home has a &ldquo;soul&rdquo; that often gets buried
              under the clutter of everyday life. My mission is to uncover the beauty in what you already own.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              With years of interior styling experience across Wellington and online, I focus on spatial harmony
              and practical restyling—not a push for a new sofa unless it truly helps. Let&apos;s create your
              curated sanctuary together.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="bg-brand text-on-primary inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-bold shadow-md transition hover:scale-[1.02]"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
          <div className="relative w-full flex-1">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0">
              <img
                src={publicAsset("/images/julie-styling.jpg")}
                alt="Julie — lead stylist"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 z-30 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-tertiary-container p-3 text-center shadow-xl sm:-right-6 sm:-bottom-6 sm:h-32 sm:w-32">
              <span className="text-[11px] font-bold uppercase tracking-tighter text-on-tertiary-container">
                Your guide to style
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand px-4 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-center md:space-y-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-on-primary md:text-5xl lg:text-6xl">
            Ready to rediscover your home?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-primary-fixed-dim/90">
            Book a consultation and see your space through new eyes—Wellington in person or online NZ-wide.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-surface px-10 py-5 text-xl font-extrabold text-brand shadow-2xl transition hover:bg-secondary-fixed"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
