import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("augusta")!;

const augustaMedia = (
  <figure className="w-full">
    <img
      src={"/images/augusta-maine-downtown.jpg"}
      alt="Aerial view of downtown Augusta, Maine and the Kennebec River"
      className="w-full rounded-2xl shadow-lg"
    />
    <figcaption className="mt-2 text-center text-xs text-white/70">
      Quintin Soloviev, CC BY 4.0, via Wikimedia Commons
    </figcaption>
  </figure>
);

export const Route = createFileRoute("/locations/augusta")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "IT Support in Augusta, Maine | Snow Pond Technology Group" },
      { name: "description", content: "Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:title", content: "IT Support in Augusta, Maine | Snow Pond Technology Group" },
      { property: "og:description", content: "Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:url", content: "https://snowpondtech.com/locations/augusta" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/locations/augusta" }],
  }),
  component: () => <LocationPage location={location} media={augustaMedia} />,
});
