<script>
	export let segment;
</script>

<style>

	.bg{
	background:#fdecd1 !important;
	}

	nav {
		border-bottom: 2px solid #304780;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #67517f;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
		.icon{
		height:2em;
		width:2em;
	}
	.right{
		float: right;
		margin-right:.5em;
	}

	iframe{
		
	}

</style>

<nav class="fixed-bottom bg">
	<ul>
		<!-- <li><iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:4tCGRoI7zhPtJvKoyZEJES?si=E5p9yV0PQuqv7GZeOmfD0w&size=basic&theme=light" width="200" height="25" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe></li> -->
		<!-- Right Nav Items -->
		<li class="right"><a href="https://soundcloud.com/reedinbooks/sets/botanical-side-a"><img src="soundcloud.png" alt="SoundCloud" class="icon"></a></li>
		<li class="right"><a href="https://listen.tidal.com/artist/21190538"><img src="tidal.jpg" alt="Tidal" class="icon"></a></li>
		<li class="right"><a href="https://open.spotify.com/artist/6lSk8iQDQIHdX0eRkSNqfQ?si=hI31wp1ERo6c3YMWznCO_A"><img src="spotify.png" alt="Spotify" class="icon"></a></li>
		<li class="right"><a href="https://music.apple.com/gb/artist/reed/1529653002"><img src="apple.png" alt="Apple Music" class="icon"></a></li>

	</ul>

</nav>