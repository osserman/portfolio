<script> 
   import { createEventDispatcher } from 'svelte'; 
   const dispatch = createEventDispatcher(); 
   //function updateHeader() {
	//	dispatch('update-header', {id: ‘p1’} 
	//}


   const projects = [
    {   
        imgUrl: "GenreKeys.png",
    	imgAlt: "Preview of Genre Keys Project",
        description: "Spotify Genre Keys",
        analytics: 2, 
        infoViz: 4, 
        mapping: 0

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
		imgUrl:  "PeopleOfThePandemic.png",
		imgAlt:  "Preview of People of the Pandemic Game",
		description:  "People of the Pandemic",
        analytics: 4, 
        infoViz: 2, 
        mapping: 0
	}
	,{ 
		imgUrl:  "CirclingMtHood.png",
		imgAlt:  "Preview of Circling Mt Hood",
		description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
	}
	,{ 
        imgUrl:  "TheTaxDodge.png",
        imgAlt:  "Preview of The Tax Dodge",
        description:  "The Tax Dodge",
        analytics: 0, 
        infoViz: 4, 
        mapping: 0
    }
    ,{ 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    }
    ,{ 
        imgUrl:  "PeopleOfThePandemic.png",
        imgAlt:  "Preview of People of the Pandemic Game",
        description:  "People of the Pandemic",
        analytics: 4, 
        infoViz: 2, 
        mapping: 0
    }
    ,{ 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    },
    { 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    }
    ,{ 
        imgUrl:  "PeopleOfThePandemic.png",
        imgAlt:  "Preview of People of the Pandemic Game",
        description:  "People of the Pandemic",
        analytics: 4, 
        infoViz: 2, 
        mapping: 0
    }
    ,{ 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    },
    { 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    }
    ,{ 
        imgUrl:  "PeopleOfThePandemic.png",
        imgAlt:  "Preview of People of the Pandemic Game",
        description:  "People of the Pandemic",
        analytics: 4, 
        infoViz: 2, 
        mapping: 0
    }
    ,{ 
        imgUrl:  "CirclingMtHood.png",
        imgAlt:  "Preview of Circling Mt Hood",
        description:  "Circling Mt. Hood",
        analytics: 3, 
        infoViz: 3, 
        mapping: 2
    }
]
</script>

<div class='wrapper'>
    {#each projects as project}
    <div class='item-wrapper' 
        on:mouseenter= {()=>{dispatch('update-header', project)}}
        on:mouseleave= {()=>{dispatch('update-header', null)}}>
        <p>{project.description}</p>
        <div class='img-background'>
            <img src= {project.imgUrl} alt={project.imgAlt}>
        </div>
    </div>
    {/each}
</div>


<style>
    .wrapper {
        /*display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 20px 10% 0;
        gap: 20px;
		flex-wrap: wrap;
		overflow: auto;*/
        display: grid;
        margin-top: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
        grid-gap: 40px;
        justify-content: center;
        padding: 30px 0 30vh;
        height: 70vh;
        overflow: auto;
    }
    .item-wrapper {
        height: fit-content;
        width: 200px;
    }
    .item-wrapper img {
        width: 100%;
        filter: grayscale(1);
        opacity: 0.6;
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
    }

    .item-wrapper:hover p {
        filter: grayscale(0);
        opacity: 1;
        color: white;
    }

    div.img-background {
        background-color: #564f6f;
        /*border-bottom: 5px solid #802bb1;*/
    }
    div.img-background {
        max-width: 200px;
        max-height: 200px;
    }
</style>