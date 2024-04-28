<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import PageLayout from '$lib/PageLayout.svelte';
	import { fly } from 'svelte/transition';
	import VideoFrame from '$lib/VideoFrame.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import type { eventsData } from './constants';

	let allBtnElements: {
		[key: string]: HTMLDivElement;
	} = {};
	let showButtons = false;
	export let data: Array<(typeof eventsData)[0]> = [];
	export let type: 'event' | 'hospitality' = 'event';
	let currentItem: (typeof eventsData)[0] | null = null;

	onMount(() => {
		showButtons = true;
		// get id from params
		const id = $page.params.id;
		currentItem = data?.find((item) => item.id?.toString() === id) || null;

		if (!currentItem) {
			goto('/404');
		}
	});

	function handleOpacity() {
		Object.keys(allBtnElements).forEach((key) => {
			allBtnElements[key].addEventListener('mouseenter', () => {
				// set opacity of all other elements to 0.5
				Object.keys(allBtnElements).forEach((k) => {
					if (k !== key) {
						allBtnElements[k].style.opacity = '0.5';
					}
				});
			});
			allBtnElements[key].addEventListener('mouseleave', () => {
				// set opacity of all elements to 1
				Object.keys(allBtnElements).forEach((k) => {
					allBtnElements[k].style.opacity = '1';
				});
			});
		});
	}

	function setCurrentItem(id: number) {
		currentItem = data?.find((item) => item.id === id) || null;
	}

	$: browser && showButtons && handleOpacity();
	$: $page.params.id && setCurrentItem(Number($page.params.id));
</script>

<PageLayout>
	<div class="h-full w-full relative">
		{#if currentItem === null}
			<p>Loading...</p>
		{:else}
			<VideoFrame {currentItem} />
		{/if}
		<div
			class="absolute bottom-0 left-10 flex justify-between items-center"
			role="button"
			tabindex="0"
		>
			<div class="relative w-[220px] xl:w-[250px] overflow-hidden">
				<h4
					class="absolute font-normal text-center top-1/2 left-[48%] -translate-y-1/2 -translate-x-1/2"
				>
					{#if type === 'event'}
						Event <br /> Professional
					{:else}
						Hospitality <br /> Professional
					{/if}
				</h4>
				<video src="/assets/circle-new.webm" class="w-full" autoplay muted playsinline loop />
			</div>
			<div class="flex-1 flex justify-between items-center">
				{#each data as item, i}
					{#if showButtons}
						<div
							class="flex-1 transition-opacity duration-500 ease-out"
							class:ml-12={i === 0}
							class:xl:ml-10={i === 0}
							bind:this={allBtnElements[i]}
							in:fly={{ x: -100, duration: 500, delay: i * 100 }}
							out:fly={{ x: -100, duration: 500, delay: i * 100 }}
						>
							<Button
								title={item.title}
								selected={currentItem?.id === item.id}
								on:click={() => goto(`/${type}/${item.id}`)}
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div
			class="absolute top-0 left-0 w-[150px] xl:w-[180px] overflow-hidden"
			on:click={() => goto('/')}
			on:keydown={(e) => e.key === 'Enter' && goto('/')}
			tabindex="0"
			role="button"
		>
			<!-- <h4
				class="absolute font-normal text-center top-1/2 left-[48%] -translate-y-1/2 -translate-x-1/2"
			>
				{#if type === 'hospitality'}
					Event <br /> Professional
				{:else}
					Hospitality <br /> Professional
				{/if}
			</h4> -->
			<video src="/assets/circle-home.webm" class="w-full" autoplay muted playsinline loop />
		</div>
	</div>
</PageLayout>
