import { photos } from './images';

/**
 * Homepage feature tiles. This is the slot for seasonal highlights and,
 * later, weekly specials. Do not add a price until MT provides one.
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

export const freshThisWeek: StoreFeature[] = [
	{
		id: 'seasonal-produce',
		title: 'Seasonal Produce',
		summary: 'Fruit and vegetables in the produce department, as the season changes.',
		href: '/departments/produce',
		image: photos.produce.src,
		imageAlt: photos.produce.alt,
	},
	{
		id: 'new-arrivals',
		title: 'New Arrivals',
		summary: 'Specialty products as they reach the shelves.',
		href: '/departments/grocery',
		image: photos.discovery.src,
		imageAlt: photos.discovery.alt,
	},
	{
		id: 'featured-brands',
		title: 'Featured Brands',
		summary: 'International brands from the grocery aisles.',
		href: '/departments/grocery',
		image: photos.snacks.src,
		imageAlt: photos.snacks.alt,
	},
];
