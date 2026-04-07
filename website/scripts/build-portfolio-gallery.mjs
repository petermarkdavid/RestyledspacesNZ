/**
 * Regenerates src/lib/portfolioGallery.ts from files in public/images/portfolio/.
 * Non-gallery assets live in public/images/not-portfolio/ (not scanned).
 * Images without an entry in CURATED get placeholder alt text and categories: []
 * (visible on "All" only).
 *
 * Run: node scripts/build-portfolio-gallery.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const portfolioImagesDir = path.join(root, "public", "images", "portfolio");
const outFile = path.join(root, "src", "lib", "portfolioGallery.ts");

/** Relative paths under portfolio/ to omit (e.g. behind-the-scenes, not room showcases) */
const EXCLUDE_REL = new Set([
  /** Behind-the-scenes “before” shot; same image as case study before, not shown in grid */
  "case-coastal-before.jpg",
]);

/** Known copy + room filters for specific paths */
const CURATED = {
  "/images/portfolio/project-1.jpg": {
    alt: "Interior styling — lounge and living space",
    categories: ["living-rooms"],
  },
  "/images/portfolio/project-2.jpg": {
    alt: "Guest bedroom with layered bedding, side table, and teal accent curtain — Restyled spaces NZ",
    categories: ["bedrooms"],
  },
  "/images/portfolio/project-3.jpg": {
    alt: "Dining and entertaining space — Restyled spaces NZ",
    categories: ["living-rooms"],
  },
  "/images/portfolio/hero-living.png": {
    alt: "Open-plan living and dining with coastal view — staged lounge and dining nook",
    categories: ["living-rooms"],
  },
  "/images/portfolio/living-room-after.jpg": {
    alt: "Contemporary living room with yellow sectional, fireplace, and abstract art",
    categories: ["living-rooms"],
  },
  "/images/portfolio/after1.jpg": {
    alt: "Bright living room with grey sectional, armchairs, and plantation shutters",
    categories: ["living-rooms"],
  },
  "/images/portfolio/after4.jpg": {
    alt: "Minimal bedroom with terracotta accents, wood headboard, and bedside lamps",
    categories: ["bedrooms"],
  },
  "/images/portfolio/after5.jpg": {
    alt: "Living room with light leather sofas, glass coffee table, and kitchen view",
    categories: ["living-rooms"],
  },
  "/images/portfolio/case-coastal-after.jpg": {
    alt: "Coastal living room with taupe sofa, circular art, and garden doors",
    categories: ["living-rooms"],
  },
  "/images/portfolio/case-wellington-after.jpg": {
    alt: "Wellington bedroom with olive throw, landscape cushion, and wood headboard",
    categories: ["bedrooms"],
  },
  "/images/portfolio/houzz-banner.jpg": {
    alt: "Bedroom with mustard yellow accent wall and white bed frame",
    categories: ["bedrooms"],
  },
  "/images/portfolio/469071017_552551420887185_764143705973240489_n-67c18f80-31f7-4175-82d5-3fb28b890a0e.png": {
    alt: "Bedroom with navy accent wall, sunburst mirror, and layered bedding",
    categories: ["bedrooms"],
  },
  "/images/portfolio/481254756_582520844742775_3279684030308009448_n-a7b5bb0b-bb77-490d-8fa7-abb31b3e091b.png": {
    alt: "Bedroom with mustard yellow cushions, layered throws, and circular wall art",
    categories: ["bedrooms"],
  },
  "/images/portfolio/481816032_582520914742768_3224954815490352958_n-0958e0b1-3245-4659-888e-3dd4146bba31.png": {
    alt: "Bedroom with navy velvet bed, orange accents, and mirrored wardrobe",
    categories: ["bedrooms"],
  },
  "/images/portfolio/504836205_653413534320172_6949613656995176101_n (1).jpg": {
    alt: "Living room with navy velvet sofa, woven mirror, and nesting side tables",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0028.jpg": {
    alt: "Open-plan living and dining with coastal view — Owhiro Bay, Wellington",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0032.jpg": {
    alt: "Living area with grey sectional, dining nook, and TV console — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0038.jpg": {
    alt: "Dining table with wine and glasses, ocean outlook — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0044.jpg": {
    alt: "Open-plan living, kitchen, and dining — teal cabinetry — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0054.jpg": {
    alt: "Kitchen and dining with coastal view — teal cabinets — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0059.jpg": {
    alt: "Teal kitchen with wood counters and ocean-facing windows — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0065.jpg": {
    alt: "Coastal kitchen with subway tile, brass hardware, and range — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0070.jpg": {
    alt: "L-shaped kitchen overlooking the coast — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0080.jpg": {
    alt: "Kitchen and dining with panoramic sea view — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0085.jpg": {
    alt: "Bathroom with clawfoot tub, floating vanity, and subway tile — Owhiro Bay",
    categories: ["bathrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0089.jpg": {
    alt: "Bathroom with walk-in shower, teal door, and heated towel rail — Owhiro Bay",
    categories: ["bathrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0091.jpg": {
    alt: "Bright bedroom with white bed, teal accents, and wood floors — Owhiro Bay",
    categories: ["bedrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0095.jpg": {
    alt: "Bedroom with terracotta layers, wood headboard, and abstract art — Owhiro Bay",
    categories: ["bedrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0100.jpg": {
    alt: "Entry hall toward dining area with coastal view — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0107.jpg": {
    alt: "Open-plan kitchen, dining, and living toward the ocean — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0120.jpg": {
    alt: "Open-plan living, dining, and kitchen with coastal light — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0125.jpg": {
    alt: "Kitchen island, white cabinetry, and living area beyond — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0132.jpg": {
    alt: "Dining area with fruit bowl and sea view — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0137.jpg": {
    alt: "Studio kitchen with island, white cabinets, and stainless appliances — Owhiro Bay",
    categories: ["kitchens"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0143.jpg": {
    alt: "Living and dining with panoramic coastal windows — Owhiro Bay",
    categories: ["living-rooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0149.jpg": {
    alt: "Bedroom alcove with mustard accents and circular artwork — Owhiro Bay",
    categories: ["bedrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0154.jpg": {
    alt: "Bathroom with wood vanity, vessel sink, and mosaic splashback — Owhiro Bay",
    categories: ["bathrooms"],
  },
  "/images/portfolio/144 Owhiro Bay Parade, Owhiro Bay 0160.jpg": {
    alt: "Bathroom with glass shower, wood vanity, and polished concrete — Owhiro Bay",
    categories: ["bathrooms"],
  },
};

function walkImages(dir, base = "") {
  /** @type {string[]} */
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, ent.name).replace(/\\/g, "/");
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkImages(full, rel));
    else if (/\.(jpe?g|png|gif|webp)$/i.test(ent.name)) out.push(rel);
  }
  return out;
}

function humanAlt(relPath) {
  const base = path.basename(relPath, path.extname(relPath));
  const cleaned = base
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
  return `Interior styling — ${cleaned || "Restyled spaces NZ"}`;
}

function escapeStr(s) {
  return JSON.stringify(s);
}

function walk() {
  const rels = walkImages(portfolioImagesDir).sort();
  /** @type {{ src: string; alt: string; categories: string[] }[]} */
  const items = [];
  const seen = new Set();
  for (const rel of rels) {
    if (EXCLUDE_REL.has(rel)) continue;
    const src = `/images/portfolio/${rel}`;
    if (seen.has(src)) continue;
    seen.add(src);
    const c = CURATED[src];
    if (c) {
      items.push({ src, alt: c.alt, categories: [...c.categories] });
    } else {
      items.push({ src, alt: humanAlt(rel), categories: [] });
    }
  }
  return items;
}

function emit() {
  const items = walk();
  const lines = [];
  lines.push(`/**
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

export const portfolioGalleryImages: readonly PortfolioGalleryImage[] = [`);

  for (const item of items) {
    const cats =
      item.categories.length === 0
        ? `[] as const`
        : `[${item.categories.map((c) => escapeStr(c)).join(", ")}] as const`;
    lines.push(`  {
    src: ${escapeStr(item.src)},
    alt: ${escapeStr(item.alt)},
    categories: ${cats},
  },`);
  }

  lines.push(`];

export function filterPortfolioGallery(
  filter: GalleryFilterId,
  images: readonly PortfolioGalleryImage[],
): PortfolioGalleryImage[] {
  if (filter === "all") return [...images];
  return images.filter(
    (img) => img.categories.length > 0 && img.categories.includes(filter as RoomCategoryId),
  );
}
`);

  fs.writeFileSync(outFile, lines.join("\n"), "utf8");
  console.log(`Wrote ${items.length} images to ${path.relative(root, outFile)}`);
}

emit();
