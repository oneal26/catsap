<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(46, 68, 27,0.1);
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
		background-color: #2e441b;
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
		float:right;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>/home</a></li>
		<li><a rel=prefetch class='{segment === "jams" ? "selected" : ""}' href='jams'>/jams</a></li>
		<li><a rel=prefetch class='{segment === "screenplay" ? "selected" : ""}' href='screenplay'>/screenplay</a></li>
		<li><a class='{segment === "visuals" ? "selected" : ""}' href='visuals'>/visuals</a></li>

		<!-- Right Nav Items -->
		<li class="right"><a href="https://soundcloud.com/reedinbooks/sets/botanical-side-a"><img src="soundcloud.png" alt="SoundCloud" class="icon"></a></li>
		<!-- <li class="right"><a href="#"><img src="tidal.jpg" alt="Tidal" class="icon"></a></li> -->
		<li class="right"><a href="https://open.spotify.com/album/07Dpa9PyululGEdXbPTPij?si=nI0DXluqSEyx-Hih9zLGEQ"><img src="spotify.png" alt="Spotify" class="icon"></a></li>
		<li class="right"><a href="https://music.apple.com/us/album/botanical-side-a/1480486916"><img src="apple.png" alt="Apple Music" class="icon"></a></li>

	</ul>

</nav>