import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { LinkedInIcon } from "../components/site/SocialIcons";
import ownerHeadshot from "@/assets/owner-headshot.jpg.asset.json";
import badge365 from "@/assets/365-badge.png.asset.json";
import midMaineChamber from "@/assets/midmaine-chamber-logo.png.asset.json";
import kennebecValleyChamber from "@/assets/kennebec-valley-chamber-logo.png.asset.json";
import asciiGroup from "@/assets/ascii-group-logo.png.asset.json";
import nsitsp from "@/assets/nsitsp-logo.png.asset.json";
import oaklandAerial from "@/assets/oakland-maine-aerial.jpg.asset.json";

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

const affiliations = [
  { name: "Mid-Maine Chamber of Commerce", url: "https://www.midmainechamber.com/", logo: midMaineChamber },
  { name: "Kennebec Valley Chamber of Commerce", url: "https://kennebecvalleychamber.com/", logo: kennebecValleyChamber },
  { name: "The ASCII Group", url: "https://www.ascii.com/", logo: asciiGroup },
  { name: "National Society of IT Service Providers", url: "https://nsitsp.org/", logo: nsitsp },
];

const coreValues = [
  { title: "Security First", body: "We prioritize the protection of our clients' businesses, data, and people in every recommendation we make." },
  { title: "Integrity Without Compromise", body: "We do the right thing, communicate honestly, and stand behind our work." },
  { title: "Proactive Service", body: "We prevent problems whenever possible rather than simply reacting when things break." },
  { title: "Relationships Matter", body: "We build long-term partnerships based on trust, responsiveness, and genuine care for our clients' success." },
  { title: "Lifelong Learning", body: "Technology constantly evolves. We continuously improve our knowledge, skills, and processes to better serve our clients." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Snow Pond Technology Group"
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
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border bg-card p-5">
              <img
                src={badge365.url}
                alt="365 Small Business Circle Member, United Way Kennebec Valley"
                className="h-28 w-28 shrink-0 object-contain"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Snow Pond Technology Group is a proud member of the <span className="font-semibold text-foreground">365 Small Business Circle</span>,
                giving back to our community in partnership with <span className="font-semibold text-foreground">United Way Kennebec Valley</span>.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-brand-soft/60 p-8 lg:p-10">
            <img
              src={ownerHeadshot.url}
              alt="Joshua Zukerman, owner of Snow Pond Technology Group"
              className="mx-auto h-64 w-64 rounded-2xl object-cover shadow-lg"
            />
            <p className="mt-6 font-display text-2xl font-semibold text-foreground">Meet the owner</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hi, I'm Joshua Zukerman, owner of Snow Pond Technology Group. I help contractors, manufacturers, and small
              businesses across Central and Southern Maine reduce downtime, improve cybersecurity, and get more value from
              their technology.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My goal is simple: provide responsive, practical IT support that helps business owners focus on running their
              business instead of dealing with technology problems.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:2076922415"
                className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
              >
                Call 207-692-2415
              </a>
              <a
                href="https://www.linkedin.com/in/joshuazukerman/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/80"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Our Mission</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">Protect and empower Maine businesses</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To protect and empower Maine businesses through secure, reliable technology and trusted IT leadership.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Our Vision</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">The most trusted IT partner in Maine</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become the most trusted IT and cybersecurity partner for small businesses throughout Maine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-soft/50 border-y border-border">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Our Core Values</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">What guides our work every day</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Memberships & affiliations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
              Connected to the communities and industries we serve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're active members of the organizations that matter to Maine businesses and the IT profession — keeping us
              plugged into local networks and national best practices.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {affiliations.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40 hover:bg-brand-soft/40"
              >
                <img
                  src={a.logo.url}
                  alt={`${a.name} logo`}
                  className="h-20 w-full object-contain"
                  loading="lazy"
                />
                <span className="mt-4 text-center text-xs font-medium text-muted-foreground leading-snug">{a.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's see if we're a good fit" subtitle="Every relationship starts with a conversation. Book a discovery call and we'll take it from there." />
    </>
  );
}
