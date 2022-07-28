<script>
	import classnames from 'classnames';

	// --- Props ------------------------

	export let tag = 'div';
	export let gap = false;
	export let size = false;
	export let id = null;

	// --- Methods ----------------------

	const sizeToClass = (size) => {
		if (typeof size !== 'string') return;

		return size
			.split(' ')
			.map((i) => `${baseName}__item--${i}`)
			.join(' ');
	};

	// --- CSS Class --------------------

	const baseName = 'Grid';

	$: className = (() => {
		if (size) {
			return classnames(baseName + '__item', $$props.class, sizeToClass(size));
		} else {
			return classnames(baseName, $$props.class, !gap || baseName + '--gap');
		}
	})();
</script>

<svelte:element this={tag} class={className} {id}>
	<slot />
</svelte:element>

<style global>
	.Grid {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.Grid--gap {
		width: calc(100% + 2rem);
		transform: translateX(-1rem);
	}

	:global(.Grid--gap [class*='Grid__item']) {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.Grid__item {
		width: 100%;
	}

	.Grid__item--1-3 {
		width: calc(100% / 3);
	}

	.Grid__item--2-3 {
		width: calc(100% / 1.5);
	}

	.Grid__item--1-2,
	.Grid__item--2-4 {
		width: 50%;
	}

	.Grid__item--1-4 {
		width: 25%;
	}

	.Grid__item--3-4 {
		width: 75%;
	}

	.Grid__item--1-5 {
		width: 20%;
	}

	.Grid__item--2-5 {
		width: 40%;
	}

	.Grid__item--3-5 {
		width: 60%;
	}

	.Grid__item--4-5 {
		width: 80%;
	}

	@media (max-width: 620px) {
		.Grid__item--mobile-1-3 {
			width: calc(100% / 3);
		}

		.Grid__item--mobile-2-3 {
			width: calc(100% / 1.5);
		}

		.Grid__item--mobile-1-2,
		.Grid__item--mobile-2-4 {
			width: 50%;
		}

		.Grid__item--mobile-1-4 {
			width: 25%;
		}

		.Grid__item--mobile-3-4 {
			width: 75%;
		}

		.Grid__item--mobile-1-5 {
			width: 20%;
		}

		.Grid__item--mobile-2-5 {
			width: 40%;
		}

		.Grid__item--mobile-3-5 {
			width: 60%;
		}

		.Grid__item--mobile-4-5 {
			width: 80%;
		}
	}

	@media (min-width: 621px) {
		.Grid__item--tablet-1-3 {
			width: calc(100% / 3);
		}

		.Grid__item--tablet-2-3 {
			width: calc(100% / 1.5);
		}

		.Grid__item--tablet-1-2,
		.Grid__item--tablet-2-4 {
			width: 50%;
		}

		.Grid__item--tablet-1-4 {
			width: 25%;
		}

		.Grid__item--tablet-3-4 {
			width: 75%;
		}

		.Grid__item--tablet-1-5 {
			width: 20%;
		}

		.Grid__item--tablet-2-5 {
			width: 40%;
		}

		.Grid__item--tablet-3-5 {
			width: 60%;
		}

		.Grid__item--tablet-4-5 {
			width: 80%;
		}
	}

	@media (min-width: 1025px) {
		.Grid__item--desktop-1-3 {
			width: calc(100% / 3);
		}

		.Grid__item--desktop-2-3 {
			width: calc(100% / 1.5);
		}

		.Grid__item--desktop-1-2,
		.Grid__item--desktop-2-4 {
			width: 50%;
		}

		.Grid__item--desktop-1-4 {
			width: 25%;
		}

		.Grid__item--desktop-3-4 {
			width: 75%;
		}

		.Grid__item--desktop-1-5 {
			width: 20%;
		}

		.Grid__item--desktop-2-5 {
			width: 40%;
		}

		.Grid__item--desktop-3-5 {
			width: 60%;
		}

		.Grid__item--desktop-4-5 {
			width: 80%;
		}
	}

	@media (min-width: 1441px) {
		.Grid__item--widescreen-1-3 {
			width: calc(100% / 3);
		}

		.Grid__item--widescreen-2-3 {
			width: calc(100% / 1.5);
		}

		.Grid__item--widescreen-1-2,
		.Grid__item--widescreen-2-4 {
			width: 50%;
		}

		.Grid__item--widescreen-1-4 {
			width: 25%;
		}

		.Grid__item--widescreen-3-4 {
			width: 75%;
		}

		.Grid__item--widescreen-1-5 {
			width: 20%;
		}

		.Grid__item--widescreen-2-5 {
			width: 40%;
		}

		.Grid__item--widescreen-3-5 {
			width: 60%;
		}

		.Grid__item--widescreen-4-5 {
			width: 80%;
		}
	}
</style>
