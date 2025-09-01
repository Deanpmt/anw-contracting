import type { Metadata } from "next";
import "../globals.css";
import FloatingLogo from "../components/FloatingLogo";
import FloatingCTA from "../components/FloatingCTA";
import ScrollCTA from "../components/ScrollCTA";

export const metadata: Metadata = {
  title: "ANW Contracting",
  description: "Professional tree and dirt work services.",
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingLogo />
      <FloatingCTA />
      <ScrollCTA />

      {/* Mobile-only Call Now bar */}
      <a
        href="tel:+14065295321" 
        className="sm:hidden fixed bottom-0 left-0 right-0 bg-brand-safety text-white text-center font-semibold py-4 z-50"
      >
        📞 Call Now
      </a>

      <main>{children}</main>
    </>
  );
}
