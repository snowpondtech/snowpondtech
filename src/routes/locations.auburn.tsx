import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("auburn")!;

export const Route = createFileRoute("/locations/auburn")({
  head: () => ({
    meta: [
      { title: "IT Services in Auburn, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT and cybersecurity for Auburn, Maine manufacturers, distributors, and contractors." },
      { property: "og:title", content: "IT Services in Auburn, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT and cybersecurity for Auburn, Maine manufacturers, distributors, and contractors." },
      { property: "og:url", content: "/locations/auburn" },
    ],
    links: [{ rel: "canonical", href: "/locations/auburn" }],
  }),
  component: () => <LocationPage location={location} />,
});
