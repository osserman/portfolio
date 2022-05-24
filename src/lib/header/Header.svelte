<script>
	import { page } from '$app/stores';
	import '../../app.css';

	export let analytics = 1;
	export let infoViz = 2;
	export let mapping = 1;
	// import logo from './svelte-logo.svg';
</script>
<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<header>
	<div class="center">
		<h2>Stephen Osserman</h2>
		<div class='btn-group'>
			<button class={'lg'+ analytics}>Analytics</button>
			<button class={'lg'+ infoViz}>InfoViz</button>
			<button class={'lg'+ mapping}>Mapping</button>
		</div>
	</div>
<!-- 
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
-->
	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position:relative; 
	}
	/*
	header:after {
		content: "";
		position: absolute;
		display: block;
		width: 100%;
		height: 50%;
		bottom: -50%;
		background: linear-gradient(var(--primary-color) 0%, var(--primary-color) 70%, #00000000 100%);
	}
*/

	.center {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		align-items:center;
		padding-top: 20px;
		font-family: 'Roboto Flex', sans-serif;

	}
	.center h2 { 		
		font-weight: 100;
		text-transform: uppercase;
		font-size: 2rem;
		letter-spacing: 0.2rem;
		margin: 0;
	}
	.center .btn-group { 
		display: flex;
		align-items: center;
		gap: 20px;
		width: 100%;
		/*background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 95%, var(--accent-color) 100%);*/

		/*justify-content: space-between ;*/
	}
	.center .btn-group button { 
		flex: 1; 
		border: none;
		/* border-bottom: 1px solid grey;*/
		font-weight: 100;
		font-size: 1.3rem;
		padding: 0.8rem 0 .3rem;
		letter-spacing: 0.05rem;
		position: relative;
		width: 100%;
		background-color: transparent;
		/*background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,225,0) 95%, rgba(0,0,225,0.4) 100%);*/
	}
	.lg0 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 95%, var(--accent-color) 100%);
	}
	.lg1 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 80%, var(--accent-color) 100%);
	}
	.lg2 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 60%, var(--accent-color) 90%, var(--accent-color) 100%);
	}
	.lg3 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 40%, var(--accent-color) 70%, var(--accent-color) 100%);
	}
	.lg4 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 20%, var(--accent-color) 50%, var(--accent-color) 100%);
	}
	.lg5 { 
		background-image: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) 0%, var(--accent-color) 30%, var(--accent-color) 100%);
	}

	.center .btn-group button:hover { 
		color: gray;
	}
/*
	.center .btn-group button:after {
		content: '';
		width: 100%;
		height: 0px;
		background: gray;
		position: absolute;
		bottom: 0px;
		box-shadow: 0px 0px 10px 5px rgba(0, 0, 255, .2);;
		left: 0;
	}
	*/
	nav {
		display: flex;
		justify-content: center;
		width:100%;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
