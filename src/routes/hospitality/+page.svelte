<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import PageLayout from '$lib/PageLayout.svelte';
	import { fly } from 'svelte/transition';
	import { eventsData, hostpitalityData } from '$lib/constants';
	import { goto } from '$app/navigation';

	let allBtnElements: {
		[key: string]: HTMLDivElement;
	} = {};
	let hoverElIndex = -1;

	let showButtons = false;
	let showButtons2 = false;

	onMount(() => {
		showButtons = true;
	});
</script>

<div class="h-full w-full relative flex flex-col justify-center items-start">
	<div class="flex justify-between items-center">
		<div
			class="relative w-[280px] xl:w-[350px] overflow-hidden transition-all duration-100 ease-out origin-left"
			style="scale: {showButtons2 ? 0.5 : 1}"
			class:mt-10={showButtons}
			class:ml-10={showButtons2}
			role="button"
			tabindex="0"
			on:click={() => {
				showButtons2 = false;
				showButtons = !showButtons;
			}}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					showButtons2 = false;
					showButtons = !showButtons2;
				}
			}}
		>
			<h4
				class="absolute font-normal text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				Hospitality <br /> Professional
			</h4>
			<video src="/assets/circle-new.webm" class="w-full" autoplay muted playsinline loop />
		</div>
		<div class="flex-1 flex justify-between items-center">
			{#each hostpitalityData as item, i}
				{#if showButtons}
					<div
						class="flex-1 transition-opacity duration-500 ease-out"
						class:ml-12={i === 0}
						class:xl:ml-10={i === 0}
						class:opacity-50={hoverElIndex !== -1 && hoverElIndex !== i}
						on:mouseenter={() => (hoverElIndex = i)}
						on:mouseleave={() => (hoverElIndex = -1)}
						role="button"
						tabindex="0"
						bind:this={allBtnElements[i]}
						in:fly={{ x: -100, duration: 500, delay: i * 100 }}
						out:fly={{ x: -100, duration: 500, delay: i * 100 }}
					>
						<Button
							title={item.title}
							subTitle={item.subTitle}
							on:click={() => goto('/hospitality/' + item.id)}
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div
		class="flex justify-start items-center transition-all duration-100 ease-out origin-left"
		style="scale: {showButtons ? 0.5 : 1}"
		class:mb-10={showButtons2}
		class:ml-10={showButtons}
	>
		<div
			class="relative w-[280px] xl:w-[350px] overflow-hidden"
			role="button"
			tabindex="0"
			on:click={() => {
				showButtons2 = !showButtons2;
				showButtons = false;
			}}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					showButtons2 = !showButtons2;
					showButtons = false;
				}
			}}
		>
			<h5
				class="absolute font-normal text-center top-1/2 left-[48%] -translate-y-1/2 -translate-x-1/2"
			>
				Event <br /> Professional
			</h5>
			<video src="/assets/circle-new.webm" class="w-full" autoplay muted playsinline loop />
		</div>
		<div class="flex-1 flex justifiy-between items-center">
			{#each eventsData as item, i}
				{#if showButtons2}
					<div
						class="flex-1 transition-opacity duration-500 ease-out"
						class:ml-12={i === 0}
						class:xl:ml-10={i === 0}
						class:opacity-50={hoverElIndex !== -1 && hoverElIndex !== i}
						on:mouseenter={() => (hoverElIndex = i)}
						on:mouseleave={() => (hoverElIndex = -1)}
						role="button"
						tabindex="0"
						bind:this={allBtnElements[i]}
						in:fly={{ x: -100, duration: 500, delay: i * 100 }}
						out:fly={{ x: -100, duration: 500, delay: i * 100 }}
					>
						<Button
							title={item.title}
							subTitle={item.subTitle}
							on:click={() => goto('/hospitality/' + item.id)}
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
