import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("engineering-firms")!;

export const Route = createFileRoute("/industries/engineering-firms")({
  head: () => ({
    meta: [
      { title: "IT Services for Engineering Firms in Maine " },
      { name: "description", content: " Snow Pond Tech|Workstations, secure remote access, and IP protection for Maine engineering firms running CAD, BIM, and modeling workloads." },
      { property: "og:title", content: "IT Services for Engineering Firms in Maine " },
      { property: "og:description", content: " Snow Pond Tech|Workstations, secure remote access, and IP protection for Maine engineering firms running CAD, BIM, and modeling workloads." },
      { property: "og:url", content: "/industries/engineering-firms" },
    ],
    links: [{ rel: "canonical", href: "/industries/engineering-firms" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
