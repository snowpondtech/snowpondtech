import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";
import landscapingImage from "../assets/LandscapingContractors.png.asset.json";

const industry = getIndustry("landscaping-contractors")!;

export const Route = createFileRoute("/industries/landscaping-contractors")({
  head: () => ({
    meta: [
      { title: "IT Services for Landscaping Contractors in Maine " },
      { name: "description", content: " Snow Pond Tech|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:title", content: "IT Services for Landscaping Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Tech|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:url", content: "/industries/landscaping-contractors" },
    ],
    links: [{ rel: "canonical", href: "/industries/landscaping-contractors" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={landscapingImage.url}
      imageAlt="Landscaping contractor using a tablet on a residential job site while crew installs plants and hardscaping"
      imageHeading="Built for landscaping contractors"
      imageSubheading="IT support that grows with your season and your crew"
    />
  ),
});
