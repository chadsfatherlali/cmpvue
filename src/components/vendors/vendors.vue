<template>
	<div class="banner-content">
		<h1>Vendors</h1>
		<ul v-for="vendor in vendorsList">
			<li>{{ vendor }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			vendorsList: [
				'Vendor 1',
				'Vendor 2'
			]
		}
	}
}
</script>