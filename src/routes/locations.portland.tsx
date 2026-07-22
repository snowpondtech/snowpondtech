import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("portland")!;

export const Route = createFileRoute("/locations/portland")({
  head: () => ({
    meta: [
      { title: "Managed IT Services in Portland, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:title", content: "Managed IT Services in Portland, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:url", content: "/locations/portland" },
    ],
    links: [{ rel: "canonical", href: "/locations/portland" }],
  }),
  component: () => <LocationPage location={location} />,
});
