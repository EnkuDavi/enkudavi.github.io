<template>
	<div class="container mx-auto sm:flex py-5 sm:py-10 mt-5 sm:mt-10">
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>

<script>
import feather from 'feather-icons';
import ContactForm from '@/components/ContactForm.vue';
import ContactDetails from '@/components/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Jl.Pekapuran VIII, Jakarta Barat',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'ekopur05@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '62851 6132 9216',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>
