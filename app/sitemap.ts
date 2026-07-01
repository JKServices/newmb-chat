import type { MetadataRoute } from 'next';
const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://newmb.chat';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/memes', '/privacy', '/terms', '/disclaimer'].map((p)=>({url: `${base}${p}`, lastModified: new Date()})); }
