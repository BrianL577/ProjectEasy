// Maps 1:1 onto a future Supabase `services` table:
//   columns -> slug (text, pk), tag (text), name (text), title (text),
//              desc (text), bullets (text[]), status (text)

export type ServiceTag = "fuel" | "handling" | "move" | "loyalty";
export type ServiceStatus = "confirmed" | "draft";

export interface Service {
  slug: string;
  tag: ServiceTag;
  name: string;
  title: string;
  desc: string;
  bullets: string[];
  status: ServiceStatus;
}

export const services: Service[] = [
  {
    slug: "fuel",
    tag: "fuel",
    name: "EASY FUEL",
    title: "Fuel, simplified",
    desc: "Competitive pricing across a global supplier network — no commitment required.",
    bullets: [
      "Competitive fuel prices",
      "No commitment required",
      "Minimize taxes and fees, whenever possible",
      "Avoid surcharges and hidden fees",
      "VAT exemptions and refunds (EU commercial)",
      "24/7/365 coverage",
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
    desc: "Our newest service line — crew and passenger transportation coordinated alongside fuel and handling.",
    bullets: [
      "Coordinated alongside your fuel & handling request",
      "Details to be confirmed before public launch",
    ],
    status: "draft",
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
