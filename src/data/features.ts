import { photos } from './images';

/**
 * Homepage feature tiles. Reserved slot for seasonal highlights and, later,
 * Weekly Specials (possibly Sanity-managed). Do not add prices until MT
 * provides them. Keep this list empty or soft until specials are ready —
 * architecture stays so a Weekly Specials section can drop in here.
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

/** Soft department teasers until Weekly Specials content is provided. */
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
