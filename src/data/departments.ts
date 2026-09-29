import { photos } from './images';

export interface Department {
	slug: 'grocery' | 'produce' | 'meat' | 'seafood';
	name: string;
	/** Short line for cards and meta descriptions. */
	summary: string;
	/** Short retail line on the department tile. */
	cardLine: string;
	/** Optional rectangular signage label on the department tile. */
	signLabel?: string;
	signTone?: 'yellow' | 'red';
	/** Longer introduction for the department page. */
	description: string;
	highlights: string[];
	image: (typeof photos)[keyof typeof photos]['src'];
	imageAlt: string;
}

export const departments: Department[] = [
	{
		slug: 'grocery',
		name: 'Grocery',
		summary: 'Asian and international pantry staples, snacks, drinks, and specialty ingredients.',
		cardLine: 'Asian & international pantry',
		description:
			'Asian and international pantry staples, everyday essentials, snacks, drinks, frozen foods, sauces, seasonings, rice, noodles, and specialty ingredients.',
		highlights: [
			'Asian and international pantry staples',
			'Rice, noodles, sauces, and seasonings',
			'Snacks, drinks, and frozen foods',
			'Specialty ingredients beyond a conventional supermarket',
		],
		image: photos.grocery.src,
		imageAlt: photos.grocery.alt,
	},
	{
		slug: 'produce',
		name: 'Produce',
		summary: 'Fresh produce for everyday cooking and Asian and international cuisines.',
		cardLine: 'Fresh daily',
		signLabel: 'Fresh daily',
		signTone: 'yellow',
		description:
			'Fresh produce with a wide selection of everyday favorites and ingredients used across Asian and international cuisines.',
		highlights: [
			'Everyday favorites',
			'Ingredients used across Asian and international cuisines',
			'Wide selection for home cooking',
		],
		image: photos.produce.src,
		imageAlt: photos.produce.alt,
	},
	{
		slug: 'meat',
		name: 'Meat',
		summary: 'Fresh meat and specialty cuts from the MT meat department.',
		cardLine: 'Specialty cuts',
		description:
			'Fresh meat and specialty cuts with quality, selection, and service from the MT meat department.',
		highlights: ['Fresh meat', 'Specialty cuts', 'Quality, selection, and service'],
		image: photos.meat.src,
		imageAlt: photos.meat.alt,
	},
	{
		slug: 'seafood',
		name: 'Seafood',
		summary: 'Fresh, frozen, packaged, and live seafood.',
		cardLine: 'Fresh · frozen · live',
		signLabel: 'Live seafood',
		signTone: 'red',
		description:
			'Fresh, frozen, packaged, and live seafood with a wide selection for everyday cooking and specialty dishes.',
		highlights: [
			'Live seafood',
			'Fresh seafood',
			'Frozen seafood',
			'Packaged seafood',
		],
		image: photos.seafood.src,
		imageAlt: photos.seafood.alt,
	},
];

export function getDepartment(slug: Department['slug']) {
	const department = departments.find((item) => item.slug === slug);
	if (!department) {
		throw new Error(`Unknown department: ${slug}`);
	}
	return department;
}
