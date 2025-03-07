import { getSession } from "$lib/supabase/auth/get";
import { redirect } from "@sveltejs/kit";

export async function load() {
	const session = await getSession();

	if (!session) {
		throw redirect(303, "auth/login");
	}

	return {
		user: session.user
	};
}
