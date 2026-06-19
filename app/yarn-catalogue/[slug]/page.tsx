import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, MessageCircle, ArrowRight, CheckCircle2,
  Package, Factory, Layers, Scale, Download
} from 'lucide-react';
import { yarnCounts, companyInfo } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return yarnCounts.map((y) => ({ slug: y.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const yarn = yarnCounts.find((y) => y.id === params.slug);
  if (!yarn) return { title: 'Not Found' };
  return {
    title: `${yarn.count} ${yarn.type} Cotton Yarn — SRI SAI TEXCO`,
    description: `Buy ${yarn.count} ${yarn.type} cotton yarn in bulk from SRI SAI TEXCO. Sourced from ${yarn.mills.join(', ')}. MOQ: ${yarn.moq}. ${yarn.description.slice(0, 100)}`,
  };
}

export default function YarnProductPage({ params }: Props) {
  const yarn = yarnCounts.find((y) => y.id === params.slug);
  if (!yarn) notFound();

  const waMsg = `Hello SRI SAI TEXCO, I need a quote for ${yarn.count} ${yarn.type}.\nQuantity: __ kg/MT\nDelivery state: __\nAdditional info: __`;
  const waUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(waMsg)}`;

  // Related counts (exclude current)
  const related = yarnCounts.filter((y) => y.id !== yarn.id).slice(0, 3);

  return (
    <>
      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-border">
        <div className="container-custom py-3 flex items-center gap-2 text-xs text-txt-light">
          <Link href="/" className="hover:text-teal transition-colors">Home</Link>
          <span>/</span>
          <Link href="/yarn-catalogue" className="hover:text-teal transition-colors">Yarn Catalogue</Link>
          <span>/</span>
          <span className="text-txt-dark font-semibold">{yarn.count} {yarn.type}</span>
        </div>
      </div>

      {/* ── PRODUCT HERO ────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-custom">
          <Link
            href="/yarn-catalogue"
            className="inline-flex items-center gap-2 text-teal-pale hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Catalogue
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-playfair text-6xl font-black text-white leading-none">{yarn.count}</span>
                <div>
                  <div className="font-mono text-xl font-bold text-gold tracking-widest">{yarn.type}</div>
                  <div className="text-teal-pale text-sm">{yarn.fullType}</div>
                </div>
              </div>
              {yarn.badge && (
                <span className="tag-gold">{yarn.badge}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#1ebe5a] transition-colors text-sm">
                <MessageCircle size={16} /> WhatsApp Enquiry
              </a>
              <Link href="/contact" className="btn-gold text-sm py-2.5 px-5">
                Send RFQ <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT DETAIL ──────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">

              {/* Description */}
              <div className="card p-7">
                <h2 className="font-playfair text-xl font-bold text-txt-dark mb-4">About This Yarn</h2>
                <p className="text-sm text-txt-light leading-relaxed">{yarn.description}</p>
              </div>

              {/* Specs grid */}
              <div className="card p-7">
                <h2 className="font-playfair text-xl font-bold text-txt-dark mb-5">Specifications</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0">
                      <Layers size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Count & Type</div>
                      <div className="text-sm font-semibold text-txt-dark">{yarn.count} {yarn.fullType}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0">
                      <Factory size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Available Mills</div>
                      <div className="text-sm font-semibold text-txt-dark">{yarn.mills.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-teal-pale rounded-lg flex items-center justify-center shrink-0">
                      <Package size={16} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Packing Details</div>
                      <div className="text-sm font-semibold text-txt-dark">{yarn.packing}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold-pale rounded-lg flex items-center justify-center shrink-0">
                      <Scale size={16} className="text-gold-dark" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-txt-light uppercase tracking-wider mb-0.5">Min. Order Qty</div>
                      <div className="text-sm font-bold text-teal">{yarn.moq}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="card p-7">
                <h2 className="font-playfair text-xl font-bold text-txt-dark mb-4">Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {yarn.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 bg-teal-pale border border-teal/20 rounded-lg px-4 py-2.5">
                      <CheckCircle2 size={14} className="text-teal" />
                      <span className="text-sm font-semibold text-teal">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Pricing note */}
              <div className="card p-6 border-gold/30 bg-gold-pale">
                <div className="font-mono text-xs text-gold-dark tracking-widest uppercase font-semibold mb-3">Pricing</div>
                <p className="text-sm text-txt-mid leading-relaxed mb-4">
                  Yarn prices change daily with cotton market rates. Contact us for today&apos;s best price on {yarn.count} {yarn.type}.
                </p>
                <Link href="/contact" className="btn-teal w-full justify-center text-sm py-2.5">
                  Get Price Quote <ArrowRight size={13} />
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="card p-6 bg-teal-dark text-white">
                <MessageCircle size={22} className="text-gold mb-3" />
                <h3 className="font-semibold mb-2">Quick WhatsApp Enquiry</h3>
                <p className="text-xs text-teal-pale mb-4 leading-relaxed">
                  Tap below to open WhatsApp with a pre-filled message for {yarn.count} {yarn.type}.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center text-sm py-2.5"
                >
                  <MessageCircle size={14} /> Open WhatsApp
                </a>
              </div>

              {/* Download catalogue */}
              <div className="card p-6">
                <Download size={20} className="text-teal mb-3" />
                <h3 className="font-semibold text-txt-dark mb-2 text-sm">Download Full Catalogue</h3>
                <p className="text-xs text-txt-light mb-4">All yarn counts, specs and packing details in one PDF.</p>
                <a
                  href="/SriSaiTexco_Yarn_Catalogue.pdf"
                  download
                  className="btn-outline-teal w-full justify-center text-sm py-2.5"
                >
                  <Download size={13} /> Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Related Counts */}
          <div className="mt-12">
            <h2 className="font-playfair text-2xl font-bold text-txt-dark mb-6">You May Also Need</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.id} href={`/yarn-catalogue/${r.id}`} className="card p-6 group hover:border-teal/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-playfair text-3xl font-black text-teal group-hover:text-teal-light transition-colors">{r.count}</div>
                      <div className="font-mono text-xs text-gold font-bold tracking-wider mt-0.5">{r.type}</div>
                    </div>
                    {r.badge && <span className="tag-gold text-[11px]">{r.badge}</span>}
                  </div>
                  <p className="text-xs text-txt-light leading-relaxed line-clamp-2 mb-3">{r.description}</p>
                  <span className="text-xs text-teal font-semibold flex items-center gap-1">
                    View Details <ArrowRight size={11} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
