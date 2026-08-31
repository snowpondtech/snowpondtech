export const INDUSTRIES = [
  {
    slug: "electrical-contractors",
    name: "Electrical Contractors",
    short: "Electrical",
    hero:
      "Give your electricians, project managers, and estimators the tools they need — protected, reliable, and built for the way you actually work.",
    challenges: [
      "Estimators juggling plans, take-offs, and bid software on aging computers",
      "Project managers pulling drawings and RFIs from the job site over spotty connections",
      "Sensitive customer and payroll data sitting on unprotected devices",
      "Growth stalling because IT can't keep up with new hires or new offices",
    ],
    outcomes: [
      "Fast, secure access to plans and project files from any job trailer",
      "Consistent laptops and phones set up the same way for every new hire",
      "Cyber insurance requirements met without a scramble at renewal time",
      "A single point of contact who understands your business, not just your servers",
    ],
  },
  {
    slug: "general-contractors",
    name: "General Contractors",
    short: "General Contractors",
    hero:
      "From the trailer to the trades to the front office — we help GCs run cleaner projects with less technology drag.",
    challenges: [
      "Project managers stitching together email, spreadsheets, and PM software",
      "Subcontractors and clients needing safe ways to share plans and documents",
      "Job trailers with no reliable internet or printing",
      "Financial and bid data that would be devastating to lose or leak",
    ],
    outcomes: [
      "Standardized tools and access for every PM, super, and admin",
      "Reliable connectivity and printing on active job sites",
      "Documented backup and recovery you can prove to insurers",
      "A steady technology partner as your company takes on bigger work",
    ],
  },
  {
    slug: "hvac-contractors",
    name: "HVAC Contractors",
    short: "HVAC",
    hero:
      "Keep dispatch, technicians, and the office moving as one — with technology that holds up on the job site and in the shop.",
    challenges: [
      "Field technicians losing time on slow or dropped connections between the truck and the office",
      "Service software, scheduling, and estimating tools that aren't tied together",
      "Owners worried about ransomware locking up dispatch during peak season",
      "Cyber insurance renewals that now demand MFA, backups, and endpoint protection",
    ],
    outcomes: [
      "Technicians close more calls per day with reliable mobile access",
      "Dispatchers see real-time job status without chasing phone calls",
      "Payroll, invoicing, and service reports flow without duplicate entry",
      "Owners sleep at night knowing systems are backed up and monitored",
    ],
  },
  {
    slug: "landscaping-contractors",
    name: "Landscaping Contractors",
    short: "Landscaping",
    hero:
      "Seasonal swings, distributed crews, and thin margins — landscaping runs on communication. We make sure yours doesn't drop.",
    challenges: [
      "Foremen and crews out of touch when they leave a reliable signal area",
      "Scheduling, routing, and customer software that live in silos",
      "Data loss risk from lost or stolen phones and laptops",
      "IT costs that spike unpredictably during the busy season",
    ],
    outcomes: [
      "Crew leads can pull work orders and update jobs from the field",
      "Office staff sees where crews are and what's been completed",
      "Predictable monthly technology costs you can budget around",
      "Peace of mind that customer data and photos are safely backed up",
    ],
  },
  {
    slug: "engineering-firms",
    name: "Engineering Firms",
    short: "Engineering",
    hero:
      "Protect your intellectual property, keep design software humming, and give engineers the performance they need to bill more hours.",
    challenges: [
      "Large CAD, BIM, and modeling files bogging down old workstations and networks",
      "Sensitive client and project data that must be tightly controlled",
      "Remote and hybrid engineers needing secure access to the same file sets",
      "Compliance and confidentiality expectations from public and private clients",
    ],
    outcomes: [
      "Workstations, storage, and networks tuned for engineering workloads",
      "Secure remote access without slowing anyone down",
      "Backups and versioning so a bad save never costs a project",
      "A partner who can talk business risk with owners, not just technology",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    short: "Manufacturing",
    hero:
      "In a shop, minutes matter. We keep your ERP, machines, and office systems running so production doesn't stop.",
    challenges: [
      "Line-of-business software (ERP, MRP, quoting) that can't afford downtime",
      "Shop floor PCs and machines on aging, unsupported operating systems",
      "Rising cybersecurity threats specifically targeting small manufacturers",
      "Customers and primes demanding proof of security controls to keep contracts",
    ],
    outcomes: [
      "Proactive monitoring that catches issues before production stops",
      "A cybersecurity posture that satisfies customers, primes, and insurers",
      "Faster onboarding for new shop and office staff",
      "A clear technology roadmap tied to your growth plans, not vendor pitches",
    ],
  },
] as const;

export type Industry = (typeof INDUSTRIES)[number];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
