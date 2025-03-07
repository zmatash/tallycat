<script lang="ts">
	import { getSpriteHref } from "$lib/assets";

	const selectedGroup = $state("Animals");
</script>

<div class="group-bar-container">
	<button type="button" aria-label="group-selection-dropdown">
		<svg>
			<use xlink:href={getSpriteHref("menu")} />
		</svg>
	</button>
	<span>{selectedGroup}</span>
	<button type="button" id="delete-group-btn" aria-label="delete-group-btn">
		<svg>
			<use xlink:href={getSpriteHref("trash-2")} />
		</svg>
	</button>
</div>

<style>
	button {
		height: 100%;
		width: var(--font-64);
		color: var(--subtext1);
	}

	span {
		font-size: var(--font-24);
		font-weight: bold;
		color: var(--text);
	}

	.group-bar-container {
		width: 100%;
		height: var(--font-48);
		background: var(--mantle);
		border-bottom: 1px solid var(--surface1);
		align-items: center;
		justify-content: space-between;
	}

	svg {
		stroke-width: 2;
		height: 28px;
		width: 28px;
	}
</style>
