import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Suspense } from "react";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Xilie Spotify - OAuth Callback",
  description:
    "Authentication callback for Xilie Spotify VS Code extension. Complete the OAuth flow to connect your Spotify account.",
  keywords: [
    "Xilie",
    "Spotify",
    "VS Code",
    "OAuth",
    "Authentication",
    "Callback",
  ],
  authors: [{ name: "Xilie Team" }],
  creator: "d3fault",
  publisher: "d3fault",
  metadataBase: new URL("https://xilie-callback.vercel.app"),
  openGraph: {
    title: "Xilie Spotify - OAuth Callback",
    description:
      "Complete the OAuth flow to connect your Spotify account to Xilie VS Code extension.",
    url: "https://xilie-callback.vercel.app",
    siteName: "Xilie",
    images: [
      {
        url: "https://xilie-callback.vercel.app/web-app-manifest-192x192.png",
        width: 192,
        height: 192,
        alt: "Xilie Spotify Integration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xilie Spotify - OAuth Callback",
    description:
      "Complete the OAuth flow to connect your Spotify account to Xilie VS Code extension.",
    images: ["https://xilie-callback.vercel.app/web-app-manifest-192x192.png"],
    creator: "@DavidMANZI_093",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
