import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://adngfrvzbvxhtrlzxpso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbmdmcnZ6YnZ4aHRybHp4cHNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MTM0MTIsImV4cCI6MjAzODI4OTQxMn0.cqcp2ELtsIwZg0jjF2AN7rbBWsd-mSiAsRWs1J_TEZU";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getAllProducts() {
  let { data, error } = await supabase.from("menCloths").select("*");
  return data;
}
export async function getAllBranches() {
  let { data, error } = await supabase.from("branches").select("*");
  return data;
}

export async function getAllKidsProducts() {
  let { data, error } = await supabase.from("kidCloths").select("*");
  return data;
}

export async function getManProduct(id) {
  let { data, error } = await supabase
    .from("menCloths")
    .select("*")
    .eq("id", id);
  return data;
}
