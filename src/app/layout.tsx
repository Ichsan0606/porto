import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbah Mitra Global | Kontraktor Interior & Eksterior Profesional",
  description:
    "Abbah Mitra Global adalah kontraktor interior & eksterior profesional untuk rumah, kantor, dan bangunan komersial.",
  keywords: [
    "Abbah Mitra Global",
    "Kontraktor interior",
    "Kontraktor eksterior",
    "Jasa interior",
    "Jasa Interior Bekasi",
    "Jasa Interior Bekasi Timur",
  ],

  verification: {
    google: "4BixW-ps3BkiJnkAzNlaOjpUf7AFL_H83h0_EKj64zY",
  },

  openGraph: {
    title: "Abbah Mitra Global | Kontraktor Interior & Eksterior",
    description:
      "Kontraktor interior & eksterior profesional untuk rumah dan bangunan komersial.",
    url: "https://abbahmitraglobal.vercel.app",
    siteName: "Abbah Mitra Global",
    images: [
      {
        url: "https://abbahmitraglobal.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abbah Mitra Global",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abbah Mitra Global | Kontraktor Interior & Eksterior",
    description:
      "Kontraktor interior & eksterior profesional untuk rumah dan bangunan komersial.",
    images: ["https://abbahmitraglobal.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
