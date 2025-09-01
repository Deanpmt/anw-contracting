import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "../globals.css";
import FloatingLogo from "../components/FloatingLogo";
import FloatingCTA from "../components/FloatingCTA";

export const metadata: Metadata = {
  title: "ANW Contracting",
  description: "Professional tree and dirt work services.",
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingLogo />
      <FloatingCTA />
      <main>{children}</main>
    </>
  );
}
