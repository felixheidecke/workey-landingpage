<script>
	import Footer from '../modules/Footer.svelte';
</script>

<div data-layout>
	<a href="/">
		<img src="/workey-logo.svg" alt="Workey" />
	</a>
	<slot />
</div>

<Footer />

<style>
	img {
		max-width: 230px;
		left: 50%;
		position: relative;
		transform: translateX(-50%);
		margin-top: 60px;
	}

	div {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
		max-width: 475px;
	}

	[data-layout] :global(h1) {
		text-align: center;
		font-size: 52px;
		margin: 130px 0;
	}

	[data-layout] :global(h4) {
		margin-top: 3rem;
		margin-bottom: 0.25rem;
	}

	[data-layout] :global(h4 + *) {
		margin-top: 0;
	}

	[data-layout] :global(*) {
		color: #d5d5d7;
	}
</style>
