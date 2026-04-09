import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { BeforeAfterSlider } from "#/components/BeforeAfterSlider";
import { publicAsset } from "#/lib/baseUrl";
import { site } from "#/lib/site";
import { testimonials } from "#/lib/testimonials";

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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [rotatePaused, setRotatePaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const testimonialBlockRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /** Subtle background parallax while the hero is in view (disabled if reduced motion). */
  useEffect(() => {
    if (typeof window === "undefined" || reducedMotion) return;
    const section = heroSectionRef.current;
    const img = heroImgRef.current;
    if (!section || !img) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      // Image moves a fraction of hero position = subtle depth vs foreground text
      const y = Math.min(56, Math.max(-56, -rect.top * 0.14));
      img.style.transform = `translate3d(0, ${Math.round(y * 10) / 10}px, 0) scale(1.07)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      img.style.transform = "";
    };
  }, [reducedMotion]);

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
      {/* Hero — full-bleed image with text overlay + scroll parallax */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[min(62vh,600px)] w-full overflow-hidden sm:min-h-[min(66vh,640px)]"
      >
        <img
          ref={heroImgRef}
          src={publicAsset(
            encodeURI("/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0285.jpg"),
          )}
          alt="Staged home interior — neutral styling and natural light"
          className="absolute inset-0 h-full w-full origin-center object-cover object-center will-change-transform [filter:sepia(0.06)_saturate(1.09)_hue-rotate(-6deg)]"
          fetchPriority="high"
          sizes="100vw"
          decoding="async"
        />
        {/* Warm charcoal read (not blue-grey) + soft warm tints */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2f2a27]/88 via-[#3b3532]/52 to-[#2f2a27]/25 sm:via-[#3b3532]/40"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(199,168,138,0.15)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(183,110,93,0.1)] mix-blend-soft-light" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[min(62vh,600px)] max-w-7xl flex-col justify-center px-5 py-14 sm:min-h-[min(66vh,640px)] sm:px-10 sm:py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-[#f5f2ef]/90">
            Styling and staging specialists
          </p>
          <h1 className="font-heading mt-5 max-w-3xl text-[2.25rem] font-extrabold leading-[1.12] tracking-tight text-[#fdfcfb] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
            Home staging to sell or restyling to love the space you&apos;re in
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#fdfcfb]/92 md:text-xl">
            We love making spaces the best they can be! We specialise in restyling what you already own to
            create a professional, decluttered, and balanced feel—without the expense of new furniture—whether
            you&apos;re selling or settling in.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="primary-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold shadow-lg transition hover:opacity-90"
            >
              Request a consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#fdfcfb]/90 bg-transparent px-8 py-4 text-lg font-bold text-[#fdfcfb] transition hover:bg-[#fdfcfb]/15"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* The Magic of Restyling — two featured sliders */}
      <section className="surface-low overflow-hidden px-5 py-10 sm:px-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center md:mb-10 md:text-left">
            <h2 className="font-heading mb-4 text-4xl font-bold text-ink md:text-5xl">The magic of restyling</h2>
            <p className="mx-auto max-w-4xl text-lg text-pretty text-muted md:mx-0">
              Working with your existing furnishings, we can help to make your space the best it can be.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <BeforeAfterSlider
              size="featured"
              beforeSrc={publicAsset("/images/not-portfolio/before2.jpg")}
              afterSrc={publicAsset("/images/portfolio/living-room-after.jpg")}
              beforeAlt="Living room before restyling"
              afterAlt="Living room after restyling"
              label="Living room transformation"
            />
            <BeforeAfterSlider
              size="featured"
              beforeSrc={publicAsset("/images/not-portfolio/before3.jpg")}
              afterSrc={publicAsset(
                "/images/portfolio/481254756_582520844742775_3279684030308009448_n-a7b5bb0b-bb77-490d-8fa7-abb31b3e091b.png",
              )}
              beforeAlt="Bedroom before restyling"
              afterAlt="Bedroom with mustard cushions, layered throws, and circular wall art"
              label="Bedroom restyling"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <div className="surface-high flex flex-col items-center justify-center rounded-none p-6 text-center sm:min-w-[14rem]">
              <div className="font-heading text-4xl font-bold text-brand md:text-5xl">200+</div>
              <div className="mt-2 text-xs font-medium tracking-wide text-muted">Rooms transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Julie */}
      <section className="bg-page px-5 py-16 sm:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row-reverse md:gap-20">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading text-4xl font-bold leading-tight text-ink md:text-5xl">Meet Julie</h2>
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
                className="primary-btn inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-bold shadow-md transition hover:opacity-90"
              >
                Request a consultation
              </Link>
            </div>
          </div>
          <div className="w-full max-w-sm flex-1 md:max-w-xs lg:max-w-sm">
            <div className="aspect-[3/4] overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src={publicAsset("/images/not-portfolio/julie-cushion-fluff-logo-shirt.jpg")}
                alt="Julie — Restyled spaces NZ"
                className="h-full w-full object-cover"
              />
            </div>
            <blockquote className="mt-5 max-w-md border-l-2 border-tertiary-container pl-4 text-base italic leading-relaxed text-muted">
              Restyling refreshes a space by incorporating existing furniture and décor. My approach balances
              aesthetics with sustainability, efficiency, and creativity.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Client reviews */}
      <section className="surface-low px-5 py-16 sm:px-10 md:py-20">
        <div
          ref={testimonialBlockRef}
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setRotatePaused(true)}
          onMouseLeave={(e) => {
            if (!e.currentTarget.contains(document.activeElement)) setRotatePaused(false);
          }}
        >
          <h2 className="font-heading text-center text-sm font-semibold tracking-wide text-muted">
            Client reviews
          </h2>
          <div
            className="mt-8 flex min-h-[12rem] flex-col items-center gap-6 text-center sm:min-h-[10rem] sm:flex-row sm:items-start sm:text-left md:min-h-[9rem]"
            aria-live="polite"
            aria-atomic="true"
          >
            <img
              key={activeTestimonial.imageSrc}
              src={publicAsset(activeTestimonial.imageSrc)}
              alt=""
              className="h-20 w-20 shrink-0 object-cover shadow-md ring-1 ring-line"
            />
            <div className="relative min-w-0 flex-1 pt-2">
              <span
                className="pointer-events-none absolute -left-1 top-0 font-heading text-5xl leading-none text-tertiary-container/50 select-none sm:text-6xl"
                aria-hidden
              >
                ❝
              </span>
              <blockquote className="relative z-10 pb-9 pl-10 pr-10 text-justify font-heading text-xl font-semibold leading-snug text-ink sm:pl-12 sm:pr-12 sm:pb-10 sm:text-2xl">
                {activeTestimonial.quote}
                <span
                  className="pointer-events-none absolute bottom-0 right-0 font-heading text-5xl leading-none text-tertiary-container/45 select-none sm:text-6xl"
                  aria-hidden
                >
                  ❞
                </span>
              </blockquote>
              <p className="relative z-10 mt-4 pl-10 text-sm font-medium text-muted sm:pl-12">
                — {activeTestimonial.name} · {activeTestimonial.detail}
              </p>
            </div>
          </div>
          {testimonials.length > 1 ? (
            <div
              className="mt-8 flex justify-center gap-2"
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
          <div className="mt-8 text-center sm:text-left">
            <Link to="/reviews" className="text-sm font-semibold text-brand hover:underline">
              Read more client reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface-high px-5 py-10 sm:px-10 md:py-14">
        <div className="mx-auto max-w-4xl space-y-5 text-center md:space-y-6">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-5xl">
            Ready to rediscover your home?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            Book a consultation and see your space through new eyes—Wellington in person or online NZ-wide.
          </p>
          <Link
            to="/contact"
            className="primary-btn inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-lg font-extrabold shadow-lg transition hover:opacity-90 active:scale-[0.98] md:px-10 md:py-4 md:text-xl"
          >
            Request a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
