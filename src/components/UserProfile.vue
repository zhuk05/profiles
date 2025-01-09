<template>
	<div class="user-profile">
		<div v-if="selectedUser" class="profile-card">
			<h2>{{ selectedUser.name }}</h2>
			<div class="profile-info">
				<p><strong>Username:</strong> {{ selectedUser.username }}</p>
				<p><strong>Email:</strong> {{ selectedUser.email }}</p>
				<p><strong>Phone:</strong> {{ selectedUser.phone }}</p>
				<p><strong>Website:</strong> {{ selectedUser.website }}</p>
				<div class="address">
					<h3>Address:</h3>
					<p>{{ selectedUser.address.street }}, {{ selectedUser.address.suite }}</p>
					<p>{{ selectedUser.address.city }}, {{ selectedUser.address.zipcode }}</p>
				</div>
				<div class="company">
					<h3>Company:</h3>
					<p>{{ selectedUser.company.name }}</p>
					<p>{{ selectedUser.company.catchPhrase }}</p>
				</div>
			</div>
		</div>
		<div v-else class="no-selection">
			Please select a user to view their profile
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'UserProfile',
	computed: {
		...mapState(['selectedUser'])
	}
}
</script>

<style lang="scss" scoped>
.user-profile {
	padding: 20px;

	.profile-card {
		max-width: 600px;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);

		h2 {
			margin-bottom: 20px;
			color: #333;
		}

		.profile-info {
			p {
				margin: 10px 0;
			}

			.address, .company {
				margin-top: 20px;

				h3 {
					color: #666;
					margin-bottom: 10px;
				}
			}
		}
	}

	.no-selection {
		text-align: center;
		color: #666;
		font-size: 18px;
		margin-top: 40px;
	}
}
</style>
