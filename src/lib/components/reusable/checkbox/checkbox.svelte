<script lang="ts">
	import { getSpriteHref } from "$lib/assets";

	const text = "Remember Me";
	const label = "temp";

	let isChecked = $state(true);
	const onClick = () => {
		isChecked = !isChecked;
	};
</script>

<div class="container">
	<button type="button" aria-label={label} onclick={onClick}>
		{#if isChecked}
			<svg>
				<use href={getSpriteHref("check")} />
			</svg>
		{/if}
	</button>
	<span>{text}</span>
</div>

<style>
	.container {
		height: var(--font-24);
		width: auto;
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--padding-8);
	}

	svg {
		stroke-width: 1.5;
		color: var(--subtext1);
	}

	button {
		aspect-ratio: 1;
		height: 100%;
		background: var(--surface0);
		border-radius: var(--border-radius-4);
	}

	span {
		color: var(--subtext1);
	}
</style>
