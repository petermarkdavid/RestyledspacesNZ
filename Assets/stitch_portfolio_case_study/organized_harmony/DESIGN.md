# Design System Document

## 1. Overview & Creative North Star: "The Curated Sanctuary"
This design system is built to transform the digital experience from a standard service provider into a "Curated Sanctuary." It moves away from the rigid, grid-locked structures of traditional web design to mirror the physical process of decluttering and restyling a home. 

The **Creative North Star** is focused on intentionality and breathing room. By utilizing asymmetry, sophisticated layering, and an editorial typographic hierarchy, we create a space that feels lived-in yet impeccably organized. We treat the screen as a canvas where elements are "placed" rather than "slotted," using overlapping components and diverse surface depths to create a sense of tactile, professional care.

---

## 2. Colors & Surface Architecture

The palette balances the grounded stability of Dark Slate with the revitalizing airiness of Mint and Gold.

### Tonal Surface Hierarchy
We move beyond flat backgrounds by using Material-inspired surface tiers. This creates a "nested" depth that guides the eye without the need for intrusive lines.
- **Surface (#effdf3):** The base "floor" of the application. High-energy, clean, and expansive.
- **Surface Container Low (#e9f7ed):** Use for large secondary sections to subtly shift context.
- **Surface Container Highest (#d8e6dc):** Use for active elements or high-profile "restyled" content blocks.
- **Primary (#001764):** Reserved for deep-impact functional moments.

### The "No-Line" Rule
To maintain a decluttered aesthetic, **1px solid borders are prohibited** for sectioning. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Placing a `surface-container-low` card on a `surface` background.
2.  **Vertical Whitespace:** Using the Spacing Scale (8 or 12) to separate ideas.

### Signature Textures & Glassmorphism
*   **The Glass Rule:** For floating navigation or modal overlays, use semi-transparent versions of `surface` with a 12px backdrop-blur. This mimics frosted glass, allowing the "home" (the background content) to peak through.
*   **Tactile Gradients:** Main Action CTAs should utilize a subtle linear gradient from `primary` (#001764) to `primary_container` (#002897) at a 135-degree angle to add a premium, "finished" luster.

---

## 3. Typography: Editorial Authority

The typography strategy pairs geometric precision with approachable clarity.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "statement furniture." Use large scales (`display-lg` at 3.5rem) with tighter letter-spacing (-0.02em) to create a high-end editorial feel. They should often be placed with intentional asymmetry—slightly offset to the left or right of center.
*   **Title & Body (Public Sans / Arial):** Our "functional foundation." These provide the warmth and approachability the brand requires. 
*   **Hierarchy Intent:** 
    *   **Display-lg:** For transformative hero statements.
    *   **Headline-md:** For section introductions, using `on_surface_variant` (#45474c) to soften the impact.
    *   **Body-lg:** For storytelling and "real-life" transformation descriptions.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are often too "digital." We achieve depth through **The Layering Principle**.

*   **Tonal Stacking:** Instead of a shadow, place a `surface-container-lowest` (#ffffff) card on a `surface-container-high` (#deece2) background. The naturally high contrast creates a "lifted" effect that feels architectural.
*   **Ambient Shadows:** Where a float is required (e.g., a "Book Now" floating button), use a diffused, tinted shadow:
    *   *Blur:* 24px | *Spread:* -4px | *Color:* `on_surface` (#121e18) at 6% opacity.
*   **The Ghost Border Fallback:** If a border is required for accessibility in input fields, use `outline-variant` (#c5c6cd) at 20% opacity. Never use 100% opaque black or grey lines.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background, `on_primary` text. 8px (0.5rem) corner radius. 
*   **Secondary (Gold Accent):** `tertiary_container` (#cba72f) background with `on_tertiary_container` (#4e3d00) text. This is reserved for "Value-Add" actions like "View Portfolio."
*   **Tertiary (Ghost):** No background. `primary` text. Hover state uses a `surface_variant` soft fill.

### Cards & Lists
*   **The Card Rule:** Cards should never have a visible border. Use `surface-container-low` with a padding of `spacing-4`. 
*   **List Items:** Forbid the use of divider lines. Separate items using `spacing-3` and subtle shifts in background color between the list container and the items.

### Inputs & Selection
*   **Input Fields:** Use `surface_container_lowest` for the field fill to make them "pop" against `surface`.
*   **Chips:** Selection chips should use the `secondary_fixed` (#d9e3f9) color to feel calm and integrated, not disruptive.

### Signature Component: The "Before/After" Slider
A custom component featuring a centered handle in `Gold (#D4AF37)`. The handle should utilize a subtle 8% ambient shadow to appear as if it’s a physical tool being moved across the space.

---

## 6. Do's and Don'ts

### Do
*   **DO** use intentional asymmetry. Allow a photo to overlap a text block by 20-40px to create a layered, "staged" look.
*   **DO** prioritize whitespace. If a layout feels "full," increase the padding using the `spacing-12` or `spacing-16` tokens.
*   **DO** use the Gold (`#D4AF37`) sparingly for small highlights, like an icon or a text underline, to signify quality.

### Don't
*   **DON'T** use 1px solid black or dark grey dividers. They create "visual clutter" which contradicts the brand's mission to declutter.
*   **DON'T** use harsh, high-opacity drop shadows. 
*   **DON'T** center-align long passages of body text. Keep editorial text left-aligned for a professional, "published" feel.
*   **DON'T** use the Blue (`#1D44CD`) or Yellow (`#ECDF15`) for decorative elements; these are strictly for functional utility and high-priority CTA status to ensure they remain "practical" tools for the user.