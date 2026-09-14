import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";
import bangorImage from "../assets/bangor-maine.jpg.asset.json";

const location = getLocation("bangor")!;

const bangorMedia = (
  <figure className="w-full">
    <img
      src={bangorImage.url}
      alt="Aerial view of downtown Bangor, Maine and the Penobscot River"
      className="w-full rounded-2xl shadow-lg"
    />
    <figcaption className="mt-2 text-center text-xs text-white/70">
      Quintin Soloviev, CC BY 4.0, via Wikimedia Commons
    </figcaption>
  </figure>
);

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
  component: () => <LocationPage location={location} media={bangorMedia} />,
});
