<style lang="scss">
	.consentBox {
		display: none;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,.8);
		position: fixed;
		top: 0;
		left: 0;
		justify-content: center;
		align-items: center;
		&.active {
			display: flex;
		}
	}
	.consentBox-content {
		background-color: white;
		padding: 1em;
		width: calc(100% - 20%);
	}
</style>
<template>
	<div class="consentBox" :class="{ active: consentBoxDisplay }" @click="toggleConsentBoxDisplay">
		<div class="consentBox-content">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac bibendum quam. Praesent bibendum ultricies ante luctus elementum. Donec laoreet lectus eget nibh porta vehicula. Donec felis mi, sagittis sed viverra vel, malesuada eget tortor. Aenean leo felis, placerat sed ante sit amet, maximus lobortis diam. Cras tristique scelerisque commodo. Donec ut feugiat nulla, in lacinia risus. Morbi libero nunc, vehicula vitae nibh et, porta vehicula orci. Sed pulvinar risus dui, ut auctor nibh rutrum non. Suspendisse a justo elit. In hac habitasse platea dictumst. Aliquam eget nunc id odio semper varius sed et ipsum.</p>
		</div>
	</div>
</template>

<script>
import { store } from '../../store'
import { mapGetters, mapMutations } from 'vuex'

export default {
	data () {
		return {}
	},
	store,
	computed: {
		...mapGetters(['consentBoxDisplay'])
	},
	methods: {
		...mapMutations(['toggleConsentBoxDisplay'])
	}
}
</script>