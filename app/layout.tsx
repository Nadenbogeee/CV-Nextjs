import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoga Naden - Front-end Developer',
  description: 'Junior Developer with hands-on experience in UI and System Design using modern web technologies including React, Angular, TypeScript, and more.',
  keywords: 'frontend developer, react developer, angular developer, typescript, javascript, web developer, ui developer',
  authors: [{ name: 'Yoga Naden' }],
  openGraph: {
    title: 'Yoga Naden - Front-end Developer',
    description: 'Junior Developer with hands-on experience in UI and System Design using modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}