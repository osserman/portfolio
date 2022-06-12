<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
	let showFooter = false; 
	import {horizontalLayout} from '$lib/store.js';
	import { page } from '$app/stores';
	let width;

</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..700&display=swap" rel="stylesheet">
	<title>Stephen's Portfolio</title>
	<meta name="description" content="Stephen Osserman Portfolio" />
</svelte:head>

<svelte:window bind:outerWidth={width}/>

<Header spacingTop={$horizontalLayout & $page.url.pathname == '/'  ? '40px' : '0px'} />

<main>
	<slot />
</main>
<div class='footer-toggle'><button on:click={() => {showFooter = !showFooter}}>About Stephen</button> </div>
{#if width > 575}
<div class='layout-toggle'><button on:click={() => {horizontalLayout.set(!$horizontalLayout)}}>Toggle Layout</button> </div>
{/if}
{#if showFooter}
<Footer on:togglefooter={() => {showFooter=!showFooter}}/>
{/if}

<style>

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	.footer-toggle{
        position: fixed;
		bottom: 0px;
		width: 100%;
		border:none;
        background-color: transparent;
		padding: 25px 20px 20px 0px;
	}

	.footer-toggle button{
		color:  var(--text-color);
        border: none;
		padding: 16px 16px 4px;
    	font-size: 1.3rem;
    	right: 20px;
    	bottom: 16px;
    	position: fixed;       
		font-size: 1.1rem;
        text-transform: uppercase;
		background: linear-gradient(
			#00000000 0%,
			var(--accent-color) 50%,
			var(--accent-color) 100%
		);
	}

	.layout-toggle {
		position: absolute;
		left: 20px;
		bottom: 16px;
	}
	.layout-toggle button{
		color: black;
	}
</style>
