<template>
	<!-- Project gallery -->
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
		>
			<img
				:src="projectImages.first"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
		<div v-if="projectImages.second != ''"
			class="mb-10 sm:mb-0"
		>
			<img
				:src="projectImages.second"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
		
		<div v-if="projectImages.third != ''"
			class="mb-10 sm:mb-0"
		>
			<img
				:src="projectImages.third"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: ['projectImages'],
};
</script>
