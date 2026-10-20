import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("lewiston-auburn")!;

export const Route = createFileRoute("/locations/lewiston-auburn")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Services in Lewiston-Auburn, Maine | Snow Pond Technology Group" },
      {
        name: "description",
        content:
          "IT support, cybersecurity, and backup for Lewiston-Auburn, Maine manufacturers and contractors — from a Maine-owned partner.",
      },
      { property: "og:title", content: "IT Services in Lewiston-Auburn, Maine | Snow Pond Technology Group" },
      {
        property: "og:description",
        content:
          "IT support, cybersecurity, and backup for Lewiston-Auburn, Maine manufacturers and contractors — from a Maine-owned partner.",
      },
      { property: "og:url", content: "https://snowpondtech.com/locations/lewiston-auburn" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/locations/lewiston-auburn" }],
  }),
  component: () => <LocationPage location={location} />,
});
