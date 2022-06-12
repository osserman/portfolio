<script context="module">
	export const prerender = true;
</script>

<script>
	 import ProjectGrid from '$lib/ProjectGrid.svelte'
	 import ProjectGridHorizontal from '$lib/ProjectGridHorizontal.svelte'
	 import {horizontalLayout} from '$lib/store.js';
	 let width; 
</script>

<svelte:window bind:outerWidth={width}/>

<section>
	{#if !$horizontalLayout || width < 575}
    <ProjectGrid />
	{:else}
    <ProjectGridHorizontal />
	{/if}
</section>

<style>
	section { 
		position: relative;
		padding: 0 5%;
	}

</style>