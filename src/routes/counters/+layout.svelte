<script lang="ts">
	import PhoneGroupbar from "$lib/components/group-bar/mobile/phone-groupbar.svelte";
	import PhoneNavbar from "$lib/components/navbar/phone/phone-navbar.svelte";

	let { children } = $props();
</script>

<header>
	<PhoneGroupbar />
</header>

<main>
	{@render children()}
</main>

<PhoneNavbar />

<style>
	header {
		width: 100%;
		height: auto;
	}

	main {
		background: none;
		padding: var(--grid-8);
		width: 100%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
	}
</style>
