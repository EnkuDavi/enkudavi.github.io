<template>
	<!-- Projects grid -->
	<div class="container mx-auto">
		<ProjectsGrid />
	</div>
</template>

<script>
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
};
</script>

<style scoped></style>
