<script lang="ts">
	import PhoneNavbutton from "../navbutton.svelte";

	let activeId = $state("home-btn");

	const onNavButtonClick = (id: string) => (activeId = id);
</script>

<nav>
	<PhoneNavbutton
		icon="group"
		buttonId="counter-btn"
		label="Counters"
		{activeId}
		onClick={onNavButtonClick}
	/>

	<PhoneNavbutton
		icon="group"
		buttonId="groups-btn"
		label="Groups"
		{activeId}
		onClick={onNavButtonClick}
	/>
	<!-- <PhoneNewCounterButton /> -->
	<PhoneNavbutton
		icon="settings"
		buttonId="settings-btn"
		label="Settings"
		{activeId}
		onClick={onNavButtonClick}
	/>
	<PhoneNavbutton
		icon="user-round-pen"
		buttonId="profile-btn"
		label="Profile"
		{activeId}
		onClick={onNavButtonClick}
	/>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-evenly;
		background: var(--mantle);
		height: var(--font-64);
		width: 100%;
		flex-shrink: 0;
		position: sticky;
		bottom: 0;
		left: 0;
		border-top: 1px solid var(--surface1);
	}
</style>
