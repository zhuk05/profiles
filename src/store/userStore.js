import { createStore } from 'vuex';
import axios from 'axios';

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 5,
    hasMore: false
  }
};

export default createStore({
  state: { ...initialState },
  mutations: {
    resetState(state) {
      Object.assign(state, initialState);
    },
    setUsers(state, users) {
      state.users = [...state.users, ...users];
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
    setPagination(state, pagination) {
      state.pagination = pagination;
    }
  },
  actions: {
    async searchUsers({ commit, state }, searchTerm) {
      try {
        commit('setLoading', true);
        commit('setError', null);

        if (state.pagination.page === 1) {
          commit('setUsers', []);
        }

        const usernames = searchTerm.split(',').map(term => term.trim());
        const promises = usernames.map(username => {
          const isIdSearch = !isNaN(username) && username.trim() !== '';
          
          return axios.get(`https://jsonplaceholder.typicode.com/users`, {
            params: {
              ...(isIdSearch ? { id: username } : { username_like: username }),
              _page: state.pagination.page,
              _limit: state.pagination.limit
            }
          });
        });

        const responses = await Promise.all(promises);
        const allUsers = responses.flatMap(response => response.data);
        const uniqueUsers = [...new Map(allUsers.map(user => [user.id, user])).values()];

        commit('setUsers', uniqueUsers);
        commit('setPagination', {
          ...state.pagination,
          hasMore: responses.some(response => response.data.length === state.pagination.limit)
        });
      } catch (error) {
        commit('setError', error.message || 'Ошибка при поиске');
      } finally {
        commit('setLoading', false);
      }
    },
    selectUser({ commit }, user) {
      commit('setSelectedUser', user);
    },
    clearSearch({ commit }) {
      commit('resetState');
    }
  }
});
