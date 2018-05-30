<style lang="scss">
	a {
		cursor: pointer;
		color: blue;
		text-decoration: underline;
	}
</style>
<template>
	<div>
		<ConsentBox/>
		<Banner/>
	</div>
</template>

<script>
import ConsentBox from '../consentBox/consentBox.vue'
import Banner from '../banner/banner.vue'

export default {
	data () {
		return {}
	},
	components: {
		ConsentBox: ConsentBox,
		Banner: Banner
	}
}
</script>