<style lang="scss">
	.banner-content {
		padding: 1em;
		background-color: lavender;
		position: fixed;
		bottom: 0;
	}
</style>
<template>
	<div class="banner-content">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac bibendum quam. Praesent bibendum ultricies ante luctus elementum. Donec laoreet lectus eget nibh porta vehicula. Donec felis mi, sagittis sed viverra vel, malesuada eget tortor. Aenean leo felis, placerat sed ante sit amet, maximus lobortis diam. Cras tristique scelerisque commodo. Donec ut feugiat nulla, in lacinia risus. Morbi libero nunc, vehicula vitae nibh et, porta vehicula orci. Sed pulvinar risus dui, ut auctor nibh rutrum non. Suspendisse a justo elit. In hac habitasse platea dictumst. Aliquam eget nunc id odio semper varius sed et ipsum. 
		<button>Acepto</button> 
		<a @click="toggleConsentBoxDisplay">Ver opciones</a>
	</div>
</template>

<script>
import { store } from '../../store'
import { mapMutations } from 'vuex'
import { ConsentString } from 'consent-string'
import axios from 'axios';

export default {
	data () {
		return {}
	},
	store,
	methods: {
		...mapMutations(['toggleConsentBoxDisplay'])
	},
	created () {
		axios.get('https://vendorlist.consensu.org/vendorlist.json')
			.then(response => {
				const consentData = new ConsentString();

				consentData.setGlobalVendorList(response.data)

				console.log('== String', consentData.getConsentString())
			})
			.catch(error => {
				console.log('== Error', error)
			})
	}
}
</script>