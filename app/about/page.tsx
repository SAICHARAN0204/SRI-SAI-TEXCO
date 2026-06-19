import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Heart, Target, Users, ShieldCheck, Handshake, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — SRI SAI TEXCO Cotton Yarn Agent',
  description:
    'Learn about SRI SAI TEXCO — a Coimbatore-based cotton yarn agency with over 15 years of experience connecting mills and buyers across India.',
};

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We deal only in certified, primary-grade yarn. Transparent pricing, honest sourcing — always.' },
  { icon: Handshake, title: 'Partnership', desc: 'We are not just a vendor — we are your sourcing partner, invested in your procurement success.' },
  { icon: Heart, title: 'Quality First', desc: 'Every count we source is checked against mill specifications. Quality is non-negotiable.' },
  { icon: TrendingUp, title: 'Reliability', desc: 'Consistent availability, fast communication, and dependable delivery across every order.' },
  { icon: Target, title: 'Specialisation', desc: 'We focus exclusively on cotton yarn B2B supply. Deep expertise, not broad generalisation.' },
  { icon: Users, title: 'Long-Term Relationships', desc: 'Our business is built on multi-year relationships with both mills and buyers — not one-time transactions.' },
];

const strengths = [
  'Direct relationships with 25+ certified mills including Trident, Vardhman, GHCL, Alok Industries, etc.',
  'Deep knowledge of cotton yarn counts, grades, and applications',
  'Ability to source specific counts quickly — even non-standard requirements',
  'Strong transporter network across Tamil Nadu, Gujarat, Maharashtra',
  'Fast response — enquiries answered and quotes provided the same day',
  'Bulk order experience — we understand the demands of large-scale textile production',
  'GST registered and compliance-ready for B2B invoicing',
  'Trusted by fabric mills, exporters, traders, and wholesalers across India',
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="section-label text-gold block mb-3">About Us</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl">
            Built on Trust, Driven by Textile Expertise
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed">
            SRI SAI TEXCO is a Coimbatore-based cotton yarn agency with over 15 years of experience in the Indian textile supply chain. We connect spinning mills with bulk buyers — reliably, transparently, and fast.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label block mb-3">Our Story</span>
              <h2 className="section-heading mb-6">From Coimbatore to Pan-India Supply</h2>
              <div className="space-y-4 text-sm text-txt-light leading-relaxed">
                <p>
                  SRI SAI TEXCO was founded in Coimbatore, Tamil Nadu — the heart of India&apos;s textile industry. Our founder saw a persistent gap in the market: small and mid-size textile mills struggled to access premium quality yarn from India&apos;s leading spinning mills at competitive rates, without going through layers of middlemen.
                </p>
                <p>
                  Starting with a focused count portfolio and a handful of trusted mill relationships, we built SRI SAI TEXCO into a dependable cotton yarn sourcing partner. Today, we supply to textile mills, fabric manufacturers, exporters, and traders across Tamil Nadu, Gujarat, and Maharashtra — with the ability to reach any state for large orders.
                </p>
                <p>
                  Our agency model gives buyers the best of both worlds: mill-quality yarn at competitive rates, with the agility and personal service that large mill sales teams cannot provide. We know our counts, we know our mills, and we know what our buyers need.
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years in Business', sub: 'Est. Coimbatore, TN' },
                { value: '27', label: 'Partner Mills', sub: 'Trident, Vardhman, GHCL...' },
                { value: '9+', label: 'Yarn Counts', sub: '40s to OE Range' },
                { value: '3', label: 'States Covered', sub: 'TN · GJ · MH' },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <div className="font-playfair text-4xl font-black text-teal mb-1">{s.value}</div>
                  <div className="text-sm font-semibold text-txt-dark mb-0.5">{s.label}</div>
                  <div className="text-xs text-txt-light">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────────── */}
      <section className="bg-teal-dark bg-hero-pattern py-14">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <span className="section-label text-gold block mb-3">Mission</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-teal-pale text-base leading-relaxed italic">
            &ldquo;To be India&apos;s most trusted cotton yarn sourcing partner — connecting spinning mills with bulk buyers through relationships built on transparency, quality, and speed.&rdquo;
          </p>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">What We Stand For</span>
            <h2 className="section-heading">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <div className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-teal" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-txt-dark mb-2">{v.title}</h3>
                <p className="text-sm text-txt-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRENGTHS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label block mb-3">Why Work With Us</span>
              <h2 className="section-heading mb-6">Our Strengths &amp; Network</h2>
              <ul className="space-y-3">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-txt-mid">
                    <CheckCircle2 size={16} className="text-teal mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-8 bg-teal-dark text-white">
              <div className="font-playfair text-xl font-bold mb-4 text-gold">The Agent Advantage</div>
              <p className="text-sm text-teal-pale leading-relaxed mb-5">
                Unlike buying directly from large mills — where minimum orders are high, response times are slow, and sales teams are stretched — working with SRI SAI TEXCO gives you:
              </p>
              <ul className="space-y-3">
                {[
                  'Personal attention on every enquiry',
                  'Faster availability confirmation',
                  'Competitive pricing through volume relationships',
                  'Flexibility across multiple mills for the same count',
                  'Single point of contact for all your yarn sourcing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-teal-pale">
                    <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link href="/contact" className="btn-gold w-full justify-center">
                  Get In Touch <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
