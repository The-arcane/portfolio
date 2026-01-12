import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import ClientOnly from "@/components/client-only";
import { userProfileData } from "@/data/mock";

const siteUrl = "https://your-portfolio-url.com"; // Replace with your actual domain

export const metadata: Metadata = {
  title: `${userProfileData.name} | ${userProfileData.title}`,
  description: userProfileData.bio[0],
  keywords: ["Raunaq Adlakha", "Portfolio", "Web Developer", "AI", "ML", "React", "Next.js", "Technologist"],
  authors: [{ name: userProfileData.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${userProfileData.name} | ${userProfileData.title}`,
    description: userProfileData.bio[0],
    images: [
      {
        url: `${siteUrl}/profile-pic.jpeg`,
        width: 800,
        height: 800,
        alt: userProfileData.name,
      },
    ],
    siteName: `${userProfileData.name}'s Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${userProfileData.name} | ${userProfileData.title}`,
    description: userProfileData.bio[0],
    images: [`${siteUrl}/profile-pic.jpeg`],
  },
  metadataBase: new URL(siteUrl),
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
