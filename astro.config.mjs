// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Replace example.com with the production domain before launch.
// Canonical URLs and Open Graph tags use this value.
export default defineConfig({
	site: 'https://example.com',
	image: {
		responsiveStyles: true,
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Bricolage Grotesque',
			cssVariable: '--font-display',
			weights: [600, 800],
			styles: ['normal'],
			fallbacks: ['Arial', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Nunito Sans',
			cssVariable: '--font-body',
			weights: [400, 600, 700],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
