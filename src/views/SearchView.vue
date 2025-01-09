<script setup>
import Sidebar from "@/components/SideBar.vue";
import UserProfile from "@/components/UserProfile.vue";
</script>

<template>
	<div class="layout">
		<div class="title">
			<p>Жилфонд</p>
			<p>Пользователь</p>
		</div>
		<div class="search-view-container">
			<Sidebar/>
			<UserProfile/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.layout {
	display: flex;
	min-height: 100vh;
	padding: 50px 50px 58px;
	flex-direction: column;
	gap: 26px;

	.title {
		display: flex;
		justify-content: space-between;

		p:first-child {
			font-size: 4.28vh;
			font-weight: 700;
			color: #E31F24;
			line-height: 5.22vh;
			text-align: left;
			text-underline-position: from-font;
			text-decoration-skip-ink: none;
		}

		p:last-child {
			font-size: 2.14vh;
			font-weight: 400;
			color: var(--black);
			line-height: 19.5px;
			text-align: left;
			text-underline-position: from-font;
			text-decoration-skip-ink: none;
		}
	}

	.search-view-container {
		display: flex;
		height: calc(100vh - 173px);
		box-shadow: 0px 0px 10px 0px #0000001A;
		border-radius: 10px;
		background-color: #FDFDFD;
	}
}
</style>
