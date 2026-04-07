import { createFileRoute } from "@tanstack/react-router";
import { useId, useLayoutEffect, useMemo, useState } from "react";
import { publicAsset } from "#/lib/baseUrl";
import {
  filterPortfolioGallery,
  galleryFilterTabs,
  gallerySectionHeading,
  portfolioGalleryImages,
  type GalleryFilterId,
} from "#/lib/portfolioGallery";
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
  const galleryHeadingId = useId();
  const tablistId = useId();

  useLayoutEffect(() => {
    setOrderedGallery((prev) => shuffle(prev));
  }, []);

  const filteredPhotos = useMemo(
    () => filterPortfolioGallery(galleryFilter, orderedGallery),
    [galleryFilter, orderedGallery],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <section aria-labelledby="portfolio-gallery-heading">
        <h1
          id="portfolio-gallery-heading"
          className="font-heading text-3xl font-bold text-ink sm:text-4xl"
        >
          Homes we&apos;ve staged or styled
        </h1>
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

        <h2
          id={galleryHeadingId}
          className="font-heading mt-8 text-xl font-bold text-ink sm:text-2xl"
        >
          {gallerySectionHeading[galleryFilter]}
        </h2>

        <div
          id="portfolio-photo-panel"
          role="tabpanel"
          aria-labelledby={galleryHeadingId}
          className="mt-6"
        >
          {filteredPhotos.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-line bg-surface-low/60 py-14 text-center text-muted">
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
                  <div className="card-tonal overflow-hidden rounded-2xl shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={publicAsset(item.src)}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
