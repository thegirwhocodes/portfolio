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
  metadataBase: new URL("https://naomiivie.com"),
  title: "Naomi Ivie",
  description:
    "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone, no internet required.",
  openGraph: {
    title: "Naomi Ivie",
    description:
      "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Naomi Ivie",
    description:
      "Founder of Sabi — voice AI that teaches Nigerian children to read on any phone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
