<script lang="ts">
	import "$lib/styles/global/defaults.css";
	import "$lib/styles/global/reset.css";
	import "$lib/styles/resources.css";
	import "$lib/styles/theme.css";
	import "$lib/styles/utility.css";

	const { children } = $props();
</script>

<div class="wrapper">
	{@render children()}
	<!-- <Navbar /> -->
</div>

<style>
	.wrapper {
		flex-direction: column;
		height: 100vh;
		width: 100vw;
		background: var(--base);
	}
</style>
