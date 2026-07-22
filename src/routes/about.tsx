import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { Handshake, HeartHandshake, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Snow Pond Technology Group | Maine-Owned IT Partner" },
      {
        name: "description",
        content:
          "Snow Pond Technology Group is a locally owned Maine IT partner based in Oakland. We help contractors and manufacturers build long-term technology strategies that support growth.",
      },
      { property: "og:title", content: "About Snow Pond Technology Group" },
      {
        property: "og:description",
        content:
          "Locally owned in Oakland, Maine. A trusted technology advisor for contractors and manufacturers across Central and Southern Maine.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: MapPin, title: "Local and rooted in Maine", body: "Oakland-based, working with businesses we can drive to. When you call, you talk to someone who knows the state, the seasons, and the way work gets done here." },
  { icon: Handshake, title: "Long-term partnerships", body: "We aren't chasing logos. We take on a small number of clients and grow with them, learning their business inside and out." },
  { icon: HeartHandshake, title: "Personalized service", body: "You get a dedicated advisor and a team that recognizes your voice. No ticket-number black holes, no overseas call centers." },
  { icon: ShieldCheck, title: "Straight talk", body: "We won't sell you things you don't need. If a simpler answer solves the problem, that's what we'll recommend." },
  { icon: Users, title: "Focused on your people", body: "Owners, office staff, shop floor, and field crews all use different tools in different conditions. Good IT works for all of them." },
  { icon: Sparkles, title: "Built for growth", body: "We think two, three, five years ahead — so hiring, opening a new location, or taking on bigger jobs doesn't blow up the tech." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Snow Pond"
        title="A Maine technology partner that thinks like an owner"
        description="Snow Pond Technology Group is a locally owned company based in Oakland, Maine. We help contractors and manufacturers across Central and Southern Maine turn technology from a source of frustration into a competitive advantage."
      />

      <section className="py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Our story</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
              Built in Maine, for the businesses that build Maine
            </h2>
            <div className="mt-5 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Snow Pond Technology Group was founded to serve the businesses that keep Maine running — the trades,
                the manufacturers, the engineering firms, and the contractors whose crews are on the road before
                sunrise.
              </p>
              <p>
                These owners don't need another vendor selling licenses. They need a trusted advisor who can look at
                the whole business and help make smart, practical technology decisions that actually move the needle.
              </p>
              <p>
                That's the role we play. Strategy, security, and steady day-to-day support — from a team that
                genuinely cares about your success.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-brand-soft/60 p-8 lg:p-10">
            <p className="font-display text-2xl font-semibold text-foreground">Meet the owner</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Snow Pond is led by a Maine-based owner with a background in business technology and a deep respect for
              the trades and manufacturers who make this state work. Every client engagement includes direct access to
              ownership — not a layer of account managers between you and the people making decisions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Full owner biography and photo coming soon. In the meantime, the fastest way to get to know us is a
              30-minute discovery call.
            </p>
            <a
              href="tel:2076922415"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
            >
              Call 207-692-2415
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-soft/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">What we stand for</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">How we work with clients</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's see if we're a good fit" subtitle="Every relationship starts with a conversation. Book a discovery call and we'll take it from there." />
    </>
  );
}
