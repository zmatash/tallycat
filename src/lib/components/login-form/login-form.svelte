<script lang="ts">
	import Checkbox from "../reusable/checkbox/checkbox.svelte";
	import LoginActionToggle from "./login-action-toggle.svelte";
	import LoginField from "./login-field.svelte";
	import LoginSocial from "./login-social.svelte";

	let formMode = $state<"login" | "register">("login");
	const headerText = $derived(formMode === "login" ? "Sign In" : "Sign Up");

	const onGoogleClick = () => {
		console.log("Google");
	};

	const onDiscordClick = () => {
		console.log("Discord");
	};

	const onModeToggleClick = () => {
		formMode = formMode === "login" ? "register" : "login";
	};
</script>

<title>{headerText}</title>
<div class="login-form-container fill-space">
	<h1>{headerText}</h1>
	<form class="col-centred">
		<LoginField inputType="email" />
		<LoginField inputType="password" />
		<div class="password-options-container">
			{#if formMode === "login"}
				<Checkbox />
				<a href="/auth/reset-password" class="forgot-password-button">Reset Password</a>
			{/if}
		</div>
		<button aria-label={formMode} class="login-button">{formMode ? "Login" : "Register"}</button>
	</form>

	<div class="divider">
		<hr />
		<span>OR</span>
		<hr />
	</div>

	<div class="socials-container row-centred">
		<LoginSocial provider="google" onClick={onGoogleClick} />
		<LoginSocial provider="discord" onClick={onDiscordClick} />
	</div>

	<div class="toggle-container fill-space col-centred">
		<LoginActionToggle callback={onModeToggleClick} {formMode} />
	</div>
</div>

<style>
	.password-options-container {
		width: 100%;
		height: var(--font-24);
		justify-content: space-between;
	}

	.toggle-container {
		flex-shrink: 1;
		justify-content: end;
	}

	.login-form-container {
		background: var(--mantle);
		padding: var(--padding-24);
		flex-direction: column;
		gap: var(--padding-16);
	}

	.socials-container {
		width: 100%;
		justify-content: space-between;
	}

	.forgot-password-button {
		color: var(--blue);
		text-decoration: underline;
	}

	.login-button {
		width: 100%;
		height: var(--font-48);
		background: var(--mauve);
		border-radius: var(--border-radius-4);
		font-size: var(--font-32);
		color: var(--crust);
		font-weight: bold;
		margin: var(--padding-8) 0;
	}

	.divider {
		width: 100%;
		align-items: center;
	}

	span {
		color: var(--subtext1);
		font-weight: bold;
		padding: 0 var(--padding-16);
	}

	hr {
		border: none;
		flex-grow: 1;
		height: 1px;
		background: var(--surface1);
	}

	form {
		width: 100%;
		height: auto;
		gap: var(--padding-16);
	}
</style>
