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
  title: "Abbah Mitra Global",
  description: "Kontraktor Interior & Eksterior",
  icons: {
    icon: "/logo/logo-amg.jpg", // 👈 pakai jpg ini
  },
  verification: {
    google: "4BixW-ps3BkiJnkAzNlaOjpUf7AFL_H83h0_EKj64zY", // 👈 taruh di sini
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo-amg.jpg" type="image/jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
