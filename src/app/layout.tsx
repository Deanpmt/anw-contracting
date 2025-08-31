import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["600"], // Simi Bold
});

export const metadata: Metadata = {
  title: "ANW Contracting",
  description: "Professional tree and dirt work services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="bg-brand-evergreen text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
