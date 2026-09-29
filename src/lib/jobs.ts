import groq from 'groq'
import {sanityClient} from './sanity'

export interface SanityJob {
	_id: string
	title: string
	slug: string
	department: string
	location: string
	employmentType: string
	summary: string
	description: unknown[] | null
	responsibilities: string[] | null
	qualifications: string[] | null
	compensation: string | null
	applicationUrl: string | null
	applicationSource: string | null
	featured: boolean | null
	postedDate: string | null
}

export interface JobGroup {
	department: string
	jobs: SanityJob[]
}

const activeJobsQuery = groq`*[_type == "job" && active == true && defined(slug.current)] | order(featured desc, postedDate desc) {
	_id,
	title,
	"slug": slug.current,
	department,
	location,
	employmentType,
	summary,
	description,
	responsibilities,
	qualifications,
	compensation,
	applicationUrl,
	applicationSource,
	featured,
	postedDate
}`

const jobBySlugQuery = groq`*[_type == "job" && active == true && slug.current == $slug][0] {
	_id,
	title,
	"slug": slug.current,
	department,
	location,
	employmentType,
	summary,
	description,
	responsibilities,
	qualifications,
	compensation,
	applicationUrl,
	applicationSource,
	featured,
	postedDate
}`

export async function getActiveJobs(): Promise<SanityJob[]> {
	return sanityClient.fetch<SanityJob[]>(activeJobsQuery)
}

export async function getJobBySlug(slug: string): Promise<SanityJob | null> {
	return sanityClient.fetch<SanityJob | null>(jobBySlugQuery, {slug})
}

/** Group active jobs by department, preserving featured / date sort within each group. */
export async function getJobsByDepartment(): Promise<JobGroup[]> {
	const jobs = await getActiveJobs()
	const groups = new Map<string, SanityJob[]>()

	for (const job of jobs) {
		const key = job.department || 'Other'
		const list = groups.get(key)
		if (list) {
			list.push(job)
		} else {
			groups.set(key, [job])
		}
	}

	return [...groups.entries()].map(([department, jobs]) => ({department, jobs}))
}

export function formatPostedDate(value: string | null | undefined) {
	if (!value) return null
	const date = new Date(value)
	if (Number.isNaN(date.getTime())) return null
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}).format(date)
}
