import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import ClientOnly from "@/components/client-only";

export const metadata: Metadata = {
  title: "FolioForge - Personal Portfolio",
  description: "Crafted with FolioForge",
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
