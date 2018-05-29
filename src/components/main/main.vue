<style lang="scss">
	div {
		padding: 1em;
		background-color: black;
		h1 {
			color: red;
		}
		h2 {
			color: white;
			font-weight: bold;
		}
		p {
			color: white;
		}
	}
</style>

<template>
	<div>
		<h1>{{ title }}</h1>
		<h2>Cuerpo del texto</h2>
		<p>{{ content }}</p>
		<button @click="addName">Add name</button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: 'Este es la cabecera',
			content: 'Hola mundo como estamos esto es una aplicacion con vue loader'
		}
	},
	methods: {
		addName () {
			this.content = this.content + ' ' + 'Santiago'
		}
	}
}
</script>

