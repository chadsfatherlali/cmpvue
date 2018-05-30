import Vue from 'vue'
import { store } from './store'
import { mapMutations } from 'vuex'

import Main from './components/main/main.vue'

window.__cmpvue = new Vue({
	store,
	methods: {
		...mapMutations(['toggleConsentBoxDisplay'])
	},
	el: '#cmp',
	render: h => h(Main),
})