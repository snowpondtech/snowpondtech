import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("electrical-contractors")!;

export const Route = createFileRoute("/industries/electrical-contractors")({
  head: () => ({
    meta: [
      { title: "IT Services for Electrical Contractors in Maine " },
      { name: "description", content: " Snow Pond Tech|IT support, cybersecurity, and business technology for Maine electrical contractors — from estimators to job sites to the front office." },
      { property: "og:title", content: "IT Services for Electrical Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Tech|IT support, cybersecurity, and business technology for Maine electrical contractors — from estimators to job sites to the front office." },
      { property: "og:url", content: "/industries/electrical-contractors" },
    ],
    links: [{ rel: "canonical", href: "/industries/electrical-contractors" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
