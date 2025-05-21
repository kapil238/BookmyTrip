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
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b border-dashed border-gray-300">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-4 py-3">
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 w-full flex-col bg-white px-4 py-6 shadow-md sm:shadow-none sm:static sm:flex sm:flex-row sm:items-center sm:bg-transparent sm:gap-8 text-sm font-medium z-50 justify-end`}
        >
          <Link
            href="/"
            className={`flex items-center gap-1 py-2 sm:py-0 ${
              isActive("/") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
            }`}
          >
            <FaHome />
            HOME
          </Link>
          <Link
            href="/booking"
            className={`flex items-center gap-1 py-2 sm:py-0 ${
              isActive("/booking") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
            }`}
          >
            <FaUser />
            MY BOOKING
          </Link>
          <Link
            href="/popularPlace"
            className={`flex items-center gap-1 py-2 sm:py-0 ${
              isActive("/popularPlace") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
            }`}
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
