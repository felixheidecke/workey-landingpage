<script>
	export let size = 'large';
</script>

<div class={'Wrapper Wrapper--' + size}>
	<slot />
</div>

<style>
	.Wrapper {
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
	}

	.Wrapper--large {
		max-width: 980px;
	}

	.Wrapper--small {
		max-width: 475px;
	}
</style>
