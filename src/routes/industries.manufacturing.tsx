import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("manufacturing")!;

export const Route = createFileRoute("/industries/manufacturing")({
  head: () => ({
    meta: [
      { title: "Managed IT Services for Manufacturers in Maine " },
      { name: "description", content: " Snow Pond|Managed IT, cybersecurity, and ERP support for Maine manufacturers. Reduce downtime, meet customer security requirements, and grow with confidence." },
      { property: "og:title", content: "Managed IT Services for Manufacturers in Maine " },
      { property: "og:description", content: " Snow Pond|Managed IT, cybersecurity, and ERP support for Maine manufacturers. Reduce downtime, meet customer security requirements, and grow with confidence." },
      { property: "og:url", content: "/industries/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/industries/manufacturing" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
