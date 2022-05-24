<script context="module">
	export const prerender = true;
</script>

<script>
	 import Item from '$lib/Item.svelte';
	 import Item2 from '$lib/Item2.svelte';
	 import Header from '$lib/header/Header.svelte';
	 const  initialHeaderParams = {
		analytics: 1, 
	  	infoViz: 2,
		mapping: 1
	 }
	 let headerParams = initialHeaderParams;
	//import Projects from '../lib/Projects.svelte';
	function doSomething(event){
		console.log(event.detail)
		if(event.detail != null){
			headerParams = {
			analytics: event.detail.analytics, 
	  		infoViz: event.detail.infoViz,
			mapping: event.detail.mapping
			}
		} else {
			headerParams = initialHeaderParams
		}
		
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Stephen Osserman Portfolio" />
</svelte:head>

<!-- this was in layout, but am going to simplify this whole app -->
<Header {...headerParams} />

<main>
<section>
	<Item2 on:update-header={doSomething} />
 <!--<Projects />-->
</section>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	section { 
		position: relative;
		padding: 0 10%;
	}

</style>
