import { MetadataRoute } from 'next';
import { yarnCounts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.srisaitexco.com'; // ← Update with your actual domain

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/yarn-rates`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${base}/yarn-catalogue`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/our-mills`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/regions-served`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const yarnPages = yarnCounts.map((y) => ({
    url: `${base}/yarn-catalogue/${y.id}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...yarnPages];
}
