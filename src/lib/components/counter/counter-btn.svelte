<script lang="ts">
	import type spriteKeys from "$lib/assets";
	import { getSpriteHref } from "$lib/assets";

	interface Props {
		callback: () => void;
		icon: keyof typeof spriteKeys;
	}

	const { callback, icon }: Props = $props();
</script>

<button type="button" onclick={callback} aria-label="lab" class="no-highlight">
	<div class="button-visual">
		<svg>
			<use xlink:href={getSpriteHref(icon)} />
		</svg>
	</div>
</button>

<style>
	.button-visual {
		background: var(--teal);
		border: var(--overlay0);
		border-radius: 50%;
		aspect-ratio: 1;
		height: 70%;
		border: 1px solid var(--overlay0);
		justify-content: center;
		align-items: center;
	}

	button {
		background: none;
		border: none;
		border-radius: 50%;
		aspect-ratio: 1;
		height: 100%;
	}

	svg {
		width: 38px;
		height: 38px;
		fill: none;
		color: var(--surface0);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
