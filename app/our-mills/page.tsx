import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Factory, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';
import { partnerMills, companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Mills — 27 Partner Mills incl. Trident, Vardhman, GHCL & More',
  description:
    'SRI SAI TEXCO sources cotton yarn from 27 verified partner mills including Trident, Vardhman, GHCL Textiles, Alok Industries, Ashirwad Spinfab, Shiva Texyarn and more. Trusted mill-direct sourcing.',
};

export default function OurMillsPage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I need yarn from a specific mill. Please help me source it.'
  )}`;

  const millsWithSite = partnerMills.filter(m => m.website);
  const millsWithoutSite = partnerMills.filter(m => !m.website);

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="section-label text-gold block mb-3">Mill Partners</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl">
            The Mills Behind Every Bale
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed">
            We partner exclusively with CITI-recognised, ISO-compliant spinning mills. Every bale of yarn is traceable to its source mill — no grey market, no secondary stock.
          </p>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-teal border-b border-teal-light/30 py-4">
        <div className="container-custom flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white font-medium">
          {['Mill-Direct Sourcing Only', 'Certified Primary-Grade Yarn', 'Test Reports Available', 'No Grey Market Stock'].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* ── MILLS WITH WEBSITES ────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom">
          <div className="mb-10">
            <span className="section-label block mb-2">Verified Online Presence</span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-txt-dark mb-2">
              Mills with Official Websites
            </h2>
            <p className="text-txt-light text-sm max-w-xl">
              These mills have active online presences. Click any card to visit their official website and learn more about their products and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {millsWithSite.map((mill) => (
              <a
                key={mill.name}
                href={mill.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                  <Factory size={18} className="text-teal group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-txt-dark text-sm leading-snug group-hover:text-teal transition-colors">
                    {mill.name}
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-teal font-medium">
                    <ExternalLink size={10} />
                    Visit Website
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs text-txt-light">
            {millsWithSite.length} mills with verified websites · Links open in a new tab
          </p>
        </div>
      </section>

      {/* ── OTHER PARTNER COMPANIES ────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-custom">
          <div className="mb-10">
            <span className="section-label block mb-2">Other Partners</span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-txt-dark mb-2">
              Other Partner Companies
            </h2>
            <p className="text-txt-light text-sm max-w-xl">
              These are our trusted partner mills that currently do not have a public website. Contact us directly to enquire about yarn from any of these mills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {millsWithoutSite.map((mill) => (
              <div
                key={mill.name}
                className="bg-cream border border-border rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-white border border-border rounded-lg flex items-center justify-center shrink-0">
                  <Factory size={15} className="text-txt-light" />
                </div>
                <div className="font-medium text-txt-mid text-sm leading-snug">
                  {mill.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 bg-gold-pale border border-gold/20 rounded-xl p-4 text-sm text-gold-dark max-w-2xl">
            <span className="text-base shrink-0">📌</span>
            <span>
              No website doesn&apos;t mean less reliable — many of these are long-established regional mills we have worked with for years. Contact us to enquire about availability.
            </span>
          </div>
        </div>
      </section>

      {/* ── NEED A SPECIFIC MILL CTA ──────────────────────────────────────── */}
      <section className="bg-cream py-10">
        <div className="container-custom">
          <div className="card border-dashed border-2 border-teal/20 p-8 text-center max-w-3xl mx-auto">
            <Factory size={36} className="text-teal mx-auto mb-4 opacity-60" />
            <h3 className="font-playfair text-xl font-bold text-txt-dark mb-2">Need a Specific Mill?</h3>
            <p className="text-sm text-txt-light max-w-md mx-auto mb-5">
              We are actively expanding our mill partnerships. Need yarn from a specific mill we haven&apos;t listed? Contact us — we may already have that relationship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/yarn-catalogue" className="btn-outline-teal w-full sm:w-auto justify-center">
                View Yarn Catalogue <ArrowRight size={15} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-teal w-full sm:w-auto justify-center">
                <MessageCircle size={15} /> Ask About a Specific Mill
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
