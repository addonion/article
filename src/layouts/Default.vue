<template>
	<div>
		<Navbar />

		<b-container class="page">
			<slot />
		</b-container>
	</div>
</template>


<script>
	import Navbar from '~/components/Navbar.vue'

	export default {
		components: {
			Navbar
		}
	};
</script>

<style lang="scss">
	
</style>