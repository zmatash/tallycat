import { createClient } from "@supabase/supabase-js";

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";

if (!PUBLIC_SUPABASE_ANON_KEY || !PUBLIC_SUPABASE_URL) {
	throw new Error("Supabase environment variables not set");
}

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export default supabase;
