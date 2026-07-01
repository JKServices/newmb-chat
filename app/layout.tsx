import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newmb.chat';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'NEWMB.chat - 축구식 인생 밈 생성기', template: '%s | NEWMB.chat' },
  description: '축구 감독 인터뷰 감성에서 영감을 받은 패러디 밈 챗봇. 짧고 웃긴 답변을 포스터와 카톡 스타일 짤로 저장하세요.',
  openGraph: { title: 'NEWMB.chat', description: '축구식 인생 밈 생성기', url: siteUrl, siteName: 'NEWMB.chat', images: ['/og.png'], locale: 'ko_KR', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'NEWMB.chat', description: '축구식 인생 밈 생성기', images: ['/og.png'] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}<Analytics /></body></html>;
}
