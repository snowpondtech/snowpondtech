import { createFileRoute } from "@tanstack/react-router";
import { IndustryPage } from "../components/site/IndustryPage";
import { getIndustry } from "../data/industries";

const industry = getIndustry("general-contractors")!;

export const Route = createFileRoute("/industries/general-contractors")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services for General Contractors in Maine " },
      { name: "description", content: " Snow Pond Technology Group|Job-site connectivity, project data protection, and business IT support for general contractors across Central and Southern Maine." },
      { property: "og:title", content: "IT Services for General Contractors in Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Job-site connectivity, project data protection, and business IT support for general contractors across Central and Southern Maine." },
      { property: "og:url", content: "https://snowpondtech.com/industries/general-contractors" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/industries/general-contractors" }],
  }),
  component: () => (
    <IndustryPage
      industry={industry}
      image={"/images/GeneralContractors.png"}
      imageAlt="General contractor using a tablet on a job site to review plans and manage project data"
      imageHeading="Built for general contractors"
      imageSubheading="IT support that moves with your job sites"
    />
  ),
});
