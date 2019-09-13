<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}


	@font-face {
    font-family: 'coop';
    src: url('coop.ttf');
    font-weight: normal;
    font-style: normal;
	}

	h1, h3, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color:#2e441b;
		font-family: 'coop' arial, sans-serif;
	}

	hr {
		color:black;
		border: .01em black solid;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
		h3 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>jams</title>
</svelte:head>

<h1>1. Sunrise</h1>
<h1>2. Been A While</h1>
<h1>3. The Perfect Nap</h1>
<h1>4. Fade</h1>
<h1>5. Introspective</h1>
<h1>6. Skyline</h1>
<h1>7. Smoke</h1>
<h1>8. Coffee @ Night </h1>
<h1>9. End Of The World</h1>
<h1>10. Feel Me</h1>
<h1>11. Nightmare</h1>
<h1>12. Mixed Feelings</h1>
<h1>13. Familiar</h1>
<h1>14. Kontaqt</h1>
<h1>15. An Optimistic Letter</h1>
<h1>16. Sunset</h1>
<h1>17. Pick It Up</h1>
<h1>18. Sea Glass [DRAFT]</h1>
<h1>19. Wonderful</h1>
<h1>20. Mirror</h1>
<h1>21. End Of Summer</h1>
<h1>22. Smile</h1>
<h1>23. Timeless</h1>
<h1>24. I.V.</h1>
<h1>25. Space Static</h1>
<h1>26. Raspberry</h1>
<h1>27. Change</h1>
<!-- 
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul> --> 