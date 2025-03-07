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
	class={`col-centred new-counter-btn ${activeId === buttonId ? "active-style" : ""}`}
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
		aspect-ratio: 1;
		height: 100%;
		color: var(--subtext1);
	}

	label {
		font-size: var(--font-16);
	}

	svg {
		width: var(--font-24);
		height: var(--font-24);
		fill: none;
		stroke-width: 1.5px;
		stroke-linecap: round;
		stroke-linejoin: round;
		color: var(--subtext1);
	}

	.active-style {
		color: var(--sky);
		font-weight: bold;
	}

	svg.active-style {
		stroke-width: 2.5;
	}
</style>
