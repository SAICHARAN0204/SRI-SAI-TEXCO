'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { faqs, companyInfo } from '@/lib/data';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I have a question about bulk yarn supply.'
  )}`;

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/faq_banner_1781880105035.png"
            alt="FAQ SRI SAI TEXCO"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>

        <div className="container-custom relative z-10">
          <span className="section-label text-gold block mb-3">FAQ</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl drop-shadow-sm">
            Frequently Asked Questions
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed drop-shadow-sm">
            Common questions from bulk buyers about our yarn supply, ordering process, mills, and logistics.
          </p>
        </div>
      </section>

      {/* ── ACCORDION ─────────────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`card overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-teal/40 shadow-card' : ''
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-teal' : 'text-txt-dark'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-teal shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-border mb-4" />
                      <p className="text-sm text-txt-light leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-12 card p-8 text-center bg-teal-dark text-white">
            <h3 className="font-playfair text-xl font-bold mb-3">Still Have Questions?</h3>
            <p className="text-teal-pale text-sm mb-6 max-w-md mx-auto">
              Our team responds within a few hours. Reach us directly via WhatsApp for the fastest answers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <Link href="/contact" className="btn-outline-white">
                Send Enquiry <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
