import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import type { Location } from "../../data/locations";
import { LOCATIONS } from "../../data/locations";
import { INDUSTRIES } from "../../data/industries";

export function LocationPage({ location, media }: { location: Location; media?: ReactNode }) {
  const others = LOCATIONS.filter((l) => l.slug !== location.slug);
  return (
    <>
      <PageHero
        eyebrow={`${location.region} · Maine`}
        title={`IT Support and Managed Services in ${location.city}, Maine`}
        description={location.intro}
        media={media}
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Snow Pond Technology Group serves {location.city} and the surrounding {location.region} community from
              our home office in Oakland, Maine. {location.localAngle}
            </p>
            <p>
              We help contractors and manufacturers here reduce downtime, tighten up cybersecurity, meet cyber
              insurance requirements, and keep their office and field teams working from the same information — with
              a technology strategy tied to how the business actually makes money.
            </p>
            <p>
              Whether you're a growing HVAC shop, a busy electrical contractor, a manufacturer scaling into a second
              shift, or an engineering firm protecting sensitive project data, we can help. And because we're local,
              you get a real person on the phone and a familiar face on site when it matters.
            </p>
            <div className="rounded-2xl border border-border bg-brand-soft/60 p-6">
              <p className="font-display text-lg font-semibold text-foreground">
                What {location.city} businesses ask us about most
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-base text-foreground">
                {[
                  "Reducing downtime and slow-computer complaints",
                  "Meeting cyber insurance renewal requirements",
                  "Connecting office and field crews reliably",
                  "Protecting customer, payroll, and project data",
                  "Planning technology spend for the year ahead",
                  "Getting a real human to answer the phone",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Local</p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">Serving {location.city}, ME</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Oakland-based · On-site support and strategic guidance across {location.region}.
              </p>
              <Link
                to="/schedule-assessment"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand-deep w-full"
              >
                Schedule Free Assessment
              </Link>
              <a
                href="tel:2076922415"
                className="mt-2 inline-flex items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent w-full"
              >
                Call 207-692-2415
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Industries we serve in {location.city}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {INDUSTRIES.map((i) => (
                  <li key={i.slug}>
                    <Link to={`/industries/${i.slug}`} className="text-foreground hover:text-brand inline-flex items-center gap-1.5">
                      <ArrowRight className="h-3.5 w-3.5 text-brand" /> {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-brand-soft/50 border-y border-border">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Service area</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">Other Maine communities we serve</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/locations/${o.slug}`}
                className="group rounded-xl border border-border bg-card px-5 py-4 hover:border-brand transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-brand" /> {o.city}, ME
                </span>
                <ArrowRight className="h-4 w-4 text-brand opacity-0 group-hover:opacity-100 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Talk to a Maine-based IT partner in ${location.city}`}
        subtitle="One 30-minute conversation is all it takes to know if we're the right fit. Locally owned. Contractor and manufacturer focused."
      />
    </>
  );
}
