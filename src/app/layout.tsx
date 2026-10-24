import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Manrope, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { company } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — Premium Aluminium Windows & Doors`,
    template: `%s · ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "aluminium doors",
    "architectural glazing",
    "aluminium windows",
    "sliding windows",
    "casement windows",
    "tilt and turn windows",
    "sliding doors",
    "window manufacturer Ahmedabad",
    company.name,
  ],
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_IN",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
};

// Structured data so search engines can show business details
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.description,
  url: company.url,
  telephone: company.phone,
  email: company.email,
  address: company.address,
  logo: `${company.url}/icon.svg`,
  foundingDate: String(company.founded),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Suspense>
            <Navbar />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
