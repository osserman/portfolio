<script context="module">
	export const prerender = true;
</script>

<script>
	 import Item from '$lib/Item.svelte';
	 import Item2 from '$lib/Item2.svelte';
	//import Projects from '../lib/Projects.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Stephen Osserman Portfolio" />
</svelte:head>

<section>
	<Item2 />
 <!--<Projects />-->
</section>

<style>
	section { 
		position: relative;
		padding: 0 5%;
	}

</style>
