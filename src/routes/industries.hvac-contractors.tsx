import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("hvac-contractors")!;

export const Route = createFileRoute("/industries/hvac-contractors")({
  head: () => ({
    meta: [
      { title: "IT Services for HVAC Contractors in Maine " },
      { name: "description", content: " Snow Pond|Managed IT, cybersecurity, and mobile workforce support built for Maine HVAC contractors. Keep dispatch, technicians, and the office moving as one." },
      { property: "og:title", content: "IT Services for HVAC Contractors in Maine " },
      { property: "og:description", content: " Snow Pond|Managed IT, cybersecurity, and mobile workforce support built for Maine HVAC contractors. Keep dispatch, technicians, and the office moving as one." },
      { property: "og:url", content: "/industries/hvac-contractors" },
    ],
    links: [{ rel: "canonical", href: "/industries/hvac-contractors" }],
  }),
  component: () => <IndustryPage industry={industry} />,
});
