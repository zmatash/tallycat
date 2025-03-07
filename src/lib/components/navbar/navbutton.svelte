<script lang="ts">
	import spriteKeys, { getSpriteHref } from "$lib/assets";

	interface Props {
		buttonId: string;
		icon: keyof typeof spriteKeys;
		label: string;
		activeId: string;
		onClick: (id: string) => void;
	}

	const { icon, label, buttonId, onClick, activeId }: Props = $props();
</script>

<button
	class={`new-counter-btn ${activeId === buttonId ? "active-style" : ""}`}
	type="button"
	id={buttonId}
	onclick={() => onClick(buttonId)}
>
	<svg class={activeId === buttonId ? "active-style" : ""}>
		<use xlink:href={getSpriteHref(icon)} />
	</svg>
	<label for={buttonId}>{label}</label>
</button>

<style>
	button {
		display: flex;
		flex-direction: column;
		aspect-ratio: 1;
		height: 100%;
		border-radius: 50%;
		color: var(--text);
	}

	label {
		font-family: "Poppins", sans-serif;
		font-size: 14px;
	}

	svg {
		width: 24px;
		height: 24px;
		fill: none;
		stroke-width: 1.5px;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.active-style {
		color: var(--mauve);
	}

	svg.active-style {
		stroke-width: 2.5;
	}
</style>
