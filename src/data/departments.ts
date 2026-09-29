import { photos } from './images';

export interface Department {
	slug: 'grocery' | 'produce' | 'meat' | 'seafood';
	name: string;
	/** Short line for cards and meta descriptions. */
	summary: string;
	/** Short retail line on the department tile. */
	cardLine: string;
	/** Longer introduction for the department page. Uses the provided brief. */
	description: string;
	highlights: string[];
	image: (typeof photos)[keyof typeof photos]['src'];
	imageAlt: string;
}

export const departments: Department[] = [
	{
		slug: 'grocery',
		name: 'Grocery',
		summary: 'International staples, snacks, noodles, sauces & more.',
		cardLine: 'Global pantry',
		description:
			'International and Asian grocery, including rice, noodles, sauces, seasonings, snacks, beverages, frozen foods, and specialty products that may be difficult to find at conventional supermarkets.',
		highlights: [
			'Rice, noodles, and sauces',
			'Seasonings',
			'Snacks and beverages',
			'Frozen foods',
			'Specialty products that may be difficult to find at conventional supermarkets',
		],
		image: photos.grocery.src,
		imageAlt: photos.grocery.alt,
	},
	{
		slug: 'produce',
		name: 'Produce',
		summary: 'Fresh produce for many cuisines.',
		cardLine: 'Fresh daily',
		description:
			'Fresh produce, with an emphasis on variety and products used across different cuisines.',
		highlights: ['Fresh produce', 'Variety across different cuisines'],
		image: photos.produce.src,
		imageAlt: photos.produce.alt,
	},
	{
		slug: 'meat',
		name: 'Meat',
		summary: 'Fresh meat and specialty cuts.',
		cardLine: 'Specialty cuts',
		description: 'Fresh meat and specialty cuts.',
		highlights: ['Fresh meat', 'Specialty cuts'],
		image: photos.meat.src,
		imageAlt: photos.meat.alt,
	},
	{
		slug: 'seafood',
		name: 'Seafood',
		summary: 'Fresh, frozen, packaged, and live seafood.',
		cardLine: 'Fresh & live',
		description: 'Fresh, frozen, packaged, and live seafood.',
		highlights: ['Fresh seafood', 'Frozen and packaged seafood', 'Live seafood'],
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
