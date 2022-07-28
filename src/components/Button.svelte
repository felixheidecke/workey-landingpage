<script>
	export let to;
	export let target = '_blank';
	export let rel = 'no-follow';
</script>

<a href={to} {target} {rel}><slot /></a>

<style>
	a {
		display: inline-block;
		background-color: var(--c-blue);
		color: var(--c-primary);
		border-radius: 2.25rem;
		padding: 0.65rem 2rem;
		cursor: pointer;
		border: 1px solid var(--c-blue);
		transition: background-color 333ms, color 333ms, transform 500ms;
		width: fit-content;
		font-weight: 500;
	}

	a:hover {
		background-color: transparent;
		color: var(--c-blue);
		transform: translateY(-3px);
	}
</style>
