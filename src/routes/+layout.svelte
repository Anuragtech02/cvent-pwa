<script>
	import '../app.css';
</script>

<section class="relative h-screen overflow-hidden">
	<main class="relative h-full z-[1]">
		<slot />
	</main>
	<video
		playsinline
		autoplay
		muted
		loop
		src="/assets/bg.mp4"
		class="absolute top-0 left-0 w-screen h-screen object-cover z-[0]"
	/>
</section>
