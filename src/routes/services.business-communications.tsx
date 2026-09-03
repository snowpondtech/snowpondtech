import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "../components/site/PageHero";
import {
  BadgeCheck,
  CalendarCheck,
  CloudSun,
  Factory,
  Fan,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/services/business-communications")({
  head: () => ({
    meta: [
      {
        title:
          "Business Communications for Maine Contractors & Manufacturers | Snow Pond Technology Group",
      },
      {
        name: "description",
        content:
          "Modern phone systems, VoIP, and unified communications for Maine contractors and manufacturers. Keep office, field, and remote teams connected.",
      },
      {
        property: "og:title",
        content: "Business Communications for Maine Contractors & Manufacturers",
      },
      {
        property: "og:description",
        content:
          "Modern phone systems, VoIP, and unified communications for Maine contractors and manufacturers. Keep office, field, and remote teams connected.",
      },
      { property: "og:url", content: "/services/business-communications" },
    ],
    links: [{ rel: "canonical", href: "/services/business-communications" }],
  }),
  component: BusinessCommunicationsPage,
});

const challenges = [
  "Employees missing important customer calls",
  "Difficulty transferring calls between locations",
  "Limited support for remote or mobile workers",
  "Outdated phone systems that are expensive to maintain",
  "Lack of visibility into business communications",
  "Poor call quality and reliability",
  "No disaster recovery plan for phone outages",
  "Separate systems for office and mobile employees",
];

const connectedBenefits = [
  "Mobile calling from business numbers",
  "Call transfer between devices",
  "Voicemail to email",
  "Remote worker support",
  "Team messaging and collaboration",
  "Unified communications across locations",
];

const contractorIndustries = [
  {
    icon: Fan,
    title: "HVAC Contractors",
    desc: "Keep dispatchers, office staff, and technicians connected throughout the day.",
    bullets: [
      "Route calls efficiently",
      "Support after-hours call handling",
      "Enable mobile communication for technicians",
      "Improve responsiveness to customers",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Contractors",
    desc: "Support multiple projects and crews with reliable communication.",
    bullets: [
      "Connect field and office staff",
      "Route calls by department or project",
      "Enable mobile access to company phone systems",
    ],
  },
  {
    icon: CloudSun,
    title: "Landscaping Companies",
    desc: "Stay responsive during your busiest seasons.",
    bullets: [
      "Manage calls from the office or the field",
      "Support seasonal staff",
      "Maintain professional customer communications",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing Companies",
    desc: "Improve communication between production, administration, sales, and management teams.",
    bullets: [
      "Internal communication tools",
      "Multi-location support",
      "Improved business continuity during outages",
    ],
  },
];


const whyChooseUs = [
  "Locally owned and operated",
  "Serving Central and Southern Maine",
  "Personalized service and support",
  "Solutions tailored to your business",
  "Technology aligned with your operations and growth goals",
  "A trusted partner for long-term success",
];

function BusinessCommunicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Modern Business Communications for Maine Contractors and Manufacturers"
        description="Keep your office, field teams, and customers connected from anywhere."
      >
        <></>
      </PageHero>

      <section className="py-16 bg-brand-soft/40 border-y border-border">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Communication Challenges
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-foreground">
            Communication Challenges We Help Solve
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Many growing businesses struggle with communication systems that no longer fit the way they work today.
          </p>
          <p className="mt-6 text-foreground font-medium">Common issues include:</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {challenges.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-foreground">
            When communication breaks down, productivity suffers and customer
            experience is impacted.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Work From Anywhere
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Keep Your Team Connected Anywhere
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today's workforce is no longer tied to a desk. Whether employees
              are working in the office, on a job site, in a warehouse, on the
              road, or from home, they need access to the same communication
              tools and business phone system.
            </p>
            <p className="mt-4 text-foreground">
              We help businesses implement modern communication solutions that
              allow employees to stay connected wherever work takes them.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <p className="font-semibold text-foreground">Benefits include:</p>
            <ul className="mt-5 space-y-4">
              {connectedBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-soft/40 border-y border-border">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Built for Your Industry
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Designed for Contractors and Field Service Businesses
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contractorIndustries.map((ind) => (
              <div
                key={ind.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
                <ul className="mt-4 space-y-2">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 hero-grid-bg text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <ShieldCheck className="h-10 w-10 text-white/80" />
            <h2 className="mt-4 text-3xl font-semibold">
              Business Continuity and Reliability
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              What happens if your office loses power or internet connectivity?
              Modern communication solutions can help maintain operations during
              unexpected events by allowing calls to be routed to mobile devices,
              remote employees, or alternate locations.
            </p>
            <p className="mt-4 text-white/90">
              This helps ensure your business remains accessible even during
              disruptions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Why Snow Pond Technology Group
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Why Businesses Choose Snow Pond Technology Group
            </h2>
            <ul className="mt-6 space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We focus on helping businesses improve communication, increase
              productivity, and deliver a better experience for both employees
              and customers.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Ready for Better Business Communications?
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether you're replacing an outdated phone system, supporting a
              mobile workforce, or looking to improve communication across your
              organization, Snow Pond Technology Group can help.
            </p>
            <div className="mt-6">
              <Link
                to="/schedule-assessment"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand-deep transition-colors"
              >
                <CalendarCheck className="h-4 w-4" /> Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
