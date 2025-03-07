import type { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface PasswordLoginResponse {
	user: User | null;
	session: Session | null;
	weakPassword?: WeakPassword;
}

export interface PasswordSignUpResponse {
	user?: User | null;
	session?: Session | null;
}
