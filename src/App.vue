<script setup>
import SearchView from "@/views/SearchView.vue";
</script>

<template>
	<div id="app">
		<SearchView/>

	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

:root {
	--black: #333333;
	--grey: #76787d;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Montserrat', sans-serif;
}
</style>
