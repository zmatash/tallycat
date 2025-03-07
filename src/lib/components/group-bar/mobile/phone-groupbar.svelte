<script lang="ts">
	import { getSpriteHref } from "$lib/assets";

	let selectedGroup = $state("Animals");
</script>

<div class="group-bar-container">
	<button aria-label="group-selection-dropdown">
		<svg>
			<use xlink:href={getSpriteHref("menu")} />
		</svg>
	</button>
	<span>{selectedGroup}</span>
	<button id="delete-group-btn" aria-label="delete-group-btn">
		<svg>
			<use xlink:href={getSpriteHref("trash-2")} />
		</svg>
	</button>
</div>

<style>
	button {
		height: 100%;
		width: 64px;
		color: var(--text);
	}

	span {
		font-size: var(--font-24);
		font-family: "Poppins", sans-serif;
		font-weight: 400;
	}

	.group-bar-container {
		width: 100%;
		height: 42px;
		background: var(--mantle);
		border-bottom: 1px solid var(--overlay0);
		align-items: center;
		justify-content: space-between;
	}

	svg {
		stroke-width: 2;
		height: 28px;
		width: 28px;
	}
</style>
