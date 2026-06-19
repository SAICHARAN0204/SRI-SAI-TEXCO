import type { Metadata } from 'next';
import YarnRatesClient from './YarnRatesClient';
import { priceEntries, lastUpdated } from '@/lib/priceData';

export const metadata: Metadata = {
  title: "Today's Yarn Rates — Live Cotton Yarn Price List India",
  description:
    'Check today\'s cotton yarn prices from Vardhman, Trident, Sitaram, Welspun, Nahar, Sintex and more. Daily updated yarn rate board — 10s to 120s Ring Spun & OE yarn. Ex-mill prices in ₹/kg.',
  keywords: [
    'cotton yarn price today India',
    'yarn rate per kg',
    '40s CWC price today',
    '60s combed yarn price',
    'Vardhman yarn rate',
    'Trident yarn price',
    'OE yarn price India',
    'cotton yarn market rate',
    'yarn price list 2026',
    'live yarn prices Coimbatore',
  ],
};

export default function YarnRatesPage() {
  return <YarnRatesClient entries={priceEntries} lastUpdated={lastUpdated} />;
}
