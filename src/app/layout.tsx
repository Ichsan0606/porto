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
    "Abbah Mitra Global adalah kontraktor interior & eksterior profesional untuk rumah, kantor, dan komersial. Berpengalaman & terpercaya.",
  keywords: [
    "Abbah Mitra Global",
    "kontraktor interior",
    "kontraktor eksterior",
    "jasa interior",
    "interior kantor",
  ],
  verification: {
    google: "4BixW-ps3BkiJnkAzNlaOjpUf7AFL_H83h0_EKj64zY",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
