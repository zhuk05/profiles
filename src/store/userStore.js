import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: [],
		selectedUser: null,
		loading: false,
		error: null
	},
	mutations: {
		setUsers(state, users) {
			state.users = users
		},
		setSelectedUser(state, user) {
			state.selectedUser = user
		},
		setLoading(state, status) {
			state.loading = status
		},
		setError(state, error) {
			state.error = error
		}
	},
	actions: {
		async searchUsers({ commit }, searchTerm) {
			try {
				commit('setLoading', true)
				commit('setError', null)

				const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
					params: {
						username_like: searchTerm
					}
				})

				commit('setUsers', response.data)
			} catch (error) {
				commit('setError', 'Error fetching users')
			} finally {
				commit('setLoading', false)
			}
		},
		selectUser({ commit }, user) {
			commit('setSelectedUser', user)
		},
		clearSearch({ commit }) {
			commit('setUsers', [])
			commit('setSelectedUser', null)
		}
	}
})
