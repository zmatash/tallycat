<script>
	import { getSpriteHref } from "$lib/assets";
</script>

<button aria-label="lab" type="button">
	<svg>
		<use xlink:href={getSpriteHref("plus")} />
	</svg>
</button>

<style>
	button {
		height: 64px;
		width: 64px;
		background-color: var(--mauve);
		border-radius: 50%;
		position: relative;
		bottom: 20px;
		color: var(--surface0);
		border: 1px solid var(--overlay0);
	}

	svg {
		width: 32px;
		height: 32px;
		color: var(--surface0);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
