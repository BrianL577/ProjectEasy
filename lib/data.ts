// ------------------------------------------------------------------
// DATA ACCESS LAYER
//
// Every function below is written as `async`, even though right now
// it just returns data from a local file. That's deliberate: it means
// every component already calls this the same way a real database
// query would be called (`await getRegions()`), so the day this needs
// to come from Supabase instead of this repo, you only change what's
// INSIDE these functions — nothing in /app or /components changes.
//
// Future version, once Supabase is introduced, would look like:
//
//   import { createClient } from '@supabase/supabase-js';
//   const supabase = createClient(url, key);
//
//   export async function getRegions(): Promise<Region[]> {
//     const { data } = await supabase.from('regions').select('*');
//     return data ?? [];
//   }
//
// ------------------------------------------------------------------

import { regions, Region } from "@/data/regions";
import { partners, Partner } from "@/data/partners";
import { services, Service } from "@/data/services";
import { steps, Step } from "@/data/steps";

export async function getRegions(): Promise<Region[]> {
  return regions;
}

export async function getPartners(): Promise<Partner[]> {
  return partners;
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getSteps(): Promise<Step[]> {
  return steps;
}
