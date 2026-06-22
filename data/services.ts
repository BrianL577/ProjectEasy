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
  flagNote?: string;
}

export const services: Service[] = [
  {
    slug: "fuel",
    tag: "fuel",
    name: "easy fuel",
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
    name: "easy handling",
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
    name: "easy move",
    title: "VIP transportation",
    desc: "Ground transportation coordinated alongside your fuel and handling request.",
    bullets: [
      "Crew and passenger transportation arranged as part of your request",
      "Coordinated with your fuel and handling to keep operations seamless",
      "Rolling out alongside updated request forms — details to be confirmed",
    ],
    status: "draft",
    flagNote: "new service in development — confirm scope with Mike",
  },
  {
    slug: "gourmet",
    tag: "gourmet",
    name: "easy gourmet",
    title: "Gourmet network",
    desc: "A catering and gourmet service referenced in the easy network — full details pending.",
    bullets: [
      "Mentioned alongside easy fuel, easy handling, and easy loyalty in company overview",
      "Full scope to be confirmed with Mike before publishing",
    ],
    status: "draft",
    flagNote: "Mike unsure about this service — pending decision",
  },
  {
    slug: "loyalty",
    tag: "loyalty",
    name: "easy loyalty",
    title: "Rebates that add up",
    desc: "A fidelity rewards scheme — the more you spend with easy, the more you earn back at year's end.",
    bullets: [
      "Dedicated customers earn rebates and cash credits",
      "Credits are returned at year's end — real money back, not points or vouchers",
      "The more volume you bring, the more you earn",
      "No extra paperwork to enroll",
    ],
    status: "draft",
    flagNote: "verify rebate model with Mike — concept is year-end cash rebates (e.g. a commercial airline spending $1M might receive ~$10K back), but exact thresholds and terms need confirmation before publishing",
  },
];
