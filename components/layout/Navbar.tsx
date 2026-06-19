'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/yarn-catalogue', label: 'Yarn Catalogue' },
  { href: '/our-mills', label: 'Our Mills' },
  { href: '/regions-served', label: 'Regions Served' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const ratesLink = { href: '/yarn-rates', label: "Today's Rates" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-border'
            : 'bg-white/95 backdrop-blur-sm border-b border-border'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo — left */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.png" alt="SRI SAI TEXCO Logo" width={40} height={40} priority />
              <span
                className="text-teal text-base font-bold tracking-[0.18em] leading-none"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                SRI SAI TEXCO
              </span>
            </Link>

            {/* Desktop Nav — right */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-teal bg-teal/10 font-semibold'
                        : 'text-txt-mid hover:text-teal hover:bg-teal/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Today's Rates — LIVE badge */}
              <Link
                href={ratesLink.href}
                className={`ml-1 flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  pathname === ratesLink.href
                    ? 'bg-gold text-teal-dark'
                    : 'bg-gold/10 text-gold hover:bg-gold hover:text-teal-dark'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {ratesLink.label}
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-txt-mid hover:text-teal hover:bg-teal/10 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-border bg-white ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container-custom py-4 space-y-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-teal bg-teal/10 font-semibold'
                      : 'text-txt-mid hover:text-teal hover:bg-teal/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ratesLink.href}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                pathname === ratesLink.href
                  ? 'bg-gold text-teal-dark'
                  : 'bg-gold/10 text-gold hover:bg-gold hover:text-teal-dark'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {ratesLink.label}
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-[68px]" />
    </>
  );
}
