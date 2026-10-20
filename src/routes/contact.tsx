import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Turnstile } from "../components/site/Turnstile";
import { Building2, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTurnstileForm } from "../hooks/use-turnstile-form";
import { Button } from "../components/ui/button";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
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
      { property: "og:url", content: "https://snowpondtech.com/contact" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { sent, busy, error, widgetVersion, setToken, submit } = useTurnstileForm("contact");

  return (
    <>
      <PageHero
        title="Contact Us"
        description={
          <>
            Have a question? Need to reach our team? Use the form below for general inquiries and we'll get back to you as soon as possible. Looking for IT guidance, cybersecurity advice, or a technology review? Request a{" "}
            <Link to="/schedule-assessment" className="underline hover:text-white">
              Free Assessment
            </Link>{" "}
            instead.
          </>
        }
      >
        <></>
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
                  <Field label="Company" name="company" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-md border border-field-border bg-field p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand"
                    placeholder="Vendor inquiry, employment inquiry, partnership inquiry, and miscellaneous."
                  />
                </div>
                <div className="grid gap-2">
                  <label className="flex items-start gap-2 text-sm text-foreground cursor-pointer" htmlFor="consent">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-0.5 h-4 w-4 rounded border-field-border text-brand focus:ring-brand"
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
                <Turnstile key={widgetVersion} action="contact" onToken={setToken} />
                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
                <Button
                  type="submit"
                  disabled={busy}
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep"
                >
                  {busy ? "Verifying…" : "Send message"}
                </Button>
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
                  <MapPin className="h-4 w-4 text-brand" /> 54 Main St, Ste 2B, Oakland, ME 04963
                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-brand mt-0.5" />
                  <span>
                    8am to 5pm Eastern Time<br />
                    Monday to Friday<br />
                    Closed all federal holidays
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[4/3] bg-brand-soft">
                <iframe
                  title="Snow Pond Technology Group office location"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=54+Main+St,+Ste+2B,+Oakland,+ME+04963&output=embed"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Mailing address</p>
              <p className="mt-2 flex items-start gap-3 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4 text-brand mt-0.5" />
                <span>325 Main St, Ste 116, Waterville, ME 04901</span>
              </p>
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
        className="h-11 rounded-md border border-field-border bg-field px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
