import { Result } from "$lib/api/result/result";
import type { Session } from "@supabase/supabase-js";
import supabase from "../client";

export async function getSession(): Promise<Result<Session>> {
	const response = await supabase.auth.getSession();
	const data = response.data;

	if (!data && response.error) {
		return Result.failure({
			status: response.error.status,
			message: response.error.message,
			name: response.error.name
		});
	}

	if (!data.session) {
		return Result.failure({
			status: 401,
			message: "Unauthorized",
			name: "Unauthorized"
		});
	}

	return Result.success(data.session);
}

export async function getUser() {
	const result = await getSession();

	if (result.isFailure()) {
		return result;
	}

	const session = result.getValue();
	const response = await supabase.auth.getUser(session.access_token);
	if (response.error) {
		return Result.failure({
			status: response.error.status,
			message: response.error.message,
			name: response.error.name
		});
	}

	return Result.success(response.data);
}
