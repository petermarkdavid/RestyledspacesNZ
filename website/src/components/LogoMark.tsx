import { publicAsset } from "#/lib/baseUrl";

/**
 * `translogo.png` — dark line-art on a transparent background, shown as brand yellow via CSS filter
 * (more reliable than mask-image across browsers / PNG export settings).
 */
export function LogoMark({ className }: { className?: string }) {
  const url = publicAsset("/images/translogo.png");
  return (
    <img
      src={url}
      alt=""
      width={40}
      height={40}
      className={["logo-mark-img shrink-0", className].filter(Boolean).join(" ")}
      fetchPriority="high"
      decoding="async"
      aria-hidden
    />
  );
}
