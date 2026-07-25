import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://martelier-events.abiolar.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Martelier — Luxury Event Design & Décor",
  description:
    "Thoughtfully designed luxury event décor for weddings, milestone celebrations, and elevated gatherings.",
  openGraph: {
    title: "Martelier — Luxury Event Design & Décor",
    description: "Your vision, beautifully brought to life.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Martelier — Your vision, beautifully brought to life." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martelier — Luxury Event Design & Décor",
    description: "Your vision, beautifully brought to life.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
