import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "../components/site/LocationPage";
import { getLocation } from "../data/locations";

const location = getLocation("bangor")!;

const bangorMedia = (
  <figure className="w-full">
    <img
      src={"/images/bangor-maine.jpg"}
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
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Managed IT Services in Bangor, Maine | Snow Pond Technology Group" },
      { name: "description", content: "Managed IT, cybersecurity, and technology strategy for Bangor-area contractors and manufacturers." },
      { property: "og:title", content: "Managed IT Services in Bangor, Maine | Snow Pond Technology Group" },
      { property: "og:description", content: "Managed IT, cybersecurity, and technology strategy for Bangor-area contractors and manufacturers." },
      { property: "og:url", content: "https://snowpondtech.com/locations/bangor" },
    ],
    links: [{ rel: "canonical", href: "https://snowpondtech.com/locations/bangor" }],
  }),
  component: () => <LocationPage location={location} media={bangorMedia} />,
});
