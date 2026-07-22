import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/industries/additional-industries")({
  head: () => ({
    meta: [
      { title: "Additional Industries We Serve | Snow Pond Tech" },
      {
        name: "description",
        content:
          "Beyond contractors and manufacturers, Snow Pond Technology Group supports professional services firms, nonprofits, growing SMBs, multi-location organizations, and businesses navigating cyber insurance requirements across Maine.",
      },
      { property: "og:title", content: "Additional Industries We Serve | Snow Pond Tech" },
      {
        property: "og:description",
        content:
          "Practical technology solutions that reduce downtime, improve security, and support long-term growth for a wide range of Maine organizations.",
      },
      { property: "og:url", content: "/industries/additional-industries" },
    ],
    links: [{ rel: "canonical", href: "/industries/additional-industries" }],
  }),
  component: AdditionalIndustriesPage,
});

type Segment = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  intro: string;
  challenges: string[];
  help: string[];
};

const SEGMENTS: Segment[] = [
  {
    icon: Briefcase,
    name: "Professional Services Firms",
    intro:
      "Professional services organizations depend on reliable technology and secure access to sensitive information. We work with businesses that need dependable IT support, cybersecurity protection, and modern collaboration tools to serve clients efficiently and securely.",
    challenges: [
      "Protecting confidential client information",
      "Maintaining secure remote access",
      "Managing growing volumes of digital documents",
      "Supporting hybrid work environments",
      "Meeting cybersecurity and data protection requirements",
    ],
    help: [
      "Managed IT services",
      "Microsoft 365 management",
      "Cybersecurity protection",
      "Secure file sharing and collaboration",
      "Business continuity planning",
      "Vendor management",
    ],
  },
  {
    icon: Users,
    name: "Small and Mid-Sized Businesses (10–50 Employees)",
    intro:
      "Many growing businesses reach a point where technology becomes too important to manage internally but aren't ready to hire a full-time IT department. That's where Snow Pond Technology Group can help — we provide the expertise, support, and strategic guidance of an experienced IT department without the cost and complexity of building one internally.",
    challenges: [
      "Limited internal IT expertise",
      "Reactive technology management",
      "Cybersecurity concerns",
      "Business growth creating new technology requirements",
      "Unexpected downtime and disruptions",
    ],
    help: [
      "Proactive technology management",
      "Unlimited help desk support",
      "Cybersecurity solutions",
      "Technology roadmaps and planning",
      "Microsoft 365 management",
      "Backup and disaster recovery",
    ],
  },
  {
    icon: MapPin,
    name: "Organizations with Multiple Locations",
    intro:
      "Managing technology across multiple offices, facilities, or operational sites can quickly become challenging. We help businesses standardize technology, improve communication, and maintain consistent security practices across locations.",
    challenges: [
      "Inconsistent systems and processes",
      "Connectivity between offices",
      "Managing multiple vendors",
      "Security risks across locations",
      "Supporting employees in different locations",
    ],
    help: [
      "Centralized IT management",
      "Secure networking solutions",
      "Cloud-based collaboration tools",
      "Communication systems",
      "Multi-site cybersecurity management",
      "Vendor coordination",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Businesses Under Cyber Insurance Requirements",
    intro:
      "Cyber insurance providers continue to raise security expectations for organizations of all sizes. We help businesses implement practical safeguards that support cyber insurance applications, renewals, and risk reduction efforts.",
    challenges: [
      "Multifactor authentication requirements",
      "Security awareness training requirements",
      "Email security concerns",
      "Endpoint protection requirements",
      "Documentation and policy expectations",
    ],
    help: [
      "Cybersecurity assessments",
      "Multifactor authentication deployment",
      "Endpoint security solutions",
      "Security awareness training",
      "Email protection",
      "Ongoing security management",
    ],
  },
];

const SHARED_CHALLENGES = [
  "Technology problems disrupting productivity",
  "Increasing cybersecurity threats",
  "Growing compliance and insurance requirements",
  "Limited internal IT resources",
  "Employees needing reliable access to systems and information",
];

function AdditionalIndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Additional Industries"
        title="Technology solutions for growing Maine businesses"
        description="While Snow Pond Technology Group specializes in supporting contractors, manufacturers, and engineering firms, we also work with a variety of other growing organizations throughout Central and Southern Maine."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Shared challenges</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              No matter your industry, the challenges are often the same
            </h2>
            <ul className="mt-6 space-y-4">
              {SHARED_CHALLENGES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-accent-warm flex-shrink-0" />
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Our approach</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Practical solutions, long-term partnership</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We help businesses implement practical technology solutions that reduce downtime, improve security, and support long-term growth — without unnecessary complexity or confusing technical jargon.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep transition-colors"
            >
              Schedule a Free Technology Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/40 border-y border-border py-16 lg:py-20">
        <div className="container-page space-y-12">
          {SEGMENTS.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{s.name}</h2>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">{s.intro}</p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Common challenges</p>
                  <ul className="mt-4 space-y-3">
                    {s.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <AlertTriangle className="mt-0.5 h-4 w-4 text-accent-warm flex-shrink-0" />
                        <span className="text-sm text-foreground">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">How we help</p>
                  <ul className="mt-4 space-y-3">
                    {s.help.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand flex-shrink-0" />
                        <span className="text-sm text-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              A trusted technology partner, whatever your industry
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Regardless of industry, our goal remains the same: help your business operate more efficiently, reduce technology-related disruptions, strengthen cybersecurity, and support future growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We focus on building long-term relationships and providing practical guidance that aligns technology with your business objectives. You won't find unnecessary complexity, confusing technical jargon, or solutions you don't need — you'll find a trusted technology partner dedicated to helping your business succeed.
            </p>
          </div>
          <div className="rounded-2xl border border-brand/30 bg-brand-soft/60 p-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-brand" />
              <h3 className="text-xl font-semibold text-foreground">Not sure if your business is a good fit?</h3>
            </div>
            <p className="mt-4 text-foreground leading-relaxed">
              If your organization has between 10 and 50 employees and relies on technology to serve customers, support employees, and drive growth, there's a good chance we can help.
            </p>
            <p className="mt-3 text-muted-foreground">
              Let's start with a conversation about your goals, challenges, and technology needs.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep transition-colors"
            >
              Schedule a Free Technology Assessment
            </Link>
            <div className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Snow Pond Technology Group</p>
              <p>
                <a href="tel:2076922415" className="text-brand font-medium">
                  207-692-2415
                </a>
              </p>
              <p>
                <a href="mailto:info@snowpondtech.com" className="text-brand font-medium">
                  info@snowpondtech.com
                </a>
              </p>
              <p className="mt-3">
                Serving businesses throughout Waterville, Augusta, Newport, Bangor, Lewiston, Auburn, Brunswick, Portland, Biddeford, and surrounding communities across Central and Southern Maine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
