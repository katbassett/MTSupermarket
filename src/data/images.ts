import discovery from '../assets/images/discovery.jpg';
import grocery from '../assets/images/grocery.jpg';
import hero from '../assets/images/hero.jpg';
import intro from '../assets/images/intro.jpg';
import meat from '../assets/images/meat.jpg';
import produce from '../assets/images/produce.jpg';
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
		src: grocery,
		alt: 'A bowl of noodle soup with shrimp, egg, and snow peas.',
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
	wholesale: {
		src: wholesale,
		alt: 'A market stall with crates of fruit.',
	},
} as const;
