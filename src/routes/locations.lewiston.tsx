import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("lewiston")!;

export const Route = createFileRoute("/locations/lewiston")({
  head: () => ({
    meta: [
      { title: "IT Services in Lewiston, Maine " },
      { name: "description", content: " Snow Pond Technology Group|IT support, cybersecurity, and backup for Lewiston, Maine manufacturers and contractors — from a Maine-owned partner." },
      { property: "og:title", content: "IT Services in Lewiston, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|IT support, cybersecurity, and backup for Lewiston, Maine manufacturers and contractors — from a Maine-owned partner." },
      { property: "og:url", content: "/locations/lewiston" },
    ],
    links: [{ rel: "canonical", href: "/locations/lewiston" }],
  }),
  component: () => <LocationPage location={location} />,
});
