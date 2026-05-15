"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primaryDark border-b-4 border-gold z-50 px-4 md:px-10 lg:px-15">
      <div className="flex justify-between items-center h-16 md:h-17">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-linear-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="text-white font-serif font-extrabold text-lg md:text-xl tracking-wider">
            Ezra<span className="text-gold">Insure</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-white/70">
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#coverage" className="hover:text-white">
            Coverage
          </a>
          <a href="#platform" className="hover:text-white">
            Platform
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3">
          <button className="border border-white/30 text-white text-sm px-4 py-2 rounded-md">
            Sign in
          </button>
          <button className="bg-gold text-black text-sm font-medium px-4 py-2 rounded-md">
            Get started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 text-white/80">
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#coverage" className="hover:text-white">
            Coverage
          </a>
          <a href="#platform" className="hover:text-white">
            Platform
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>

          <div className="flex flex-col gap-2 mt-2">
            <button className="border border-white/30 text-white text-sm px-4 py-2 rounded-md">
              Sign in
            </button>
            <button className="bg-gold text-black text-sm font-medium px-4 py-2 rounded-md">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
