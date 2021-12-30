<template>
	<!-- About me bio section -->
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About me portfolio image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/mazeko.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About me details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am Eko Purnomo,I was born in Kebumen, 5 September 1997. I have completed my Bachelor Degree education in information technology in 2020. I have more than 2 years experience in web and mobile based application development. Among the technologies that I often use in my development are HTML & CSS, JavaScript, PHP, CodeIgniter, Laravel, Vue js, Nuxt js, Flutter, MySQL, Firebase, REST API, Git and several technologies that are quite widely used today. I will always try to give my best for every responsibility assigned to me.',
				},
				{
					id: 2,
					bio:
						'I am a person who can work individually as well as with a team, and during my career as a software developer, I have completed several application projects that have been used by users. I will continue to learn new things because I am always excited to do it and of course to meet the increasingly complex needs of users',
				},
			],
		};
	},
};
</script>
