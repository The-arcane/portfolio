import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import ClientOnly from "@/components/client-only";
import { userProfileData } from "@/data/mock";
import { Open_Sans, Roboto } from 'next/font/google';
import { cn } from "@/lib/utils";

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const siteUrl = "https://raunaq-adlakha.vercel.app";
const siteTitle = "Raunaq Adlakha | Full-Stack Developer, Founder & AI Builder";
const siteDescription =
  "Portfolio of Raunaq Adlakha, a full-stack software developer, founder, and technology leader building scalable web products, AI-powered systems, event platforms, automation workflows, and business software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Raunaq Adlakha",
  },
  description: siteDescription,
  applicationName: "Raunaq Adlakha Portfolio",
  keywords: [
    "Raunaq Adlakha",
    "Raunaq Adlakha portfolio",
    "Full Stack Developer",
    "Software Developer",
    "Founder",
    "Technology Leader",
    "AI Developer",
    "Automation Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "Google Gemini",
    "Vertex AI",
    "n8n",
    "Event Management Platform",
    "Certificate Automation",
    "QRBlaze",
    "CertiFrenzy",
    "UHI Care",
    "MediBot",
    "Slack AI Agent Builder",
    "SparkEdge Innovations",
    "QuantaLoop",
    "Delhi developer",
  ],
  authors: [{ name: "Raunaq Adlakha", url: siteUrl }],
  creator: "Raunaq Adlakha",
  publisher: "Raunaq Adlakha",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/profile-pic.jpeg",
        width: 800,
        height: 800,
        alt: "Profile picture of Raunaq Adlakha",
      },
    ],
    siteName: "Raunaq Adlakha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile-pic.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raunaq Adlakha",
  url: siteUrl,
  image: `${siteUrl}/profile-pic.jpeg`,
  jobTitle: "Full-Stack Software Developer",
  email: "mailto:raunaq.adlakha@gmail.com",
  telephone: "+91 8826907327",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bharati Vidyapeeth Institute of Management and Research",
  },
  sameAs: [
    "https://www.linkedin.com/in/raunaq-adlakha/",
    "https://github.com/The-arcane",
  ],
  knowsAbout: [
    "Full-stack software development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Google Gemini",
    "Vertex AI",
    "n8n automation",
    "AI-powered systems",
    "Event management platforms",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body
        className={cn("font-body antialiased bg-background text-foreground", openSans.variable, roboto.variable)}
        suppressHydrationWarning
      >
        <ClientOnly>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ClientOnly>
      </body>
    </html>
  );
}
