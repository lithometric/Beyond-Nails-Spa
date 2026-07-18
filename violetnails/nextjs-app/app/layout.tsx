import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { business, SITE_URL } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Beyond Nails & Spa | Nail Salon in Union, NJ",
    template: "%s | Beyond Nails & Spa · Union, NJ",
  },
  description:
    "Beyond Nails & Spa is a top-rated nail salon on Stuyvesant Ave in Union, NJ. Manicures, pedicures, gel, acrylics, custom nail art, lash extensions & brows. Walk-ins welcome — call (908) 810-8838.",
  keywords: [
    "nail salon Union NJ",
    "manicure Union NJ",
    "pedicure Union NJ",
    "gel nails Union NJ",
    "acrylic nails Union NJ",
    "nail art Union NJ",
    "lash extensions Union NJ",
    "Beyond Nails and Spa",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Beyond Nails & Spa",
    title: "Beyond Nails & Spa | Nail Salon in Union, NJ",
    description:
      "Manicures, pedicures, custom nail art, lashes & brows in Union, NJ. Rated 4.1★ on Google. Walk-ins welcome.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Nails & Spa | Nail Salon in Union, NJ",
    description:
      "Manicures, pedicures, custom nail art, lashes & brows in Union, NJ. Walk-ins welcome.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: business.name,
  url: SITE_URL,
  telephone: "+19088108838",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.6973038,
    longitude: -74.2684725,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  sameAs: [business.instagram, business.googleMapsUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
