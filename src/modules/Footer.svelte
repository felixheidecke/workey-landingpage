<script>
	import Grid from '../components/Grid.svelte';
</script>

<footer>
	<Grid>
		<Grid size="tablet-2-5">
			<div>© Workey</div>
		</Grid>
		<Grid size="tablet-3-5">
			<a href="/impressum">Impressum</a>
			<a href="/datenschutz">Datenschutzerklärung</a>
		</Grid>
	</Grid>
</footer>

<style>
	footer {
		width: 100%;
		font-size: 16px;
		padding: 96px 32px 32px;
	}

	a + a::before {
		content: '|';
		color: #3d6d78;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	@media (max-width: 620px) {
		:global(.Grid__item) {
			/* text-align: center; */
			margin: 8px 0;
		}
	}
</style>
