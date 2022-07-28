// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'htdocs',
			assets: 'htdocs',
			fallback: false,
			precompress: false
		}),

		prerender: {
			default: true
		}
	}
};

export default config;
