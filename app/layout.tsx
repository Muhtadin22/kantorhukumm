import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "kantor hukum | OBH YPP AL-KAMAL",
  description: "Providing authoritative legal counsel, academic rigor, and professional excellence in Jakarta, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        {/* Tambahkan pt-20 agar konten tidak tertutup oleh navbar yang fixed */}
        <main className="flex-grow pt-20">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}