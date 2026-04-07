import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BeforeAfterSlider } from "#/components/BeforeAfterSlider";
import { publicAsset } from "#/lib/baseUrl";
import { caseStudies } from "#/lib/portfolio";
import { site } from "#/lib/site";
import { facebookReviewsSummary, testimonials } from "#/lib/testimonials";

const TESTIMONIAL_ROTATE_MS = 8000;

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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [rotatePaused, setRotatePaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const testimonialBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = testimonialBlockRef.current;
    if (!el) return;
    const onFocusIn = () => setRotatePaused(true);
    const onFocusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) setRotatePaused(false);
    };
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || rotatePaused || testimonials.length < 2) return;
    const id = window.setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, TESTIMONIAL_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, rotatePaused]);

  const activeTestimonial = testimonials[testimonialIndex]!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-page px-4 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="z-10 flex-1 space-y-8">
            <span className="inline-block rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-secondary-fixed">
              Styling and staging specialists
            </span>
            <h1 className="font-heading text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-brand md:text-[3rem] lg:text-[3.6rem]">
              Home staging to sell or restyling to love the space you're in
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              We love making spaces the best they can be! We specialise in restyling what you already own to
              create a professional, decluttered, and balanced feel—without the expense of new furniture—whether
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
            {/* Margin offset avoids transform-on-parent blur on the hero photo (WebKit/Chromium) */}
            <div className="relative z-20 ml-2 mt-2 overflow-hidden rounded-2xl shadow-2xl sm:ml-4 sm:mt-4">
              <img
                src={publicAsset("/images/portfolio/hero-living.png")}
                alt="Warmly styled living room with neutral sofa and natural light"
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
                sizes="(max-width: 1280px) 100vw, 640px"
                decoding="async"
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
      <section className="surface-low -mt-[22px] -ml-[6px] overflow-hidden px-8 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16 md:text-left">
            <h2 className="font-heading mb-4 text-4xl font-bold text-brand md:text-5xl">The Magic of Restyling</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted md:mx-0">
              Working with your existing furnishings, we can help to make your space the best it can be.
            </p>
          </div>

          <div className="mb-14 grid max-w-4xl grid-cols-1 gap-10 md:mb-16 md:gap-12 lg:mx-auto lg:max-w-5xl lg:grid-cols-2 lg:items-start lg:gap-8">
            <BeforeAfterSlider
              beforeSrc={publicAsset("/images/not-portfolio/before2.jpg")}
              afterSrc={publicAsset("/images/portfolio/living-room-after.jpg")}
              beforeAlt="Living room before restyling"
              afterAlt="Living room after restyling"
              label="Living room transformation"
            />
            <BeforeAfterSlider
              beforeSrc={publicAsset("/images/not-portfolio/before3.jpg")}
              afterSrc={publicAsset(
                "/images/portfolio/481254756_582520844742775_3279684030308009448_n-a7b5bb0b-bb77-490d-8fa7-abb31b3e091b.png",
              )}
              beforeAlt="Bedroom before restyling"
              afterAlt="Bedroom with mustard cushions, layered throws, and circular wall art"
              label="Bedroom restyling"
            />
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
                <h3 className="font-heading mb-4 text-2xl font-bold text-brand">
                  Wellington home staging &amp; interior restyling services
                </h3>
                <p className="leading-relaxed text-muted">
                  We offer stress-free styling solutions tailored to homeowners, renters and real estate agents.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="surface-high rounded-2xl p-6">
                  <div className="font-heading mb-2 text-3xl font-bold text-brand">200+</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted">Rooms transformed</div>
                </div>
                <div className="surface-high rounded-2xl p-6">
                  <div className="font-heading mb-2 text-3xl font-bold text-brand">40+</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted">Happy clients</div>
                </div>
              </div>
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
              sanctuary together.
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
                src={publicAsset("/images/not-portfolio/julie-cushion-fluff-logo-shirt.jpg")}
                alt="Julie — Restyled spaces NZ"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 z-30 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-tertiary-container p-3 text-center shadow-xl sm:-right-6 sm:-bottom-6 sm:h-32 sm:w-32">
              <span className="text-[11px] font-bold leading-tight tracking-tight text-on-tertiary-container">
                Your guide to styling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client voices */}
      <section className="surface-low px-4 py-16 sm:px-8 md:py-20">
        <div
          ref={testimonialBlockRef}
          className="mx-auto max-w-3xl text-center"
          onMouseEnter={() => setRotatePaused(true)}
          onMouseLeave={(e) => {
            if (!e.currentTarget.contains(document.activeElement)) setRotatePaused(false);
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand/80">{facebookReviewsSummary}</p>
          <div
            className="min-h-[11rem] sm:min-h-[10rem] md:min-h-[9rem]"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote
              key={activeTestimonial.id}
              className="font-heading mt-4 text-xl font-semibold leading-snug text-ink sm:text-2xl"
            >
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium text-muted">
              — {activeTestimonial.name} · {activeTestimonial.detail}
            </p>
          </div>
          {testimonials.length > 1 ? (
            <div
              className="mt-6 flex justify-center gap-2"
              role="tablist"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === testimonialIndex}
                  aria-label={`Show review from ${t.name}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-low)] ${
                    i === testimonialIndex ? "bg-brand" : "bg-line hover:bg-muted"
                  }`}
                  onClick={() => setTestimonialIndex(i)}
                />
              ))}
            </div>
          ) : null}
          <Link
            to="/reviews"
            className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
          >
            Read all client reviews
          </Link>
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
            className="inline-flex items-center justify-center rounded-lg bg-tertiary-container px-10 py-5 text-xl font-extrabold text-on-tertiary-container shadow-2xl transition hover:opacity-90 active:scale-[0.98]"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
