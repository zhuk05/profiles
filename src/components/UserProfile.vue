<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const selectedUser = computed(() => store.state.selectedUser);
</script>

<template>
	<div class="user-profile">
		<div v-if="selectedUser" class="profile-card">
			<div class="user-photo"/>
			<div class="user-info">
				<div class="profile-info">
					<p class="name">{{ selectedUser.name }}</p>
					<p>email: <span>{{ selectedUser.email }}</span></p>
					<p>phone: <span>{{ selectedUser.phone }}</span></p>
				</div>
				<div class="user-about">
					<p class="about-title">О себе:</p>
					<p class="about-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
		</div>
		<div v-else class="no-selection">
			<p>Выберите сотрудника, чтобы посмотреть его профиль</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.user-profile {
	width: calc(100% - 300px);
	border-left: 1px solid #eee;

	.profile-card {
		display: flex;
		gap: 61px;
		padding: 30px 30px 30px 21px;

		.user-photo {
			width: 43%;
			height: 286px;
			border: 1px solid #E0E0E0;
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			background-image: url('@/assets/img/defaultPhoto.png');
		}

		.user-info {
			width: calc(100% - 43% - 61px);
			display: flex;
			flex-direction: column;
			gap: 20px;

			.profile-info {
				display: flex;
				flex-direction: column;
				gap: 10px;

				.name {
					font-size: 16px;
					font-weight: 600;
					color: #000;
					line-height: 22.4px;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
				}

				p {
					font-size: 16px;
					font-weight: 600;
					color: var(--black);
					line-height: 22.4px;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
				}

				span {
					font-size: 14px;
					font-weight: 400;
					color: var(--grey);
					line-height: 19.6px;
					text-align: left;
					text-underline-position: from-font;
					text-decoration-skip-ink: none;
				}
			}
		}

		.user-about {
			display: flex;
			flex-direction: column;
			gap: 25px;

			.about-title {
				font-size: 16px;
				font-weight: 600;
				color: var(--black);
				line-height: 22.4px;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;
			}

			.about-text {
				font-size: 14px;
				font-weight: 400;
				color: var(--grey);
				line-height: 17.07px;
				text-align: left;
				text-underline-position: from-font;
				text-decoration-skip-ink: none;
			}
		}
	}

	.no-selection {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		p {
			font-size: 14px;
			font-weight: 400;
			color: #76787D;
			text-align: center;
			line-height: 17.07px;
			text-underline-position: from-font;
			text-decoration-skip-ink: none;
		}

	}
}
</style>
