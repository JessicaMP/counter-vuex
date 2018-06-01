import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	message: 'Vue and Vuex',
	text: 'TODAY IS FRIDAY',
	count: 0
}

const mutations = {
	increment (state) {
    state.count += 7
  },
  decrement (state) {
    state.count -= 2
	},
	multiply(state) {
		state.count *= 3
	},
	divide(state) {
		state.count /= 5
	}
}

const actions = {
	increment: ({ commit }) => commit('increment'),
	decrement: ({ commit }) => commit('decrement'),
	multiply: ({ commit }) => commit('multiply'),
	divide: ({ commit }) => commit('divide'),
}

const getters = {
	welcome(state) {
		return state.welcome;
	},
	message(state) {
		return state.message.toUpperCase();
	},
	text(state) {
		// return state.text.style() = {color: 'blue'};
		return state.text.toLowerCase();
	},
	count(state) {
		return state.count;
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})