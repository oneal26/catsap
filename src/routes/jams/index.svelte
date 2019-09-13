
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
		h3 {
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

<h1>Botanical Tracks</h1>
<hr>
<h3>1. Sunrise</h3>
<h3>2. Been A While</h3>
<h3>3. The Perfect Nap</h3>
<h3>4. Fade</h3>
<h3>5. Introspective</h3>
<h3>6. Skyline</h3>
<h3>7. Smoke</h3>
<h3>8. Coffee @ Night </h3>
<h3>9. End Of The World</h3>
<h3>10. Feel Me</h3>
<h3>11. Nightmare</h3>
<h3>12. Mixed Feelings</h3>
<h3>13. Familiar</h3>
<h3>14. Kontaqt</h3>
<h3>15. An Optimistic Letter</h3>
<h3>16. Sunset</h3>
<h3>17. Pick It Up</h3>
<h3>18. Sea Glass [DRAFT]</h3>
<h3>19. Wonderful</h3>
<h3>20. Mirror</h3>
<h3>21. End Of Summer</h3>
<h3>22. Smile</h3>
<h3>23. Timeless</h3>
<h3>24. I.V.</h3>
<h3>25. Space Static</h3>
<h3>26. Raspberry</h3>
<h3>27. Change</h3>
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