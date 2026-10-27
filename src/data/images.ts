import aisle from '../assets/images/aisle.webp';
import drinks from '../assets/images/drinks.webp';
import exterior from '../assets/images/exterior.jpg';
import frozen from '../assets/images/frozen.jpg';
import grocery from '../assets/images/grocery.jpg';
import hero from '../assets/images/hero.jpg';
import intro from '../assets/images/intro.jpg';
import meat from '../assets/images/meat.jpg';
import noodles from '../assets/images/noodles.jpg';
import packs from '../assets/images/packs.webp';
import pantry from '../assets/images/pantry.jpg';
import produce from '../assets/images/produce.jpg';
import rice from '../assets/images/rice.jpg';
import sauces from '../assets/images/sauces.webp';
import seafood from '../assets/images/seafood.jpg';
import specialty from '../assets/images/specialty.jpg';
import storefront from '../assets/images/storefront.jpg';
import wholesale from '../assets/images/wholesale.jpg';

/**
 * Store photography for the public site.
 * Prefer real MT aisle, shelf, counter, and produce-display photos over plated food.
 * Keep each public slot on a distinct file so homepage tiles don't repeat.
 *
 * Still needed from MT (or better shoots):
 * - meat: fresh meat counter / case (current image is plated cuts)
 * - seafood: MT live tank / fresh counter (current image is stock Asian market counter)
 * - produce: dedicated MT produce close-up (current tile uses stock Asian produce aisle)
 * - noodles / rice: dedicated MT aisle photography when available
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
		src: grocery,
		alt: 'An Asian grocery aisle with packed shelves, snack packages, and chest freezers.',
	},
	produce: {
		src: produce,
		alt: 'Eggplants, cucumbers, and leafy greens stacked in an Asian supermarket produce aisle.',
	},
	meat: {
		src: meat,
		alt: 'Raw steaks, ground meat, and sausages arranged on a wooden board.',
	},
	seafood: {
		src: seafood,
		alt: 'An Asian market seafood counter with trays of prepared crab, shrimp, and squid under bright lights.',
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
	pantry: {
		src: pantry,
		alt: 'A grocery aisle with packed shelves and a freestanding display of pantry goods.',
	},
	frozen: {
		src: frozen,
		alt: 'Chest freezers filled with frozen desserts and packaged frozen foods in a grocery aisle.',
	},
	specialty: {
		src: specialty,
		alt: 'Wooden shelves packed with Asian sauces, oils, and specialty condiments.',
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
		alt: 'MT Supermarket storefront with red-tiled roofs, marking the cash-and-carry wholesale location.',
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
