import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoga Naden - Fullstack Developer | React Angular TypeScript",
  description: "Yoga Naden - Junior Fullstack Developer specializing in React, Angular, TypeScript, and modern web technologies. Available for freelance projects.",
  keywords: [
    "Yoga Naden",
    "Yoga Naden developer",
    "Yoga Naden fullstack",
    "Yoga Naden React",
    "Yoga Naden Angular",
    "fullstack developer Indonesia",
    "React developer",
    "Angular developer",
    "TypeScript developer",
    "JavaScript developer",
    "web developer",
    "frontend developer",
    "freelance developer",
    "CV Yoga Naden",
    "portfolio Yoga Naden",
  ].join(", "),
  authors: [{ name: "Yoga Naden" }],
  creator: "Yoga Naden",
  publisher: "Yoga Naden",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon-web.png", sizes: "any", type: "image/png" }],
    apple: [{ url: "/icon-web.png", sizes: "any", type: "image/png" }],
  },
  openGraph: {
    title: "Yoga Naden - Fullstack Developer",
    description: "Junior Fullstack Developer with hands-on experience in UI and System Design using modern web technologies.",
    type: "website",
    url: "https://yoganaden.vercel.app/", // Replace with your actual URL
    siteName: "Yoga Naden Portfolio",
    images: [
      {
        url: "/og-image.png", // Add an Open Graph image
        width: 1200,
        height: 630,
        alt: "Yoga Naden - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Naden - Fullstack Developer",
    description: "Junior Fullstack Developer specializing in React, Angular, and TypeScript",
    images: ["/icon-web.png"],
  },
  verification: {
    google: "4T0Johnr9esEktz1w8CpRdZP05YF4mshIMrpa5ZJ9qM",
  },
  alternates: {
    canonical: "https://yoganaden.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://yoganaden.vercel.app/" />
        <meta name="google-site-verification" content="4T0Johnr9esEktz1w8CpRdZP05YF4mshIMrpa5ZJ9qM" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
