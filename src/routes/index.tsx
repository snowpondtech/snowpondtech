import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Wallet,
  Clock,
  HardHat,
  Wrench,
  Trees,
  Factory,
  Ruler,
  Building2,
} from "lucide-react";
import { CTASection } from "../components/site/CTASection";
import { INDUSTRIES } from "../data/industries";
import heroAsset from "../assets/Hero-Image-2.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snow Pond Technology Group | IT for Maine Contractors & Manufacturers" },
      {
        name: "description",
        content:
          "Snow Pond Technology Group helps HVAC, electrical, landscaping, and manufacturing businesses across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support growing teams.",
      },
      { property: "og:title", content: "Snow Pond Technology Group | IT for Maine Contractors & Manufacturers" },
      {
        property: "og:description",
        content:
          "Snow Pond Technology Group helps HVAC, electrical, landscaping, and manufacturing businesses across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support growing teams.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const industryIcons = {
  "hvac-contractors": Wrench,
  "electrical-contractors": Zap,
  "landscaping-contractors": Trees,
  manufacturing: Factory,
  "engineering-firms": Ruler,
  "general-contractors": HardHat,
} as const;


const outcomes = [
  { icon: Clock, title: "Less downtime", body: "Systems that stay up so your people can stay billable." },
  { icon: Zap, title: "Faster employee productivity", body: "Tools that get out of the way instead of slowing everyone down." },
  { icon: Users, title: "Better communication", body: "Office, shop, and field teams working from the same information in real time." },
  { icon: ShieldCheck, title: "Stronger cybersecurity", body: "Layered defenses that satisfy insurers, customers, and common sense." },
  { icon: Wallet, title: "Predictable technology costs", body: "One monthly number you can budget around, not surprise invoices." },
  { icon: TrendingUp, title: "Support for future growth", body: "A roadmap tied to your goals, not the latest product pitch." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-grid-bg text-white">
        <div className="container-page py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Oakland, Maine · Serving Central &amp; Southern Maine
              </p>
                <h1 className="mt-4 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.05]">
                  Managed IT & Cybersecurity for Maine Contractors and Manufacturers
                </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/85">
                Helping HVAC contractors, electrical contractors, landscaping companies, manufacturers, and engineering firms reduce downtime, strengthen cybersecurity, and support business growth.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/schedule-assessment"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep hover:bg-white/90"
                >
                  Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:2076922415"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Talk With an IT Expert · 207-692-2415
                </a>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
                {[
                  ["Locally owned", "Based in Oakland, ME"],
                  ["Contractor-first", "Built for the trades"],
                  ["Real humans", "Responsive Maine team"],
                  ["Fixed pricing", "No surprise invoices"],
                ].map(([t, s]) => (
                  <div key={t}>
                    <p className="font-display font-semibold text-white">{t}</p>
                    <p className="text-sm text-white/70">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={heroAsset.url}
                alt="Contractor using a tablet with project management software at a Maine construction site"
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl shadow-black/25 object-cover w-full aspect-[3/2]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>


      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-brand-soft/50 border-y border-border">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Who we serve</p>
              <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
                Built for Maine Contractors and Manufacturers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We speak your language and understand how you actually work — dispatch, take-offs, production runs,
                field crews, and everything in between.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => {
              const Icon = industryIcons[ind.slug] ?? Building2;
              return (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="group rounded-2xl border border-border bg-card p-7 hover:border-brand hover:shadow-md transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{ind.hero}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                    See how we help <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Business outcomes, not tech specs</p>
            <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
              What Better Technology Means for Your Business
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We measure our work by what changes for your company — fewer fires, more billable hours, and a business
              that's easier to run.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-warm/15 text-accent-warm">
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 lg:py-24 bg-brand-soft/50 border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">A local partner, not a call center</p>
            <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
              A Maine-based team that answers the phone
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Snow Pond Technology Group is locally owned and operated from Oakland, Maine. We work with a focused
              group of contractors and manufacturers because we believe great technology support is a relationship —
              one you can count on for years, not one you dread calling.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Locally owned and operated — no offshore call centers",
                "Central Maine based, on-site across Central & Southern Maine",
                "Personal service from advisors who know your business",
                "Responsive support with clear communication and no jargon",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <span className="text-foreground">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
              >
                About Snow Pond Technology Group
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["30-min", "Free technology assessment"],
              ["5 cities", "Served across Central & Southern Maine"],
              ["100%", "Locally owned in Oakland, ME"],
              ["22 Years", "Serving Maine businesses since 2004"],
            ].map(([big, small]) => (
              <div key={big} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-3xl font-bold text-brand">{big}</p>
                <p className="mt-2 text-sm text-muted-foreground">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
