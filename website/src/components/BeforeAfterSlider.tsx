import { useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** e.g. “Bedroom transformation” */
  label: string;
  hint?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
  hint = "Move slider to see the difference",
}: Props) {
  const [pct, setPct] = useState(50);
  const id = useId();

  return (
    <div className="tonal-shift-bottom group relative overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="relative aspect-video">
        <img src={afterSrc} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-4 border-tertiary-container"
          style={{ width: `${pct}%` }}
          aria-hidden
        >
          <img src={beforeSrc} alt={beforeAlt} className="h-full w-full object-cover" />
        </div>
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-30 flex w-12 -translate-x-1/2 items-center justify-center"
          style={{ left: `${pct}%` }}
        >
          <div className="flex h-12 w-12 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-tertiary-container text-on-tertiary-container shadow-[0_24px_24px_-4px_rgba(28,25,22,0.06)]">
            <span className="material-symbols-outlined" aria-hidden>
              unfold_more
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
      <div className="flex items-center justify-between gap-4 bg-surface p-6">
        <span className="text-sm font-bold uppercase tracking-widest text-brand">{label}</span>
        <span className="text-xs italic text-muted">{hint}</span>
      </div>
    </div>
  );
}
