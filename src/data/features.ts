import { photos } from './images';

/**
 * Homepage soft market highlights ("Around the market").
 * These are department teasers — NOT Weekly Specials.
 *
 * WEEKLY SPECIALS (future, Sanity-powered):
 * - Use `weeklySpecials` below (keep empty until MT supplies real specials).
 * - Mount via FeatureStrip / a dedicated WeeklySpecials component on the homepage
 *   (see the reserved slot comment in `src/pages/index.astro`).
 * - Do not add Specials to primary nav until content is live.
 * - Do not invent prices or placeholder specials for public display.
 */

export interface StoreFeature {
	id: string;
	title: string;
	summary: string;
	href: string;
	image: (typeof photos)[keyof typeof photos]['src'];
	imageAlt: string;
	priceLabel?: string;
}

/** Soft department teasers — not priced specials. */
export const freshThisWeek: StoreFeature[] = [
	{
		id: 'produce',
		title: 'Fresh Produce',
		summary: 'Everyday favorites and ingredients used across Asian and international cuisines.',
		href: '/departments/produce',
		image: photos.produce.src,
		imageAlt: photos.produce.alt,
	},
	{
		id: 'seafood',
		title: 'Seafood',
		summary: 'Fresh, frozen, packaged, and live seafood for everyday cooking and specialty dishes.',
		href: '/departments/seafood',
		image: photos.seafood.src,
		imageAlt: photos.seafood.alt,
	},
	{
		id: 'grocery',
		title: 'Asian Pantry',
		summary: 'Rice, noodles, sauces, snacks, drinks, and specialty ingredients from the grocery aisles.',
		href: '/departments/grocery',
		image: photos.grocery.src,
		imageAlt: photos.grocery.alt,
	},
];

/**
 * Future Weekly Specials feed (Sanity or similar).
 * Keep empty so nothing public renders until real specials exist.
 * Shape mirrors StoreFeature so FeatureStrip (or a sibling) can reuse it.
 */
export const weeklySpecials: StoreFeature[] = [];
