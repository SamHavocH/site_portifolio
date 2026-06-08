import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Samuel Fersil | Remote Data Engineer",
  description:
    "Bilingual portfolio for Samuel Fersil, a remote-focused Data Engineer working with Python, SQL, PySpark, AWS, ETL/ELT, automation and reliable data platforms.",
  openGraph: {
    title: "Samuel Fersil | Remote Data Engineer",
    description:
      "Production-minded data pipelines, cloud platforms, automation and analytics engineering for international teams.",
    url: "https://github.com/SamHavocH",
    images: ["https://github.com/SamHavocH.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
