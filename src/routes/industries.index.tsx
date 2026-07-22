import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { INDUSTRIES } from "../data/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Snow Pond Tech" },
      {
        name: "description",
        content:
          "Snow Pond Technology Group provides managed IT and cybersecurity for HVAC, electrical, landscaping, general contracting, manufacturing, and engineering firms across Maine.",
      },
      { property: "og:title", content: "Industries We Serve | Snow Pond Tech" },
      {
        property: "og:description",
        content:
          "Managed IT, cybersecurity, and business technology tailored to the industries that keep Maine moving.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology built for the way Maine businesses work"
        description="From job sites to shop floors to engineering studios, we tailor IT support, cybersecurity, and business technology to the industries we know best — and a growing list of others we're proud to serve."
      />

      <section className="container-page py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Specialized industries</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          These are the industries where we've built the deepest experience. Each has its own dedicated page with the challenges we hear most and the outcomes we help deliver.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <li key={i.slug}>
              <Link
                to={`/industries/${i.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-brand">
                  {i.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{i.hero}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                  View industry <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/industries/additional-industries"
              className="group flex h-full flex-col rounded-xl border border-dashed border-brand/50 bg-brand-soft/40 p-6 transition-colors hover:border-brand hover:bg-brand-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-brand">
                Additional Industries
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Professional services, nonprofits, growing small and mid-sized businesses, multi-location organizations, and companies working through cyber insurance requirements.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                Explore more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <CTASection />
    </>
  );
}
