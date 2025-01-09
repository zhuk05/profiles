<template>
	<div id="app">
		<div class="layout">
			<Sidebar />
			<UserProfile />
		</div>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import UserProfile from './components/UserProfile.vue'

export default {
	name: 'App',
	components: {
		Sidebar,
		UserProfile
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Montserrat', sans-serif;
}

#app {
	.layout {
		display: flex;
		min-height: 100vh;
	}
}
</style>
