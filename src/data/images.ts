import aisle from '../assets/images/aisle.webp';
import discovery from '../assets/images/discovery.webp';
import drinks from '../assets/images/drinks.webp';
import exterior from '../assets/images/exterior.jpg';
import hero from '../assets/images/hero.jpg';
import intro from '../assets/images/intro.jpg';
import meat from '../assets/images/meat.jpg';
import noodles from '../assets/images/noodles.jpg';
import packs from '../assets/images/packs.webp';
import produce from '../assets/images/produce.jpg';
import rice from '../assets/images/rice.jpg';
import sauces from '../assets/images/sauces.webp';
import seafood from '../assets/images/seafood.jpg';
import storefront from '../assets/images/storefront.jpg';
import wholesale from '../assets/images/wholesale.webp';

/**
 * Store photography for the public site.
 * Prefer real MT aisle, shelf, counter, and produce-display photos over plated food.
 *
 * Still needed from MT (or better shoots):
 * - meat: fresh meat counter / case (current image is plated cuts)
 * - seafood: live tank / counter close-ups (current image is stock)
 * - noodles / rice: dedicated aisle photography when available
 */
export const photos = {
	hero: {
		src: hero,
		alt: 'Produce and grocery aisles inside MT Supermarket, with fresh fruit displays and a live seafood section beyond.',
	},
	intro: {
		src: intro,
		alt: 'A shopper smiling while holding a paper grocery bag of fresh leafy greens in the produce section.',
	},
	grocery: {
		src: aisle,
		alt: 'Snack and pantry aisles at MT Supermarket with yellow aisle markers and endcap displays.',
	},
	produce: {
		src: produce,
		alt: 'Fresh fruit crates and produce displays along a wide aisle at MT Supermarket.',
	},
	meat: {
		src: meat,
		alt: 'Raw steaks, ground meat, and sausages arranged on a wooden board.',
	},
	seafood: {
		src: seafood,
		alt: 'A seafood market aisle with live tanks, counters, and hanging market signs.',
	},
	discovery: {
		src: discovery,
		alt: 'Snack aisle endcaps and packed shelves inside MT Supermarket.',
	},
	noodles: {
		src: noodles,
		alt: 'Shelves densely stocked with packaged instant noodles and cup ramen.',
	},
	snacks: {
		src: aisle,
		alt: 'Snack aisle endcaps with Pocky and packaged treats at MT Supermarket.',
	},
	packs: {
		src: packs,
		alt: 'Household goods and bulk cases stacked along a grocery aisle at MT Supermarket.',
	},
	drinks: {
		src: drinks,
		alt: 'Refrigerated shelves filled with canned and bottled Asian and international drinks.',
	},
	sauces: {
		src: sauces,
		alt: 'Shelves of sauces, pastes, and condiments in a grocery aisle at MT Supermarket.',
	},
	rice: {
		src: rice,
		alt: 'Rows of instant cup noodles lining a grocery shelf.',
	},
	wholesale: {
		src: wholesale,
		alt: 'Bulk cases and packed aisle shelves suited to cash-and-carry shopping at MT Supermarket.',
	},
	storefront: {
		src: storefront,
		alt: 'The exterior entrance of MT Supermarket with pagoda-style roofs and store signage.',
	},
	exterior: {
		src: exterior,
		alt: 'MT Supermarket storefront with red-tiled roofs and blue MT SUPERMARKET lettering.',
	},
} as const;
