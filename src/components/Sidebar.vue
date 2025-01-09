<template>
	<div class="sidebar">
		<div class="search-container">
			<input
				type="text"
				v-model="searchTerm"
				@input="handleSearch"
				placeholder="Search users..."
				class="search-input"
			/>
		</div>

		<div v-if="loading" class="loader">Loading...</div>

		<div v-if="error" class="error">{{ error }}</div>

		<div class="users-list">
			<div
				v-for="user in users"
				:key="user.id"
				@click="selectUser(user)"
				class="user-item"
				:class="{ active: selectedUser && selectedUser.id === user.id }"
			>
				{{ user.username }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Sidebar',
	data() {
		return {
			searchTerm: ''
		}
	},
	computed: {
		...mapState(['users', 'selectedUser', 'loading', 'error'])
	},
	methods: {
		...mapActions(['searchUsers', 'selectUser', 'clearSearch']),
		handleSearch() {
			if (this.searchTerm) {
				this.searchUsers(this.searchTerm)
			} else {
				this.clearSearch()
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
	width: 300px;
	height: 100vh;
	border-right: 1px solid #eee;
	padding: 20px;

	.search-input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-family: 'Montserrat', sans-serif;
	}

	.users-list {
		margin-top: 20px;

		.user-item {
			padding: 10px;
			cursor: pointer;
			border-radius: 4px;

			&:hover {
				background-color: #f5f5f5;
			}

			&.active {
				background-color: #e3f2fd;
			}
		}
	}

	.loader {
		text-align: center;
		padding: 20px;
	}

	.error {
		color: red;
		padding: 10px;
	}
}
</style>
