<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button.svelte';
	import PageLayout from '$lib/PageLayout.svelte';
	import { fly } from 'svelte/transition';
	import { eventsData } from '$lib/constants';
	import { goto } from '$app/navigation';

	let allBtnElements: {
		[key: string]: HTMLDivElement;
	} = {};

	onMount(() => {
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
				// set opacity of all other elements to 0.5
				Object.keys(allBtnElements).forEach((k) => {
					allBtnElements[k].style.opacity = '1';
				});
			});
		});
	});

	let showButtons = false;
</script>

<PageLayout>
	<div class="h-full w-full relative">
		<div class="absolute top-1/2 -translate-y-1/2 left-10 flex justify-between items-center">
			<div
				class="relative w-[220px] xl:w-[250px] overflow-hidden"
				role="button"
				tabindex="0"
				on:click={() => (showButtons = !showButtons)}
				on:keydown={(e) => e.key === 'Enter' && (showButtons = !showButtons)}
			>
				<h4
					class="absolute font-normal text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				>
					Event <br /> Professional
				</h4>
				<video
					src="/assets/circle.webm"
					class="w-[300px] xl:w-[350px] max-w-[400px] -ml-10 xl:-ml-12"
					autoplay
					muted
					playsinline
					loop
				/>
			</div>
			<div class="flex-1 flex justify-between items-center">
				{#each eventsData as item, i}
					{#if showButtons}
						<div
							class="flex-1 transition-opacity duration-500 ease-out"
							class:ml-12={i === 0}
							class:xl:ml-10={i === 0}
							bind:this={allBtnElements[i]}
							in:fly={{ x: -100, duration: 500, delay: i * 100 }}
							out:fly={{ x: -100, duration: 500, delay: i * 100 }}
						>
							<Button title={item.title} on:click={() => goto('/event/' + item.id)} />
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</PageLayout>
