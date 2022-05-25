<script> 

import {headerData, filterProjectsBy, activeTopic} from './header/headerData.js';
import {fade , fly, slide, scale} from 'svelte/transition';
import { flip } from 'svelte/animate';

   const projects = [
    { 
        imgUrl:  "ElectionUncertainty.png",
        imgAlt:  "Preview of Election Uncertainty Map",
        description:  "Election Uncertainty",
        analytics: 1, 
        infoViz: 3, 
        mapping: 5
    }
    ,{   
        imgUrl: "GenreKeys2.png",
    	imgAlt: "Preview of Genre Keys Project",
        description: "Spotify Genre Keys",
        analytics: 2, 
        infoViz: 4, 
        mapping: 0
    }
    ,{ 
		imgUrl:  "PeopleOfThePandemic.png",
		imgAlt:  "Preview of People of the Pandemic Game",
		description:  "People of the Pandemic",
        analytics: 5, 
        infoViz: 3, 
        mapping: 0
	}
    ,{ 
        imgUrl:  "WisconsinBridges.png",
        imgAlt:  "Preview of Winsconsin Bridges",
        description:  "Wisconsin Bridges",
        analytics: 4, 
        infoViz: 4, 
        mapping: 5
    }
    ,
    { 
		imgUrl:  "CirclingMtHood.png",
		imgAlt:  "Preview of Circling Mt Hood",
		description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
	}
    ,{ 
        imgUrl:  "RacialWealthGapHousing.png",
        imgAlt:  "Preview of Housing and the Racial Wealth Gap",
        description:  "Unrealized Wealth",
        analytics: 5, 
        infoViz: 2, 
        mapping: 3
    },
    { 
		imgUrl: "ExploringWordle.png",
		imgAlt:  "Preview of Exploring Wordle Project",
		description:  "Exploring Wordle",
        analytics: 4, 
        infoViz: 4, 
        mapping: 0
    }
    ,{ 
        imgUrl:  "TheTaxDodge.png",
        imgAlt:  "Preview of The Tax Dodge",
        description:  "The Tax Dodge",
        analytics: 0, 
        infoViz: 4, 
        mapping: 0
    }
    ,
    { 
        imgUrl:  "PianoFlashcards.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Piano Flashcard Game",
        analytics: 0, 
        infoViz: 1, 
        mapping: 0
    }
]
$: filteredProjects = ($filterProjectsBy == 'all' ? 
    projects : 
    projects.filter(d=> d[$filterProjectsBy] > 1).sort((a,b)=> {return b[$filterProjectsBy]-a[$filterProjectsBy]}))
</script>

<div class='wrapper'>
    {#each filteredProjects as project (project)}
    <div  transition:fade animate:flip="{{duration: 500}}" class='item-wrapper' 
        on:mouseenter= {()=>headerData.change(project)}
        on:mouseleave= {()=>headerData.reset()}>
        <p>{project.description}</p>
        <div class='img-background'>
            <img src= {project.imgUrl} alt={project.imgAlt}>
        </div>
    </div>
    {/each}
    {#if $filterProjectsBy != 'all'}
    <div class='show-all'><button on:click={() =>{ activeTopic.set(null); filterProjectsBy.set('all')}}>Show All Projects</button></div>
    {/if}
</div>


<style>
    .wrapper {
        display: grid;
        margin-top: 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
        grid-gap: 40px;
        justify-content: center;
        padding: 30px 0 30vh;
        height: 70vh;
        overflow: auto;
    }
    .item-wrapper {
        height: fit-content;
        width: 250px;
    }
    .item-wrapper img {
        width: 100%;
        filter: grayscale(1);
        opacity: 0.75;
        transition: filter 0.5s, opacity 0.5s;
    }
    .item-wrapper:hover img {
        filter: grayscale(0);
        opacity: 1;
    }
    p {
        text-align: center;
        margin: 0;
        transition: color 0.5s;
        font-weight: bold;
    }

    .item-wrapper:hover p {
        filter: grayscale(0);
        opacity: 1;
        color: white;
    }

    div.img-background {
        background-color: #564f6f;
    }
    div.img-background {
        max-width: 250px;
        max-height: 250px;
    }
    .show-all {
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .show-all button {
        font-size: 1.3rem;
        background-color: transparent;
    }
</style>