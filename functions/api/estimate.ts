// Cloudflare Pages Function: receives the estimate form from /contact/.
// Set these in Cloudflare (Pages project > Settings > Variables and Secrets):
//   RESEND_API_KEY  – API key from resend.com, to email each request
//   TO_EMAIL        – where requests are sent, e.g. the owner's inbox
//   FROM_EMAIL      – a sender on a domain verified in Resend, e.g. "Website <estimates@costabamacabinets.com>"
//   WEBHOOK_URL     – optional; each request is also POSTed here as JSON (Make, Zapier, a CRM)

interface Env {
  RESEND_API_KEY?: string;
  TO_EMAIL?: string;
  FROM_EMAIL?: string;
  WEBHOOK_URL?: string;
}

const FIELDS = ['name', 'phone', 'email', 'town', 'project', 'message'] as const;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const back = (query: string) => Response.redirect(new URL(`/contact/?${query}`, request.url).toString(), 303);

  const form = await request.formData();

  // Bots fill the hidden "company" field; pretend it worked.
  if (form.get('company')) return back('sent=1');

  const data: Record<string, string> = {};
  for (const key of FIELDS) data[key] = String(form.get(key) ?? '').trim().slice(0, 4000);
  if (!data.name || !data.phone) return back('error=1');

  const tasks: Promise<Response>[] = [];

  if (env.RESEND_API_KEY && env.TO_EMAIL && env.FROM_EMAIL) {
    const text = FIELDS.map((k) => `${k[0].toUpperCase()}${k.slice(1)}: ${data[k] || '-'}`).join('\n');
    tasks.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: env.TO_EMAIL,
          reply_to: data.email || undefined,
          subject: `Estimate request: ${data.name} (${data.town || 'town not given'})`,
          text,
        }),
      }),
    );
  }

  if (env.WEBHOOK_URL) {
    tasks.push(
      fetch(env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submitted_at: new Date().toISOString(), source: 'costa-bama-website' }),
      }),
    );
  }

  if (tasks.length === 0) {
    console.error('Estimate form: no RESEND_API_KEY/TO_EMAIL/FROM_EMAIL or WEBHOOK_URL configured');
    return back('error=1');
  }

  const results = await Promise.allSettled(tasks);
  const ok = results.some((r) => r.status === 'fulfilled' && r.value.ok);
  if (!ok) console.error('Estimate form delivery failed', results);
  return back(ok ? 'sent=1' : 'error=1');
};
