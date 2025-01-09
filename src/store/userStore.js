import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
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
        commit('setError', error.message || 'Error fetching users')
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
