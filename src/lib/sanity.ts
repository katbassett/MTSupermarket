import {createClient} from '@sanity/client'

export const sanityProjectId = '9qo9wknc'
export const sanityDataset = 'production'

/**
 * Public Sanity client for the MT Supermarket Astro site.
 * No token — published content only.
 *
 * useCdn is off so newly published Studio edits show up right away
 * during local `astro dev` and fresh builds.
 */
export const sanityClient = createClient({
	projectId: sanityProjectId,
	dataset: sanityDataset,
	apiVersion: '2025-01-01',
	useCdn: false,
})
