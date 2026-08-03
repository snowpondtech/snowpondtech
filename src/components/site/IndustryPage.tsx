import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "./PageHero";
import { CTASection } from "./CTASection";
import type { Industry } from "../../data/industries";
import { INDUSTRIES } from "../../data/industries";

const lower = (s: string) => s.toLowerCase().replace(/\bhvac\b/g, "HVAC");

export function IndustryPage({
  industry,
  image,
  imageAlt,
  imageHeading,
  imageSubheading,
}: {
  industry: Industry;
  image?: string;
  imageAlt?: string;
  imageHeading?: string;
  imageSubheading?: string;
}) {
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug);
  const media = image ? (
    <div className="w-full">
      {(imageHeading || imageSubheading) && (
        <div className="mb-4 max-w-xl">
          {imageHeading && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{imageHeading}</p>}
          {imageSubheading && <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-white">{imageSubheading}</h2>}
        </div>
      )}
      <img src={image} alt={imageAlt || `Photo representing ${industry.name}`} className="w-1/2 mx-auto rounded-2xl shadow-xl aspect-[16/9] object-cover" />
    </div>
  ) : null;

  return (
    <>
      <PageHero
        eyebrow={`Industries · ${industry.short}`}
        title={`IT that fits how ${lower(industry.name)} actually work`}
        description={industry.hero}
        media={media}
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Common challenges</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">What we hear from {lower(industry.short)} owners</h2>
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-accent-warm flex-shrink-0" />
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">What changes with Snow Pond Tech</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Real outcomes for your business</h2>
            <ul className="mt-6 space-y-4">
              {industry.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-soft/50 border-y border-border">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Also serving</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">Other industries we work with</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/industries/${o.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:border-brand transition"
              >
                <p className="font-semibold text-foreground">{o.name}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-brand group-hover:gap-2 transition-all">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to see what better technology could do for your ${lower(industry.short)} business?`}
        subtitle="Book a free technology assessment. No sales pressure, no jargon — just a clear conversation about what's working and what isn't."
      />
    </>
  );
}
