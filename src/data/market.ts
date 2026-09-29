import { photos } from './images';

/**
 * Product-discovery aisle links. These are not separate department pages —
 * they point to the closest primary department (usually Grocery).
 */
export const aisleLinks = [
	{ label: 'Asian pantry', href: '/departments/grocery' },
	{ label: 'Rice & noodles', href: '/departments/grocery' },
	{ label: 'Sauces & seasonings', href: '/departments/grocery' },
	{ label: 'Snacks & candy', href: '/departments/grocery' },
	{ label: 'Drinks', href: '/departments/grocery' },
	{ label: 'Frozen foods', href: '/departments/grocery' },
	{ label: 'Specialty ingredients', href: '/departments/grocery' },
] as const;

/**
 * Product-discovery tiles on the homepage. `area` maps to the collage grid.
 * Prefer shelf / product photography; swap `image` when MT photography arrives.
 */
export const discoveries = [
	{
		area: 'noodles',
		title: 'Rice & noodles',
		href: '/departments/grocery',
		image: photos.noodles.src,
	},
	{
		area: 'pantry',
		title: 'Asian pantry',
		href: '/departments/grocery',
		image: photos.grocery.src,
	},
	{
		area: 'sauces',
		title: 'Sauces & seasonings',
		href: '/departments/grocery',
		image: photos.sauces.src,
	},
	{
		area: 'snacks',
		title: 'Snacks & candy',
		href: '/departments/grocery',
		image: photos.snacks.src,
	},
	{
		area: 'drinks',
		title: 'Drinks',
		href: '/departments/grocery',
		image: photos.drinks.src,
	},
	{
		area: 'frozen',
		title: 'Frozen foods',
		href: '/departments/grocery',
		image: photos.packs.src,
	},
	{
		area: 'specialty',
		title: 'Specialty ingredients',
		href: '/departments/grocery',
		image: photos.discovery.src,
	},
] as const;
