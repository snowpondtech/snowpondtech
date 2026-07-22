import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Snow Pond Technology Group | Maine IT Support" },
      {
        name: "description",
        content:
          "Schedule a free technology assessment or book a discovery call with Snow Pond Technology Group. Serving contractors and manufacturers across Central and Southern Maine.",
      },
      { property: "og:title", content: "Contact Snow Pond Technology Group" },
      {
        property: "og:description",
        content:
          "Call 207-692-2415 or send a message. Locally owned in Oakland, Maine — serving contractors and manufacturers across Central and Southern Maine.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        description="Tell us a little about your company and what you're running into. We'll be in touch within one business day."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:2076922415"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-white/90"
          >
            <Phone className="h-4 w-4" /> 207-692-2415
          </a>
          <a
            href="mailto:info@snowpondtech.com"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> info@snowpondtech.com
          </a>
        </div>
      </PageHero>

      <section className="py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-[2fr_1fr] gap-12">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-sm">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">Thanks — we've got it.</h2>
                <p className="mt-2 text-muted-foreground">
                  We'll be in touch within one business day. For anything urgent, call{" "}
                  <a className="text-brand font-semibold" href="tel:2076922415">207-692-2415</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="industry">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option>HVAC contractor</option>
                    <option>Electrical contractor</option>
                    <option>Landscaping contractor</option>
                    <option>Manufacturing</option>
                    <option>Engineering firm</option>
                    <option>General contractor</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-md border border-input bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Tell us what's going on — downtime, cybersecurity, growth planning, insurance requirements, or something else."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
                >
                  Schedule my free technology assessment
                </button>
                <p className="text-xs text-muted-foreground">
                  Prefer to talk? Call <a className="text-brand font-medium" href="tel:2076922415">207-692-2415</a>.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:2076922415" className="flex items-center gap-3 text-foreground hover:text-brand">
                  <Phone className="h-4 w-4 text-brand" /> 207-692-2415
                </a>
                <a href="mailto:info@snowpondtech.com" className="flex items-center gap-3 text-foreground hover:text-brand">
                  <Mail className="h-4 w-4 text-brand" /> info@snowpondtech.com
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-brand" /> Oakland, Maine
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[4/3] bg-brand-soft">
                <iframe
                  title="Snow Pond Tech service area map"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Oakland,+Maine&output=embed"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-foreground">Service area</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Waterville · Augusta · Newport · Bangor · Lewiston · Auburn · Brunswick · Portland · Biddeford
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
