import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("biddeford")!;

export const Route = createFileRoute("/locations/biddeford")({
  head: () => ({
    meta: [
      { title: "IT Services in Biddeford, Maine " },
      { name: "description", content: " Snow Pond Technology Group|IT support and cybersecurity for Biddeford and Saco contractors and manufacturers modernizing their technology." },
      { property: "og:title", content: "IT Services in Biddeford, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|IT support and cybersecurity for Biddeford and Saco contractors and manufacturers modernizing their technology." },
      { property: "og:url", content: "/locations/biddeford" },
    ],
    links: [{ rel: "canonical", href: "/locations/biddeford" }],
  }),
  component: () => <LocationPage location={location} />,
});
