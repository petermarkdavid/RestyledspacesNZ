import { useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** e.g. "Bedroom restyling" */
  label: string;
  hint?: string;
  /** Wider slider for homepage feature pairs */
  size?: "default" | "featured";
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
  hint = "Drag to compare",
  size = "default",
}: Props) {
  const [pct, setPct] = useState(50);
  const id = useId();
  const isFeatured = size === "featured";

  return (
    <div
      className={`group relative mx-auto w-full ${
        isFeatured ? "max-w-3xl lg:max-w-none" : "max-w-[414px]"
      }`}
    >
      <div
        className={`tonal-shift-bottom relative overflow-hidden rounded-none shadow-xl ring-1 ring-black/5 ${isFeatured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-video"}`}
      >
        {/* After: full frame */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center [transform:translateZ(0)]"
          sizes={isFeatured ? "(min-width: 1024px) 45vw, 100vw" : "414px"}
          decoding="async"
        />
        {/* Before: clipped */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] isolate"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          aria-hidden
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full w-full object-cover object-center [transform:translateZ(0)]"
            sizes={isFeatured ? "(min-width: 1024px) 45vw, 100vw" : "414px"}
            decoding="async"
          />
        </div>
        {/* Split line — thicker, black */}
        <div
          className="pointer-events-none absolute inset-y-0 z-[2] w-[3px] bg-black"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        {/* Handle — black */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-[3] flex w-12 -translate-x-1/2 items-center justify-center"
          style={{ left: `${pct}%` }}
        >
          <div className="flex h-12 w-12 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-[0_24px_24px_-4px_rgba(28,25,22,0.06)]">
            <span className="material-symbols-outlined" aria-hidden>
              swap_horiz
            </span>
          </div>
        </div>
        <label className="sr-only" htmlFor={`${id}-range`}>
          Before and after comparison
        </label>
        <input
          id={`${id}-range`}
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-valuetext={`${pct} percent`}
        />
      </div>
      {/* Label and hint sit below the image, not in an attached box */}
      <div className="mt-3 flex items-baseline justify-between gap-3 px-1">
        <span className="text-sm font-semibold text-ink">{label}</span>
        <span className="text-xs italic text-muted">{hint}</span>
      </div>
    </div>
  );
}
