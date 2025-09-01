import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingLogo from "./components/FloatingLogo";
import FloatingCTA from "./components/FloatingCTA";

export const metadata: Metadata = {
  title: "ANW Contracting",
  description: "Professional tree and dirt work services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-offwhite text-brand-charcoal font-sans antialiased">
        <Header />
        <FloatingLogo />
        <FloatingCTA />
        <main>{children}</main>
      </body>
    </html>
  );
}
