/**
 * Job listings for the San Antonio store.
 *
 * This file is the editing surface until a CMS or other source replaces it.
 * Pages should read jobs through getActiveJobs() and getJobsByCategory()
 * so the page markup does not need to change when the source changes.
 *
 * - Set active to false to hide a role without deleting it.
 * - Set description to a string when real copy exists. null keeps the
 *   shared placeholder note on the careers page.
 * - Set applicationUrl when an application link exists. null shows
 *   "Call to apply" using the store phone number.
 */

export const jobCategories = ['Management', 'Store Team'] as const;

export type JobCategory = (typeof jobCategories)[number];

export interface Job {
	id: string;
	title: string;
	category: JobCategory;
	description: string | null;
	active: boolean;
	applicationUrl: string | null;
}

export const jobs: Job[] = [
	{
		id: 'store-manager',
		title: 'Store Manager',
		category: 'Management',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'meat-department-manager',
		title: 'Meat Department Manager',
		category: 'Management',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'seafood-department-manager',
		title: 'Seafood Department Manager',
		category: 'Management',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'produce-department-manager',
		title: 'Produce Department Manager',
		category: 'Management',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'wholesale-manager',
		title: 'Wholesale Manager',
		category: 'Management',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'cashiers',
		title: 'Cashiers',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'stockers',
		title: 'Stockers',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'store-support',
		title: 'Store Support',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'meat-department-staff',
		title: 'Meat Department Staff',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'seafood-department-staff',
		title: 'Seafood Department Staff',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'produce-department-staff',
		title: 'Produce Department Staff',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
	{
		id: 'wholesale-staff',
		title: 'Wholesale Staff',
		category: 'Store Team',
		description: null,
		active: true,
		applicationUrl: null,
	},
];

export function getActiveJobs() {
	return jobs.filter((job) => job.active);
}

export function getJobsByCategory() {
	const active = getActiveJobs();
	return jobCategories
		.map((category) => ({
			category,
			jobs: active.filter((job) => job.category === category),
		}))
		.filter((group) => group.jobs.length > 0);
}
