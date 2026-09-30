/**
 * Confirmed store facts and shared site copy.
 * Replace nulls and placeholder notes when MT provides the missing details.
 * Do not treat the prose in this file as final marketing copy.
 *
 * Staff-editable candidates (future Sanity / CMS — see CONTENT-TODO.md):
 * - hoursLabel / hoursPhrase
 * - opening
 * - phone / address
 * - publicEmail
 * - store announcements
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
	 * Public-facing contact email shown in the footer / store info.
	 * Official MT address is TBD — keep null until MT provides one.
	 * Do NOT put the form destination email here.
	 */
	email: null as string | null,
	/**
	 * FormSubmit destination only — never rendered as visible site copy.
	 * Set via PUBLIC_CONTACT_FORM_EMAIL in `.env` (see .env.example).
	 * When MT provides an official inbox, point this env var there (or to a
	 * shared mailbox) without requiring a public mailto on the site.
	 */
	formDestinationEmail:
		(import.meta.env.PUBLIC_CONTACT_FORM_EMAIL as string | undefined) ||
		(import.meta.env.PUBLIC_CONTACT_EMAIL as string | undefined) ||
		null,
	/** Clock range only; pair with hoursPhrase for pre-opening language. */
	hoursLabel: '9 AM–8 PM',
	/**
	 * Public hours line before the store opens.
	 * Prefer "Planned hours…" / "Hours upon opening…" — do not imply open now.
	 */
	hoursPhrase: 'Planned hours: 9 AM–8 PM daily',
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
	// Weekly Specials: add a nav item only when Sanity-powered specials ship.
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
		// Planned hours upon opening — store is not open yet.
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
		description: `${site.name} is an established Asian and international supermarket expected to open in ${site.opening}. ${site.hoursPhrase}.`,
	};
}
