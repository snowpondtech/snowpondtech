import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";
import portlandImage from "../assets/portland-maine-skyline.jpg.asset.json";

const location = getLocation("portland")!;

const portlandMedia = (
  <figure className="w-full">
    <img
      src={portlandImage.url}
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
      { title: "Managed IT Services in Portland, Maine " },
      { name: "description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:title", content: "Managed IT Services in Portland, Maine " },
      { property: "og:description", content: " Snow Pond Technology Group|Managed IT, cybersecurity, and technology planning for Portland, Maine contractors and manufacturers scaling their business." },
      { property: "og:url", content: "/locations/portland" },
    ],
    links: [{ rel: "canonical", href: "/locations/portland" }],
  }),
  component: () => <LocationPage location={location} media={portlandMedia} />,
});
