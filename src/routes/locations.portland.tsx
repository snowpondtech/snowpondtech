import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("portland")!;

const portlandMedia = (
  <figure className="w-full">
    <img
      src={"/images/portland-maine-skyline.jpg"}
      alt="Aerial view of the Portland, Maine skyline and waterfront"
      className="w-full rounded-2xl shadow-lg"
    />
    <figcaption className="mt-2 text-center text-xs text-white/70">
      Quintin Soloviev, CC BY 4.0, via Wikimedia Commons
    </figcaption>
  </figure>
);

export const Route = createFileRoute("/locations/portland")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Managed IT Services in Portland, Maine | Snow Pond Technology Group" },
      { name: "description", content: "Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:title", content: "Managed IT Services in Portland, Maine | Snow Pond Technology Group" },
      { property: "og:description", content: "Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:url", content: "https://snowpondtech.com/locations/portland" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/locations/portland" }],
  }),
  component: () => <LocationPage location={location} media={portlandMedia} />,
});
