<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const searchTerm = ref("");
const debounceTimeout = ref(null);

const users = computed(() => store.state.users);
const selectedUser = computed(() => store.state.selectedUser);
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);

const handleSearch = () => {
  store.commit("setLoading", true);
  clearTimeout(debounceTimeout.value);

  debounceTimeout.value = setTimeout(() => {
    if (searchTerm.value.trim()) {
      store.dispatch("searchUsers", searchTerm.value);
    } else {
      store.dispatch("clearSearch");
      store.state.pagination.page = 1;
    }
    store.commit("setLoading", false);
  }, 500);
};

const selectUser = (user) => {
	store.dispatch("selectUser", user);
};

const addMore = () => {
	store.state.pagination.page++;
	if (searchTerm.value) {
		store.dispatch("searchUsers", searchTerm.value);
	}
};

const showResults = computed(() => {
	return store.state.users.length > 0 && searchTerm.value !== "";
});

const tip = computed(() => {
	if (searchTerm.value === "") {
		return "начните поиск";
	}
	if (store.state.users.length === 0 && searchTerm.value !== "") {
		return "ничего не найдено";
	}
	return "";
});
</script>

<template>
	<div class="sidebar">
		<div class="padding-container">
			<div class="search-container">
				<input
					type="text"
					v-model="searchTerm"
					@input="handleSearch"
					placeholder="Введите имя"
					class="search-input"
				/>
			</div>

			<div v-if="loading" class="loader">Загрузка...</div>

			<div v-if="error" class="error">Ошибка: {{ error }}</div>
		</div>
		<div class="users-list" v-if="!loading && !error">
			<div class="title-container">
				<p class="result-title">Результаты</p>
				<p v-if="!showResults" class="tip">{{ tip }}</p>
			</div>
			<div class="list-container">
				<div
					v-for="user in users"
					:key="user.id"
					@click="selectUser(user)"
					class="user-item"
					:class="{ active: selectedUser && selectedUser.id === user.id }"
				>
					<div class="user-img"
					     :class="{ active: selectedUser && selectedUser.id === user.id }"
					/>
					<div class="user-name-holder">
						<p class="user-name">{{ user.username }}</p>
						<p class="user-email">{{ user.email }}</p>
					</div>
				</div>
				<div v-if="store.state.pagination.hasMore" class="load-more">
					<p @click="addMore"> Загрузить больше</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	width: 300px;
	border-right: 1px solid #E0E0E0;
	padding-top: 27px;

	.search-input {
		width: 240px;
		padding: 16px 24px 16px 24px;
		border-radius: 8px;
		border: 1.5px solid #e9ecef;

		font-family: "Montserrat", sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: #76787d;
		line-height: 17.07px;
		text-align: left;
		text-underline-position: from-font;
		text-decoration-skip-ink: none;
		outline: none;
	}

	.search-input:focus {
		color: var(--black);
	}

	.users-list {
		max-height: calc(100% - 200px);
		margin-top: 29px;

		.list-container {
			width: 100%;
			max-height: calc(100vh - 312px);
			overflow-y: auto;
			margin-top: 10px;
			padding: 10px 30px 27px;
			display: flex;
			flex-direction: column;
			gap: 18px;


			&::-webkit-scrollbar {
				width: 4px;
			}

			&::-webkit-scrollbar-track {
				background: #f1f1f1;
				border-radius: 2px;
			}

			&::-webkit-scrollbar-thumb {
				background: #888;
				border-radius: 2px;
			}

			&::-webkit-scrollbar-thumb:hover {
				background: #555;
			}
		}

		.user-item {
			cursor: pointer;
			border-radius: 10px;
			display: flex;
			box-shadow: 0 0 10px 0 #0000001a;

			&:hover {
				background-color: #E0E0E0;

				.user-img {
					border: 1px solid #E0E0E0;
				}
			}

			&.active {
				background-color: #E0E0E0;
			}
		}

		.user-img {
			width: 70px;
			height: 70px;
			background-position: center center;
			background-size: cover;
			background-image: url('@/assets/img/defaultPhoto.png');
			background-color: #fff;
			background-repeat: no-repeat;
			border: 1px solid #fff;
			border-right: 1px solid #e0e0e0;
			border-radius: 10px 0 0 10px;

			&.active {
				border: 1px solid #E0E0E0;
			}
		}

		.user-name-holder {
			max-width: calc(100% - 70px);
			padding: 15px;
			display: flex;
			flex-direction: column;
			gap: 5px;

			p {
				font-size: 14px;
				line-height: 17.07px;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.user-name {
				font-weight: 600;
				color: var(--black);
			}

			.user-email {
				font-weight: 400;
				color: var(--grey);
			}
		}

		.result-title {
			font-size: 16px;
			font-weight: 600;
			color: var(--black);
			line-height: 22.4px;
			text-align: left;
			text-underline-position: from-font;
			text-decoration-skip-ink: none;
		}

		.tip {
			font-size: 14px;
			font-weight: 400;
			color: var(--grey);
			line-height: 17.07px;
			text-align: left;
			text-underline-position: from-font;
			text-decoration-skip-ink: none;
		}

		.title-container {
			padding: 0 30px;
		}
	}

	.padding-container {
		padding: 0 30px;
	}

	.loader {
		text-align: center;
		padding: 20px;
	}

	.error {
		color: red;
		padding: 10px;
	}

	.load-more {
		padding: 0 30px;

		p {
			cursor: pointer;
			border: 1px solid #E0E0E0;
			border-radius: 10px;
			text-align: center;
			padding: 5px 3px;
			background-color: #fff;
		}
	}
}
</style>
