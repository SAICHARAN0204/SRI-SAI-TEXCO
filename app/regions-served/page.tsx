import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Truck, Clock, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { regions, companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Regions Served — Tamil Nadu, Gujarat & Maharashtra',
  description:
    'SRI SAI TEXCO supplies bulk cotton yarn across Tamil Nadu, Gujarat, and Maharashtra. Pan-India delivery available for large orders.',
};

const logistics = [
  { icon: Truck, title: 'Full Truck Loads (FTL)', desc: 'For large orders — direct mill to buyer dispatch.' },
  { icon: Truck, title: 'Part Truck Loads (PTL)', desc: 'For mid-size shipments sharing truck capacity.' },
  { icon: MapPin, title: 'Direct Mill Dispatch', desc: 'We coordinate dispatch directly from the mill.' },
  { icon: CheckCircle2, title: 'Trusted Transporters', desc: 'We work with a vetted transporter network across India.' },
];

export default function RegionsServedPage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    'Hello SRI SAI TEXCO, I need yarn delivered to my state. Please share logistics details.'
  )}`;

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-custom">
          <span className="section-label text-gold block mb-3">Coverage</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 max-w-2xl">
            Pan-India Bulk Yarn Supply
          </h1>
          <p className="text-teal-pale max-w-xl text-base leading-relaxed">
            We supply bulk cotton yarn primarily across Tamil Nadu, Gujarat, and Maharashtra — with the ability to arrange logistics to any state for large orders.
          </p>
        </div>
      </section>

      {/* ── REGIONS ──────────────────────────────────────────────────────── */}
      <section className="bg-cream py-14">
        <div className="container-custom space-y-8">
          {regions.map((region, idx) => (
            <div key={region.id} className="card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* State header */}
                <div className={`md:w-48 shrink-0 p-7 flex flex-col items-center justify-center text-center ${
                  idx === 0 ? 'bg-teal-dark' : idx === 1 ? 'bg-teal' : 'bg-teal-light'
                }`}>
                  <MapPin size={32} className="text-gold mb-3" />
                  <div className="font-playfair text-xl font-black text-white">{region.state}</div>
                  <div className="font-mono text-[10px] text-teal-pale mt-2 tracking-wider uppercase">Primary Region</div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-playfair text-xl font-bold text-txt-dark mb-1">{region.state}</h2>
                      <p className="text-sm text-teal font-semibold">{region.industry}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-teal-pale rounded-lg px-3 py-1.5">
                      <Clock size={13} className="text-teal" />
                      <span className="text-xs font-semibold text-teal">{region.deliveryTime}</span>
                    </div>
                  </div>

                  <p className="text-sm text-txt-light leading-relaxed mb-5">{region.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-mono text-txt-light uppercase tracking-wider mb-2 font-semibold">Key Cities</p>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city) => (
                        <span key={city} className="flex items-center gap-1.5 tag-gray">
                          <MapPin size={10} className="text-teal" /> {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hello SRI SAI TEXCO, I need yarn delivered to ${region.state}. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-light transition-colors mt-2"
                  >
                    <MessageCircle size={14} /> Enquire for {region.state} delivery <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Pan India */}
          <div className="card border-dashed border-2 border-teal/20 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-teal-pale rounded-2xl flex items-center justify-center shrink-0">
                <Truck size={28} className="text-teal" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-playfair text-xl font-bold text-txt-dark mb-2">Pan-India Supply Available</h3>
                <p className="text-sm text-txt-light max-w-lg">
                  For large-volume orders, we can arrange logistics to any state in India through our trusted transporter network. Contact us with your state and quantity to discuss.
                </p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-teal shrink-0">
                <MessageCircle size={15} /> Check Your State
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGISTICS CAPABILITIES ───────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">Logistics</span>
            <h2 className="section-heading">How We Deliver</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {logistics.map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={18} className="text-teal" />
                </div>
                <h3 className="font-semibold text-txt-dark text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-txt-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-teal">
              Send Your Delivery Enquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
