<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>
<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
</svelte:head>
<!-- <Header />-->

<main>
	<slot />
</main>

<footer>
	<p>Hi, I'm Stephen. I'm a Visualization Developer and Data Scientist with over a decade of experience working with political and civic data. My academic background includes degrees in <em>Ethnicity, Race, and Migration</em>; in <em>Music</em>; and in <em>Spatial Analysis for Public Health</em>. This page contains a sample of projects I've worked on in the past few years.</p>
</footer>

<style>
/*
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
*/
	footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		/*min-height: 30%;*/
		margin: 0;
		display: flex; 
		align-items: end;
		background: linear-gradient(
			var(--bg-blend-transparent) 0%,
			var(--primary-color) 20%,
			var(--primary-color) 100%
		);
	}

	footer p {
		padding: 30px max(20%, 20px) 0 ;
	}

</style>
