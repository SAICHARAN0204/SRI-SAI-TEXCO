import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Phone, MessageCircle, CheckCircle2, Factory,
  Truck, ShieldCheck, MapPin, Download, Star, ExternalLink
} from 'lucide-react';
import { companyInfo, partnerMills, regions } from '@/lib/data';
import StatsBar from '@/components/ui/StatsBar';

export const metadata: Metadata = {
  title: 'SRI SAI TEXCO — Cotton Yarn Agent & Supplier India',
  description:
    'Bulk cotton yarn supply across India. We source 30s to 105s CWC, OE, Compact, Slub and 2-ply counts from 27+ leading partner mills including Trident, Vardhman, GHCL and more.',
};

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '10,000+', label: 'MT Yarn Supplied' },
  { value: '27+', label: 'Partner Mills' },
  { value: '3', label: 'Major States Served' },
];

const features = [
  {
    icon: Factory,
    title: 'Mill-Direct Sourcing',
    desc: 'We source directly from certified spinning mills — no middle layers, no compromises on quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'All yarn comes with mill test reports. We deal only in certified, primary-grade yarn.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    desc: 'Reliable logistics to Tamil Nadu, Gujarat, Maharashtra, and other states for large orders.',
  },
  {
    icon: CheckCircle2,
    title: 'Bulk Expertise',
    desc: 'Exclusively B2B. We understand large-order requirements, count-specific sourcing, and tight timelines.',
  },
  {
    icon: Phone,
    title: 'Fast Response',
    desc: 'Enquiries answered within hours. Price quotes and availability confirmed same day.',
  },
  {
    icon: Star,
    title: 'Trusted Network',
    desc: 'Built on years of relationships with mills and buyers. Your sourcing partner, not just a vendor.',
  },
];

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I am interested in bulk yarn supply.'
  )}`;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-teal-dark overflow-hidden min-h-[480px] flex items-center">

        {/* Soft radial glow behind illustration */}
        <div className="absolute right-0 top-0 w-full h-full pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(251,182,22,0.07) 0%, transparent 70%)' }} />

        {/* ── Cotton Plant SVG Illustration ── */}
        <div className="absolute inset-y-0 right-0 w-[54%] hidden md:block pointer-events-none overflow-hidden">
          <svg viewBox="0 0 480 480" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ════════════════════════════════════════
                PLANT 2 — Tall background (right edge)
                Rendered first so it sits "behind"
            ════════════════════════════════════════ */}
            <path d="M428 500 C426 420 424 340 425 265 C426 200 430 140 432 80"
                  stroke="#fbb616" strokeWidth="2" strokeOpacity="0.25" strokeLinecap="round"/>
            {/* Branch left → Boll P2-A */}
            <path d="M428 210 C414 198 404 190 390 182"
                  stroke="#fbb616" strokeWidth="1.5" strokeOpacity="0.22" strokeLinecap="round"/>
            {/* Leaf */}
            <path d="M427 300 Q445 286 446 270 Q432 280 427 300Z" fill="#fbb616" fillOpacity="0.12"/>
            {/* Boll P2-A — medium-small at (388, 178) */}
            <g transform="translate(388, 178)">
              <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#fbb616" fillOpacity="0.22"/>
              <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#fbb616" fillOpacity="0.22" transform="rotate(72)"/>
              <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#fbb616" fillOpacity="0.22" transform="rotate(144)"/>
              <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#fbb616" fillOpacity="0.22" transform="rotate(216)"/>
              <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#fbb616" fillOpacity="0.22" transform="rotate(288)"/>
              <circle cx="0"    cy="-3"  r="10"  fill="#fbb616" fillOpacity="0.32"/>
              <circle cx="0"    cy="-11" r="7"   fill="#fbb616" fillOpacity="0.26"/>
              <circle cx="8.7"  cy="-7"  r="6.5" fill="#fbb616" fillOpacity="0.24"/>
              <circle cx="8.7"  cy="1.5" r="6"   fill="#fbb616" fillOpacity="0.22"/>
              <circle cx="-8.7" cy="1.5" r="6"   fill="#fbb616" fillOpacity="0.22"/>
              <circle cx="-8.7" cy="-7"  r="6.5" fill="#fbb616" fillOpacity="0.24"/>
            </g>
            {/* Boll P2-B — tiny top at (433, 78) */}
            <g transform="translate(433, 78)">
              <ellipse cx="0" cy="8" rx="3" ry="8" fill="#fbb616" fillOpacity="0.20"/>
              <ellipse cx="0" cy="8" rx="3" ry="8" fill="#fbb616" fillOpacity="0.20" transform="rotate(72)"/>
              <ellipse cx="0" cy="8" rx="3" ry="8" fill="#fbb616" fillOpacity="0.20" transform="rotate(144)"/>
              <ellipse cx="0" cy="8" rx="3" ry="8" fill="#fbb616" fillOpacity="0.20" transform="rotate(216)"/>
              <ellipse cx="0" cy="8" rx="3" ry="8" fill="#fbb616" fillOpacity="0.20" transform="rotate(288)"/>
              <circle cx="0"    cy="-2"  r="7.5" fill="#fbb616" fillOpacity="0.30"/>
              <circle cx="0"    cy="-8"  r="5.2" fill="#fbb616" fillOpacity="0.24"/>
              <circle cx="6.5"  cy="-5"  r="4.8" fill="#fbb616" fillOpacity="0.22"/>
              <circle cx="6.5"  cy="1"   r="4.5" fill="#fbb616" fillOpacity="0.20"/>
              <circle cx="-6.5" cy="1"   r="4.5" fill="#fbb616" fillOpacity="0.20"/>
              <circle cx="-6.5" cy="-5"  r="4.8" fill="#fbb616" fillOpacity="0.22"/>
            </g>

            {/* ════════════════════════════════════════
                PLANT 3 — Short (center-right foreground)
            ════════════════════════════════════════ */}
            <path d="M185 500 C184 460 182 420 180 382 C178 352 172 325 168 300"
                  stroke="#fbb616" strokeWidth="1.8" strokeOpacity="0.22" strokeLinecap="round"/>
            {/* Branch right → Boll P3-A */}
            <path d="M175 338 C190 325 200 318 215 310"
                  stroke="#fbb616" strokeWidth="1.4" strokeOpacity="0.20" strokeLinecap="round"/>
            {/* Branch left → Boll P3-B */}
            <path d="M173 368 C158 356 148 348 136 342"
                  stroke="#fbb616" strokeWidth="1.2" strokeOpacity="0.18" strokeLinecap="round"/>
            {/* Leaf */}
            <path d="M179 410 Q196 398 198 382 Q184 392 179 410Z" fill="#fbb616" fillOpacity="0.11"/>
            {/* Boll P3-A — small at (217, 307) */}
            <g transform="translate(217, 307)">
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.20"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.20" transform="rotate(72)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.20" transform="rotate(144)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.20" transform="rotate(216)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.20" transform="rotate(288)"/>
              <circle cx="0"    cy="-2"  r="8"   fill="#fbb616" fillOpacity="0.30"/>
              <circle cx="0"    cy="-9"  r="5.5" fill="#fbb616" fillOpacity="0.24"/>
              <circle cx="6.9"  cy="-5"  r="5.2" fill="#fbb616" fillOpacity="0.22"/>
              <circle cx="6.9"  cy="1.5" r="4.8" fill="#fbb616" fillOpacity="0.20"/>
              <circle cx="-6.9" cy="1.5" r="4.8" fill="#fbb616" fillOpacity="0.20"/>
              <circle cx="-6.9" cy="-5"  r="5.2" fill="#fbb616" fillOpacity="0.22"/>
            </g>
            {/* Boll P3-B — tiny at (133, 338) */}
            <g transform="translate(133, 338)">
              <ellipse cx="0" cy="7" rx="2.8" ry="7" fill="#fbb616" fillOpacity="0.18"/>
              <ellipse cx="0" cy="7" rx="2.8" ry="7" fill="#fbb616" fillOpacity="0.18" transform="rotate(72)"/>
              <ellipse cx="0" cy="7" rx="2.8" ry="7" fill="#fbb616" fillOpacity="0.18" transform="rotate(144)"/>
              <ellipse cx="0" cy="7" rx="2.8" ry="7" fill="#fbb616" fillOpacity="0.18" transform="rotate(216)"/>
              <ellipse cx="0" cy="7" rx="2.8" ry="7" fill="#fbb616" fillOpacity="0.18" transform="rotate(288)"/>
              <circle cx="0"    cy="-2" r="6.5" fill="#fbb616" fillOpacity="0.26"/>
              <circle cx="0"    cy="-8" r="4.5" fill="#fbb616" fillOpacity="0.20"/>
              <circle cx="5.6"  cy="-5" r="4.2" fill="#fbb616" fillOpacity="0.18"/>
              <circle cx="-5.6" cy="-5" r="4.2" fill="#fbb616" fillOpacity="0.18"/>
            </g>

            {/* ════════════════════════════════════════
                MAIN PLANT (original) — rendered on top
            ════════════════════════════════════════ */}
            <path d="M240 500 C237 415 226 355 230 294 C233 240 252 196 268 158"
                  stroke="#fbb616" strokeWidth="3" strokeOpacity="0.42" strokeLinecap="round"/>
            <path d="M257 216 C298 200 330 188 368 166"
                  stroke="#fbb616" strokeWidth="2.5" strokeOpacity="0.38" strokeLinecap="round"/>
            <path d="M243 314 C206 300 178 286 148 268"
                  stroke="#fbb616" strokeWidth="2" strokeOpacity="0.33" strokeLinecap="round"/>
            <path d="M237 388 C272 373 300 360 330 343"
                  stroke="#fbb616" strokeWidth="1.8" strokeOpacity="0.30" strokeLinecap="round"/>
            <path d="M264 162 C284 148 296 140 312 128"
                  stroke="#fbb616" strokeWidth="1.5" strokeOpacity="0.30" strokeLinecap="round"/>
            <path d="M250 265 Q218 247 216 222 Q238 235 250 265Z" fill="#fbb616" fillOpacity="0.17"/>
            <path d="M244 352 Q274 334 278 310 Q260 329 244 352Z" fill="#fbb616" fillOpacity="0.15"/>
            <path d="M260 196 Q283 177 280 160 Q268 172 260 196Z" fill="#fbb616" fillOpacity="0.15"/>

            {/* BOLL A — Large */}
            <g transform="translate(368, 156)">
              <ellipse cx="0" cy="20" rx="7" ry="20" fill="#fbb616" fillOpacity="0.35"/>
              <ellipse cx="0" cy="20" rx="7" ry="20" fill="#fbb616" fillOpacity="0.35" transform="rotate(72)"/>
              <ellipse cx="0" cy="20" rx="7" ry="20" fill="#fbb616" fillOpacity="0.35" transform="rotate(144)"/>
              <ellipse cx="0" cy="20" rx="7" ry="20" fill="#fbb616" fillOpacity="0.35" transform="rotate(216)"/>
              <ellipse cx="0" cy="20" rx="7" ry="20" fill="#fbb616" fillOpacity="0.35" transform="rotate(288)"/>
              <circle cx="0"     cy="-4"  r="17"   fill="#fbb616" fillOpacity="0.58"/>
              <circle cx="0"     cy="-20" r="12"   fill="#fbb616" fillOpacity="0.50"/>
              <circle cx="14.7"  cy="-12" r="11.5" fill="#fbb616" fillOpacity="0.47"/>
              <circle cx="14.7"  cy="4"   r="11"   fill="#fbb616" fillOpacity="0.44"/>
              <circle cx="-14.7" cy="4"   r="11"   fill="#fbb616" fillOpacity="0.44"/>
              <circle cx="-14.7" cy="-12" r="11.5" fill="#fbb616" fillOpacity="0.47"/>
            </g>
            {/* BOLL B — Medium */}
            <g transform="translate(148, 262)">
              <ellipse cx="0" cy="15" rx="5.5" ry="15" fill="#fbb616" fillOpacity="0.30"/>
              <ellipse cx="0" cy="15" rx="5.5" ry="15" fill="#fbb616" fillOpacity="0.30" transform="rotate(72)"/>
              <ellipse cx="0" cy="15" rx="5.5" ry="15" fill="#fbb616" fillOpacity="0.30" transform="rotate(144)"/>
              <ellipse cx="0" cy="15" rx="5.5" ry="15" fill="#fbb616" fillOpacity="0.30" transform="rotate(216)"/>
              <ellipse cx="0" cy="15" rx="5.5" ry="15" fill="#fbb616" fillOpacity="0.30" transform="rotate(288)"/>
              <circle cx="0"     cy="-3"  r="13"  fill="#fbb616" fillOpacity="0.52"/>
              <circle cx="0"     cy="-14" r="9"   fill="#fbb616" fillOpacity="0.44"/>
              <circle cx="11.3"  cy="-9"  r="8.5" fill="#fbb616" fillOpacity="0.42"/>
              <circle cx="11.3"  cy="2"   r="8"   fill="#fbb616" fillOpacity="0.39"/>
              <circle cx="-11.3" cy="2"   r="8"   fill="#fbb616" fillOpacity="0.39"/>
              <circle cx="-11.3" cy="-9"  r="8.5" fill="#fbb616" fillOpacity="0.42"/>
            </g>
            {/* BOLL C — Small */}
            <g transform="translate(330, 337)">
              <ellipse cx="0" cy="11" rx="4" ry="11" fill="#fbb616" fillOpacity="0.26"/>
              <ellipse cx="0" cy="11" rx="4" ry="11" fill="#fbb616" fillOpacity="0.26" transform="rotate(72)"/>
              <ellipse cx="0" cy="11" rx="4" ry="11" fill="#fbb616" fillOpacity="0.26" transform="rotate(144)"/>
              <ellipse cx="0" cy="11" rx="4" ry="11" fill="#fbb616" fillOpacity="0.26" transform="rotate(216)"/>
              <ellipse cx="0" cy="11" rx="4" ry="11" fill="#fbb616" fillOpacity="0.26" transform="rotate(288)"/>
              <circle cx="0"    cy="-2"  r="9.5" fill="#fbb616" fillOpacity="0.48"/>
              <circle cx="0"    cy="-10" r="6.5" fill="#fbb616" fillOpacity="0.40"/>
              <circle cx="8.2"  cy="-6"  r="6.2" fill="#fbb616" fillOpacity="0.37"/>
              <circle cx="8.2"  cy="2"   r="5.8" fill="#fbb616" fillOpacity="0.34"/>
              <circle cx="-8.2" cy="2"   r="5.8" fill="#fbb616" fillOpacity="0.34"/>
              <circle cx="-8.2" cy="-6"  r="6.2" fill="#fbb616" fillOpacity="0.37"/>
            </g>
            {/* BOLL D — Tiny top */}
            <g transform="translate(312, 126)">
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.27"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.27" transform="rotate(72)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.27" transform="rotate(144)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.27" transform="rotate(216)"/>
              <ellipse cx="0" cy="9" rx="3.5" ry="9" fill="#fbb616" fillOpacity="0.27" transform="rotate(288)"/>
              <circle cx="0"    cy="-2"  r="8.5" fill="#fbb616" fillOpacity="0.46"/>
              <circle cx="0"    cy="-10" r="6"   fill="#fbb616" fillOpacity="0.38"/>
              <circle cx="7.4"  cy="-6"  r="5.5" fill="#fbb616" fillOpacity="0.35"/>
              <circle cx="7.4"  cy="1.5" r="5.2" fill="#fbb616" fillOpacity="0.32"/>
              <circle cx="-7.4" cy="1.5" r="5.2" fill="#fbb616" fillOpacity="0.32"/>
              <circle cx="-7.4" cy="-6"  r="5.5" fill="#fbb616" fillOpacity="0.35"/>
            </g>


            {/* ── Floating accent dots ── */}



            <circle cx="432" cy="68"  r="4.5" fill="#fbb616" fillOpacity="0.20"/>
            <circle cx="408" cy="94"  r="2.5" fill="#fbb616" fillOpacity="0.16"/>
            <circle cx="94"  cy="180" r="3"   fill="#fbb616" fillOpacity="0.16"/>
            <circle cx="60"  cy="350" r="2.5" fill="#fbb616" fillOpacity="0.13"/>
            <circle cx="470" cy="200" r="3"   fill="#fbb616" fillOpacity="0.14"/>
          </svg>
        </div>

        {/* ── Yarn Cone Image ── */}
        {/* Main cone — center */}
        <div className="absolute bottom-4 right-[48%] hidden xl:block pointer-events-none" style={{transform: 'translateX(50%)', zIndex: 10}}>
          <img
            src="/yarn-cone-transparent.png"
            alt="Yarn Cone"
            width={110}
            height={130}
            style={{ opacity: 0.85 }}
            className="drop-shadow-sm"
          />
        </div>
        {/* Second cone — right, smaller, slightly offset */}
        <div className="absolute bottom-8 right-[28%] hidden lg:block pointer-events-none" style={{zIndex: 5}}>
          <img
            src="/yarn-cone-transparent.png"
            alt="Yarn Cone"
            width={72}
            height={86}
            style={{ opacity: 0.65, transform: 'rotate(-12deg)' }}
          />
        </div>
        {/* Third cone — left of main, leaning */}
        <div className="absolute bottom-6 right-[38%] hidden lg:block pointer-events-none" style={{zIndex: 5}}>
          <img
            src="/yarn-cone-transparent.png"
            alt="Yarn Cone"
            width={80}
            height={95}
            style={{ opacity: 0.70, transform: 'rotate(15deg)' }}
          />
        </div>

        {/* ── Text Content ── */}
        <div className="relative container-custom py-10 md:py-14 lg:py-16 w-full">
          <div className="max-w-xl">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
              <ShieldCheck size={13} className="text-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase">
                Cotton Yarn Agent · Since 2009
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Your Trusted <span className="text-gold">Cotton Yarn</span>{' '}
              Partner Across India
            </h1>
            <p className="text-lg text-teal-pale max-w-xl mb-10 leading-relaxed font-light">
              Sourcing quality cotton yarn from 25+ leading mills — including Trident, Vardhman, GHCL, Alok Industries — and supplying bulk to textile mills, fabric manufacturers, and traders across Tamil Nadu, Gujarat &amp; Maharashtra.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link href="/yarn-catalogue" className="btn-gold justify-center sm:justify-start">
                View Yarn Catalogue <ArrowRight size={16} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-white justify-center sm:justify-start">
                <MessageCircle size={16} /> WhatsApp Enquiry
              </a>
            </div>
          </div>

        </div>



      </section>

      <StatsBar stats={stats} />



      {/* ── WHAT WE DO ───────────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">How We Work</span>
            <h2 className="section-heading mb-4">A Sourcing Partner, Not Just a Supplier</h2>
            <p className="text-txt-light max-w-xl mx-auto text-sm leading-relaxed">
              We act as the bridge between India's best spinning mills and bulk buyers who need reliable, consistent cotton yarn supply.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'We Source',
                desc: 'We maintain active relationships with 25+ certified mills — giving us real-time visibility into availability and rates across all major counts.',
                icon: Factory,
              },
              {
                step: '02',
                title: 'We Verify',
                desc: 'Every order is checked for count, TPI, evenness and packing quality. We only deal in certified, primary-grade yarn — never grey market.',
                icon: ShieldCheck,
              },
              {
                step: '03',
                title: 'We Deliver',
                desc: 'We coordinate dispatch directly from the mill or our sourcing network to your location — with full logistics support across India.',
                icon: Truck,
              },
            ].map((item) => (
              <div key={item.step} className="card p-8 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-gold bg-gold-pale border border-gold/20 px-2.5 py-1 rounded-full font-semibold tracking-wider">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 bg-teal-pale rounded-lg flex items-center justify-center">
                    <item.icon size={17} className="text-teal" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-txt-dark mb-3">{item.title}</h3>
                <p className="text-sm text-txt-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YARN CATALOGUE OVERVIEW ──────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="section-label block mb-3">Products</span>
              <h2 className="section-heading">Cotton Yarn Counts We Supply</h2>
            </div>
            <Link href="/yarn-catalogue" className="btn-outline-teal shrink-0">
              Full Catalogue <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                id: '40s-cwc',
                count: '40s CWC',
                type: 'Combed Warp Count',
                badge: 'Best Seller',
                desc: 'Most widely traded count in India. Smooth texture, excellent dye uptake. Suitable for knitting, weaving, and hosiery.',
                tags: ['Knitting', 'Weaving', 'Hosiery'],
                moq: '500 kg',
              },
              {
                id: '41s-cwc',
                count: '41s CWC / Slub',
                type: 'Combed Warp Count',
                badge: 'Trending',
                desc: 'Bridges 40s and 50s. Available in standard CWC and slub variants for textured fashion fabric.',
                tags: ['Weaving', 'Fine Fabric', 'Fashion'],
                moq: '500 kg',
              },
              {
                id: '60s-cwc',
                count: '60s – 61s CWC',
                type: 'Combed Warp Count',
                badge: 'High Demand',
                desc: 'Premium fine counts for shirting, lawn fabric and export-grade products. Also available as BCI Certified.',
                tags: ['Shirting', 'Lawn Fabric', 'Export'],
                moq: '500 kg',
              },
              {
                id: '61s-cwc-bci',
                count: '61s CWC BCI',
                type: 'BCI Certified',
                badge: 'BCI Certified',
                desc: 'Sustainably sourced 61s count with BCI (Better Cotton Initiative) certification for export buyers.',
                tags: ['Sustainable', 'Export', 'Fine Weaving'],
                moq: '1 MT',
              },
              {
                id: '80s-cwc',
                count: '80s – 105s CWC',
                type: 'Super Fine',
                badge: 'Super Fine',
                desc: 'Ultra-fine combed counts for luxury shirting and high-end export fabric. Low imperfection, superior evenness.',
                tags: ['Premium Shirting', 'Luxury Fabric', 'Export'],
                moq: '1 MT',
              },
              {
                id: '16s-oe',
                count: 'OE Yarn',
                type: 'Open End – 7s to 31s',
                badge: null,
                desc: 'Open-end rotor-spun counts from 7s to 31s. High strength, competitive cost. Ideal for towels, denim, and industrial fabric.',
                tags: ['Terry Towels', 'Denim', 'Industrial Fabric'],
                moq: '1 MT',
              },
            ].map((yarn) => (
              <Link
                key={yarn.id}
                href={`/yarn-catalogue/${yarn.id}`}
                className="card p-6 group hover:border-teal/30 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-playfair text-3xl font-black text-teal group-hover:text-teal-light transition-colors">
                      {yarn.count}
                    </div>
                    <div className="font-mono text-xs text-gold tracking-wider font-semibold mt-0.5">
                      {yarn.type}
                    </div>
                  </div>
                  {yarn.badge && (
                    <span className="tag-gold text-[11px]">{yarn.badge}</span>
                  )}
                </div>
                <p className="text-xs text-txt-light leading-relaxed mb-4 flex-1">
                  {yarn.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {yarn.tags.map((tag) => (
                    <span key={tag} className="tag-teal text-[11px]">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-txt-light border-t border-border pt-3">
                  <span>MOQ: <strong className="text-txt-dark">{yarn.moq}</strong></span>
                  <span className="text-teal font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Enquire <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* View all CTA */}
          <div className="mt-8 text-center">
            <Link href="/yarn-catalogue" className="btn-teal">
              View All 36 Yarn Counts <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>


      {/* ── MILL PARTNERS ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Our Partners</span>
            <h2 className="section-heading mb-4">Mills We Work With</h2>
            <p className="text-txt-light max-w-lg mx-auto text-sm">
              We partner exclusively with certified, reputed spinning mills — giving you access to quality yarn with trusted provenance.
            </p>
          </div>

          {/* Mills with websites — clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {partnerMills
              .filter(m => m.website)
              .map((mill) => (
                <a
                  key={mill.name}
                  href={mill.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-border rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-sm hover:border-teal/40 hover:shadow-md transition-all group"
                >
                  <span className="font-semibold text-txt-dark text-xs group-hover:text-teal transition-colors leading-snug">{mill.name}</span>
                  <span className="flex items-center gap-0.5 text-[10px] text-teal mt-1 font-medium">
                    <ExternalLink size={9} /> Website
                  </span>
                </a>
              ))}
          </div>

          {/* Mills without websites — compact non-clickable row */}
          <div className="border-t border-border pt-5 mb-8">
            <p className="text-xs text-txt-light font-mono uppercase tracking-wider mb-3">Other Partner Companies</p>
            <div className="flex flex-wrap gap-2">
              {partnerMills
                .filter(m => !m.website)
                .map((mill) => (
                  <span
                    key={mill.name}
                    className="bg-white border border-border text-txt-mid text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {mill.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/our-mills" className="btn-outline-teal">
              View All 27 Mill Partners <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REGIONS SERVED ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Coverage</span>
            <h2 className="section-heading mb-4">Regions We Serve</h2>
            <p className="text-txt-light max-w-lg mx-auto text-sm">
              We supply bulk cotton yarn across India's key textile manufacturing states with reliable logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Link key={region.id} href="/regions-served" className="card p-7 group hover:border-teal/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-txt-dark">{region.state}</h3>
                    <p className="text-xs text-teal font-mono">Delivery: {region.deliveryTime}</p>
                  </div>
                </div>
                <p className="text-xs text-txt-light mb-3 leading-relaxed line-clamp-2">{region.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {region.cities.slice(0, 4).map((city) => (
                    <span key={city} className="tag-gray text-[11px]">{city}</span>
                  ))}
                  {region.cities.length > 4 && (
                    <span className="tag-gray text-[11px]">+{region.cities.length - 4}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────────── */}
      <section className="bg-teal-dark bg-hero-pattern py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label text-gold block mb-3">Why SRI SAI TEXCO</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              The Sourcing Advantage
            </h2>
            <p className="text-teal-pale max-w-lg mx-auto text-sm">
              We bring together mill relationships, product knowledge, and logistics capability so you can focus on manufacturing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-teal-pale leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">Sustainability</span>
            <h2 className="section-heading mb-4">Our Certifications</h2>
            <p className="text-txt-light max-w-lg mx-auto text-sm leading-relaxed">
              SRI SAI TEXCO holds two internationally recognised sustainability certifications — proof that our cotton is responsibly sourced and traceable from farm to mill.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">

            {/* USCTP */}
            <div className="card p-7 flex flex-col items-center text-center border-2 border-teal/20 hover:border-teal/40 transition-all">
              <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={30} className="text-teal" />
              </div>
              <span className="font-mono text-[10px] text-teal font-bold tracking-[0.2em] uppercase bg-teal-pale px-3 py-1 rounded-full mb-4">
                Certified
              </span>
              <h3 className="font-playfair text-2xl font-black text-txt-dark mb-1">USCTP</h3>
              <p className="text-xs font-semibold text-teal mb-4 tracking-wide">U.S. Cotton Trust Protocol</p>
              <p className="text-sm text-txt-light leading-relaxed">
                Data-driven certification verifying U.S.-grown cotton meets rigorous standards for water use, soil health, energy efficiency, and greenhouse gas emissions.
              </p>
            </div>

            {/* BCI */}
            <div className="card p-7 flex flex-col items-center text-center border-2 border-gold/20 hover:border-gold/40 transition-all">
              <div className="w-16 h-16 bg-gold-pale rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={30} className="text-gold-dark" />
              </div>
              <span className="font-mono text-[10px] text-gold-dark font-bold tracking-[0.2em] uppercase bg-gold-pale px-3 py-1 rounded-full mb-4">
                Certified
              </span>
              <h3 className="font-playfair text-2xl font-black text-txt-dark mb-1">BCI</h3>
              <p className="text-xs font-semibold text-gold-dark mb-4 tracking-wide">Better Cotton Initiative</p>
              <p className="text-sm text-txt-light leading-relaxed">
                World's largest cotton sustainability programme — improving farming practices for the benefit of farmers, the environment, and the global textile sector.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CATALOGUE CTA ──────────────────────────────────────────── */}
      <section className="bg-gold-pale border-y border-gold/20 py-14">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="section-label block mb-2">Resources</span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-txt-dark mb-2">
              Download Our Yarn Catalogue
            </h2>
            <p className="text-sm text-txt-light max-w-md">
              Full product list with count details, applications, and packing specifications. Share with your purchase team.
            </p>
          </div>
          <a
            href="/SriSaiTexco_Yarn_Catalogue.pdf"
            download
            className="btn-teal shrink-0 shadow-card"
          >
            <Download size={16} />
            Download PDF Catalogue
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-teal py-16">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-teal-pale mb-8 max-w-md mx-auto text-sm">
            Contact us on WhatsApp or call us directly. We respond fast and confirm availability the same day.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold justify-center">
              <MessageCircle size={16} /> WhatsApp Us Now
            </a>
            <Link href="/contact" className="btn-outline-white justify-center">
              Send Bulk Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
