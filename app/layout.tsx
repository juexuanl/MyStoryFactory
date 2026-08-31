import type { Metadata } from 'next';
import './globals.css';

const title = 'My Story Factory — A Personal Story Archive';
const description =
  'A personal collection of original short fiction, illustrated moments, and quiet worlds.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1536,
        height: 1024,
        alt: 'My Story Factory — Stories are small doors.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
