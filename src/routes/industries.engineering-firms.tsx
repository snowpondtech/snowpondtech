import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("engineering-firms")!;

export const Route = createFileRoute("/industries/engineering-firms")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services for Engineering Firms in Maine " },
      { name: "description", content: " Snow Pond Technology Group|Workstations, secure remote access, and IP protection for Maine engineering firms running CAD, BIM, and modeling workloads." },
      { property: "og:title", content: "IT Services for Engineering Firms in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Workstations, secure remote access, and IP protection for Maine engineering firms running CAD, BIM, and modeling workloads." },
      { property: "og:url", content: "https://snowpondtech.com/industries/engineering-firms" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/engineering-firms" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={"/images/EngineeringFirms.png"}
      imageAlt="Engineering team reviewing architectural blueprints and CAD designs in a modern office"
      imageHeading="Designed for engineering teams"
      imageSubheading="Technology that keeps your projects moving"
    />
  ),
});
