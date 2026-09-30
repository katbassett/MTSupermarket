# MT Supermarket

Static site for the MT Supermarket San Antonio location. Built with Astro.

```bash
npm run dev
npm run build
npm run preview
```

Store facts live in `src/data/site.ts`. Departments live in `src/data/departments.ts`. Careers jobs are managed in Sanity (`studio/`).

Internal checklist for remaining MT assets and future CMS fields: `CONTENT-TODO.md` (not part of the public site).

Contact form delivery uses `PUBLIC_CONTACT_FORM_EMAIL` in `.env` (form destination only). Public display email is separate (`site.email`) and stays unset until MT provides an official address.

Replace `site` in `astro.config.mjs` with the production domain before launch. The current value, `https://example.com`, is a placeholder for canonical and Open Graph URLs.
