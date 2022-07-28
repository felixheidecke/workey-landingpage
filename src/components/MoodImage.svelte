<div class="MoodImage" />
<img src="/images/lebenswerte-arbeitsorte@xs.jpg" alt="Lebenswerte Arbeitsorte" />

<style>
	@media (max-width: 961px) {
		img {
			width: 100%;
		}

		div {
			display: none;
		}
	}

	@media (min-width: 960px) {
		img {
			display: none;
		}

		div {
			height: 590px;
			width: 750px;

			background-image: url('/images/lebenswerte-arbeitsorte.jpg');
			background-repeat: no-repeat;
			background-position: center right 25%;
			background-size: cover;
			clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
		}

		div:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 300px;
			height: 100%;
			background-color: #515b99;
			opacity: 0.5;
			clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
			transform: translateX(-80px);
		}
	}
</style>
