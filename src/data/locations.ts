export const LOCATIONS = [
  {
    slug: "augusta",
    city: "Augusta",
    region: "Kennebec County",
    intro:
      "As Maine's capital, Augusta blends state agencies with a strong small business core — from HVAC and electrical shops in the surrounding towns to manufacturers along the river.",
    localAngle:
      "We support contractors and manufacturers throughout Augusta, Manchester, Hallowell, Gardiner, and Chelsea with responsive on-site help from our nearby Oakland office.",
    keywords: "IT Support Augusta Maine",
  },
  {
    slug: "waterville",
    city: "Waterville",
    region: "Kennebec County",
    intro:
      "Waterville is home to a growing mix of trades, engineering shops, and manufacturers. Snow Pond Technology Group is minutes away in Oakland — most of our clients see a familiar face on site, not a stranger.",
    localAngle:
      "From Kennedy Memorial Drive to the mills, we help Waterville and Winslow businesses cut downtime and keep field crews connected.",
    keywords: "IT Support Waterville Maine",
  },
  {
    slug: "bangor",
    city: "Bangor",
    region: "Penobscot County",
    intro:
      "Bangor's contractors and manufacturers serve a huge geographic footprint. Reliable technology is the difference between profitable jobs and long, expensive days.",
    localAngle:
      "We help Bangor, Brewer, Hampden, and Orono businesses turn technology from a headache into a competitive advantage.",
    keywords: "Managed IT Services Bangor Maine",
  },
  {
    slug: "lewiston",
    city: "Lewiston",
    region: "Androscoggin County",
    intro:
      "Lewiston has one of Maine's densest manufacturing and trades communities. Owners here know how expensive downtime and a bad cyber event can be.",
    localAngle:
      "We work with Lewiston shops and contractors on cybersecurity, backup, and day-to-day IT that actually holds up in production environments.",
    keywords: "IT Services Lewiston Maine",
  },
  {
    slug: "auburn",
    city: "Auburn",
    region: "Androscoggin County",
    intro:
      "Auburn's industrial corridor is home to fabricators, distributors, and contractors that keep the region building. Their technology needs to keep up.",
    localAngle:
      "We support Auburn manufacturers and contractors with proactive monitoring, cybersecurity, and a real human on the phone when something breaks.",
    keywords: "IT Services Auburn Maine",
  },
  {
    slug: "portland",
    city: "Portland",
    region: "Cumberland County",
    intro:
      "Portland's construction boom and manufacturing renaissance are pushing owners to modernize. The businesses winning here have technology partners, not just IT vendors.",
    localAngle:
      "We serve Portland, South Portland, Westbrook, and Scarborough contractors and manufacturers with strategic advice and hands-on support.",
    keywords: "Managed IT Portland Maine",
  },
] as const;

export type Location = (typeof LOCATIONS)[number];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
