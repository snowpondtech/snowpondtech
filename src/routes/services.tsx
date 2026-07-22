import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import {
  Activity,
  Cloud,
  Cog,
  Compass,
  DatabaseBackup,
  Headphones,
  LifeBuoy,
  Lock,
  Mail,
  ShieldCheck,
  GraduationCap,
  Server,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services for Maine Contractors & Manufacturers | Snow Pond" },
      {
        name: "description",
        content:
          "Managed IT, cybersecurity, cloud, and business continuity services built for Maine contractors and manufacturers. Organized around outcomes, not tech jargon.",
      },
      { property: "og:title", content: "IT Services for Maine Contractors & Manufacturers" },
      {
        property: "og:description",
        content:
          "Keep your business running, protect it from cyber threats, support growth, and prepare for the unexpected — with a Maine-based technology partner.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Headphones,
    title: "Keep Your Business Running",
    tag: "Day to day",
    body: "Reliable, responsive support so your people can focus on the work in front of them.",
    items: [
      { icon: LifeBuoy, name: "IT Support", desc: "Real humans, quick response, and clear communication when something breaks." },
      { icon: Activity, name: "Monitoring", desc: "Proactive monitoring of your systems so we catch issues before they cost you." },
      { icon: Cog, name: "Vendor Management", desc: "We handle your ISP, phone system, software, and hardware vendors so you don't have to." },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Business",
    tag: "Security",
    body: "Layered defenses that satisfy your insurer, your customers, and your own peace of mind.",
    items: [
      { icon: Lock, name: "Cybersecurity", desc: "Endpoint protection, MFA, patching, and monitoring — the controls that actually matter." },
      { icon: Mail, name: "Email Security", desc: "Stop phishing, spoofing, and business email compromise before it hits your team." },
      { icon: GraduationCap, name: "Security Awareness Training", desc: "Short, practical training so your people are the first line of defense, not the weak link." },
    ],
  },
  {
    icon: Compass,
    title: "Support Your Growth",
    tag: "Strategy",
    body: "A real technology roadmap that lines up with where your business is going next.",
    items: [
      { icon: Compass, name: "Technology Planning", desc: "Quarterly business reviews, budget planning, and a multi-year roadmap you can actually use." },
      { icon: Server, name: "Microsoft 365", desc: "Email, Teams, SharePoint, and OneDrive set up the right way — with the security controls turned on." },
      { icon: Cloud, name: "Cloud Services", desc: "Move the right workloads to the cloud, keep the rest where they run best, and make it all work together." },
    ],
  },
  {
    icon: DatabaseBackup,
    title: "Prepare for the Unexpected",
    tag: "Continuity",
    body: "So a bad day — hardware failure, ransomware, storm, mistake — doesn't become a bad quarter.",
    items: [
      { icon: DatabaseBackup, name: "Backup", desc: "Automated, tested backups of the data that keeps your business running." },
      { icon: LifeBuoy, name: "Disaster Recovery", desc: "A written plan and the tools to get systems back online quickly when things go wrong." },
      { icon: ShieldCheck, name: "Business Continuity", desc: "Keep operating through outages, incidents, and unexpected events — not just recover after them." },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services built around business outcomes"
        description="We don't sell tools — we deliver results. Every service is organized around the outcome it produces for your business: uptime, security, growth, and resilience."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page space-y-16">
          {groups.map((group) => (
            <div key={group.title} className="grid lg:grid-cols-[1fr_2fr] gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{group.tag}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <group.icon className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-foreground">{group.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{group.body}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Not sure which of these you need?" subtitle="A free technology assessment gives you an honest, prioritized view of where to start — and what can wait." />
    </>
  );
}
