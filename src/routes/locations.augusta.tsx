import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";
import augustaImage from "../assets/augusta-maine-downtown.jpg.asset.json";

const location = getLocation("augusta")!;

const augustaMedia = (
  <figure className="w-full">
    <img
      src={augustaImage.url}
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
      { title: "IT Support in Augusta, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:title", content: "IT Support in Augusta, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Local IT support and managed services for Augusta, Maine contractors and manufacturers. Reduce downtime, tighten cybersecurity, and grow with a Maine-based partner." },
      { property: "og:url", content: "/locations/augusta" },
    ],
    links: [{ rel: "canonical", href: "/locations/augusta" }],
  }),
  component: () => <LocationPage location={location} media={augustaMedia} />,
});
