// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "ANW Contracting",
  description: "Professional tree and dirt work services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-offwhite text-brand-charcoal font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
