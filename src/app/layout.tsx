import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteMetaData } from "@/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-950 text-stone-50 antialiased`}>{children}</body>
    </html>
  );
}
