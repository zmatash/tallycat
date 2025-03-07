<script lang="ts">
	import CountDisplay from "./count-display.svelte";
	import CounterBtn from "./counter-btn.svelte";

	interface Props {
		label: string;
	}

	const { label }: Props = $props();
	let count = $state(0);

	const onIncrement = () => (count += 1);
	const onDecrement = () => {
		if (count > 0) {
			count -= 1;
		}
	};
	const onSet = (value: number) => (count = value);

	$effect(() => {
		console.log("count changed to", count);
	});
</script>

<div class="counter-outer">
	<CounterBtn callback={onDecrement} icon="minus" />
	<CountDisplay {label} {count} incement={onIncrement} decrement={onDecrement} setCount={onSet} />
	<CounterBtn callback={onIncrement} icon="plus" />
</div>

<style>
	.counter-outer {
		background: var(--base);
		width: 100%;
		height: 124px;
		margin-bottom: var(--grid-16);
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding: var(--grid-16);
		border-radius: var(--grid-16);
	}
</style>
