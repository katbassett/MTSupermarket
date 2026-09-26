# MT Supermarket

Static site for the MT Supermarket San Antonio location. Built with Astro.

```bash
npm run dev
npm run build
npm run preview
```

Store facts live in `src/data/site.ts`. Departments live in `src/data/departments.ts`. Jobs live in `src/data/jobs.ts`.

Set a job's `active` field to `false` to hide it. Add `description` and `applicationUrl` when that copy exists.

Replace `site` in `astro.config.mjs` with the production domain before launch. The current value, `https://example.com`, is a placeholder for canonical and Open Graph URLs.
