<svelte:head>
	<title>visuals</title>
</svelte:head>

<style>

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
		color:#67517f;
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

	.imgbox{
		margin-right: auto;
		margin-left: auto;
		display:block;
	}

	.rounded{
		border-radius: 5% !important;
		margin-bottom:3em;
	}

</style>

<h1>Visuals</h1>
<hr>
<img src="IMG_3007.GIF" alt="JAMBERRI" class="imgbox">
<hr>
<img src="marketberri.png" alt="MARKETBERRI" class="imgbox">
<hr>
<img src="IMG_3010.png" alt="VINEBERRI" class="imgbox rounded">