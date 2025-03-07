<script lang="ts">
	interface Props {
		count: number;
		label: string;
		incement: () => void;
		decrement: () => void;
		setCount: (value: number) => void;
	}

	let { count, label, setCount }: Props = $props();
</script>

<div class="count-wrapper">
	<span>{label}</span>
	<div class="count-field-container">
		<input
			aria-label="counter-input-field"
			type="number"
			id="count-input"
			bind:value={count}
			onchange={(e) => setCount(e.currentTarget.valueAsNumber)}
		/>
	</div>
</div>

<style>
	.count-wrapper {
		flex-direction: column;
		align-items: center;
		margin: var(--grid-8);
	}

	.count-field-container {
		height: 42px;
		width: 120px;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: var(--crust);
		color: var(--text);
		border-radius: 25px;
	}

	input {
		font-size: var(--font-32);
		color: var(--text);
		text-align: center;
		width: 100%;
		height: 100%;
	}

	span {
		font-size: var(--font-24);
		font-weight: 400;
		color: var(--text);
	}
</style>
