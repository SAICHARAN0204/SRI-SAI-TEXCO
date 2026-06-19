import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#077063',
          dark: '#055a4f',
          light: '#09887a',
          pale: '#e2f4f2',
          muted: '#4a8a7e',
        },
        gold: {
          DEFAULT: '#fbb616',
          light: '#fcc93a',
          pale: '#fff8e0',
          dark: '#d4920a',
        },
        cream: '#f4faf9',
        border: '#c8e2de',
        'txt-dark': '#052e28',
        'txt-mid': '#245e54',
        'txt-light': '#5a9089',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(7,112,99,0.08)',
        'card-hover': '0 8px 32px 0 rgba(7,112,99,0.16)',
        gold: '0 4px 20px 0 rgba(251,182,22,0.35)',
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
