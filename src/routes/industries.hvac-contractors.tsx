import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("hvac-contractors")!;

export const Route = createFileRoute("/industries/hvac-contractors")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services for HVAC Contractors in Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and mobile workforce support built for Maine HVAC contractors. Keep dispatch, technicians, and the office moving as one." },
      { property: "og:title", content: "IT Services for HVAC Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and mobile workforce support built for Maine HVAC contractors. Keep dispatch, technicians, and the office moving as one." },
      { property: "og:url", content: "https://snowpondtech.com/industries/hvac-contractors" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/hvac-contractors" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={"/images/HVACContractors.png"}
      imageAlt="HVAC technician using a tablet on a commercial rooftop while servicing equipment"
      imageHeading="Built for HVAC contractors"
      imageSubheading="IT support that keeps your team in the field and the office in sync"
    />
  ),
});
