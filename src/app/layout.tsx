import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import ClientOnly from "@/components/client-only";
import { userProfileData } from "@/data/mock";

// IMPORTANT: Replace with your actual domain when you deploy
const siteUrl = "https://your-portfolio-url.com";

export const metadata: Metadata = {
  title: "Raunaq Adlakha - Technologist & Innovator Portfolio",
  description: "The official portfolio for Raunaq Adlakha, an aspiring technologist and innovator specializing in web development, AI, and ML. Discover my projects, skills, and experience.",
  keywords: ["Raunaq Adlakha", "Portfolio", "Web Developer", "AI", "ML", "React", "Next.js", "Technologist", "Innovator"],
  authors: [{ name: "Raunaq Adlakha", url: siteUrl }],
  creator: "Raunaq Adlakha",
  publisher: "Raunaq Adlakha",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Raunaq Adlakha - Technologist & Innovator Portfolio",
    description: "The official portfolio for Raunaq Adlakha, an aspiring technologist and innovator specializing in web development, AI, and ML.",
    images: [
      {
        url: "/profile-pic.jpeg", // Using relative path for Open Graph image
        width: 800,
        height: 800,
        alt: "Profile picture of Raunaq Adlakha",
      },
    ],
    siteName: "Raunaq Adlakha's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Optional: replace with your Twitter handle
    creator: "@yourtwitterhandle", // Optional: replace with your Twitter handle
    title: "Raunaq Adlakha - Technologist & Innovator Portfolio",
    description: "The official portfolio for Raunaq Adlakha, specializing in web development, AI, and ML.",
    images: [`${siteUrl}/profile-pic.jpeg`],
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
      </head>

      <body
        className="font-body antialiased bg-background text-foreground"
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
