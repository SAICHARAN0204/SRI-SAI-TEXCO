'use client';

import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function WhatsAppFloat() {
  const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I am interested in bulk yarn supply.'
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
    >
      <MessageCircle size={26} fill="white" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-teal-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        WhatsApp Enquiry
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-teal-dark" />
      </span>
    </a>
  );
}
