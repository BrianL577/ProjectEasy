// Maps 1:1 onto a future Supabase `partners` table:
//   columns -> name (text), note (text), verified_on (date), source_url (text)

export interface Partner {
  name: string;
  note: string;
}

export const partners: Partner[] = [
  { name: "Aviapartner", note: "verified — wikipedia.org" },
  { name: "dnata", note: "verified — dnata.com" },
  { name: "Swissport", note: "verified — swissport.com" },
  { name: "Omni Handling", note: "verified — omnihandling.com" },
  { name: "GH Italia", note: "verified — ghitalia.it" },
];
