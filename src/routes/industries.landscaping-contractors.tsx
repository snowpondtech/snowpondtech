import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("landscaping-contractors")!;

export const Route = createFileRoute("/industries/landscaping-contractors")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services for Landscaping Contractors in Maine " },
      { name: "description", content: " Snow Pond Technology Group|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:title", content: "IT Services for Landscaping Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:url", content: "https://snowpondtech.com/industries/landscaping-contractors" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/landscaping-contractors" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={"/images/LandscapingContractors.png"}
      imageAlt="Landscaping contractor using a tablet on a residential job site while crew installs plants and hardscaping"
      imageHeading="Built for landscaping contractors"
      imageSubheading="IT support that grows with your season and your crew"
    />
  ),
});
