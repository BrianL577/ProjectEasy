// Maps 1:1 onto a future Supabase `services` table:
//   columns -> slug (text, pk), tag (text), name (text), title (text),
//              desc (text), bullets (text[]), status (text)

export type ServiceTag = "fuel" | "handling" | "move" | "loyalty" | "gourmet";
export type ServiceStatus = "confirmed" | "draft";

export interface Service {
  slug: string;
  tag: ServiceTag;
  name: string;
  title: string;
  desc: string;
  bullets: string[];
  status: ServiceStatus;
  /** Optional custom flag text. If omitted on a "draft" service, ServiceCard
   * falls back to a generic "draft copy — confirm with Mike" badge. */
  flagNote?: string;
}

export const services: Service[] = [
  {
    slug: "fuel",
    tag: "fuel",
    name: "EASY FUEL",
    title: "Fuel, simplified",
    desc: "Tailor-made fuel solutions, with full transparency if we can't match or beat a price.",
    bullets: [
      "Competitive fuel prices",
      "No commitment required",
      "Minimize taxes and fees, whenever possible",
      "Avoid surcharges and hidden fees",
      "VAT exemptions and VAT refunds (for commercial operators in the EU)",
      "Safety is always our top priority",
    ],
    status: "confirmed",
  },
  {
    slug: "handling",
    tag: "handling",
    name: "EASY HANDLING",
    title: "Ground handling, coordinated",
    desc: "We arrange handling through our vetted partner network so you don't negotiate each location separately.",
    bullets: [
      "One point of contact across partner handlers",
      "Coverage across Europe, Middle East & Africa",
      "Expanding into Asia and the Americas",
    ],
    status: "draft",
  },
  {
    slug: "move",
    tag: "move",
    name: "EASY MOVE",
    title: "Ground transportation",
    desc: "A newer service line — coordinated alongside your fuel and handling request.",
    bullets: [
      "Coordinated alongside your fuel & handling request",
      "Rolling out alongside updated request forms — details to be confirmed",
    ],
    status: "draft",
    flagNote: "new service in development — confirm scope with Mike",
  },
  {
    slug: "gourmet",
    tag: "gourmet",
    name: "EASY GOURMET",
    title: "Gourmet network",
    desc: "Referenced in easy's own company overview alongside fuel and handling — full service details haven't been confirmed yet.",
    bullets: ["Full details pending — confirm scope with Mike before publishing"],
    status: "draft",
    flagNote: "name confirmed in company overview — details pending Mike",
  },
  {
    slug: "loyalty",
    tag: "loyalty",
    name: "EASY LOYALTY",
    title: "Rebates that add up",
    desc: "A fidelity rewards scheme — the more you spend with easy, the more you earn back.",
    bullets: [
      "Year-end rebates and cash credits for loyal customers",
      "No extra paperwork to enroll",
    ],
    status: "confirmed",
  },
];
