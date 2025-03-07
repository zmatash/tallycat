<script lang="ts">
	import { getSpriteHref } from "$lib/assets";

	interface Props {
		provider: "google" | "discord";
		onClick: () => void;
	}

	let { provider, onClick }: Props = $props();
	let text = {
		google: "Google",
		discord: "Discord"
	};
</script>

<button class="login-button" aria-label={`Sign in with ${text[provider]}`} onclick={onClick}>
	<svg>
		<title>{`${text[provider]} logo`}</title>
		<use href={getSpriteHref(provider)} />
	</svg>
	<span>{text[provider]}</span>
</button>

<style>
	.login-button {
		height: var(--font-48);
		background: var(--surface0);
		width: 45%;
		display: flex;
		border-radius: var(--border-radius-4);
		align-items: center;
		justify-content: space-evenly;
		padding: var(--padding-8);
	}

	svg {
		height: var(--font-24);
		width: var(--font-24);
		color: var(--subtext0);
	}

	span {
		color: var(--subtext1);
		font-size: var(--font-24);
		font-weight: normal;
	}
</style>
