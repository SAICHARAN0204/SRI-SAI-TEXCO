import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'SRI SAI TEXCO — Cotton Yarn Agent & Supplier India',
    template: '%s | SRI SAI TEXCO',
  },
  description:
    'SRI SAI TEXCO is a trusted cotton yarn agent and supplier in India, sourcing from 25+ top mills like Trident, Vardhman, GHCL, and Alok Industries. Supplying 40s, 50s, 60s CWC/KWC, Slub & OE Yarn across Tamil Nadu, Gujarat, and Maharashtra.',
  keywords: [
    'cotton yarn supplier India',
    'cotton yarn agent Tamil Nadu',
    'bulk cotton yarn wholesale',
    'Trident yarn supplier',
    'Vardhman yarn dealer',
    '40s CWC cotton yarn',
    '60s combed cotton yarn India',
    'yarn supplier Coimbatore',
    'slub yarn supplier India',
    'OE yarn bulk supply',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'SRI SAI TEXCO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
