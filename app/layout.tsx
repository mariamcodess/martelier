import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martelier — Luxury Event Design & Décor",
  description:
    "Artfully composed environments for weddings, milestone celebrations, and intimate gatherings.",
  openGraph: {
    title: "Martelier — Luxury Event Design & Décor",
    description: "Where occasions become atmosphere.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Martelier — Where occasions become atmosphere." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martelier — Luxury Event Design & Décor",
    description: "Where occasions become atmosphere.",
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
