import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duplacye's Barbershop | Traditional Barbering in Downtown Hamilton",
  description:
    "Experience over 30 years of traditional barbering excellence at Duplacye's Barbershop. Located at 150 King St East, Hamilton. Quality haircuts, shaves, and family-friendly service since the 1990s.",
  keywords:
    "barbershop, Hamilton, haircuts, shave, traditional barber, downtown Hamilton, family barbershop, Kosovo barber",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
