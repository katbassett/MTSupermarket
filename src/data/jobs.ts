/**
 * Job listings now come from Sanity.
 * Prefer importing from `../lib/jobs` in new code.
 */
export {
	formatPostedDate,
	getActiveJobs,
	getJobBySlug,
	getJobsByDepartment,
	type JobGroup,
	type SanityJob,
	type SanityJob as Job,
} from '../lib/jobs'
