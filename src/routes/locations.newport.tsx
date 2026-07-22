import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("newport")!;

export const Route = createFileRoute("/locations/newport")({
  head: () => ({
    meta: [
      { title: "IT Support in Newport, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT services for Newport, Maine contractors and shops. Locally owned, contractor-focused, and just up the road." },
      { property: "og:title", content: "IT Support in Newport, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT services for Newport, Maine contractors and shops. Locally owned, contractor-focused, and just up the road." },
      { property: "og:url", content: "/locations/newport" },
    ],
    links: [{ rel: "canonical", href: "/locations/newport" }],
  }),
  component: () => <LocationPage location={location} />,
});
