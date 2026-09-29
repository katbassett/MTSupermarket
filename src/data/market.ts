import { photos } from './images';

/** Compact aisle list. Links go to the closest existing department page. */
export const aisleLinks = [
	{ label: 'Asian pantry', href: '/departments/grocery' },
	{ label: 'Rice & noodles', href: '/departments/grocery' },
	{ label: 'Sauces & seasonings', href: '/departments/grocery' },
	{ label: 'Snacks & candy', href: '/departments/grocery' },
	{ label: 'Drinks', href: '/departments/grocery' },
	{ label: 'Frozen foods', href: '/departments/grocery' },
	{ label: 'Fresh produce', href: '/departments/produce' },
	{ label: 'Seafood', href: '/departments/seafood' },
	{ label: 'Meat', href: '/departments/meat' },
] as const;

/** Product-discovery tiles on the homepage. `area` maps to the collage grid. */
export const discoveries = [
	{
		area: 'noodles',
		title: 'Noodles',
		href: '/departments/grocery',
		image: photos.noodles.src,
	},
	{
		area: 'snacks',
		title: 'Asian snacks',
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
		area: 'sauces',
		title: 'Sauces & seasonings',
		href: '/departments/grocery',
		image: photos.sauces.src,
	},
	{
		area: 'rice',
		title: 'Rice & pantry',
		href: '/departments/grocery',
		image: photos.rice.src,
	},
] as const;
