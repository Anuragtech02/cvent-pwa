<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string = '';
	export let selected: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<div
	class="relative w-full overflow-hidden -ml-4 xl:-ml-10"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	tabindex="0"
	role="button"
>
	<div
		class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100px] xl:w-[150px] z-[1]"
	>
		<h5
			class="text-center text-[0.7rem] leading-[1rem] xl:text-[1rem] w-full text-wrap"
			class:text-primary={selected}
		>
			{title}
		</h5>
	</div>
	<video
		src="/assets/arrow.webm"
		class="w-[100%] max-w-[480px] drop-shadow-lg"
		playsinline
		autoplay
		muted
		loop
	/>
</div>
