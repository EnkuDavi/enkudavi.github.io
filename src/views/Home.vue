<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl font-medium"
				aria-label="More Projects"
				>More Projects</router-link
			>
		</div>
	</div>
</template>

<script>
import AppBanner from '@/components/AppBanner';
import ProjectsGrid from '../components/ProjectsGrid.vue';
// import ProjectList from '../components/ProjectList.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
	},
};
</script>

<style scoped></style>
