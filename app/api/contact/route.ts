import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, yarnCount, quantity, state, message } = body;

    if (!name || !company || !phone) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    // ── Option A: Log to console (always works, no setup needed) ──────────
    console.log('=== NEW ENQUIRY ===');
    console.log(`Name:      ${name}`);
    console.log(`Company:   ${company}`);
    console.log(`Phone:     ${phone}`);
    console.log(`Email:     ${email || '—'}`);
    console.log(`Count:     ${yarnCount || '—'}`);
    console.log(`Quantity:  ${quantity || '—'}`);
    console.log(`State:     ${state || '—'}`);
    console.log(`Message:   ${message || '—'}`);
    console.log('==================');

    // ── Option B: Send email via Resend (uncomment + add RESEND_API_KEY to .env.local) ──
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'srisaitexco@gmail.com',
    //   to: ['srisaitexco@gmail.com', 's.hemachandran@live.com'],
    //   subject: `New Yarn Enquiry from ${company} — ${yarnCount || 'General'}`,
    //   html: `
    //     <h2>New Bulk Yarn Enquiry</h2>
    //     <table>
    //       <tr><td><b>Name</b></td><td>${name}</td></tr>
    //       <tr><td><b>Company</b></td><td>${company}</td></tr>
    //       <tr><td><b>Phone</b></td><td>${phone}</td></tr>
    //       <tr><td><b>Email</b></td><td>${email || '—'}</td></tr>
    //       <tr><td><b>Yarn Count</b></td><td>${yarnCount || '—'}</td></tr>
    //       <tr><td><b>Quantity</b></td><td>${quantity || '—'}</td></tr>
    //       <tr><td><b>State</b></td><td>${state || '—'}</td></tr>
    //       <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
    //     </table>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
