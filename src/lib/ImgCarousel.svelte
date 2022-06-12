<script>
    import {page} from '$app/stores';
    import { base } from '$app/paths';
    import '../app.css';

    export let project; 

    const images = project.detail.carouselImgs
    // Carousel import and prep

    import { onMount } from 'svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
 
    onMount(async () => {
    const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<svelte:component
this={Carousel}
bind:this={carousel}
let:loaded
let:showPrevPage
let:showNextPage
>

<button slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev">
    &#10094;
</button>
{#each images as img, imageIndex (img)}
    <div class="img-container">
    {#if loaded.includes(imageIndex)}
        <img src = "{base}/imgs/{img.src}" alt={img.alt} />
    {/if}
    </div>
 {/each}
 <button slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">
    &#10095;
 </button>
</svelte:component>

<style>
.custom-arrow {
    border: none;
    background-color: transparent;
    color: #FFFFFF55;
    font-size: 3rem;
}

img {
    width: 100% 
}
</style>