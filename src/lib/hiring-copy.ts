/** Homepage / careers CTA body copy from active job count. */
export function formatHiringCtaText(count: number, opening: string) {
	const openingLabel = opening.toLowerCase();

	if (count > 0) {
		const positionPhrase =
			count === 1 ? '1 position is listed' : `${count} positions are listed`;
		return `Hiring for the San Antonio store is open before the expected ${openingLabel} opening. ${positionPhrase}.`;
	}

	return 'Hiring for the San Antonio store begins before the store opens.';
}

/** GROQ for public job count (browser + server). */
export const activeJobsCountQuery =
	'count(*[_type == "job" && active == true && defined(slug.current)])';
