/** Prefix public folder paths with Vite `base` (required for GitHub Pages project URLs). */
export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base.replace(/\/$/, "")}${normalized}`
}
