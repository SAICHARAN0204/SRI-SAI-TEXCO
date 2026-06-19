// ── Yarn Counts ─────────────────────────────────────────────────────────────
// Last updated: 2026-06-18 | 36 verified counts (deduplicated & normalized)
export interface YarnCount {
  id: string;
  count: string;
  type: string;
  fullType: string;
  description: string;
  mills: string[];
  applications: string[];
  packing: string;
  moq: string;
  badge?: string;
}

export const yarnCounts: YarnCount[] = [

  // ── OE / Open End Counts ────────────────────────────────────────────────
  {
    id: '7s-oe-cf',
    count: '7s OE CF',
    type: 'OE',
    fullType: 'Open End – Compact Fibre',
    description: 'Very coarse OE count with compact fibre blend. Used in industrial fabrics, canvas, and heavy-duty woven goods.',
    mills: ['Trident Ltd', 'GHCL Textiles'],
    applications: ['Industrial Fabric', 'Canvas', 'Heavy Weaving'],
    packing: '5–6 kg cones / 30 kg bags',
    moq: '1 MT',
  },
  {
    id: '16s-oe',
    count: '16s OE',
    type: 'OE',
    fullType: 'Open End Yarn',
    description: 'Standard OE count popular for terry towels, denim, and bulk fabric production. High strength with rotor-spun uniformity.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Terry Towels', 'Denim', 'Industrial Fabric'],
    packing: '5–6 kg cones / 30 kg bags',
    moq: '1 MT',
  },
  {
    id: '31s-oe',
    count: '31s OE',
    type: 'OE',
    fullType: 'Open End Yarn',
    description: 'Medium OE count used for knitted fabrics, hosiery, and lightweight woven constructions.',
    mills: ['GHCL Textiles', 'Sakthi Spintex Pvt Ltd'],
    applications: ['Knitting', 'Hosiery', 'Fabric'],
    packing: '5–6 kg cones / 30 kg bags',
    moq: '1 MT',
  },

  // ── Coarse / Medium Counts ───────────────────────────────────────────────
  {
    id: '20-24s-ss',
    count: '20–24s SS',
    type: 'SS',
    fullType: 'Single Spun',
    description: 'Coarse single-spun count range widely used in weaving and powerloom sectors for bulk fabric production.',
    mills: ['Sri Ramco Spinners', 'Sri Vallimurugan Spinners'],
    applications: ['Weaving', 'Powerloom Fabric', 'Dhotis'],
    packing: '30 kg bags',
    moq: '500 kg',
  },
  {
    id: '20s-kw-csy',
    count: '20s KW CSY',
    type: 'KWC',
    fullType: 'Carded Warp Count – CSY',
    description: 'Carded warp count with CSY (Cotton Spun Yarn) specification, used for bulk fabric and grey cloth weaving.',
    mills: ['Sri Madura Textiles', 'Sri Balaji Yarns'],
    applications: ['Weaving', 'Grey Cloth', 'Fabric'],
    packing: '30 kg bags',
    moq: '500 kg',
  },
  {
    id: '24s-chc',
    count: '24s CHC',
    type: 'CHC',
    fullType: 'Carded Hosiery Count',
    description: 'Carded hosiery count suitable for circular knitting machines producing T-shirts, inner wear, and hosiery fabric.',
    mills: ['Sakthi Spintex Pvt Ltd', 'Sri Amman Sizing and Weaving'],
    applications: ['Circular Knitting', 'Hosiery', 'Inner Wear'],
    packing: '30 kg bags / cones',
    moq: '500 kg',
  },
  {
    id: '30-32s-ss',
    count: '30–32s SS',
    type: 'SS',
    fullType: 'Single Spun',
    description: 'Single-spun range covering 30s to 32s, used in lightweight grey fabrics and blended woven constructions.',
    mills: ['Sri Ramco Spinners', 'Siddhi Enterprises'],
    applications: ['Weaving', 'Grey Fabric', 'Blended Fabric'],
    packing: '30 kg bags',
    moq: '500 kg',
  },
  {
    id: '30s-chc',
    count: '30s CHC',
    type: 'CHC',
    fullType: 'Carded Hosiery Count',
    description: 'Standard carded hosiery count. Very high volume in knitting industry. Used for inner wear, casual T-shirts and knit fabric.',
    mills: ['Sakthi Spintex Pvt Ltd', 'Sri Vallimurugan Spinners'],
    applications: ['Circular Knitting', 'T-Shirts', 'Inner Wear'],
    packing: '30 kg bags / cones',
    moq: '500 kg',
    badge: 'High Volume',
  },
  {
    id: '30s-cw-csy',
    count: '30s CW CSY',
    type: 'CWC',
    fullType: 'Combed Warp Count – CSY',
    description: 'Combed warp count with CSY finish, offering better evenness for premium woven fabric constructions.',
    mills: ['Shiva Texyarn Ltd', 'Sri Madura Textiles'],
    applications: ['Weaving', 'Premium Fabric', 'Export Cloth'],
    packing: '50 kg cones',
    moq: '500 kg',
  },
  {
    id: '30s-cwc',
    count: '30s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'A widely used combed warp count for woven grey fabric and shirting. Consistent quality and broad availability.',
    mills: ['Vardhman Textiles Ltd', 'Trident Ltd', 'Premier Cotton Textiles'],
    applications: ['Weaving', 'Shirting', 'Grey Fabric'],
    packing: '50 kg cones / 30 kg bags',
    moq: '500 kg',
    badge: 'Popular',
  },
  {
    id: '30s-kwc',
    count: '30s KWC',
    type: 'KWC',
    fullType: 'Carded Warp Count',
    description: 'Economical carded warp count for powerloom and domestic weaving. Good uniformity at competitive pricing.',
    mills: ['Sri Ramco Spinners', 'Sri Jayajothi & Co'],
    applications: ['Weaving', 'Powerloom', 'Fabric'],
    packing: '30 kg bags',
    moq: '500 kg',
  },

  // ── 40s Range ─────────────────────────────────────────────────────────────
  {
    id: '40s-chc',
    count: '40s CHC',
    type: 'CHC',
    fullType: 'Carded Hosiery Count',
    description: 'Medium-fine carded hosiery count popular for knitted garments and export-grade fabric production.',
    mills: ['Sakthi Spintex Pvt Ltd', 'GHCL Textiles'],
    applications: ['Knitting', 'Hosiery', 'Garments'],
    packing: '30 kg bags / cones',
    moq: '500 kg',
  },
  {
    id: '40s-cw-csy',
    count: '40s CW CSY',
    type: 'CWC',
    fullType: 'Combed Warp Count – CSY',
    description: 'Combed warp 40s count with CSY finish for premium woven and shirting fabric.',
    mills: ['Shiva Texyarn Ltd', 'Trident Ltd'],
    applications: ['Premium Weaving', 'Shirting', 'Export Cloth'],
    packing: '50 kg cones',
    moq: '500 kg',
  },
  {
    id: '40s-cwc',
    count: '40s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'The most widely traded cotton yarn count in India. Known for uniform tenacity, smooth texture, and excellent dye uptake. Ideal for hosiery and woven fabric.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd', 'GHCL Textiles'],
    applications: ['Knitting', 'Weaving', 'Hosiery'],
    packing: '50 kg cones / 30 kg bags',
    moq: '500 kg',
    badge: 'Best Seller',
  },
  {
    id: '40s-cwc-cf',
    count: '40s CWC CF',
    type: 'Compact',
    fullType: 'Combed Warp Count – Compact Fibre',
    description: 'Compact-spun 40s CWC with tighter fibre bundling, offering superior strength, low hairiness, and premium fabric quality.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Premium Knitting', 'Fine Fabric', 'Export Garments'],
    packing: '50 kg cones',
    moq: '500 kg',
    badge: 'Premium',
  },
  {
    id: '40s-kwc',
    count: '40s KWC',
    type: 'KWC',
    fullType: 'Carded Warp Count',
    description: 'Cost-effective carded 40s for medium-weight fabric. Preferred by domestic mills requiring consistent bulk supply at competitive pricing.',
    mills: ['Vardhman Textiles Ltd', 'Sree Lalitha Parameswari'],
    applications: ['Knitting', 'Weaving'],
    packing: '30 kg bags / cones',
    moq: '500 kg',
  },
  {
    id: '41s-cw-slub',
    count: '41s CW Slub',
    type: 'Slub',
    fullType: 'Combed Warp Slub Yarn',
    description: 'Slub variant of 41s CWC with intentional thickness variations for textured fabric aesthetics. Popular in fashion and ethnic wear.',
    mills: ['Vardhman Textiles Ltd', 'Shiva Texyarn Ltd'],
    applications: ['Fashion Fabric', 'Ethnic Wear', 'Textured Cloth'],
    packing: 'As per specification',
    moq: '500 kg',
    badge: 'Trending',
  },
  {
    id: '41s-cwc',
    count: '41s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Specialty count bridging 40s and 50s. Finer hand feel than 40s with maintained strength for high-density weave constructions.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Weaving', 'Fine Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '41s-cwc-cf',
    count: '41s CWC CF',
    type: 'Compact',
    fullType: 'Combed Warp Count – Compact Fibre',
    description: 'Compact-spun version of 41s CWC. Enhanced fibre integration for superior evenness and reduced hairiness in woven fabric.',
    mills: ['Trident Ltd'],
    applications: ['Fine Weaving', 'Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '41s-kwc',
    count: '41s KWC',
    type: 'KWC',
    fullType: 'Carded Warp Count',
    description: 'Carded version of 41s for domestic fabric mills requiring 41-count fineness at competitive pricing.',
    mills: ['Sri Ramco Spinners', 'Sree Lalitha Parameswari'],
    applications: ['Weaving', 'Domestic Fabric'],
    packing: '30 kg bags / cones',
    moq: '500 kg',
  },

  // ── 50s Range ─────────────────────────────────────────────────────────────
  {
    id: '50s-cwc',
    count: '50s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Premium fine count with exceptional evenness and low imperfection. Preferred by export-grade fabric manufacturers for soft, breathable products.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd', 'Sree Lalitha Parameswari'],
    applications: ['Weaving', 'Shirting', 'Export Fabric'],
    packing: '50 kg cones',
    moq: '500 kg',
    badge: 'Popular',
  },
  {
    id: '50s-cwc-cf',
    count: '50s CWC CF',
    type: 'Compact',
    fullType: 'Combed Warp Count – Compact Fibre',
    description: 'Compact-spun 50s for premium export-grade shirting with superior surface smoothness and reduced pilling.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Premium Shirting', 'Export Fabric', 'Fine Weaving'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '51s-cwc',
    count: '51s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Specialty 51s count bridging 50s and 60s range. Used where slightly higher fineness than standard 50s is required.',
    mills: ['Shiva Texyarn Ltd', 'GHCL Textiles'],
    applications: ['Fine Weaving', 'Specialty Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
  },

  // ── 60s Range ─────────────────────────────────────────────────────────────
  {
    id: '60s-cwc',
    count: '60s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Fine combed count offering superior softness and luster. Commonly used for premium cotton shirting, lawn, and fine suiting.',
    mills: ['Trident Ltd', 'Sree Lalitha Parameswari'],
    applications: ['Shirting', 'Suiting', 'Lawn Fabric'],
    packing: '50 kg cones',
    moq: '500 kg',
    badge: 'High Demand',
  },
  {
    id: '60s-cwc-cf',
    count: '60s CWC CF',
    type: 'Compact',
    fullType: 'Combed Warp Count – Compact Fibre',
    description: 'Compact-spun 60s for ultra-premium shirting and fine fabric. Extremely low hairiness and tight structure.',
    mills: ['Trident Ltd'],
    applications: ['Ultra-Premium Shirting', 'Fine Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Ultra Fine',
  },
  {
    id: '61s-cwc',
    count: '61s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Specialty fine count for precision fabric applications. Sourced from select mills with consistent quality parameters.',
    mills: ['Trident Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Fine Weaving', 'Specialty Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '61s-cwc-bci',
    count: '61s CWC BCI',
    type: 'CWC',
    fullType: 'Combed Warp Count – BCI Certified',
    description: '61s CWC sourced from BCI (Better Cotton Initiative) certified farms. For buyers requiring sustainable, traceable cotton supply.',
    mills: ['Trident Ltd'],
    applications: ['Fine Weaving', 'Sustainable Fabric', 'Export'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'BCI Certified',
  },
  {
    id: '61s-kwc',
    count: '61s KWC',
    type: 'KWC',
    fullType: 'Carded Warp Count',
    description: 'Carded 61s offering fine-count fineness at a lower price point. Used in value-segment fine fabric manufacturing.',
    mills: ['Sree Lalitha Parameswari', 'Sri Ramco Spinners'],
    applications: ['Fine Fabric', 'Weaving'],
    packing: '50 kg cones',
    moq: '1 MT',
  },

  // ── Super Fine Counts ──────────────────────────────────────────────────────
  {
    id: '80s-cwc',
    count: '80s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Very fine combed count for premium export-grade fine fabric. High evenness and extremely low imperfection level.',
    mills: ['Vardhman Textiles Ltd', 'Trident Ltd'],
    applications: ['Premium Shirting', 'Fine Lawn', 'Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '100s-cwc',
    count: '100s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Super-fine combed count. Specialty yarn used in very high-end shirting and fine export fabric applications.',
    mills: ['Vardhman Textiles Ltd'],
    applications: ['Super Fine Shirting', 'Luxury Fabric', 'Export'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Super Fine',
  },
  {
    id: '105s-cwc',
    count: '105s CWC',
    type: 'CWC',
    fullType: 'Combed Warp Count',
    description: 'Among the finest cotton yarn counts available. Used for ultra-premium shirting and specialty fabric for export markets.',
    mills: ['Vardhman Textiles Ltd'],
    applications: ['Ultra-Premium Shirting', 'Luxury Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Ultra Fine',
  },

  // ── 2-Ply / Twisted Counts ─────────────────────────────────────────────────
  {
    id: '2-42s-kwc-eli',
    count: '2/42s KWC Eli',
    type: 'KWC',
    fullType: '2-Ply Carded Warp Count – Elitwist',
    description: '2-ply twisted carded 42s with Elitwist technology. Stronger and more uniform than single-ply counts. Used in durable fabric weaving.',
    mills: ['Shiva Texyarn Ltd', 'Vardhman Textiles Ltd'],
    applications: ['Durable Fabric', 'Weaving', 'Industrial Textile'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '2-70s-gas-mer',
    count: '2/70s GAS MER',
    type: 'CWC',
    fullType: '2-Ply Gas Mercerized',
    description: '2-ply gas-mercerized yarn with exceptional lustre, softness, and dye affinity. Used for premium shirting, sarees, and dress materials.',
    mills: ['Vardhman Textiles Ltd', 'Trident Ltd'],
    applications: ['Premium Shirting', 'Sarees', 'Dress Materials'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Premium Lustre',
  },
  {
    id: '2-80s-cwc-eli',
    count: '2/80s CWC Eli',
    type: 'CWC',
    fullType: '2-Ply Combed Warp Count – Elitwist',
    description: '2-ply Elitwist 80s CWC offering superior strength, low twist liveliness, and excellent fabric quality for fine export shirting.',
    mills: ['Vardhman Textiles Ltd'],
    applications: ['Fine Shirting', 'Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Fine',
  },
  {
    id: '2-80s-cwc-tfo',
    count: '2/80s CWC TFO',
    type: 'CWC',
    fullType: '2-Ply Combed Warp Count – TFO (Two-For-One Twist)',
    description: '2-ply 80s CWC twisted using TFO (Two-For-One) technology for consistent twist and superior fabric performance.',
    mills: ['Vardhman Textiles Ltd', 'Trident Ltd'],
    applications: ['Fine Fabric', 'Premium Shirting', 'Export Textile'],
    packing: '50 kg cones',
    moq: '1 MT',
  },
  {
    id: '2-82s-cwc-eli',
    count: '2/82s CWC Eli',
    type: 'CWC',
    fullType: '2-Ply Combed Warp Count – Elitwist',
    description: '2-ply Elitwist 82s — ultra-fine compact twisted count for the finest shirting and luxury export fabric.',
    mills: ['Vardhman Textiles Ltd'],
    applications: ['Ultra-Premium Shirting', 'Luxury Export Fabric'],
    packing: '50 kg cones',
    moq: '1 MT',
    badge: 'Ultra Fine',
  },

  // ── Specialty Counts ───────────────────────────────────────────────────────
  {
    id: '215-kwc',
    count: '215 KWC',
    type: 'KWC',
    fullType: 'Carded Warp Count – 215',
    description: 'Specialty bulk carded count used in industrial and heavy-duty fabric construction.',
    mills: ['Sri Ramco Spinners', 'Siddhi Enterprises'],
    applications: ['Industrial Fabric', 'Heavy Weaving'],
    packing: 'As per specification',
    moq: '1 MT',
  },
];

// ── Mills ────────────────────────────────────────────────────────────────────
// Last updated: 2026-06-19 | 27 verified partner mills
export interface PartnerMill {
  name: string;
  website?: string;
}

export const partnerMills: PartnerMill[] = [
  // ── Mills with official websites ─────────────────────────────────────────
  { name: 'Alok Industries Ltd',        website: 'https://www.alokind.com' },
  { name: 'GHCL Textiles',              website: 'https://ghcltextiles.co.in' },
  { name: 'Kanchan India Ltd',          website: 'https://kanchanindia.com' },
  { name: 'Sagar Manufacturers Pvt Ltd',website: 'https://www.sagarmanufacturers.com' },
  { name: 'Sam Sai Textiles',           website: 'https://sam-saitextiles.com' },
  { name: 'Shiva Texyarn Ltd',          website: 'https://www.shivatex.in' },
  { name: 'Shristi Cotspin Pvt Ltd',    website: 'https://www.shristicotspinn.in' },
  { name: 'Sri Amman Sizing and Weaving', website: 'https://sriammansizingandweavingmills.com' },
  { name: 'Sri Jayajothi & Co',         website: 'https://srijayajothi.com' },
  { name: 'Trident Ltd',                website: 'https://www.tridentindia.com' },
  { name: 'Vardhman Textiles Ltd',      website: 'https://www.vardhman.com' },
  // ── Mills without dedicated websites ────────────────────────────────────
  { name: 'Ashirwad Spinfab LLP' },
  { name: 'Cee Kay Mercantile Pvt Ltd' },
  { name: 'LAK Textiles' },
  { name: 'Meru Enterprises' },
  { name: 'Pasupati Cotton Industries' },
  { name: 'Premier Cotton Textiles' },
  { name: 'Sakthi Spintex Pvt Ltd' },
  { name: 'Shri Hari Yarns' },
  { name: 'Shri Santhish Meenakshi' },
  { name: 'Siddhi Enterprises' },
  { name: 'Sree Lalitha Parameswari' },
  { name: 'Sree Lalitha Weaving' },
  { name: 'Sri Balaji Yarns' },
  { name: 'Sri Madura Textiles' },
  { name: 'Sri Ramco Spinners' },
  { name: 'Sri Vallimurugan Spinners' },
];



// ── Regions ──────────────────────────────────────────────────────────────────
export interface Region {
  id: string;
  state: string;
  cities: string[];
  industry: string;
  description: string;
  deliveryTime: string;
}

export const regions: Region[] = [
  {
    id: 'tamil-nadu',
    state: 'Tamil Nadu',
    cities: ['Coimbatore', 'Tirupur', 'Erode', 'Chennai', 'Salem', 'Karur'],
    industry: 'Knitting, Hosiery & Garment Export',
    description:
      'Tamil Nadu is the primary textile manufacturing hub of India, home to the world\'s largest knitwear export cluster at Tirupur. We are based in Coimbatore and maintain the deepest supply network in the state.',
    deliveryTime: '3–5 business days',
  },
  {
    id: 'gujarat',
    state: 'Gujarat',
    cities: ['Surat', 'Ahmedabad', 'Rajkot', 'Vadodara', 'Bhavnagar'],
    industry: 'Weaving, Fabric Export & Synthetic Blends',
    description:
      'Gujarat is India\'s leading fabric manufacturing and export state, particularly known for Surat\'s weaving and Ahmedabad\'s integrated textile mills. We supply to fabric manufacturers and traders across the state.',
    deliveryTime: '5–8 business days',
  },
  {
    id: 'maharashtra',
    state: 'Maharashtra',
    cities: ['Mumbai', 'Pune', 'Ichalkaranji', 'Nagpur', 'Sholapur'],
    industry: 'Wholesale Trading & Garment Manufacturing',
    description:
      'Maharashtra hosts India\'s largest wholesale textile markets (Surat-Mumbai corridor) and Ichalkaranji, known as the "Manchester of Maharashtra." We serve traders, wholesalers, and mills across the state.',
    deliveryTime: '5–7 business days',
  },
];

// ── FAQs ─────────────────────────────────────────────────────────────────────
export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: 'What is the minimum order quantity?',
    a: 'Typically 500 kg per count, though this may vary based on the specific yarn count and availability. For counts like 41s CWC and 61s WC, the MOQ is 1 MT. Contact us to confirm for your specific requirement.',
  },
  {
    q: 'Do you display prices on the website?',
    a: 'No. Cotton yarn prices fluctuate daily with cotton futures and market rates. We provide current pricing directly via phone or WhatsApp. Contact us for today\'s rates — we respond quickly.',
  },
  {
    q: 'Which mills do you work with?',
    a: 'We source from 27 verified partner mills including Trident Ltd, Vardhman Textiles, GHCL Textiles, Alok Industries, Ashirwad Spinfab, Premier Cotton, Sakthi Spintex, Shiva Texyarn, and many more South India-based mills. Contact us to confirm availability from a specific mill.',
  },
  {
    q: 'Do you supply outside Tamil Nadu?',
    a: 'Yes. We regularly supply to Gujarat (Surat, Ahmedabad) and Maharashtra (Mumbai, Pune, Ichalkaranji). For large orders, we can arrange logistics to any state across India.',
  },
  {
    q: 'What is the typical lead time for orders?',
    a: 'For yarn available in our network: 3–7 business days depending on your location. For mill orders placed on your behalf: 10–15 working days. We will provide an accurate timeline when confirming your order.',
  },
  {
    q: 'Do you accept sample or trial orders?',
    a: 'We cater exclusively to bulk buyers. We do not supply retail or sample quantities. A minimum trial order may be discussed on a case-by-case basis for new buyers.',
  },
  {
    q: 'How is the quality of yarn ensured?',
    a: 'All yarn is sourced directly from certified spinning mills — we do not deal in grey market or secondary-grade yarn. Mill test reports (count, TPI, evenness, CSP) are available on request.',
  },
  {
    q: 'How do I place an order?',
    a: 'Contact us via WhatsApp or phone with your requirements: yarn count, quantity (in MT or kg), delivery state, and any mill preference. We\'ll confirm rate, availability, and dispatch details within a few hours.',
  },
  {
    q: 'Are you a mill or a yarn agent?',
    a: 'We are a yarn agent. We act as a sourcing and supply partner between spinning mills and buyers. This means you get mill-quality yarn with agent-speed sourcing, without the overhead of direct mill negotiations.',
  },
  {
    q: 'What modes of transport do you use?',
    a: 'We use full-truck loads (FTL), part-truck loads (PTL), and direct mill-to-buyer dispatches depending on order size and destination. We work with a reliable transporter network across India.',
  },
];

// ── Company Info ─────────────────────────────────────────────────────────────
export const companyInfo = {
  name: 'SRI SAI TEXCO',
  tagline: 'Your Trusted Cotton Yarn Partner Across India',
  phone: '+91 90802 29490',
  whatsapp: '919080229490',
  email: 'srisaitexco@gmail.com',
  address: 'Coimbatore, Tamil Nadu, India',
  businessHours: 'Monday–Saturday: 9:00 AM – 7:00 PM',
  certifications: ['USCTP (U.S. Cotton Trust Protocol)', 'BCI (Better Cotton Initiative)'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.183141144414!2d77.3220650745214!3d11.09967315317772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90700075b0305%3A0x41a2c6e51435b4f1!2sSri%20Sai%20Texco!5e0!3m2!1sen!2sin!4v1774497084659!5m2!1sen!2sin',
};
