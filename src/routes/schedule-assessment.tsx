import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Turnstile } from "../components/site/Turnstile";
import { CheckCircle2 } from "lucide-react";
import { useTurnstileForm } from "../hooks/use-turnstile-form";
import { Button } from "../components/ui/button";
import assessmentImage from "../assets/TechnologyAssessment.png.asset.json";

export const Route = createFileRoute("/schedule-assessment")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { title: "Schedule a Free Technology Assessment | Snow Pond Technology Group" },
      {
        name: "description",
        content:
          "Book a free 30-minute technology assessment with a Maine-based advisor. No sales pressure — walk away with a clear picture of where your technology stands.",
      },
      { property: "og:title", content: "Schedule a Free Technology Assessment" },
      {
        property: "og:description",
        content:
          "Free 30-minute assessment for Maine contractors, manufacturers, and small businesses. No jargon, no pressure.",
      },
      { property: "og:url", content: "https://snowpondtech.com/schedule-assessment" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/schedule-assessment" }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const { sent, busy, error, widgetVersion, setToken, submit } = useTurnstileForm("assessment");

  return (
    <>
      <PageHero
        eyebrow="Free Assessment"
        title="Schedule a Free Technology Assessment"
        description="A 30-minute conversation with a Maine-based advisor — no sales pressure, no jargon. Walk away with a clear picture of where your technology is helping (and where it's holding you back)."
        media={
          <img
            src={assessmentImage.url}
            alt="Technology assessment checklist with IT security, network, and cloud review items on a desk with laptop and network equipment"
            className="w-3/4 mx-auto rounded-2xl shadow-xl aspect-[16/9] object-cover"
          />
        }
      >
        <></>
      </PageHero>

      <section className="py-20 lg:py-24">
        <div className="container-page max-w-3xl mx-auto">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-sm">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-foreground">
                  Thanks — your assessment request is in.
                </h2>
                <p className="mt-2 text-muted-foreground">
                  We'll reach out within one business day to schedule your session. For anything urgent, call{" "}
                  <a className="text-brand font-semibold" href="tel:2076922415">207-692-2415</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-5"
              >
                {/* Honeypot — hidden from users, tempting to bots */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Company Name" name="company" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="industry">
                      Industry <span className="text-brand">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      defaultValue=""
                      className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="" disabled>Select an industry</option>
                      <option>HVAC Contractor</option>
                      <option>Electrical Contractor</option>
                      <option>Landscaping Contractor</option>
                      <option>General Contractor</option>
                      <option>Manufacturing</option>
                      <option>Engineering Firm</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="employees">
                      Number of Employees <span className="text-brand">*</span>
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      defaultValue=""
                      className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <option value="" disabled>Select a range</option>
                      <option>1-10</option>
                      <option>11-25</option>
                      <option>26-50</option>
                      <option>51+</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="challenges">
                    What challenges are you looking to solve? <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={5}
                    required
                    className="rounded-md border border-input bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Downtime, cybersecurity, cyber insurance requirements, growth planning, communications — whatever's on your mind."
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="currentVendor">
                    Current IT Vendor <span className="text-brand">*</span>
                  </label>
                  <select
                    id="currentVendor"
                    name="currentVendor"
                    required
                    defaultValue=""
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Yes">Yes — we have an outside IT vendor</option>
                    <option value="No">No — we don't have IT support</option>
                    <option value="Internal">Internal — handled in-house</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer" htmlFor="consent">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-0.5 h-4 w-4 rounded border-border text-brand focus:ring-brand"
                    />
                    <span>
                      I agree to the{" "}
                      <Link to="/privacy-policy" className="text-brand hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <Turnstile key={widgetVersion} action="assessment" onToken={setToken} />
                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}

                <Button
                  type="submit"
                  disabled={busy}
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-accent-warm px-6 py-3 text-sm font-semibold text-accent-warm-foreground ring-1 ring-accent-warm-deep/30 hover:bg-accent-warm-deep transition-colors"
                >
                  {busy ? "Verifying…" : "Schedule my free technology assessment"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Prefer to talk? Call <a className="text-brand font-medium" href="tel:2076922415">207-692-2415</a>.
                </p>
              </form>
            )}
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
