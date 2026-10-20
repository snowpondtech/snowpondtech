import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";
import electricalImage from "../assets/ElectricalContractors.png.asset.json";

const industry = getIndustry("electrical-contractors")!;

export const Route = createFileRoute("/industries/electrical-contractors")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services for Electrical Contractors in Maine " },
      { name: "description", content: " Snow Pond Technology Group|IT support, cybersecurity, and business technology for Maine electrical contractors — from estimators to job sites to the front office." },
      { property: "og:title", content: "IT Services for Electrical Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|IT support, cybersecurity, and business technology for Maine electrical contractors — from estimators to job sites to the front office." },
      { property: "og:url", content: "https://snowpondtech.com/industries/electrical-contractors" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/electrical-contractors" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={electricalImage.url}
      imageAlt="Two electrical contractors reviewing project plans on a tablet at a construction site"
      imageHeading="On the job site"
      imageSubheading="Technology that works where your electricians work"
    />
  ),
});
