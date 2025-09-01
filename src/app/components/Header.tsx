'use client';

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-evergreen text-brand-offwhite text-sm sm:text-sm lg:text-sm border-b-2 border-brand-safety/50">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-2 px-2 sm:px-6 sm:py-2 lg:px-6 lg:py-2">

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-5 ml-auto">
          <a href="/jeff-holden" className="hover:text-brand-safety">A-Team</a>
          <a href="/" className="hover:text-brand-safety">Home</a>
          <a href="/services" className="hover:text-brand-safety">Services</a>
          <a href="/about" className="hover:text-brand-safety">About</a>
          <a href="/contact" className="hover:text-brand-safety">Contact Us</a>
        </nav>

        {/* Hamburger toggle — only shows on mobile */}
        <button
          className="sm:hidden text-2xl ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col items-end space-y-2 p-3 bg-brand-evergreen text-white">
          <a href="/jeff-holden" className="hover:text-brand-safety">A-Team</a>
          <a href="/" className="hover:text-brand-safety">Home</a>
          <a href="/services" className="hover:text-brand-safety">Services</a>
          <a href="/about" className="hover:text-brand-safety">About</a>
          <a href="/contact" className="hover:text-brand-safety">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
