<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		background:#fdecd1 !important;
	}


</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>