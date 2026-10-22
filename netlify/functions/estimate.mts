// Netlify Function: receives the estimate form from /contact/ and forwards it.
// Set these in Netlify (Project configuration > Environment variables, scope must include Functions):
//   WEBHOOK_URL     – each request is POSTed here as JSON (Zapier, Make, a CRM)
//   RESEND_API_KEY  – optional; API key from resend.com, to also email each request
//   TO_EMAIL        – optional; where emailed requests go, e.g. the owner's inbox
//   FROM_EMAIL      – optional; a sender on a domain verified in Resend

import type { Config } from '@netlify/functions';

const FIELDS = ['name', 'phone', 'email', 'town', 'project', 'message'] as const;

export default async (req: Request) => {
  const back = (query: string) => Response.redirect(new URL(`/contact/?${query}`, req.url).toString(), 303);

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return back('error=1');
  }

  // Bots fill the hidden "company" field; pretend it worked.
  if (form.get('company')) return back('sent=1');

  const data: Record<string, string> = {};
  for (const key of FIELDS) data[key] = String(form.get(key) ?? '').trim().slice(0, 4000);
  if (!data.name || !data.phone) return back('error=1');

  const webhookUrl = Netlify.env.get('WEBHOOK_URL');
  const resendKey = Netlify.env.get('RESEND_API_KEY');
  const toEmail = Netlify.env.get('TO_EMAIL');
  const fromEmail = Netlify.env.get('FROM_EMAIL');

  const tasks: Promise<Response>[] = [];

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submitted_at: new Date().toISOString(), source: 'coastal-bama-website' }),
      }),
    );
  }

  if (resendKey && toEmail && fromEmail) {
    const text = FIELDS.map((k) => `${k[0].toUpperCase()}${k.slice(1)}: ${data[k] || '-'}`).join('\n');
    tasks.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail,
          reply_to: data.email || undefined,
          subject: `Estimate request: ${data.name} (${data.town || 'town not given'})`,
          text,
        }),
      }),
    );
  }

  if (tasks.length === 0) {
    console.error('Estimate form: no WEBHOOK_URL or RESEND_API_KEY/TO_EMAIL/FROM_EMAIL configured');
    return back('error=1');
  }

  const results = await Promise.allSettled(tasks);
  const ok = results.some((r) => r.status === 'fulfilled' && r.value.ok);
  if (!ok) console.error('Estimate form delivery failed', results);
  return back(ok ? 'sent=1' : 'error=1');
};

export const config: Config = {
  path: '/api/estimate',
  method: 'POST',
};
