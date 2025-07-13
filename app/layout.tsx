import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CartProvider } from '../context/CartContext'
import { products } from '../data/products'
import CartSidebar from "@/components/cart-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sunzz Pro – Online Shop",
  description: "Pixel-perfect Next.js category filter UI with Tailwind, TypeScript, and Figma-accurate design.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <CartProvider>
          <Header allProducts={products} />
          <CartSidebar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
