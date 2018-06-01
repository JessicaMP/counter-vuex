<template>
	<div>
		<h1>{{ welcome }}</h1>
		<h2>{{ $store.state.message }}</h2>
		<h3>{{ $store.state.text }}</h3>
		<div>
			<p>{{$store.state.count}}</p>
			<button @click="decrement">-</button>
			<button @click="increment">+</button>
			<button @click='multiply'>x</button>
			<button @click='divide'>/</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data() {
		return {
			welcome: 'Hello World'
		}
	},
  computed: mapGetters([
		'message',
		'count',
		'text'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'multiply',
    'divide'
  ])
}
</script>
