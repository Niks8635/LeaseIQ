import type { Metadata } from "next";
import { inter, playfair } from "@/app/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LeaseIQ Societies — The Smarter Way to Run Your Society",
    template: "%s | LeaseIQ Societies",
  },
  description:
    "One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations. AI-powered management for modern residential communities.",
  keywords: [
    "society management software",
    "housing society management",
    "RWA management software",
    "apartment management software",
    "visitor management",
    "society accounting software",
    "community management platform",
    "AI society management",
  ],
  authors: [{ name: "LeaseIQ" }],
  creator: "LeaseIQ",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://leaseiq.in"
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "LeaseIQ Societies",
    title: "LeaseIQ Societies — The Smarter Way to Run Your Society",
    description:
      "One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaseIQ Societies — The Smarter Way to Run Your Society",
    description:
      "AI-powered management for modern residential communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
