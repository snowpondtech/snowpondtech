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
      "Waterville is home to a growing mix of trades, engineering shops, and manufacturers. Snow Pond is minutes away in Oakland — most of our clients see a familiar face on site, not a stranger.",
    localAngle:
      "From Kennedy Memorial Drive to the mills, we help Waterville and Winslow businesses cut downtime and keep field crews connected.",
    keywords: "IT Support Waterville Maine",
  },
  {
    slug: "newport",
    city: "Newport",
    region: "Penobscot County",
    intro:
      "Newport sits at the crossroads of I-95 and Route 2, serving contractors and shops that work across central and eastern Maine.",
    localAngle:
      "We keep Newport-area contractors online, secure, and coordinated with their crews traveling into Bangor, Dover-Foxcroft, and Skowhegan.",
    keywords: "IT Support Newport Maine",
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
    slug: "brunswick",
    city: "Brunswick",
    region: "Cumberland County",
    intro:
      "Brunswick's mix of engineering firms, marine trades, and specialty contractors depends on tools that just work — in the office and on the job.",
    localAngle:
      "We help Brunswick and Topsham businesses protect their data, support hybrid teams, and plan for the technology their growth will demand.",
    keywords: "IT Services Brunswick Maine",
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
  {
    slug: "biddeford",
    city: "Biddeford",
    region: "York County",
    intro:
      "Biddeford's revitalized mills and industrial parks are full of the kind of scaling contractors and manufacturers we love working with.",
    localAngle:
      "We help Biddeford and Saco businesses modernize their technology without ripping out what already works — one clear step at a time.",
    keywords: "IT Services Biddeford Maine",
  },
] as const;

export type Location = (typeof LOCATIONS)[number];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
