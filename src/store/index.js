import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		consentBoxDisplay: false
	},
	getters: {
		consentBoxDisplay: state => state.consentBoxDisplay
	},
	mutations: {
		toggleConsentBoxDisplay: state => {
			state.consentBoxDisplay = !state.consentBoxDisplay
		} 
	}	
})