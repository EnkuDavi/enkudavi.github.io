<template>
	<!-- About page clients section -->
	<div class="mt-10 sm:mt-20">
		<p
			class="text-2xl sm:text-4xl text-primary-dark dark:text-primary-light font-sans font-semibold"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I worked with',
			clients: [
				{
					id: 1,
					title: 'Ekadata',
					img: require('@/assets/images/brands/ekadata.jpg'),
				},
				{
					id: 2,
					title: 'Trans Hybrid',
					img: require('@/assets/images/brands/trans.png'),
				},
				{
					id: 3,
					title: 'Bening karawang',
					img: require('@/assets/images/brands/virginia.jpg'),
				},
				{
					id: 4,
					title: 'Mazeko',
					img: require('@/assets/images/brands/mazeko.png'),
				}
			],
		};
	},
};
</script>
