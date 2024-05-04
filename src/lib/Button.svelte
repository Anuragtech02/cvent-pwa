<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string = '';
	export let subTitle: string = '';
	export let selected: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<div
	class="btn-container relative w-full overflow-hidden"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	tabindex="0"
	role="button"
>
	<div
		class="absolute top-1/2 -translate-y-1/2 left-[53%] -translate-x-1/2 w-[120px] md:w-[180px] lg:w-full z-[1]"
	>
		<h4 class="text-center w-full text-wrap" class:text-primary={selected}>
			{title}
		</h4>
		{#if subTitle}
			<h4 class="text-center mt-2">{subTitle}</h4>
		{/if}
	</div>
	<video
		src="/assets/arrow.webm"
		class="w-[100%] max-w-[480px] lg:max-w-full drop-shadow-lg"
		playsinline
		autoplay
		muted
		loop
	/>
</div>

<style>
	.btn-container:hover h5,
	.btn-container:hover p {
		@apply text-primary;
	}
</style>
