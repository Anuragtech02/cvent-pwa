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

<div class="h-[60%] relative overflow-hidden">
	<div class="absolute bottom-[34%] xl:bottom-[27%] left-1/2 -translate-x-1/2 z-[2]">
		<h3>{currentItem.title}</h3>
	</div>
	<div
		class="w-[940px] bg-black absolute top-[21%] left-1/2 -translate-x-1/2 h-[400px] xl:h-[450px] z-[1]"
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
	<div class="absolute top-[60%] min-w-[1200px] -translate-y-1/2 left-1/2 -translate-x-1/2 h-full">
		<video src="/assets/video-screen.webm" class="w-full" autoplay muted playsinline />
	</div>
</div>
