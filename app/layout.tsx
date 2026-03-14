import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Digital Agency, Kigali Rwanda`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "web development Kigali",
    "digital agency Rwanda",
    "website design Rwanda",
    "web application development",
    "UI UX design Kigali",
    "e-commerce Rwanda",
    "BIJA digital agency",
    "Next.js agency Africa",
    "East Africa digital agency",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - Digital Agency, Kigali Rwanda`,
    description: SITE.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} - Digital Agency` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - Digital Agency, Kigali Rwanda`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#e0e5ec",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
