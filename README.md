# Costa Bama Kitchen Cabinet Repainting

Marketing site for a kitchen cabinet repainting business in Gulf Shores, AL. Built with Astro (static output) and hosted on Cloudflare Pages.

## Pages

Home, Services, Our Process, Colors, Service Areas, Gulf Shores, Orange Beach, Foley, Fairhope, About, FAQ, Contact. Plus `sitemap.xml` and `robots.txt`.

## Edit content

Most text lives in `src/data/site.ts`: phone, email, hours, services, the 5-day process, FAQs, colors and service-area pages. Set the live domain in `astro.config.mjs` (`site`).

## Local development

Requires Node 22.12 or newer.

```sh
npm install
npm run dev       # Astro dev server at http://localhost:4321
npm run cf:dev    # build, then run with Cloudflare's runtime (includes the form handler)
```

## Deploy to Cloudflare Pages

1. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, and pick this repository.
2. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
3. Under Settings > Variables and Secrets, add an environment variable `NODE_VERSION` = `22`, plus the form settings below.
4. Add your custom domain under Custom domains.

Or deploy from your machine with `npm run deploy` (runs `wrangler pages deploy`, after `npx wrangler login`).

## Estimate form

`/contact/` posts to the Pages Function in `functions/api/estimate.ts`. It needs at least one delivery method set in the Pages project's variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com), to email each request |
| `TO_EMAIL` | Inbox that receives requests |
| `FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Website <estimates@yourdomain.com>` |
| `WEBHOOK_URL` | Optional. Each request is also POSTed here as JSON (Make, Zapier, a CRM) |

For local testing, put the same values in a `.dev.vars` file (git-ignored) and run `npm run cf:dev`.
