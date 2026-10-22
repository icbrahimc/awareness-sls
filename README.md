# Awareness SLS website

A single-page website for Awareness SLS, built with [Astro](https://astro.build) as a static site. Astro is the only dependency.

## Run it

You need Node.js 22.12 or newer. Node 22.19+ avoids an npm engine warning from one of Astro's sub-dependencies. Astro is pinned to `~7.3.8` because Astro 7.4 requires Node 22.22+.

```sh
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # builds the static site into dist/
npm run preview   # serves dist/ locally to check the build
```

If the dev server starts in the background, stop it with `npx astro dev stop`.

## Deploy

Run `npm run build` and publish the `dist/` folder.

- **Netlify:** set the build command to `npm run build` and the publish directory to `dist`.
- **Vercel:** import the project. Vercel detects Astro and needs no settings.
- **GitHub Pages:** for a project site (`username.github.io/repo`), add `site: 'https://username.github.io'` and `base: '/repo'` to `astro.config.mjs`, then deploy with the official `withastro/action` GitHub Action.

## Files

```
public/favicon.svg            letter-mark favicon
src/data/site.ts              all editable content, plus FORM_ENDPOINT
src/layouts/BaseLayout.astro  <head> and SEO tags, font, skip link, header, footer
src/pages/index.astro         puts the sections in order
src/components/               Header, Hero, About, Services, Partners, Careers, Contact
src/styles/global.css         the only stylesheet
```

## Placeholders to replace

All content is in `src/data/site.ts`. Search that file for `TODO` to find these:

| What | Current placeholder | Field |
|---|---|---|
| Phone | empty, so no phone is shown anywhere | `site.phone` (once set, it appears in the header, the contact details and the form messages) |
| Office address | 123 Placeholder St, Sacramento, CA 95814 | `site.address` |
| Nondiscrimination statement | generic wording | `site.nondiscrimination` |

Everything else comes from the agency: the email (awarenessllc24@yahoo.com), hours, service area, services, leadership, who we serve, getting-started steps and careers requirements.

Once the site has a domain, add `og:url`, a canonical link and an `og:image` in `BaseLayout.astro`.

## Contact form

Set `FORM_ENDPOINT` at the top of `src/data/site.ts`:

- **`''` (default):** the form checks the fields, then opens the visitor's email app with a message to `site.email` already filled in.
- **Formspree:** create a form at formspree.io and set `FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'`. Messages are sent in the background, and the page shows whether sending worked.
- **Netlify Forms:** set `FORM_ENDPOINT = '/'` and add `data-netlify="true"` to the `<form>` in `src/components/Contact.astro`. The form's `name="contact"` and the hidden `form-name` field that Netlify needs are already there.

Without JavaScript the form still submits, using the browser's own form handling, to the endpoint or to `mailto:`.
