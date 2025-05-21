"use client";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaUmbrellaBeach,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-dashed border-gray-300">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="TOOR Logo"
              width={180}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-orange-500 text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 w-full flex-col bg-white px-4 py-6 shadow-md sm:shadow-none sm:static sm:flex sm:flex-row sm:items-center sm:bg-transparent sm:gap-8 text-sm font-medium z-50 justify-end`}
        >
          <Link
            href="#"
            className="flex items-center gap-1 text-orange-500 py-2 sm:py-0"
          >
            <FaHome />
            HOME
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-500 py-2 sm:py-0"
          >
            <FaUser />
            MY BOOKING
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-500 py-2 sm:py-0"
          >
            <FaUmbrellaBeach />
            POPULAR PLACES
          </Link>
          <Link
            href="/auth/login"
            className="mt-4 sm:mt-0 border border-orange-400 px-4 py-1 rounded-full text-orange-500 hover:bg-orange-100 transition text-center"
          >
            SIGN IN
          </Link>
        </nav>
      </div>
    </header>
  );
}
