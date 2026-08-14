import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { InstagramFab } from "./components/InstagramFab";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://basaret.se";
const title = "Basåret";
const description =
  "Information om Nolleveckan för tekniskt basår på Linköpings universitet.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1600,
        height: 1071,
        alt: "Basårets faddrar framför Linköpings universitet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <InstagramFab />
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
