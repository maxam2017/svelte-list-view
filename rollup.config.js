import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/ListView.svelte',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'build/bundle.js'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			dev: !production
		}),
		typescript()
	]
};
