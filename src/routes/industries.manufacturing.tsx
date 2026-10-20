import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("manufacturing")!;

export const Route = createFileRoute("/industries/manufacturing")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Managed IT Services for Manufacturers in Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and ERP support for Maine manufacturers. Reduce downtime, meet customer security requirements, and grow with confidence." },
      { property: "og:title", content: "Managed IT Services for Manufacturers in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and ERP support for Maine manufacturers. Reduce downtime, meet customer security requirements, and grow with confidence." },
      { property: "og:url", content: "https://snowpondtech.com/industries/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/manufacturing" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={"/images/ManufacturingContractors.png"}
      imageAlt="Manufacturing team reviewing production plans on a tablet in a precision machine shop"
      imageHeading="Built for modern manufacturers"
      imageSubheading="Technology that keeps production running"
    />
  ),
});
