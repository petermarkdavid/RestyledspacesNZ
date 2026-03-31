import { Facebook, Mail, MapPin } from "lucide-react";
import { site, socialLinks } from "#/lib/site";

export function SiteFooter() {
  return (
    <footer className="tonal-stacking-top w-full bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-8 md:grid-cols-3 md:gap-8">
        <div>
          <span className="font-heading text-lg font-bold text-slate-800">{site.name}</span>
          <p className="font-heading mt-2 text-xs leading-loose tracking-widest text-slate-400 uppercase">
            © {new Date().getFullYear()} {site.name}. The Curated Sanctuary.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <span className="font-heading cursor-not-allowed text-xs tracking-widest text-slate-400 uppercase transition-colors">
            Privacy Policy
          </span>
          <span className="font-heading cursor-not-allowed text-xs tracking-widest text-slate-400 uppercase transition-colors">
            Terms of Service
          </span>
          <span className="font-heading cursor-not-allowed text-xs tracking-widest text-slate-400 uppercase transition-colors">
            Cookie Policy
          </span>
        </div>
        <div className="flex justify-center gap-6 text-slate-400 md:justify-end">
          <a
            href={socialLinks.find((l) => l.label === "Facebook")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand" aria-label="Email">
            <Mail className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a
            href={socialLinks.find((l) => l.label === "Google Maps")?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
            aria-label="Location"
          >
            <MapPin className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
