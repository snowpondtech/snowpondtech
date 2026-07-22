import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("brunswick")!;

export const Route = createFileRoute("/locations/brunswick")({
  head: () => ({
    meta: [
      { title: "IT Services in Brunswick, Maine " },
      { name: "description", content: " Snow Pond Technology Group|IT support, cybersecurity, and cloud services for Brunswick-area engineering firms, contractors, and specialty trades." },
      { property: "og:title", content: "IT Services in Brunswick, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|IT support, cybersecurity, and cloud services for Brunswick-area engineering firms, contractors, and specialty trades." },
      { property: "og:url", content: "/locations/brunswick" },
    ],
    links: [{ rel: "canonical", href: "/locations/brunswick" }],
  }),
  component: () => <LocationPage location={location} />,
});
