import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Bulk Enquiry — SRI SAI TEXCO',
  description:
    'Send a bulk yarn enquiry to SRI SAI TEXCO. Phone, WhatsApp, email and RFQ form for cotton yarn buyers across India.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
