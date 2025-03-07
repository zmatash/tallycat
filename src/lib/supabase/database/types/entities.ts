import type { Database } from "./generated";

export type Counter = Database["public"]["Tables"]["counters"]["Row"];
export type CounterGroup = Database["public"]["Tables"]["counter_groups"]["Row"];
