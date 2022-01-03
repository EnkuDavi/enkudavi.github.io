<template>
	<!-- Client single image -->
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" style="height:160px;width:280px"
		/>
	</div>
</template>

<script>
export default {
	props: ['client'],
};
</script>

<style lang="scss" scoped></style>
