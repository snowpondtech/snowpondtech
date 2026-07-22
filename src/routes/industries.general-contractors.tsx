import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("general-contractors")!;

export const Route = createFileRoute("/industries/general-contractors")({
  head: () => ({
    meta: [
      { title: "IT Services for General Contractors in Maine " },
      { name: "description", content: " Snow Pond|Job-site connectivity, project data protection, and business IT support for general contractors across Central and Southern Maine." },
      { property: "og:title", content: "IT Services for General Contractors in Maine " },
      { property: "og:description", content: " Snow Pond|Job-site connectivity, project data protection, and business IT support for general contractors across Central and Southern Maine." },
      { property: "og:url", content: "/industries/general-contractors" },
    ],
    links: [{ rel: "canonical", href: "/industries/general-contractors" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
