import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("landscaping-contractors")!;

export const Route = createFileRoute("/industries/landscaping-contractors")({
  head: () => ({
    meta: [
      { title: "IT Services for Landscaping Contractors in Maine " },
      { name: "description", content: " Snow Pond|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:title", content: "IT Services for Landscaping Contractors in Maine " },
      { property: "og:description", content: " Snow Pond|Reliable communications, cybersecurity, and business technology for Maine landscaping companies with seasonal crews and distributed teams." },
      { property: "og:url", content: "/industries/landscaping-contractors" },
    ],
    links: [{ rel: "canonical", href: "/industries/landscaping-contractors" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
