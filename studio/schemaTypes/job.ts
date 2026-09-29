import {defineArrayMember, defineField, defineType} from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  groups: [
    {name: 'listing', title: 'Job listing', default: true},
    {name: 'details', title: 'Job details'},
    {name: 'application', title: 'How to apply'},
    {name: 'publishing', title: 'Publishing'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Job title',
      type: 'string',
      description: 'The role name shown on the Careers page.',
      group: 'listing',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      description: 'Used in the job page link. Click Generate from the title.',
      group: 'listing',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      group: 'listing',
      options: {
        list: [
          {title: 'Management', value: 'Management'},
          {title: 'Grocery', value: 'Grocery'},
          {title: 'Produce', value: 'Produce'},
          {title: 'Meat', value: 'Meat'},
          {title: 'Seafood', value: 'Seafood'},
          {title: 'Wholesale', value: 'Wholesale'},
          {title: 'Front End', value: 'Front End'},
          {title: 'Store Support', value: 'Store Support'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'listing',
      initialValue: 'San Antonio, TX',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment type',
      type: 'string',
      group: 'listing',
      options: {
        list: [
          {title: 'Full Time', value: 'Full Time'},
          {title: 'Part Time', value: 'Part Time'},
          {title: 'Full Time / Part Time', value: 'Full Time / Part Time'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences for the Careers listing card.',
      group: 'listing',
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: 'featured',
      title: 'Featured role',
      type: 'boolean',
      description: 'Highlight this opening on the Careers page.',
      group: 'listing',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Full job description',
      type: 'array',
      description: 'The main description applicants will read.',
      group: 'details',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading', value: 'h3'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      description: 'Add one responsibility per line.',
      group: 'details',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'list',
      },
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      description: 'Add one qualification or requirement per line.',
      group: 'details',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'list',
      },
    }),
    defineField({
      name: 'compensation',
      title: 'Compensation',
      type: 'string',
      description: 'Optional. Example: Starting at $15/hour, or competitive pay.',
      group: 'details',
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application link',
      type: 'url',
      description: 'Usually an Indeed posting or another external apply link.',
      group: 'application',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'applicationSource',
      title: 'Application source',
      type: 'string',
      group: 'application',
      options: {
        list: [
          {title: 'Indeed', value: 'Indeed'},
          {title: 'MT Supermarket', value: 'MT Supermarket'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'active',
      title: 'Active opening',
      type: 'boolean',
      description: 'Turn off when this role is filled or no longer accepting applications.',
      group: 'publishing',
      initialValue: true,
    }),
    defineField({
      name: 'postedDate',
      title: 'Posted date',
      type: 'datetime',
      group: 'publishing',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Posted date, newest',
      name: 'postedDateDesc',
      by: [{field: 'postedDate', direction: 'desc'}],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      location: 'location',
      active: 'active',
    },
    prepare({title, department, location, active}) {
      const place = [department, location].filter(Boolean).join(' · ')
      const status = active === false ? 'Inactive' : 'Active'

      return {
        title: title || 'Untitled job',
        subtitle: place ? `${place} · ${status}` : status,
      }
    },
  },
})
