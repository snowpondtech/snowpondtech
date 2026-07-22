import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { LOCATIONS } from "../data/locations";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Service Area | Snow Pond Tech" },
      {
        name: "description",
        content:
          "Snow Pond Technology Group provides managed IT and cybersecurity across Central and Southern Maine — from Bangor to Portland and the towns in between.",
      },
      { property: "og:title", content: "Service Area | Snow Pond Tech" },
      {
        property: "og:description",
        content:
          "Managed IT and cybersecurity across Central and Southern Maine, delivered from our Oakland office.",
      },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Serving contractors and manufacturers across Maine"
        description="Snow Pond Tech is based in Oakland, Maine and supports businesses throughout Central and Southern Maine — with on-site help when it matters and remote support the rest of the time."
      />

      <section className="container-page py-16">
        <h2 className="text-2xl font-semibold text-foreground">Cities we cover</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Don't see your town? We likely cover it too. Give us a call at{" "}
          <a href="tel:2076922415" className="text-brand font-semibold">
            207-692-2415
          </a>
          .
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <li key={loc.slug}>
              <Link
                to={`/locations/${loc.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand hover:bg-accent"
              >
                <div className="flex items-center gap-2 text-brand">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {loc.region}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-brand">
                  {loc.city}, Maine
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{loc.intro}</p>
                <span className="mt-4 text-sm font-semibold text-brand">
                  See local IT services →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
