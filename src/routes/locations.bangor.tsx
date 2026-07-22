import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("bangor")!;

export const Route = createFileRoute("/locations/bangor")({
  head: () => ({
    meta: [
      { title: "Managed IT Services in Bangor, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology strategy for Bangor-area contractors and manufacturers." },
      { property: "og:title", content: "Managed IT Services in Bangor, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology strategy for Bangor-area contractors and manufacturers." },
      { property: "og:url", content: "/locations/bangor" },
    ],
    links: [{ rel: "canonical", href: "/locations/bangor" }],
  }),
  component: () => <LocationPage location={location} />,
});
