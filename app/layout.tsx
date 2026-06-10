import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naomiivie.vercel.app"),
  title: {
    default: "Naomi Ivie",
    template: "%s · Naomi Ivie",
  },
  description:
    "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone, no internet required.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naomi Ivie",
    description:
      "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone.",
    url: "https://naomiivie.vercel.app",
    siteName: "Naomi Ivie",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naomi Ivie",
    description:
      "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naomi Ivie",
  url: "https://naomiivie.vercel.app",
  email: "nivie@wesleyan.edu",
  jobTitle: "Founder",
  nationality: "Nigerian",
  worksFor: {
    "@type": "Organization",
    name: "Education for Equality",
    url: "https://eduforequality.org",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Wesleyan University" },
    { "@type": "EducationalOrganization", name: "African Leadership Academy" },
  ],
  sameAs: [
    "https://linkedin.com/in/naomi-ivie",
    "https://github.com/thegirwhocodes",
    "https://sabi.eduforequality.org",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
