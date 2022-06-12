 
<script>
    import {page} from '$app/stores';
    import { base } from '$app/paths';
    import '../app.css';
    import {fade } from 'svelte/transition';
    import ImgCarousel from "$lib/ImgCarousel.svelte";


    import projects from '$lib/projects.json';

    const project= projects.filter(d=> d.slug == $page.params.slug)[0];

    const images = project.detail.carouselImgs
    // Carousel import and prep

    import { onMount } from 'svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
 
    onMount(async () => {
    const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    let width;
</script>
<svelte:window bind:outerWidth={width} />
<div class='outer-wrapper'>
{#if !project}
    <div>Project Not Found</div>
    <a id='close' href="./">Close</a>
{:else}
    <div in:fade="{{ duration: 300}}">
        <h2>{project.detail.title} <a id='close' href="./">Close</a></h2>
        <div class='wrapper'>
            {#if width > 575}
            <div id='img-carousel'><ImgCarousel {project} /></div>
            {/if}
            <div>
                {@html project.detail.body}
                {#if width <= 575}
                    <div id='img-carousel-mobile'><ImgCarousel {project} /></div>
                {/if}
                <p><strong>Languages and Tools: </strong>{project.detail.languages}</p>
                {#if project.detail.externalLinks}
                    {#if project.detail.externalLinks.length > 1}
                        <h3>See more:</h3>
                        <ul>
                            {#each project.detail.externalLinks as link}
                                <li><a href={link.url} target="_blank">{link.text}</a></li>
                            {/each}
                        </ul>
                    {:else}
                        <p><strong>Project Website: </strong><a href={project.detail.externalLinks[0].url} target="_blank">{project.detail.externalLinks[0].text}</a></p>
                    {/if}
                {/if}
                <a id='return' href="./">Return to project list</a>
            </div>
        </div>
    </div>
{/if}
</div>



<style> 

a, h2, h3 { 
    color: var(--text-color);
}
.outer-wrapper {
    width: clamp(350px, 80%, 1150px);
    max-width: 100%;
    margin: 0 auto;
}

.wrapper {
    display: flex;
    gap: 30px;
}
#img-carousel {
    width: min(50%, 500px);
}

a#close,a#return {
    padding: 4px 6px;
    background-color: var(--secondary-color);
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}
a#return { 
    background-color: var(--accent-color);
}
h2{
    font-size: 1.5rem;
}

ul {
    margin-left: 20px;    
    padding-inline-start: 0px;
    margin-top: 10px;
}
li {
    list-style: none;
    font-size: 1rem;
    line-height: 2;
}
li a{
    text-decoration: underline ;
    color:white;
}
p a{
    text-decoration: underline ;
    color:white;
}
li a:hover, p a:hover {
    text-decoration: none ;
}

@media (max-width: 575px) {
    .wrapper {
        flex-direction: column;
    }
}
</style>