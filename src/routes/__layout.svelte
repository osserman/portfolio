<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..700&display=swap" rel="stylesheet">
</svelte:head>
 <Header />

<main>
	<slot />
</main>

<footer>
	<p>Hi, I'm Stephen. I'm a Visualization Developer and Data Scientist with over a decade of experience working with political and civic data. My academic background includes degrees in <em>Ethnicity, Race, and Migration</em>; in <em>Music</em>; and in <em>Spatial Analysis for Public Health</em>. This past few years I've been doing more Data Storytelling work and this page contains a sample of projects I've worked on along this journey.</p>
</footer>

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
