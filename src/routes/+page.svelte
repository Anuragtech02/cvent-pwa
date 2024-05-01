<script lang="ts">
	import { goto } from '$app/navigation';

	function handleClickCircle(id: number) {
		if (id === 1) {
			goto('/event');
		} else {
			goto('/hospitality');
		}
	}
</script>

<section class="h-full w-full relative">
	<div class="w-full h-full flex justify-between py-10 items-center">
		<div
			class="relative w-[600px]"
			role="button"
			tabindex="0"
			on:click={() => handleClickCircle(1)}
			on:keydown={(e) => e.key === 'Enter' && handleClickCircle(1)}
		>
			<video src="/assets/circle.webm" autoplay loop playsinline muted />
			<h2
				class="absolute font-normal text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				Event <br /> Professional
			</h2>
		</div>
		<div class="relative text-center">
			<img src="/assets/logo.svg" alt="logo" class="w-[500px]" />
			<h3 class="mt-4">Select your role to being your journey!</h3>
		</div>
		<div
			class="relative w-[600px]"
			role="button"
			tabindex="0"
			on:click={() => handleClickCircle(2)}
			on:keydown={(e) => e.key === 'Enter' && handleClickCircle(2)}
		>
			<video src="/assets/circle.webm" autoplay loop playsinline muted />
			<h2
				class="absolute font-normal text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
			>
				Hospitality <br /> Professional
			</h2>
		</div>
	</div>
</section>
