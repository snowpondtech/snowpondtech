import { Link } from "@tanstack/react-router";
import { ChevronDown, ExternalLink, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { INDUSTRIES } from "@/data/industries";
import { LOCATIONS } from "@/data/locations";

const primaryNav = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const clientResources = [
  {
    href: "https://snowpondtech.itclientportal.com/ClientPortal/Login.aspx",
    label: "Client Portal",
  },
  { href: "https://remote.snowpondtech.com", label: "Remote Support" },
  { href: "https://pay.snowpondtech.com", label: "Payment Portal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Snow Pond Technology Group">
          <img src={"/images/logo-transparent.png"} alt="Snow Pond Technology Group" className="h-16 md:h-[4.5rem] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
          <Link
            to="/services"
            className="hover:text-brand transition-colors"
            activeProps={{ className: "text-brand" }}
          >
            Services
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 outline-none hover:text-brand transition-colors">
              Industries <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="flex flex-col min-w-[16rem]">

              {INDUSTRIES.map((i) => (
                <DropdownMenuItem key={i.slug} asChild>
                  <Link to={`/industries/${i.slug}`} className="cursor-pointer">
                    {i.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/industries/additional-industries" className="cursor-pointer">
                  Additional Industries
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 outline-none hover:text-brand transition-colors">
              Locations <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="flex flex-col min-w-[14rem]">

              {LOCATIONS.map((l) => (
                <DropdownMenuItem key={l.slug} asChild>
                  <Link to={`/locations/${l.slug}`} className="cursor-pointer">
                    {l.city}, Maine
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {primaryNav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
            >
              {n.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 outline-none hover:text-brand transition-colors">
              Client Resources <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex flex-col">
              {clientResources.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-3 cursor-pointer"
                  >
                    {item.label}
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground/80 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            207-692-2415
          </a>
          <Link
            to="/schedule-assessment"
            className="inline-flex items-center whitespace-nowrap rounded-md bg-accent-warm px-4 py-2 text-sm font-semibold text-accent-warm-foreground shadow-sm ring-1 ring-accent-warm-deep/30 hover:bg-accent-warm-deep transition-colors"
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
        <div className="lg:hidden absolute top-full left-0 right-0 z-50 border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
          <div className="container-page py-4 flex flex-col gap-1">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-foreground"
            >
              Services
            </Link>

            <div className="pt-2 border-t border-border flex flex-col">
              <div className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Industries
              </div>
              {INDUSTRIES.map((i) => (
                <Link
                  key={i.slug}
                  to={`/industries/${i.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm text-foreground/80"
                >
                  {i.name}
                </Link>
              ))}
              <Link
                to="/industries/additional-industries"
                onClick={() => setOpen(false)}
                className="py-1.5 text-sm text-foreground/80"
              >
                Additional Industries
              </Link>
            </div>

            <div className="pt-2 border-t border-border flex flex-col">
              <div className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Locations
              </div>
              {LOCATIONS.map((l) => (
                <Link
                  key={l.slug}
                  to={`/locations/${l.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-sm text-foreground/80"
                >
                  {l.city}, Maine
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-border flex flex-col">
              {primaryNav.slice(1).map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-border flex flex-col">
              <div className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Client Resources
              </div>
              {clientResources.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2 flex items-center gap-2 text-base font-medium text-foreground"
                >
                  {item.label}
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              ))}
            </div>

            <a
              href="https://blog.snowpondtech.com"
              className="py-2 text-base font-medium text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            <a href="tel:2076922415" className="py-2 inline-flex items-center gap-2 whitespace-nowrap text-brand font-semibold">
              <Phone className="h-4 w-4" /> 207-692-2415
            </a>
            <Link
              to="/schedule-assessment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-accent-warm px-4 py-2.5 text-sm font-semibold text-accent-warm-foreground ring-1 ring-accent-warm-deep/30 hover:bg-accent-warm-deep transition-colors"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
