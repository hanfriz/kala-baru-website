"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 fixed top-0 left-0 z-50">

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-white">
          Kopi Kala Baru
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200">

          <Link className="hover:text-amber-500" href="/">Home</Link>
          <Link className="hover:text-amber-500" href="/about">About</Link>
          <Link className="hover:text-amber-500" href="/products">Products</Link>
          <Link className="hover:text-amber-500" href="/activities">Activities</Link>
          <Link className="hover:text-amber-500" href="/location">Location</Link>
          <Link className="hover:text-amber-500" href="/contact">Contact</Link>

        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-800 dark:text-gray-200">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/activities" onClick={() => setOpen(false)}>Activities</Link>
          <Link href="/location" onClick={() => setOpen(false)}>Location</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  );
}