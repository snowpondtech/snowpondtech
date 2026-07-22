import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("augusta")!;

export const Route = createFileRoute("/locations/augusta")({
  head: () => ({
    meta: [
      { title: "IT Support in Augusta, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:title", content: "IT Support in Augusta, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:url", content: "/locations/augusta" },
    ],
    links: [{ rel: "canonical", href: "/locations/augusta" }],
  }),
  component: () => <LocationPage location={location} />,
});
