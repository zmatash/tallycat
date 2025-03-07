<script lang="ts">
	import { getSpriteHref } from "$lib/assets";

	interface Props {
		inputType: "email" | "password";
	}

	const { inputType }: Props = $props();

	let inputHidden = $state(false);
	const inputFieldType = $derived.by(() => {
		if (inputType === "email") return "email";
		if (inputHidden) {
			return "password";
		}
		return "text";
	});

	let inputElement: HTMLInputElement;

	const onHidePasswordToggle = (e: MouseEvent) => {
		e.preventDefault();

		const cursorPosition = inputElement.selectionStart;
		inputHidden = !inputHidden;

		// use setTimeout to ensure DOM updates first
		setTimeout(() => {
			inputElement.focus();
			inputElement.setSelectionRange(cursorPosition, cursorPosition);
		}, 0);
	};
</script>

<div class="input-container row-centred">
	<svg>
		<use href={getSpriteHref(inputType === "email" ? "mail" : "lock-keyhole")} />
	</svg>
	<input
		bind:this={inputElement}
		type={inputFieldType}
		placeholder={inputType === "email" ? "Email Address" : "Password"}
	/>
	{#if inputType === "password"}
		<button
			type="button"
			aria-label="hide-password-toggle"
			onclick={onHidePasswordToggle}
			class="password-toggle-btn no-highlight"
		>
			<svg>
				<use href={getSpriteHref(inputHidden ? "eye" : "eye-off")} />
			</svg>
		</button>
	{/if}
</div>

<style>
	.input-container {
		width: 100%;
		height: var(--font-48);
		gap: var(--padding-8);
		background: var(--surface0);
		padding: var(--padding-8);
		border-radius: var(--border-radius-4);
	}

	.input-container:focus-within {
		background-color: var(--surface1);
		border: 1px solid var(--crust);
	}

	div svg {
		stroke-width: 1.5;
		width: var(--font-24);
		height: var(--font-24);
		color: var(--subtext0);
		transition: color 0.2s ease;
		flex-shrink: 0;
	}

	.password-toggle-btn {
		height: 100%;
		aspect-ratio: 1;
		align-items: center;
		justify-content: center;
	}

	input {
		font-size: var(--font-20);
		color: var(--text);
		border: none;
		outline: none;
		background: transparent;
		flex-shrink: 1;
		width: 100%;
	}

	input::placeholder {
		color: var(--subtext0);
	}

	input:focus {
		color: var(--text);
	}
</style>
