<script>
	import Button from '../components/Button.svelte';
	import MoodImage from '../components/MoodImage.svelte';
</script>

<header>
	<img src="/workey-logo.svg" alt="Workey" class="logo" />
	<h1>
		<span class="c-blue">Workey</span><br />
		Lebenswerte<br />
		Arbeitsorte
	</h1>
	<div class="button">
		<Button to="https://workey.basemate.io/">Zur App Nutzung</Button>
	</div>
	<div>
		<MoodImage />
	</div>
</header>

<style>
	@media (max-width: 960px) {
		header {
			text-align: center;
		}

		.logo {
			max-width: 160px;
			margin-top: 32px;
		}

		.button {
			margin: 32px 0;
		}
	}

	@media (min-width: 961px) {
		header {
			display: flex;
			flex-direction: column;
			height: 600px;
			position: relative;
			justify-content: space-around;

			margin-left: auto;
			margin-right: auto;
			padding-left: 1rem;
			padding-right: 1rem;
			width: 100%;
			max-width: 980px;
		}

		h1 {
			font-family: 'Open Sans';
			font-size: 52px;
			font-weight: 700;
			line-height: 70px;
			transform: translateY(20%);
		}

		.logo {
			width: 100%;
			max-width: 240px;
		}

		:global(.MoodImage) {
			position: absolute;
			top: 0;
			right: 0;
			max-height: 590px;
			transform: translateX(160px);
		}
	}
</style>
