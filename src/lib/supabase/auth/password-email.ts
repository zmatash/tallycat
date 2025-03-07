import { Result } from "$lib/api/result/result";
import supabase from "../client";
import type { PasswordSignUpResponse } from "./types";

export async function signUpWithPasswordEmail(
	email: string,
	password: string
): Promise<Result<PasswordSignUpResponse>> {
	const reponse = await supabase.auth.signUp({
		email,
		password
	});

	if (reponse.error) {
		return Result.failure({
			status: reponse.error.status,
			message: reponse.error.message,
			name: reponse.error.name
		});
	}

	const data = reponse.data;
	if (!data) {
		return Result.failure({
			status: 400,
			message: "No data returned",
			name: "No data returned"
		});
	}

	return Result.success(data);
}

export async function signInWithPasswordEmail(email: string, password: string) {
	const reponse = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (reponse.error) {
		return Result.failure({
			status: reponse.error.status,
			message: reponse.error.message,
			name: reponse.error.name
		});
	}

	const data = reponse.data;
	if (!data) {
		return Result.failure({
			status: 400,
			message: "No data returned",
			name: "No data returned"
		});
	}

	return Result.success(data);
}
