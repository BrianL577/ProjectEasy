// Maps 1:1 onto a future Supabase `loyalty_steps` table:
//   columns -> ordinal (int), title (text), body (text)

export interface Step {
  title: string;
  body: string;
}

export const steps: Step[] = [
  { title: "Give easy a try", body: "Send your first fuel or handling request through the network." },
  { title: "Save money", body: "See the savings on fuel and handling, request after request." },
  { title: "Become a dedicated customer", body: "Keep routing requests through easy as your default network." },
  { title: "Earn rebates", body: "End-of-year rebates and cash credits are offered to loyal customers." },
];
