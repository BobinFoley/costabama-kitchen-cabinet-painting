# Coastal Bama Kitchen Cabinet Repainting

Marketing site for a kitchen cabinet repainting business in Gulf Shores, AL. Built with Astro (static output) and hosted on Netlify (static site plus one Netlify Function for the estimate form).

## Pages

Home, Services, Our Process, Colors, Service Areas, Gulf Shores, Orange Beach, Foley, Fairhope, About, FAQ, Contact. Plus `sitemap.xml` and `robots.txt`.

## Edit content

Most text lives in `src/data/site.ts`: phone, email, hours, services, the 5-day process, FAQs, colors and service-area pages. Set the live domain in `astro.config.mjs` (`site`).

## Local development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # Astro dev server at http://localhost:4321
```

## Deploy to Netlify

The repo is connected to Netlify, which rebuilds on every push to `main`. Build settings live in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node 22
- `www.coastalbamacabinets.com` redirects to `coastalbamacabinets.com`

## Estimate form

`/contact/` posts to `/api/estimate`, handled by the Netlify Function in `netlify/functions/estimate.mts`. Set at least one delivery method under Netlify > Project configuration > Environment variables (scope must include Functions):

| Variable | Purpose |
| --- | --- |
| `WEBHOOK_URL` | Each request is POSTed here as JSON (currently a Zapier catch hook) |
| `RESEND_API_KEY` | Optional. API key from [resend.com](https://resend.com), to also email each request |
| `TO_EMAIL` | Optional. Inbox that receives emailed requests |
| `FROM_EMAIL` | Optional. Sender on a domain verified in Resend |
