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
 * Temporary Unsplash photos. They are not pictures of MT Supermarket.
 * Replace `src` with files in src/assets when real photography arrives.
 * Alt text should stay descriptive of what is actually in the picture.
 */
export const photos = {
	hero: {
		src: hero,
		alt: 'A market stall packed with tropical fruit, peppers, and vegetables.',
	},
	intro: {
		src: intro,
		alt: 'A refrigerated produce wall with lettuce, peppers, citrus, and herbs.',
	},
	grocery: {
		src: aisle,
		alt: 'Shelves of packaged soups, sauces, jars, and snacks.',
	},
	produce: {
		src: produce,
		alt: 'Tomatoes, peppers, citrus, carrots, and other produce arranged on a wooden table.',
	},
	meat: {
		src: meat,
		alt: 'Raw steaks, ground meat, and sausages arranged on a wooden board.',
	},
	seafood: {
		src: seafood,
		alt: 'Whole fish, shrimp, crab, and shellfish on crushed ice.',
	},
	discovery: {
		src: discovery,
		alt: 'Ginger, garlic, dried chilies, and ground spices arranged on a white table.',
	},
	noodles: {
		src: noodles,
		alt: 'Shelves of packaged instant noodles and noodle cups.',
	},
	snacks: {
		src: packs,
		alt: 'Shelves of bagged chips, crackers, and snack packages.',
	},
	drinks: {
		src: drinks,
		alt: 'Refrigerated shelves filled with canned and bottled drinks.',
	},
	sauces: {
		src: sauces,
		alt: 'Jars and bottles of sauces, pastes, and condiments on grocery shelves.',
	},
	rice: {
		src: rice,
		alt: 'Boxes of pad thai noodles and rice vermicelli on a shelf.',
	},
	wholesale: {
		src: wholesale,
		alt: 'A market stall with crates of fruit.',
	},
} as const;
