'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { companyInfo, yarnCounts } from '@/lib/data';

const states = [
  'Tamil Nadu', 'Gujarat', 'Maharashtra', 'Karnataka', 'Andhra Pradesh',
  'Telangana', 'Rajasthan', 'Punjab', 'Haryana', 'Uttar Pradesh',
  'West Bengal', 'Madhya Pradesh', 'Other',
];

const quantities = [
  '500 kg – 1 MT', '1 – 5 MT', '5 – 10 MT', '10 – 25 MT', '25 MT+',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    yarnCount: '', quantity: '', state: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I am interested in bulk yarn supply.'
  )}`;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!form.name || !form.company || !form.phone) {
      alert('Please fill in Name, Company, and Phone number.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', company: '', phone: '', email: '', yarnCount: '', quantity: '', state: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/contact_banner_1781880093185.png"
            alt="Contact SRI SAI TEXCO"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>

        <div className="container-custom relative z-10">
          <span className="section-label text-gold block mb-3">Contact & Enquiry</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl drop-shadow-sm">
            Get in Touch for Bulk Yarn Supply
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed drop-shadow-sm">
            Send us your yarn requirement and we will respond with availability and pricing within a few hours. All enquiries for bulk orders only.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── CONTACT INFO ────────────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contacts */}
              <div className="card p-7">
                <h2 className="font-playfair text-xl font-bold text-txt-dark mb-5">Contact Details</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Phone</div>
                      <a href={`tel:${companyInfo.phone}`} className="text-sm font-semibold text-teal hover:text-teal-light transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#e8faf0] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle size={16} className="text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">WhatsApp</div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#25D366] hover:underline"
                      >
                        WhatsApp Enquiry →
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Email</div>
                      <a href={`mailto:${companyInfo.email}`} className="text-sm font-semibold text-teal hover:text-teal-light transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Office</div>
                      <p className="text-sm font-semibold text-txt-dark">{companyInfo.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Business Hours</div>
                      <p className="text-sm font-semibold text-txt-dark">{companyInfo.businessHours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA card */}
              <div className="card p-6 bg-teal-dark text-white">
                <MessageCircle size={24} className="text-gold mb-3" />
                <h3 className="font-playfair text-lg font-bold mb-2">Fastest Response on WhatsApp</h3>
                <p className="text-sm text-teal-pale mb-4 leading-relaxed">
                  For immediate responses, WhatsApp us directly. We typically reply within 1–2 hours during business hours.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center"
                >
                  <MessageCircle size={15} /> Open WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="card overflow-hidden">
                <iframe
                  src={companyInfo.mapEmbedUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRI SAI TEXCO Location"
                />
              </div>
            </div>

            {/* ── RFQ FORM ────────────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="card p-5 sm:p-8">
                <h2 className="font-playfair text-2xl font-bold text-txt-dark mb-2">Send Bulk Enquiry (RFQ)</h2>
                <p className="text-sm text-txt-light mb-7">
                  Fill in your requirement details. We&apos;ll confirm availability and pricing the same day.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-teal" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-txt-dark mb-3">Enquiry Received!</h3>
                    <p className="text-sm text-txt-light max-w-sm mb-6">
                      Thank you for reaching out. We&apos;ll review your requirement and get back to you within a few hours.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                      <MessageCircle size={15} /> Also WhatsApp Us for Faster Response
                    </a>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full name"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company / firm name"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Optional"
                          type="email"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Yarn Count Required
                        </label>
                        <select
                          name="yarnCount"
                          value={form.yarnCount}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white transition-all"
                        >
                          <option value="">Select count</option>
                          {yarnCounts.map((y) => (
                            <option key={y.id} value={`${y.count} ${y.type}`}>
                              {y.count} {y.type}
                            </option>
                          ))}
                          <option value="Multiple Counts">Multiple Counts</option>
                          <option value="Other / Custom">Other / Custom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                          Quantity Required
                        </label>
                        <select
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white transition-all"
                        >
                          <option value="">Select quantity</option>
                          {quantities.map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div>
                      <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                        Delivery State
                      </label>
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 bg-white transition-all"
                      >
                        <option value="">Select state</option>
                        {states.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-txt-mid mb-1.5 uppercase tracking-wide">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any specific mill preference, packing requirement, urgency, or other details..."
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 resize-none transition-all"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Something went wrong. Please try again or contact us directly via WhatsApp.
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={status === 'loading'}
                      className="btn-teal w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} /> Send My Bulk Enquiry
                        </span>
                      )}
                    </button>

                    <p className="text-xs text-txt-light text-center">
                      We respond within 2–4 hours during business hours (Mon–Sat, 9AM–7PM).
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
