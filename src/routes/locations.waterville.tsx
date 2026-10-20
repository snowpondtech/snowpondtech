import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("waterville")!;

export const Route = createFileRoute("/locations/waterville")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Support in Waterville, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Waterville, Maine IT support and cybersecurity for contractors and manufacturers, delivered from our nearby Oakland office." },
      { property: "og:title", content: "IT Support in Waterville, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Waterville, Maine IT support and cybersecurity for contractors and manufacturers, delivered from our nearby Oakland office." },
      { property: "og:url", content: "https://snowpondtech.com/locations/waterville" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/locations/waterville" }],
  }),
  component: () => <LocationPage location={location} />,
});
