import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useId, useLayoutEffect, useMemo, useState } from "react";
import { publicAsset } from "#/lib/baseUrl";
import {
  filterPortfolioGallery,
  galleryFilterTabs,
  gallerySectionHeading,
  portfolioGalleryImages,
  type GalleryFilterId,
} from "#/lib/portfolioGallery";
import { caseStudies } from "#/lib/portfolio";
import { site } from "#/lib/site";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Homes we’ve staged or styled" },
      {
        name: "description",
        content:
          "Room-by-room project photos from Restyled spaces NZ — home staging and styling in Wellington and online. More on Houzz.",
      },
    ],
  }),
  component: PortfolioPage,
});

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function PortfolioPage() {
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilterId>("all");
  /** Same order as source until after hydration, then randomised once per visit. */
  const [orderedGallery, setOrderedGallery] = useState(() => [
    ...portfolioGalleryImages,
  ]);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const galleryHeadingId = useId();
  const tablistId = useId();

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  useLayoutEffect(() => {
    setOrderedGallery((prev) => shuffle(prev));
  }, []);

  const filteredPhotos = useMemo(
    () => filterPortfolioGallery(galleryFilter, orderedGallery),
    [galleryFilter, orderedGallery],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:py-16">
      <section aria-labelledby="portfolio-page-heading">
        <h1
          id="portfolio-page-heading"
          className="font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Homes we&apos;ve staged or styled
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Each project starts with what you already have. Open a case study to see problem, approach, and outcome—and
          use the before/after sliders to compare.
        </p>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link to="/portfolio/$slug" params={{ slug: c.slug }} className="group block">
                <div className="card-tonal relative aspect-[4/3] overflow-hidden rounded-none shadow-sm ring-1 ring-black/5 transition group-hover:shadow-md group-hover:ring-2 group-hover:ring-brand/35">
                  <img
                    src={publicAsset(c.coverSrc)}
                    alt={c.title}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="font-heading mt-4 text-xl font-semibold text-brand group-hover:underline">{c.title}</h2>
                <p className="mt-2 text-sm text-muted">{c.excerpt}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-brand">View case study →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-line pt-12" aria-labelledby="portfolio-gallery-heading">
        <h2
          id="portfolio-gallery-heading"
          className="font-heading text-2xl font-bold text-ink sm:text-3xl"
        >
          Browse all photos
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Filter by room type. More on our{" "}
          <a
            href={site.social.houzz}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand hover:underline"
          >
            Houzz profile
          </a>
          .
        </p>

        <div
          id={tablistId}
          role="tablist"
          aria-label="Filter photos by room"
          className="mt-8 flex flex-wrap gap-2"
        >
          {galleryFilterTabs.map((tab) => {
            const selected = galleryFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`${tablistId}-${tab.id}`}
                aria-controls="portfolio-photo-panel"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] ${
                  selected
                    ? "border-brand bg-brand text-on-primary"
                    : "border-brand/25 bg-surface text-brand hover:border-brand/45"
                }`}
                onClick={() => setGalleryFilter(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <h3
          id={galleryHeadingId}
          className="font-heading mt-8 text-xl font-bold text-ink sm:text-2xl"
        >
          {gallerySectionHeading[galleryFilter]}
        </h3>

        <div
          id="portfolio-photo-panel"
          role="tabpanel"
          aria-labelledby={galleryHeadingId}
          className="mt-6"
        >
          {filteredPhotos.length === 0 ? (
            <p className="rounded-none border border-dashed border-line bg-surface-low/60 py-14 text-center text-muted">
              No photos in this category yet — check back soon or browse{" "}
              <a href={site.social.houzz} className="font-semibold text-brand hover:underline">
                Houzz
              </a>
              .
            </p>
          ) : (
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredPhotos.map((item) => (
                <li key={item.src}>
                  <button
                    type="button"
                    className="card-tonal group block w-full overflow-hidden rounded-none text-left shadow-sm ring-1 ring-black/5 transition hover:ring-2 hover:ring-brand/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)]"
                    onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={publicAsset(item.src)}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="sr-only">View larger</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-lg bg-surface/95 px-4 py-2 text-sm font-semibold text-ink shadow-md transition hover:bg-surface"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <img
            src={publicAsset(lightbox.src)}
            alt={lightbox.alt}
            className="max-h-[min(92vh,1200px)] max-w-full rounded-none object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
