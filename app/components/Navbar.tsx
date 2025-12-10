"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-white/20 text-white shadow-lg"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Planetz
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
