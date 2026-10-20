import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { title: "Privacy Policy | Snow Pond Technology Group" },
      {
        name: "description",
        content:
          "Privacy policy for Snow Pond Technology Group. Learn how we collect, use, and protect information submitted through our website.",
      },
      { property: "og:title", content: "Privacy Policy | Snow Pond Technology Group" },
      {
        property: "og:description",
        content:
          "Privacy policy for Snow Pond Technology Group.",
      },
      { property: "og:url", content: "https://snowpondtech.com/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is maintained by Snow Pond Technology Group to answer common privacy questions about our website and contact form."
      />
      <section className="py-16 lg:py-20">
        <div className="container-page max-w-3xl mx-auto space-y-8 text-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-3">Information we collect</h2>
            <p className="text-muted-foreground">
              When you use our contact form, we collect the information you choose to provide, such as your name, company name, email address, phone number, industry, and message. We use this information only to respond to your inquiry and follow up about our services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">How we use your information</h2>
            <p className="text-muted-foreground">
              We use the information you provide to communicate with you, understand your business needs, and deliver or propose IT services. We do not sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Sharing and retention</h2>
            <p className="text-muted-foreground">
              We retain inquiry records only as long as needed for business and legal purposes. We may share information with service providers who help us operate our business, such as email and hosting providers, under confidentiality obligations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Your choices</h2>
            <p className="text-muted-foreground">
              You can choose not to submit the contact form. If you have questions about information you have provided, contact us at{" "}
              <a href="mailto:info@snowpondtech.com" className="text-brand hover:underline">info@snowpondtech.com</a>{" "}
              or call{" "}
              <a href="tel:2076922415" className="text-brand hover:underline">207-692-2415</a>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Updates to this page</h2>
            <p className="text-muted-foreground">
              We may update this page from time to time. This page is app-owned editable content and not independent legal advice or verification.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
