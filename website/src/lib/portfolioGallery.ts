/**
 * Project photos for the portfolio gallery (filterable by room).
 * Generated in part by scripts/build-portfolio-gallery.mjs from public/images/portfolio/.
 * Re-run: node scripts/build-portfolio-gallery.mjs
 *
 * Houzz: https://www.houzz.co.nz/hznb/professionals/home-stylists-and-property-staging/restyled-spaces-nz-pfvwus-pf~1455952908
 */
export type RoomCategoryId = "kitchens" | "bathrooms" | "living-rooms" | "bedrooms";

export type GalleryFilterId = "all" | RoomCategoryId;

export type PortfolioGalleryImage = {
  src: string;
  alt: string;
  /** Empty = show only when filter is "All". Otherwise room filters apply. */
  categories: readonly RoomCategoryId[];
};

export const galleryFilterTabs: readonly { id: GalleryFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kitchens", label: "Kitchens" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "living-rooms", label: "Living rooms" },
  { id: "bedrooms", label: "Bedrooms" },
] as const;

export const gallerySectionHeading: Record<GalleryFilterId, string> = {
  all: "All rooms",
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
  "living-rooms": "Living rooms",
  bedrooms: "Bedrooms",
};

export const portfolioGalleryImages: readonly PortfolioGalleryImage[] = [
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0028.jpg",
    alt: "Open-plan living and dining with coastal view — Owhiro Bay, Wellington",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0032.jpg",
    alt: "Living area with grey sectional, dining nook, and TV console — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0038.jpg",
    alt: "Dining table with wine and glasses, ocean outlook — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0044.jpg",
    alt: "Open-plan living, kitchen, and dining — teal cabinetry — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0054.jpg",
    alt: "Kitchen and dining with coastal view — teal cabinets — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0059.jpg",
    alt: "Teal kitchen with wood counters and ocean-facing windows — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0065.jpg",
    alt: "Coastal kitchen with subway tile, brass hardware, and range — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0070.jpg",
    alt: "L-shaped kitchen overlooking the coast — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0080.jpg",
    alt: "Kitchen and dining with panoramic sea view — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0085.jpg",
    alt: "Bathroom with clawfoot tub, floating vanity, and subway tile — Owhiro Bay",
    categories: ["bathrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0089.jpg",
    alt: "Bathroom with walk-in shower, teal door, and heated towel rail — Owhiro Bay",
    categories: ["bathrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0091.jpg",
    alt: "Bright bedroom with white bed, teal accents, and wood floors — Owhiro Bay",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0095.jpg",
    alt: "Bedroom with terracotta layers, wood headboard, and abstract art — Owhiro Bay",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0100.jpg",
    alt: "Entry hall toward dining area with coastal view — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0107.jpg",
    alt: "Open-plan kitchen, dining, and living toward the ocean — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0120.jpg",
    alt: "Open-plan living, dining, and kitchen with coastal light — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0125.jpg",
    alt: "Kitchen island, white cabinetry, and living area beyond — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0132.jpg",
    alt: "Dining area with fruit bowl and sea view — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0137.jpg",
    alt: "Studio kitchen with island, white cabinets, and stainless appliances — Owhiro Bay",
    categories: ["kitchens"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0143.jpg",
    alt: "Living and dining with panoramic coastal windows — Owhiro Bay",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0149.jpg",
    alt: "Bedroom alcove with mustard accents and circular artwork — Owhiro Bay",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0154.jpg",
    alt: "Bathroom with wood vanity, vessel sink, and mosaic splashback — Owhiro Bay",
    categories: ["bathrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0160.jpg",
    alt: "Bathroom with glass shower, wood vanity, and polished concrete — Owhiro Bay",
    categories: ["bathrooms"] as const,
  },
  {
    src: "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0285.jpg",
    alt: "Interior styling — 144 Owhiro Bay Parade, Owhiro Bay 0285",
    categories: [] as const,
  },
  {
    src: "/images/portfolio/469071017_552551420887185_764143705973240489_n-67c18f80-31f7-4175-82d5-3fb28b890a0e.png",
    alt: "Bedroom with navy accent wall, sunburst mirror, and layered bedding",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/481254756_582520844742775_3279684030308009448_n-a7b5bb0b-bb77-490d-8fa7-abb31b3e091b.png",
    alt: "Bedroom with mustard yellow cushions, layered throws, and circular wall art",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/481816032_582520914742768_3224954815490352958_n-0958e0b1-3245-4659-888e-3dd4146bba31.png",
    alt: "Bedroom with navy velvet bed, orange accents, and mirrored wardrobe",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/504836205_653413534320172_6949613656995176101_n (1).jpg",
    alt: "Living room with navy velvet sofa, woven mirror, and nesting side tables",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/after1.jpg",
    alt: "Bright living room with grey sectional, armchairs, and plantation shutters",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/after4.jpg",
    alt: "Minimal bedroom with terracotta accents, wood headboard, and bedside lamps",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/after5.jpg",
    alt: "Living room with light leather sofas, glass coffee table, and kitchen view",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/case-coastal-after.jpg",
    alt: "Coastal living room with taupe sofa, circular art, and garden doors",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/case-wellington-after.jpg",
    alt: "Wellington bedroom with olive throw, landscape cushion, and wood headboard",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/hero-living.png",
    alt: "Open-plan living and dining with coastal view — staged lounge and dining nook",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/houzz-banner.jpg",
    alt: "Bedroom with mustard yellow accent wall and white bed frame",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/living-room-after.jpg",
    alt: "Contemporary living room with yellow sectional, fireplace, and abstract art",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/project-1.jpg",
    alt: "Interior styling — lounge and living space",
    categories: ["living-rooms"] as const,
  },
  {
    src: "/images/portfolio/project-2.jpg",
    alt: "Guest bedroom with layered bedding, side table, and teal accent curtain — Restyled spaces NZ",
    categories: ["bedrooms"] as const,
  },
  {
    src: "/images/portfolio/project-3.jpg",
    alt: "Dining and entertaining space — Restyled spaces NZ",
    categories: ["living-rooms"] as const,
  },
];

export function filterPortfolioGallery(
  filter: GalleryFilterId,
  images: readonly PortfolioGalleryImage[],
): PortfolioGalleryImage[] {
  if (filter === "all") return [...images];
  return images.filter(
    (img) => img.categories.length > 0 && img.categories.includes(filter as RoomCategoryId),
  );
}
