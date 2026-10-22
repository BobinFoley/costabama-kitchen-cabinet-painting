# Coastal Bama Kitchen Cabinet Repainting

Marketing site for a kitchen cabinet repainting business in Gulf Shores, AL. Built with Astro (static output) and hosted on Cloudflare Workers (static assets plus a small Worker for the estimate form).

## Pages

Home, Services, Our Process, Colors, Service Areas, Gulf Shores, Orange Beach, Foley, Fairhope, About, FAQ, Contact. Plus `sitemap.xml` and `robots.txt`.

## Edit content

Most text lives in `src/data/site.ts`: phone, email, hours, services, the 5-day process, FAQs, colors and service-area pages. Set the live domain in `astro.config.mjs` (`site`).

## Local development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # Astro dev server at http://localhost:4321
npm run cf:dev    # build, then run the Worker locally with Cloudflare's runtime (includes the form handler)
```

## Deploy to Cloudflare

The repo is connected to a Cloudflare Worker with Git builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

`wrangler.toml` points the Worker at `worker/index.ts` and serves the built site from `dist/`. Every push to `main` redeploys.

To deploy from your own machine instead: `npx wrangler login`, then `npm run deploy`.

## Estimate form

`/contact/` posts to `/api/estimate`, handled by `worker/index.ts`. It needs at least one delivery method set under the Worker's Settings > Variables and Secrets:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com), to email each request |
| `TO_EMAIL` | Inbox that receives requests |
| `FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Website <estimates@yourdomain.com>` |
| `WEBHOOK_URL` | Optional. Each request is also POSTed here as JSON (Make, Zapier, a CRM) |

For local testing, put the same values in a `.dev.vars` file (git-ignored) and run `npm run cf:dev`.
