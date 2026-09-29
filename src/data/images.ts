import aisle from '../assets/images/aisle.jpg';
import discovery from '../assets/images/discovery.jpg';
import drinks from '../assets/images/drinks.jpg';
import hero from '../assets/images/hero.jpg';
import intro from '../assets/images/intro.jpg';
import meat from '../assets/images/meat.jpg';
import noodles from '../assets/images/noodles.jpg';
import packs from '../assets/images/packs.jpg';
import produce from '../assets/images/produce.jpg';
import rice from '../assets/images/rice.jpg';
import sauces from '../assets/images/sauces.jpg';
import seafood from '../assets/images/seafood.jpg';
import wholesale from '../assets/images/wholesale.jpg';

/**
 * Placeholder photography until MT provides San Antonio store shoots.
 * Prefer aisle, shelf, counter, and produce-display photos over plated food.
 *
 * Still needed from MT (or better stock):
 * - meat: fresh meat counter / case (current image is plated cuts)
 * - drinks: beverage cooler aisle (keeping prior cooler photo)
 * - wholesale: dedicated cash-and-carry / bulk case photography
 * - seafood: live tank close-ups from the SA store when available
 * - hero / intro: MT San Antonio store photography
 */
export const photos = {
	hero: {
		src: hero,
		alt: 'A shopper walking down an aisle lined with packaged Asian snacks and pantry goods.',
	},
	intro: {
		src: intro,
		alt: 'A shopper walking down an aisle lined with packaged Asian snacks and pantry goods.',
	},
	grocery: {
		src: aisle,
		alt: 'An Asian grocery aisle with packed shelves, snack packages, and chest freezers.',
	},
	produce: {
		src: produce,
		alt: 'Fresh produce bins filled with eggplants, cucumbers, and leafy greens in a market aisle.',
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
		alt: 'Specialty ingredients, sauces, dried goods, and pantry staples packed on market shelves.',
	},
	noodles: {
		src: noodles,
		alt: 'Shelves densely stocked with packaged instant noodles and cup ramen.',
	},
	snacks: {
		src: packs,
		alt: 'An Asian grocery aisle with packed shelves of snacks and pantry packages.',
	},
	/** Stand-in until dedicated freezer-aisle photography arrives. */
	packs: {
		src: packs,
		alt: 'Chest freezers and packed shelves in an Asian grocery aisle.',
	},
	drinks: {
		src: drinks,
		alt: 'Refrigerated shelves filled with canned and bottled drinks.',
	},
	sauces: {
		src: sauces,
		alt: 'Grocery shelves stocked with sauces, seasonings, noodles, and packaged snacks.',
	},
	rice: {
		src: rice,
		alt: 'Rows of instant cup noodles lining a grocery shelf.',
	},
	wholesale: {
		src: wholesale,
		alt: 'A packed grocery aisle with shelves of pantry goods and chest freezers.',
	},
} as const;
