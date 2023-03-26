<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/ProjectHeader.vue';
import ProjectGallery from '../components/ProjectGallery.vue';
import ProjectInfo from '../components/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/ProjectRelatedProjects.vue';
import axios from 'axios';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: () => {
		return {
			id: 0,
			singleProjectHeader: {
				singleProjectTitle: '',
				singleProjectDate: 'Dec 01, 2022',
				singleProjectTag: '',
			},
			projectImages: {
				first: '',
				second: '',
				third: ''
			},
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: '',
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
				technologies: '',
				projectDetailsHeading: 'Challenge',
				projectDetails: '',
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
		this.getDetailProject();
	},
	updated() {
		feather.replace();
	},
	methods: {
		getDetailProject(){
			axios.get('https://mazeko-api.herokuapp.com/project/' + this.$route.params.id,{
			}).then(response => (
				this.id = this.$route.params.id - 1,
				this.setData(response.data.data[this.id])
				// this.setData(response.data.data)
			))
		},

		setData(data){
			this.singleProjectHeader.singleProjectTitle = data.project_name,
			this.singleProjectHeader.singleProjectTag = data.category,
			this.projectInfo.companyInfos = data.client,
			this.projectInfo.technologies = data.tools,
			this.projectInfo.projectDetails = data.description
			this.projectImages.first = data.image,
			this.projectImages.second = data.second_image,
			this.projectImages.third = data.third_image
		}
	},
};
</script>

<style scoped></style>
