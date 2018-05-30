<template>
	<div class="banner-content">
		<h1>Purposes</h1>
		<ul v-for="purpose in purposesList">
			<li>{{ purpose }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			purposesList: [
				'Purpose 1',
				'Purpose 2'
			]
		}
	}
}
</script>