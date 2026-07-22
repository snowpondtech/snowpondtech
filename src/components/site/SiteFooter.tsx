import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const industries = [
  ["hvac-contractors", "HVAC Contractors"],
  ["electrical-contractors", "Electrical Contractors"],
  ["landscaping-contractors", "Landscaping Contractors"],
  ["manufacturing", "Manufacturing"],
  ["engineering-firms", "Engineering Firms"],
  ["general-contractors", "General Contractors"],
] as const;

const locations = [
  ["augusta", "Augusta"],
  ["waterville", "Waterville"],
  ["newport", "Newport"],
  ["bangor", "Bangor"],
  ["lewiston", "Lewiston"],
  ["auburn", "Auburn"],
  ["brunswick", "Brunswick"],
  ["portland", "Portland"],
  ["biddeford", "Biddeford"],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-deep text-brand-foreground">
      <div className="container-page py-14 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10 font-display font-bold">SP</span>
            <span className="font-display font-semibold">Snow Pond Technology Group</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Locally owned in Oakland, Maine. Trusted technology partner to contractors and manufacturers across Central
            and Southern Maine.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href="tel:2076922415" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> 207-692-2415
            </a>
            <a href="mailto:info@snowpondtech.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> info@snowpondtech.com
            </a>
            <p className="flex items-center gap-2 text-white/70">
              <MapPin className="h-4 w-4" /> Oakland, Maine
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Industries</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {industries.map(([slug, label]) => (
              <li key={slug}>
                <Link to={`/industries/${slug}`} className="text-white/80 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Service Area</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {locations.map(([slug, label]) => (
              <li key={slug}>
                <Link to={`/locations/${slug}`} className="text-white/80 hover:text-white">
                  {label}, ME
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
            <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            <li>
              <a href="https://blog.snowpondtech.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                Blog
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-deep hover:bg-white/90"
          >
            Free Technology Assessment
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Snow Pond Technology Group Inc. All rights reserved.</p>
          <p>Oakland · Waterville · Augusta · Bangor · Portland · Lewiston</p>
        </div>
      </div>
    </footer>
  );
}
