import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/yarn-rates', label: "Today's Yarn Rates 📈" },
  { href: '/yarn-catalogue', label: 'Yarn Catalogue' },
  { href: '/our-mills', label: 'Our Mills' },
  { href: '/regions-served', label: 'Regions Served' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact & Enquiry' },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('Hello SRI SAI TEXCO, I am interested in bulk yarn supply.')}`;

  return (
    <footer className="bg-teal-dark text-white">
      {/* Enquiry Banner */}
      <div className="bg-teal border-b border-teal-light/30">
        <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-xl font-bold text-white">Need a specific count? We'll source it.</p>
            <p className="text-teal-pale text-sm mt-1">Bulk enquiries welcome — minimum 500 kg per count.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold text-teal-dark font-bold px-6 py-3 rounded-lg hover:bg-gold-light transition-all shrink-0 shadow-gold"
          >
            <MessageCircle size={18} />
            WhatsApp for Enquiry
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="SRI SAI TEXCO Logo" width={40} height={40} />
              <div>
                <div className="font-playfair font-bold text-white text-base tracking-wide">SRI SAI TEXCO</div>
                <div className="font-mono text-[9px] text-teal-pale tracking-[0.12em] uppercase mt-0.5">Cotton Yarn Agent</div>
              </div>
            </Link>
            <p className="text-sm text-teal-pale leading-relaxed mb-4">
              A trusted cotton yarn agency based in Coimbatore, sourcing from India's leading spinning mills and supplying bulk across Tamil Nadu, Gujarat, and Maharashtra.
            </p>
            <p className="text-xs text-teal-muted mb-3">GST Registered · Pan-India Supply</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider bg-teal/20 text-teal-pale border border-teal/30 px-2.5 py-1.5 rounded-full">
                <ShieldCheck size={11} /> USCTP Certified
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider bg-gold/15 text-gold border border-gold/30 px-2.5 py-1.5 rounded-full">
                <ShieldCheck size={11} /> BCI Certified
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-mono">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-pale hover:text-gold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Yarn Counts */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-mono">Yarn Counts</h4>
            <ul className="space-y-2">
              {[
                { label: '30s – 40s CWC / KWC', href: '/yarn-catalogue/40s-cwc' },
                { label: '41s CWC / Slub', href: '/yarn-catalogue/41s-cwc' },
                { label: '50s – 51s CWC / CF', href: '/yarn-catalogue/50s-cwc' },
                { label: '60s – 61s CWC / CF', href: '/yarn-catalogue/60s-cwc' },
                { label: '61s CWC BCI Certified', href: '/yarn-catalogue/61s-cwc-bci' },
                { label: '80s – 105s CWC Fine', href: '/yarn-catalogue/80s-cwc' },
                { label: '2-Ply GAS MER / ELI', href: '/yarn-catalogue/2-70s-gas-mer' },
                { label: 'OE Yarn (7s – 31s)', href: '/yarn-catalogue/16s-oe' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-teal-pale hover:text-gold transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-white/10">
                <Link href="/yarn-catalogue" className="text-sm text-gold hover:text-gold-light font-semibold transition-colors">
                  View Full Catalogue →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-mono">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm text-teal-pale hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="text-gold mt-0.5 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-pale hover:text-white transition-colors">
                  WhatsApp Enquiry
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-teal-pale hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-teal-pale">{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-teal-pale">{companyInfo.businessHours}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-teal-light/20">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-teal-muted">
            © {new Date().getFullYear()} SRI SAI TEXCO. All rights reserved.
          </p>
          <p className="text-xs text-teal-muted">
            Cotton Yarn Agent &amp; Supplier · Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
