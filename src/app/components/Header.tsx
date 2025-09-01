'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-evergreen text-brand-offwhite text-sm border-b-2 border-brand-safety/50">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-2 px-2 sm:px-6 lg:px-6">

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-5 ml-auto">
          <Link href="/jeff-holden" className="hover:text-brand-safety">
            A-Team
          </Link>
          <Link href="/" className="hover:text-brand-safety">
            Home
          </Link>
          <Link href="/services" className="hover:text-brand-safety">
            Services
          </Link>
          <Link href="/about" className="hover:text-brand-safety">
            About
          </Link>
          <Link href="/contact" className="hover:text-brand-safety">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger toggle — only shows on mobile */}
        <button
          className="sm:hidden text-2xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col items-end space-y-2 p-3 bg-brand-evergreen text-white">
          <Link href="/jeff-holden" className="hover:text-brand-safety">
            A-Team
          </Link>
          <Link href="/" className="hover:text-brand-safety">
            Home
          </Link>
          <Link href="/services" className="hover:text-brand-safety">
            Services
          </Link>
          <Link href="/about" className="hover:text-brand-safety">
            About
          </Link>
          <Link href="/contact" className="hover:text-brand-safety">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
