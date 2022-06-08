var e=[{imgUrl:"ElectionUncertainty.png",imgAlt:"Preview of Election Uncertainty Map",description:"Election Uncertainty",slug:"election-uncertainty",analytics:1,infoViz:3,mapping:5,detail:{title:"Visualizing Uncertainty of Partial U.S. Election Returns",body:"<p>In the summer of 2020 it became clear that early U.S. election returns &mdash; vote tallies in the first few hours after polls closed &mdash; would likely differ substantially from final vote count. Most news organizations adjusted some election reporting to account for this uncertainty. But most of their accompanying visualizations hardly changed.</p><p>Shortly after the election I pulled election return data and made a number of visualizations to illustrate the challenge and explore potential aproaches. This work led to a collaboration with political scientist <a href='https://alexandercoppock.com/' target='_blank'>Alexander Coppock</a> on a project to test the impact of different map-based election results visualizations.</p><p>While the research is ongoing, we have completed most of the maps for our study.</p>",languages:"Observable, d3, topojson",externalLinks:[{text:"Charts and commentary with actual election return data",url:"https://observablehq.com/d/23f111373d18f914"},{text:"Maps for academic research study",url:"https://observablehq.com/d/a35237992c21133d"}],carouselImgs:[{src:"ElectionUncertaintyCharts.png",alt:"4 charts of PA election returns, 1 without visualization outstanding ballots and other 3 with different approaches to visualizing those ballots."},{src:"ElectionUncertaintyPackedDots.png",alt:"map with simulated data for OH election returns - showing vote counts and estimated outstanding ballots with dots"},{src:"ElectionUncertaintyDonut.png",alt:"map with simulated data for OH election returns - showing vote counts and estimated outstanding ballots with donut chart"}]}},{imgUrl:"GenreKeysTeaser.png",imgAlt:"Preview of Genre Keys Project",description:"Spotify Genre Keys",slug:"spotify-genre-keys",analytics:2,infoViz:4,mapping:0,detail:{title:"The Distribution of Musical Keys Across Genres",body:"<p>Spotify provides a rich source of data on musical tracks and artists in their collections. I pulled a dataset with data for all tracks of Spotify's top 10 artists in each of their 13 genre categories (as of March 2021).</p><p>After exploring the data I decided it would be interesting to look at the distribution of musical keys that Spotify believes each track to be in.</p><p>This side project gave me an opportunity to experiment for the first time with Tone.js and data sonification, with bezier curves in d3 visualizations and with more complex transitions than I previously implemented.<p>",languages:"Observable, d3, Tone.js",externalLinks:[{text:"Genre Keys (Unfinished Prototype)",url:"https://observablehq.com/d/176f4edf73163227"}],carouselImgs:[{src:"GenreKeysFull.png",alt:"Screenshot of prototype - with pinwheels for each genre showing distribution of musical keys"},{src:"GenreKeysTeaser.png",alt:"Zoom in on pinwheel for all genres"},{src:"GenreKeysSpnning.gif",alt:"R&B pinwheel spinning"}]}},{imgUrl:"PeopleOfThePandemic.png",imgAlt:"Preview of People of the Pandemic Game",description:"People of the Pandemic",slug:"people-of-the-pandemic",analytics:5,infoViz:3,mapping:0,detail:{title:"People of the Pandemic Game",body:"<p>At the start of the pandemic I posted to the Data Visualization Society's slack with a d3 prototype I was working on related to the potential impact of social distancing. This post led to an opportunity to collaborate with <a href='https://shirleywu.studio/' target='_blank'>Shirley Wu</a> on a game she wanted to build on the same topic.</p><p>Shirley led on visuals, front-end development and project management. I worked closely with her and public health advisors on model development, model implementation and interactive documentation on Observable.</p>",languages:"Observable, d3, Vue.js (though most of the Vue development was done by Shirley).",externalLinks:[{text:"Game",url:"https://peopleofthepandemicgame.com/"},{text:"Interactive Documentation in Observable",url:"https://observablehq.com/@osserman/people-of-the-pandemic-simulation-methodology"},{text:"Interview in Nightingale - the journal of the Data Visualization Society",url:"https://medium.com/nightingale/how-do-you-simulate-a-pandemic-a-conversation-with-data-designers-shirley-wu-and-stephen-osserman-8147c94f4ba0"}],carouselImgs:[{src:"PeopleOfThePandemicHospital.png",alt:"first img"},{src:"PeopleOfThePandemicDecisions.png",alt:"second img"},{src:"PeopleOfThePandemicR0Calculator.png",alt:"third img"}]}},{imgUrl:"WisconsinBridges.png",imgAlt:"Preview of Winsconsin Bridges",description:"Wisconsin Bridges",slug:"wisconsin-bridges",analytics:4,infoViz:4,mapping:5,detail:{title:"Structurally Deficient Bridges in Wisconsin",body:"<p>There is often a disconnect between the federal government and work people see locally as a result of government actions.</p><p>The 2021 infrastructure bill provides funding to address many long-standing infrastructure needs, including the tens of thousands of structurally deficient bridges and overpasses across the country. Many of these bridges are still safe for now, but need attention.</p><p>Our Data Storytelling pilot project at MoveOn has been exploring ways to make this data accessible and engaging. While we have not yet published a final version, we have prototyped an interactive digital experience for Wisconsinites to learn about the bridges that need attention near them. Hopefully we will update and release a final version soon.</p>",languages:"Observable, d3, turf.js, Mapbox",carouselImgs:[{src:"WisconsinBridges.png",alt:"Car icon on map of WI"},{src:"WisconsinBridges2.png",alt:"Icon for structurally deficient bridge on map"},{src:"WisconsinBridges3.png",alt:"Approaching end of road trip with stats for structurall deficient bridges passed"}]}},{imgUrl:"CirclingMtHood.png",imgAlt:"Preview of Circling Mt Hood",description:"Circling Mt. Hood",slug:"circling-mt-hood",analytics:3,infoViz:3,mapping:2,detail:{title:"Circling Mount Hood",body:`<p>A decade ago, on a drive from Portland to Idaho, while watching Mt Hood outside our car window, I had the thought that it would be interesting to plot the changes in perspective on a single mountain as you circumnavigate it.</p><p>I didn't think about the topic much more until seeing a #30mapchallenge topic on elevation. I decided to dive in. Though I have wanted to revisit to make some improvements, I leave it where visualizations should be left &mdash; imperfect, but "done."`,languages:"R, Observable, d3",externalLinks:[{text:"Observable Notebook",url:"https://observablehq.com/d/bafed49bab114640"}],carouselImgs:[{src:"CirclingMtHood1.png",alt:"second img"},{src:"CirclingMtHood2.png",alt:"third img"},{src:"CirclingMtHood.gif",alt:"git showing animation of circling mt hood"}]}},{imgUrl:"RacialWealthGapHousing.png",imgAlt:"Preview of Housing and the Racial Wealth Gap",description:"Unrealized Wealth",slug:"unrealized-wealth",analytics:5,infoViz:2,mapping:3,detail:{title:"Housing-Based Wealth Accumulation and the Wealth Gap in Portland, OR",body:"<p>In 2019 I was able to work as a Data Scientist on a Hack Oregon volunteer team looking at housing. I focused on connection points between historic discrimination in housing policy and the present-day racial wealth gap. I specifically looked at the huge gains in home values &mdash; gains unrealized by those historically locked out of home-ownership.</p><p>For this project I preprocessed decades of messy data (e.g. federal home loan data, county parcel-level property tax geodata, and census data); built a geospatial Kriging model of inflation-adjusted appreciation in home values; prototyped visualizations; and presented our work to a live audience who voted us top project at the end-of-season demo day.</p>",languages:"R, postgis, python, d3, mapbox (though my work was primarily in R and postgis)",externalLinks:[{text:"Portland's Racial Homeownership Gap => Wealth Gap",url:"http://civicplatform.org/cards/home-appreciation"},{text:"Full Collection from 2019 Hack Oregon Housing Team",url:"http://civicplatform.org/2019/housing"}],carouselImgs:[{src:"RacialWealthGapHousing1.gif",alt:"interactive chart showing displacement of Black population in historically Black neighborhoods"},{src:"RacialWealthGapHousing3.png",alt:"chart showing historic gap in homeownership between Black and White families in 1990 Portladn"},{src:"RacialWealthGapHousing2.gif",alt:"interactive map of Portland inflation-adjusted home appreciation (in hundreds of thousands per home) since 1990"}]}},{imgUrl:"ExploringWordle.png",imgAlt:"Preview of Exploring Wordle Project",description:"Exploring Wordle",slug:"exploring-wordle",analytics:4,infoViz:4,mapping:0,detail:{title:"Exploring Wordle",body:"<p>My contribution to the Wordle analysis universe. Rather than focusing on how best to play Wordle, I focused on understanding and visualizing the mechanics underlying a typical game, and the word characteristics that impact game play.</p><p>On this project I took the opportunity to delve deeper into visualization using CSS with non-SVG html elements, mobile-first visualization, and making interactive visualizations more accessible for keyboard users and people who use screen readers.</p>",languages:"d3, css, python",externalLinks:[{text:"Exploring Wordle",url:"https://osserman.github.io/wordle/word-winnowing.html"}],carouselImgs:[{src:"WordleSquare.png",alt:"Exploring Wordle landing page"},{src:"WordleActive.gif",alt:"Game of Wordle recreated on site with stats shown"},{src:"WordleSimularitySquare.png",alt:"Similar words to CONIC"}]}},{imgUrl:"TheTaxDodgeTeaser.png",imgAlt:"Preview of The Tax Dodge",description:"The Tax Dodge",slug:"the-tax-dodge",analytics:0,infoViz:4,mapping:0,detail:{title:"The Tax Dodge",body:"<p>As Director of a Data Storytelling pilot project at MoveOn, I worked with our campaigns team to come up with approaches to make the often-intimidating topic of tax fairness accessible and engaging.</p><p>In a compressed sprint I project managed; coordinated with designers and illustrators; consulted partner organizations, policy experts and campaigners; led user-testing and QA; and did the bulk of the front-end development.</p>",languages:"d3, css, javascript, html",externalLinks:[{text:"The Tax Dodge",url:"https://data-stories.moveon.org/the-tax-dodge/"}],carouselImgs:[{src:"TheTaxDodgeTeaser.png",alt:"first img"},{src:"TheTaxDodgeOpeningChart.png",alt:"third img"},{src:"TheTaxDodgePayTaxes.gif",alt:"first img"},{src:"TheTaxDodgeOof.gif",alt:"second img"}]}},{imgUrl:"PianoFlashcards.png",imgAlt:"Preview of Circling Mt Hood",description:"Piano Flashcard Game",slug:"piano-flashcard-game",analytics:0,infoViz:1,mapping:0,detail:{title:"Piano Flashcards",body:"<p>While this mini-app has no analytics or mapping, and only a bit of information visualization, it was my quick attempt to put into practice what I was learning from a Svelte course I was taking.</p><p>Built to meet the wishes of a very particular client who loves timed-challenges, counting, and the piano (and happens to be my kid).</p>",languages:"Svelte, css",externalLinks:[{text:"Piano Flashcard Game",url:"https://osserman.github.io/piano-flashcard/"}],carouselImgs:[{src:"PianoFlashcards.png",alt:"note on staff with keyboard"},{src:"PianoFlashcards.gif",alt:"gif of flashcard gameplay"}]}},{imgUrl:"PaletteExtractor.png",imgAlt:"Preview of Palette Extractor",description:"Palette Extractor",slug:"palette-extractor",analytics:0,infoViz:2,mapping:0,detail:{title:"Palette Extractor",body:"<p>A simple tool to manually build palettes from an image.</p>",languages:"d3, Observable",externalLinks:[{text:"Palette Extractor",url:"https://observablehq.com/d/d6512be81e170ece"}],carouselImgs:[{src:"PaletteExtractor.png",alt:"first img"},{src:"PaletteExtractor.gif",alt:"build palette from photo nature photo"}]}}];export{e as p};
