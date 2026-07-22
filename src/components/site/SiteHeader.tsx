import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/snowpond-logo.png.asset.json";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/industries/hvac-contractors", label: "Industries", match: "/industries" },
  { to: "/locations/portland", label: "Locations", match: "/locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Snow Pond Technology Group">
          <img src={logo.url} alt="Snow Pond Technology Group" className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://blog.snowpondtech.com"
            className="hover:text-brand transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:2076922415"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            207-692-2415
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm hover:bg-brand-deep transition-colors"
          >
            Free Assessment
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://blog.snowpondtech.com"
              className="py-2 text-base font-medium text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            <a href="tel:2076922415" className="py-2 inline-flex items-center gap-2 text-brand font-semibold">
              <Phone className="h-4 w-4" /> 207-692-2415
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Schedule a Free Technology Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
