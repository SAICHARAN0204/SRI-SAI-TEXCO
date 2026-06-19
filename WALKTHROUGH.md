# SRI SAI TEXCO — Website Developer Walkthrough

## Quick Start

```bash
# 1. Extract the zip to your desired folder, e.g. C:\Users\saich\Desktop\SST
# 2. Open terminal in that folder and run:

npm install
npm run dev

# 3. Open http://localhost:3000 in your browser
```

---

## Project Structure

```
SST/
├── app/
│   ├── layout.tsx              ← Root layout (fonts, Navbar, Footer, WhatsApp float)
│   ├── globals.css             ← Tailwind + custom component classes
│   ├── page.tsx                ← Home page
│   ├── about/page.tsx          ← About Us
│   ├── yarn-catalogue/
│   │   ├── page.tsx            ← Catalogue grid
│   │   └── [slug]/page.tsx     ← Individual yarn product page
│   ├── our-mills/page.tsx      ← Mill partner profiles
│   ├── regions-served/page.tsx ← State coverage + logistics
│   ├── faq/
│   │   ├── page.tsx            ← FAQ accordion (client component)
│   │   └── layout.tsx          ← Metadata wrapper
│   ├── contact/
│   │   ├── page.tsx            ← RFQ form + contact details
│   │   └── layout.tsx          ← Metadata wrapper
│   ├── api/contact/route.ts    ← Form submission API
│   ├── not-found.tsx           ← 404 page
│   ├── sitemap.ts              ← Auto sitemap.xml
│   └── robots.ts               ← robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Sticky header + mobile menu + bottom bar
│   │   └── Footer.tsx          ← 4-column footer + enquiry banner
│   └── ui/
│       └── WhatsAppFloat.tsx   ← Floating WhatsApp button (desktop)
├── lib/
│   └── data.ts                 ← ALL content: yarn counts, mills, regions, FAQs
├── public/
│   └── logo.svg                ← Brand logo (double chevron + gold diamond)
├── tailwind.config.ts          ← Brand colors mapped as Tailwind tokens
├── .env.example                ← Environment variables template
└── package.json
```

---

## Brand Colors (Exact)

| Token | Hex | Usage |
|-------|-----|-------|
| `teal` | `#077063` | Primary — nav, buttons, headings, icons |
| `teal-dark` | `#055a4f` | Hero backgrounds, footer, dark sections |
| `teal-light` | `#09887a` | Hover states, accents |
| `teal-pale` | `#e2f4f2` | Subtle backgrounds, tag fills |
| `gold` | `#fbb616` | CTA buttons, badges, highlights |
| `gold-light` | `#fcc93a` | Gold hover |
| `gold-pale` | `#fff8e0` | Light gold backgrounds |

---

## Content Updates (lib/data.ts)

All website content lives in a single file: **`lib/data.ts`**

### Update Company Info
```ts
export const companyInfo = {
  phone: '+91 XXXXX XXXXX',    // ← Your actual phone number
  whatsapp: '91XXXXXXXXXX',    // ← WhatsApp number (no + or spaces)
  email: 'info@srisaitexco.com',
  address: 'Your full address, Coimbatore, Tamil Nadu',
  mapEmbedUrl: '...',          // ← Your Google Maps embed URL
};
```

### Add a New Yarn Count
```ts
{
  id: 'new-count-id',          // URL slug: /yarn-catalogue/new-count-id
  count: '80s',
  type: 'CWC',
  fullType: 'Combed Warp Count',
  description: 'Description here...',
  mills: ['Trident'],
  applications: ['Shirting', 'Fine Fabric'],
  packing: '50 kg cones',
  moq: '500 kg',
  badge: 'New',                // Optional: 'Best Seller' | 'New' | 'Trending' etc.
},
```

---

## Setting Up Contact Form Email

1. Sign up free at [resend.com](https://resend.com)
2. Create an API key
3. Copy `.env.example` → `.env.local` and add your key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```
4. In `app/api/contact/route.ts`, uncomment the Resend block
5. Install Resend: `npm install resend`

Without Resend, form submissions are logged to the terminal — useful during development.

---

## Adding the PDF Catalogue

Place your PDF file at:
```
public/SriSaiTexco_Yarn_Catalogue.pdf
```

The Download buttons throughout the site will work automatically.

---

## Updating the Logo

Replace `public/logo.svg` with your logo file.
- The Navbar shows it in colour
- The Footer shows it with `brightness-0 invert` (white version)
- Recommended size: SVG or PNG at 2x resolution

---

## Google Maps Embed

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your office address
3. Click **Share → Embed a map**
4. Copy the `src="..."` URL from the `<iframe>` tag
5. Paste it into `companyInfo.mapEmbedUrl` in `lib/data.ts`

---

## WhatsApp Number Setup

In `lib/data.ts`, set:
```ts
whatsapp: '919XXXXXXXXX',  // 91 (India code) + 10-digit mobile number
```

Each yarn product page has a pre-filled WhatsApp message including the count name and prompts for quantity and delivery state.

---

## Deployment (Vercel — Recommended, Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project folder
vercel

# Follow prompts — it auto-detects Next.js
# Your site will be live at https://your-project.vercel.app
```

Then connect your custom domain `srisaitexco.com` in the Vercel dashboard.

---

## SEO Checklist (Before Launch)

- [ ] Update `companyInfo` with real phone, email, address
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` with actual domain
- [ ] Update `sitemap.ts` base URL with actual domain
- [ ] Add Google Maps embed URL
- [ ] Upload PDF catalogue to `/public/`
- [ ] Submit sitemap to Google Search Console: `yourdomain.com/sitemap.xml`
- [ ] Create/update Google Business Profile with website link
- [ ] Add IndiaMART profile link pointing to website

---

## Pages Summary

| Route | Page | Key Features |
|-------|------|-------------|
| `/` | Home | Hero, stats bar, yarn grid, mills, regions, why us, download CTA |
| `/yarn-catalogue` | Catalogue | All 9 counts, filter labels, per-card WhatsApp, download CTA |
| `/yarn-catalogue/[slug]` | Product | Full specs, applications, sidebar RFQ, related counts |
| `/our-mills` | Mills | 3 mill profiles with strengths, counts, certifications |
| `/regions-served` | Regions | TN, GJ, MH cards with cities + logistics section |
| `/about` | About | Story, mission, values, strengths, agent advantage card |
| `/faq` | FAQ | 10-question accordion, still-have-questions CTA |
| `/contact` | Contact | RFQ form (8 fields), contact details, map, WhatsApp card |

---

*Built for SRI SAI TEXCO · Cotton Yarn Agent & Supplier · Coimbatore, India*
