<script lang="ts">
	export let currentItem: {
		id: number;
		title: string;
		media: {
			type: string;
			src: string;
		};
	};
</script>

<div class="h-[70%] relative overflow-hidden">
	<div class="absolute bottom-[2%] xl:bottom-[15%] left-1/2 -translate-x-1/2 z-[2]">
		<h3 class="text-xl xl:text-3xl">{currentItem.title}</h3>
	</div>
	<div
		class="w-[calc(800px-125px)] xl:w-[calc(1100px-155px)] absolute top-[60%] xl:top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 h-[calc(800px-450px)] xl:h-[calc(800px-350px)] z-[1]"
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
	<div
		class="absolute top-[60%] xl:top-1/2 h-[800px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] xl:w-[1100px]"
	>
		<video src="/assets/video-screen.webm" class="h-full" autoplay muted playsinline />
	</div>
</div>
