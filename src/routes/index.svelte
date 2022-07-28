<script>
	import Button from '../components/Button.svelte';
	import Grid from '../components/Grid.svelte';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../modules/Header.svelte';
</script>

<Header />
<Wrapper>
	<Grid gap>
		<Grid size="tablet-1-2" class="center">
			<h2>
				Workey ist die smarte App,<br class="hidden@mobile" />
				um lebenswerte<br class="hidden@mobile" />
				Arbeitsorte mitzugestalten
			</h2>

			<div>
				<img src="/icons/smartphone.svg" alt="Smartphone" />
				<img src="/icons/desktop.svg" alt="Desktop" />
			</div>

			<p>
				Verfügbar für Smartphone (iPhone + Android)<br class="hidden@mobile" />
				sowie auf dem Desktop
			</p>
		</Grid>
		<Grid size="tablet-1-2">
			<img src="/images/workey-app.png" alt="Workey Mobile-App" />
		</Grid>
	</Grid>
	<Grid>
		<Grid size="tablet-1-2" class="order-2@mobile">
			<img src="/images/workey-tagesabfrage.png" alt="Wokey Tagesabfrage" />
		</Grid>
		<Grid size="tablet-1-2" class="order-1@mobile center">
			<h2>Warum es sich lohnt, die Workey App zu nutzen</h2>

			<p>
				<strong>Selbstwirksamkeit erhöhen</strong><br />
				Mit der Nutzung der App können Mitarbeiter:innen aktiv den Arbeitsplatz der Zukunft mitgestalten.
			</p>

			<p>
				<strong>Bedürfnisse mitteilen</strong><br />
				Mitarbeiter:innen können ihre Bedürfnisse mitteilen – individuell und tagesaktuell.
			</p>

			<p>
				<strong>Aktive Veränderung</strong><br />
				Mitarbeiter:innen können Veränderungsmaßnahmen aktiv mittragen und weiterentwickeln.
			</p>
		</Grid>
	</Grid>
	<Grid gap>
		<Grid size>
			<h2>
				Unser Versprechen für<br />
				Mitarbeiter:innen
			</h2>
		</Grid>
		<Grid size="tablet-1-3">
			<img src="/icons/intuitiv.svg" alt="Intuitiv" />
			<p style="margin-top:0;">
				<strong>Intuitive Nutzung</strong><br />
				Fügt sich in den Arbeitsalltag ein – Mitarbeiter:innen bestimmen selbst wann sie teilnehmen.
			</p>
		</Grid>
		<Grid size="tablet-1-3">
			<img src="/icons/smartphone.svg" alt="Smartphone" />
			<p style="margin-top:0;">
				<strong>Sofort einsetzbar</strong><br />
				In wenigen Minuten ist Workey als App oder auf dem Desktop nutzbar.
			</p>
		</Grid>
		<Grid size="tablet-1-3">
			<img src="/icons/datenschutz.svg" alt="Datenschutz" />
			<p style="margin-top:0;">
				<strong>Anonym und Datenschutzkonform</strong><br />
				Es werden keine personenbezogene Daten erfasst. Weder Workey noch der Arbeitgeber kann Rückschlüsse
				auf persönliche Aussagen ziehen.
			</p>
		</Grid>
	</Grid>
	<Button to="https://workey.basemate.io/">Zur App Nutzung</Button>
</Wrapper>

<style>
	:global(.center) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
