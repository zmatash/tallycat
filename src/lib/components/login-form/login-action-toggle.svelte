<script lang="ts">
	interface Props {
		callback: () => void;
		formMode: "login" | "register";
	}

	const { callback, formMode }: Props = $props();

	const text = $derived(
		formMode === "login"
			? {
					span: "Dont have an account?",
					button: "Sign Up"
				}
			: {
					span: "Already have an account?",
					button: "Sign In"
				}
	);
</script>

<div class="signup-container row-centred">
	<span>{text.span}</span>
	<button aria-label="register" onclick={callback} type="button">{text.button}</button>
</div>

<style>
	.signup-container {
		width: 100%;
		height: auto;
		gap: var(--padding-8);
	}

	button {
		padding: var(--padding-4);
		color: var(--blue);
		text-decoration: underline;
		font-size: var(--font-18);
		font-weight: bold;
	}

	span {
		color: var(--subtext1);
		font-size: var(--font-18);
		font-weight: bold;
	}
</style>
