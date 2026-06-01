import type { MetadataRoute } from 'next';

const siteUrl = 'https://raunaq-adlakha.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/resume.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
