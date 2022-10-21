<script lang="ts">
	export let key: string
	export let value: string
	let showValue = false;
	$: showValueState = showValue
	function toggleShowValue() {
		showValue = !showValue;
	}

</script>

<div class="flex w-full items-center border-b border-slate-300 dark:border-slate-700">
	<!-- inputs -->
	<div class="w-full shrink grid grid-cols-2 py-2 sm:py-1   ">
		<div
			class="h-10 rounded-xl m-2 col-span-2 sm:col-span-1 flex items-center px-2 border bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-500 hover:border-slate-400  transition-all "
		>
			{key}
		</div>
		<div
			class="h-10 rounded-xl m-2 col-span-2 sm:col-span-1 flex items-center px-2 border bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-500 hover:border-slate-400  transition-all "
		>
			{ showValueState? value : value!=undefined?"*".repeat(value.length):"*".repeat(10)}
		</div>
	</div>
	<!-- eye button -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		on:click={toggleShowValue}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class={` ${
			showValue ? 'hidden' : ''
		} w-10 h-10 m-2 p-1 shrink-0 border-2 rounded-full text-red-600 bg-white border-red-600 dark:text-red-400 dark:border-red-400 dark:bg-red-700 hover:scale-105 hover:cursor-pointer transition-all`}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
		/>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
	</svg>
	<!-- eye slash button -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		on:click={toggleShowValue}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class={` ${
			!showValue ? 'hidden' : ''
		} w-10 h-10 m-2 p-1 shrink-0 border-2 rounded-full text-red-600 bg-white border-red-600 dark:text-red-400 dark:border-red-400 dark:bg-red-700 hover:scale-105 hover:cursor-pointer transition-all`}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
		/>
	</svg>
</div>