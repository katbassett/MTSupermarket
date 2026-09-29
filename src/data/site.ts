/**
 * Confirmed store facts and shared site copy.
 * Replace nulls and placeholder notes when MT provides the missing details.
 * Do not treat the prose in this file as final marketing copy.
 */

export const site = {
	name: 'MT Supermarket',
	description:
		'MT Supermarket is an established Asian and international supermarket opening at 5428 Walzem Rd. in San Antonio, Texas. Expected opening: early November. Planned hours are 9 AM–8 PM daily.',
	address: {
		street: '5428 Walzem Rd.',
		city: 'San Antonio',
		region: 'TX',
		country: 'US',
	},
	phoneDisplay: '210-251-3728',
	phoneHref: 'tel:+12102513728',
	/**
	 * Temporary form destination until MT provides the store email.
	 * Override with PUBLIC_CONTACT_EMAIL in `.env` when needed.
	 */
	email:
		(import.meta.env.PUBLIC_CONTACT_EMAIL as string | undefined) ||
		'kat@lionheartgraphix.com',
	hoursLabel: '9 AM–8 PM',
	opening: 'Early November',
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=5428+Walzem+Rd,+San+Antonio,+TX',
} as const;

export const nav: { href: string; label: string; hint?: string }[] = [
	{ href: '/departments', label: 'Departments' },
	{ href: '/wholesale', label: 'Wholesale' },
	{ href: '/careers', label: 'Careers', hint: 'Hiring' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
];

export function formatAddressLine() {
	return `${site.address.street} · ${site.address.city}, ${site.address.region}`;
}

export function formatAddress() {
	return `${site.address.street}, ${site.address.city}, ${site.address.region}`;
}

export function isCurrentPath(pathname: string, href: string) {
	const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	return path === href || path.startsWith(`${href}/`);
}

export function businessJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'GroceryStore',
		name: site.name,
		telephone: '+1-210-251-3728',
		address: {
			'@type': 'PostalAddress',
			streetAddress: site.address.street,
			addressLocality: site.address.city,
			addressRegion: site.address.region,
			addressCountry: site.address.country,
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			opens: '09:00',
			closes: '20:00',
		},
	description: `${site.name} is an established Asian and international supermarket expected to open in ${site.opening}. Planned hours are ${site.hoursLabel} daily.`,
	};
}
