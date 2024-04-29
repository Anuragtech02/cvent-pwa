<script lang="ts">
	import { onMount } from 'svelte';

	export let currentItem: {
		id: number;
		title: string;
		media: {
			type: string;
			src: string;
		};
	};
	let frameVideoEl: HTMLVideoElement;
	let playVideoWidth = 0;
	let playVideoHeight = 0;

	onMount(() => {
		playVideoWidth = frameVideoEl?.offsetWidth;
		playVideoHeight = frameVideoEl?.offsetHeight;

		window.addEventListener('resize', () => {
			playVideoWidth = frameVideoEl?.offsetWidth;
			playVideoHeight = frameVideoEl?.offsetHeight;
		});
	});
</script>

<div class="absolute top-0 left-0 w-screen h-[calc(100vh-100px-259px)] mt-[100px]">
	<div class="absolute bottom-4 lg:bottom-6 2xl:bottom-8 left-1/2 -translate-x-1/2 z-[2]">
		<h3 class="text-xl 2xl:text-2xl">{currentItem.title}</h3>
	</div>

	<div
		class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full flex justify-center items-center"
	>
		<div
			class="absolute top-[46%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-[1]"
			style="width: calc({playVideoWidth}px - 280px); height: calc({playVideoHeight}px - 150px)"
		>
			<video
				src={currentItem.media.src}
				class="w-full h-full object-cover z-[1]"
				autoplay
				muted
				playsinline
				loop
			/>
		</div>
		<video
			bind:this={frameVideoEl}
			src="/assets/video-screen.webm"
			class="h-full w-auto max-w-screen"
			autoplay
			muted
			playsinline
		/>
	</div>
</div>
