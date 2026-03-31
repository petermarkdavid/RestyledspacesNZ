export const site = {
  name: "Restyled spaces NZ",
  url: "https://restyledspaces.nz",
  tagline:
    "Home staging to sell or restyling to love the space you're in — Wellington & online.",
  description:
    "Flexible home staging and styling using what you already have. Occupied homes, practical advice, and consultations across Wellington and online NZ-wide.",
  email: "Julie@Restyledspaces.nz",
  social: {
    facebook: "https://www.facebook.com/resyledspacesnz/",
    instagram: "https://www.instagram.com/resyledspacesnz/",
    linkedin: "https://www.linkedin.com/company/restyled-spaces-nz/",
    googleMaps: "https://maps.app.goo.gl/FxmjZrhmYoxy1ubs8",
    pinterest: "https://nz.pinterest.com/RestyledspacesNZ/",
    houzz: "https://www.houzz.co.nz/pro/webuser-165842460/",
  },
} as const;

export const socialLinks = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Google Maps", href: site.social.googleMaps },
  { label: "Pinterest", href: site.social.pinterest },
  { label: "Houzz", href: site.social.houzz },
] as const;

/** Primary nav (header); contact is the header CTA only. */
export const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Full list for footers / sitemap-style lists. */
export const navItems = [
  ...mainNavItems,
  { href: "/contact", label: "Contact" },
] as const;
