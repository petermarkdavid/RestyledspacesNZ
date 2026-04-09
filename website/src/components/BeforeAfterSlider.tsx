import { useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** e.g. “Bedroom transformation” */
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
  hint = "Move slider to see the difference",
  size = "default",
}: Props) {
  const [pct, setPct] = useState(50);
  const id = useId();
  const isFeatured = size === "featured";

  return (
    <div
      className={`tonal-shift-bottom group relative mx-auto w-full overflow-hidden rounded-none bg-white shadow-xl ring-1 ring-black/5 ${
        isFeatured ? "max-w-3xl lg:max-w-none" : "max-w-[414px]"
      }`}
    >
      <div className={`relative ${isFeatured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-video"}`}>
        {/* After: full frame — same object-fit/position as before so the split aligns */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center [transform:translateZ(0)]"
          sizes={isFeatured ? "(min-width: 1024px) 45vw, 100vw" : "414px"}
          decoding="async"
        />
        {/* Before: same full-size image, clipped — does not rescale when the slider moves */}
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
        {/* Gold split line */}
        <div
          className="pointer-events-none absolute inset-y-0 z-[2] w-1 bg-tertiary-container"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-[3] flex w-12 -translate-x-1/2 items-center justify-center"
          style={{ left: `${pct}%` }}
        >
          <div className="flex h-12 w-12 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-tertiary-container text-on-tertiary-container shadow-[0_24px_24px_-4px_rgba(28,25,22,0.06)]">
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
      <div className="flex items-center justify-between gap-3 bg-surface px-4 py-3 sm:px-5 sm:py-4">
        <span className="text-sm font-semibold text-brand">{label}</span>
        <span className="text-xs italic text-muted">{hint}</span>
      </div>
    </div>
  );
}
