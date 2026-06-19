import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Download, Filter } from 'lucide-react';
import { yarnCounts, companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Yarn Catalogue — Cotton Yarn Counts & Specifications',
  description:
    'Browse our full cotton yarn catalogue: 40s, 41s, 50s, 60s CWC/KWC, Slub and OE yarn. Bulk supply from 25+ certified mills including Trident, Vardhman, GHCL, Alok Industries.',
};

export default function YarnCataloguePage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="section-label text-gold block mb-3">Products</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl">
            Cotton Yarn Catalogue
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed">
            We supply a wide range of cotton yarn counts sourced directly from India's leading spinning mills. All counts available in bulk quantities only.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="/SriSaiTexco_Yarn_Catalogue.pdf"
              download
              className="btn-gold"
            >
              <Download size={15} /> Download Full Catalogue
            </a>
            <div className="flex items-center gap-2 text-teal-pale text-sm">
              <Filter size={14} />
              <span>{yarnCounts.length} yarn counts available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTICE BAR ─────────────────────────────────────────────────────── */}
      <div className="bg-gold-pale border-b border-gold/20 py-3">
        <div className="container-custom flex flex-wrap items-start gap-2 text-sm text-gold-dark">
          <span className="font-semibold">📌 Note:</span>
          <span>Prices are not displayed online as rates change daily with cotton markets. Contact us for today&apos;s rates.</span>
        </div>
      </div>

      {/* ── YARN GRID ──────────────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yarnCounts.map((yarn) => {
              const waMsg = `Hello SRI SAI TEXCO, I need a quote for ${yarn.count} ${yarn.type}. Quantity: __ kg/MT. Delivery state: __.`;
              const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(waMsg)}`;

              return (
                <div key={yarn.id} className="card p-7 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-playfair text-4xl font-black text-teal leading-none">{yarn.count}</div>
                      <div className="font-mono text-sm text-gold tracking-widest font-bold mt-1">{yarn.type}</div>
                      <div className="text-xs text-txt-light mt-0.5">{yarn.fullType}</div>
                    </div>
                    {yarn.badge && (
                      <span className="tag-gold">{yarn.badge}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-txt-light leading-relaxed mb-5 flex-1">{yarn.description}</p>

                  {/* Details */}
                  <div className="space-y-2.5 mb-5 text-sm border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-txt-light font-medium">Mills Available</span>
                      <span className="text-txt-dark font-semibold text-right">{yarn.mills.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-txt-light font-medium">Packing</span>
                      <span className="text-txt-dark font-semibold text-right">{yarn.packing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-txt-light font-medium">Min. Order</span>
                      <span className="text-teal font-bold">{yarn.moq}</span>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {yarn.applications.map((app) => (
                      <span key={app} className="tag-teal text-xs">{app}</span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#1ebe5a] transition-colors"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-2 btn-outline-teal py-2.5 text-sm"
                    >
                      Enquire <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More counts note */}
          <div className="mt-10 card p-6 border-dashed border-2 border-teal/20 text-center">
            <p className="text-txt-mid font-semibold mb-2">Need a count not listed here?</p>
            <p className="text-sm text-txt-light mb-4">
              We are continuously expanding our sourcing network. Contact us with your specific count requirement — we may be able to source it.
            </p>
            <Link href="/contact" className="btn-teal">
              Send Your Requirement <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
