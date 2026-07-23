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
  AlertTriangle,
  Wifi,
  Lock,
  Compass,
  CloudOff,
  Database,
  FileWarning,
} from "lucide-react";
import { CTASection } from "../components/site/CTASection";
import { INDUSTRIES } from "../data/industries";
import heroAsset from "../assets/Hero-Image.png.asset.json";

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
          "Locally owned, Maine-based technology partner for contractors and manufacturers. Reduce downtime, strengthen security, keep office and field teams connected.",
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

const problems = [
  { icon: Clock, title: "Employees losing hours to tech issues", body: "Slow computers, printers that won't cooperate, and logins that don't work drain more time than most owners realize." },
  { icon: Wifi, title: "Office and field teams out of sync", body: "When the truck can't talk to the office, jobs slip, callbacks pile up, and margins disappear." },
  { icon: Lock, title: "Cybersecurity risks aimed at small business", body: "Contractors and manufacturers are prime targets — and one ransomware event can stop the whole company." },
  { icon: Compass, title: "No clear technology plan", body: "You're spending money on IT, but nobody's connecting it to where the business is going next year." },
  { icon: CloudOff, title: "Downtime that costs real money", body: "When systems go down, technicians go idle, invoices don't ship, and customers get impatient." },
  { icon: Database, title: "Worried about losing critical data", body: "Job files, drawings, payroll, customer history — losing any of it would set the business back badly." },
  { icon: FileWarning, title: "Cyber insurance getting harder", body: "Renewals now demand MFA, backup, endpoint protection, and training. If you can't check the boxes, coverage drops." },
];

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
        <div className="container-page py-20 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Oakland, Maine · Serving Central &amp; Southern Maine
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Helping Maine Contractors and Manufacturers Stay Productive, Secure, and Profitable
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Technology should help your business grow, not slow it down. Snow Pond Technology Group helps contractors
            and manufacturers across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support
            their teams — in the office and in the field.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              to="/schedule-assessment"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep hover:bg-white/90"
            >
              Schedule a Free Technology Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:2076922415"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Talk With an IT Expert · 207-692-2415
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
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
      </section>

      {/* PROBLEMS */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">The cost of bad technology</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Technology Problems Cost You Time and Money
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              You didn't start your company to become an IT manager. But when technology gets in the way, everything
              slows down — from the shop floor to the front office to the job site.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-sm transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">Any of this sound familiar?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A free technology assessment is a no-pressure way to find out what's costing you — and what's not.
                </p>
              </div>
              <Link
                to="/schedule-assessment"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
              >
                Book your assessment <ArrowRight className="h-4 w-4" />
              </Link>
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
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
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
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
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
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
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
                About Snow Pond Tech
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
              ["9 cities", "Served across Central & Southern Maine"],
              ["100%", "Locally owned in Oakland, ME"],
              ["1 partner", "For strategy, security, and support"],
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
