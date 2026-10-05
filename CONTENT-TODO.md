# MT Supermarket — content & assets still needed

Internal developer checklist. Not linked from the public site.

Last audit: brief gap pass (Weekly Specials architecture, About structure, email split, pre-opening hours language).

---

## Assets / copy still needed from MT

- [ ] Official store / company email (public display)
- [ ] Social media links (or confirmation that none should appear yet)
- [ ] Company / history copy (established Austin identity, business story — no invented history on site)
- [ ] Final Careers application links / process notes (per role or shared apply URL)
- [ ] Specific featured products / brands to highlight (if desired)
- [ ] Additional wholesale information (hours, account process, categories, etc.)
- [x] MT logo assets (icon + wordmark in header; full lockup in `src/assets/images/logos/`)
- [ ] Final San Antonio photography (store, departments, product — replace stock as available)

---

## Staff-editable content (future CMS / Sanity)

Careers jobs are already Sanity-managed. Do **not** migrate everything now.

Eventually make staff-editable:

| Content | Current home | Notes |
| --- | --- | --- |
| Job openings | Sanity (`studio/`) | Done |
| Store hours | `src/data/site.ts` (`hoursLabel`, `hoursPhrase`) | Pre-opening language until open |
| Store announcements | — | Not built; reserve for homepage / banner |
| Photos | `src/data/images.ts` + `src/assets/images/` | Swap when MT delivers finals |
| Basic store info (address, phone, opening) | `src/data/site.ts` | Confirmed facts today |
| Weekly Specials | `src/data/features.ts` → `weeklySpecials` (empty) | Homepage mount reserved in `index.astro`; no nav until live |
| Public email | `site.email` (null until provided) | Separate from form destination env |

---

## Form email vs public email

- **Public display:** `site.email` — null until MT supplies an official address. Do not show temporary agency inboxes on the site.
- **Form destination:** `PUBLIC_CONTACT_FORM_EMAIL` in `.env` (see `.env.example`). Used only by FormSubmit; not rendered as mailto / visible copy.

---

## Weekly Specials

- Do not build or publish specials until MT provides real content.
- Architecture: empty `weeklySpecials` in `src/data/features.ts`; reserved homepage slot comment in `src/pages/index.astro`.
- Prefer Sanity (or similar) so staff can update without a deploy.
