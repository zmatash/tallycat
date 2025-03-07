import { getSession } from "$lib/supabase/auth/get";
import { redirect } from "@sveltejs/kit";

export async function load() {
	const result = await getSession();

	if (!result.isFailure()) {
		const error = result.getError();
		if (error) {
			throw redirect(error.responseCode, "auth/login");
		}

		throw redirect(303, "auth/login");
	}

	const session = result.getValue();

	return {
		user: session.user
	};
}
