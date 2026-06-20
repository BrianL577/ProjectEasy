// Maps 1:1 onto a future Supabase `regions` table:
//   columns -> name (text), code (text), count (int, nullable), status (text), source (text)
// Editing this file IS editing the website's region data — no separate CMS needed yet.

export type RegionStatus = "confirmed" | "pending" | "flag" | "expanding";

export interface Region {
  name: string;
  code: string;
  count: number | null;
  status: RegionStatus;
  source: string;
}

export const regions: Region[] = [
  {
    name: "Europe",
    code: "EU",
    count: 93,
    status: "pending",
    source: "client PDF — needs reconciliation w/ master sheet",
  },
  {
    name: "Africa",
    code: "AF",
    count: 33,
    status: "pending",
    source: "client PDF — dnata locations missing from this count",
  },
  {
    name: "Middle East",
    code: "ME",
    count: null,
    status: "flag",
    source: "not yet broken out separately — confirm with Mike",
  },
  {
    name: "Asia",
    code: "AS",
    count: null,
    status: "expanding",
    source: "Vietnam expansion via Mackie — in progress",
  },
];
