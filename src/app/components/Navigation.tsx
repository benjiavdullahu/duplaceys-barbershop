"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [{ href: "/", label: "Home" }];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for sticky header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/general/Logo.png"
                alt="Duplacye's Barbershop Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Duplacye&apos;s
              </h1>
              <p className="text-sm text-gray-600">Barbershop</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Quick Navigation for Homepage Sections */}
            {pathname === "/" && (
              <>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  Location
                </button>
              </>
            )}

            <a
              href="tel:905-522-8512"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-200"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Quick Navigation for Homepage Sections */}
              {pathname === "/" && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Jump to Services
                  </button>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Jump to Team
                  </button>
                  <button
                    onClick={() => scrollToSection("location")}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Jump to Location
                  </button>
                </>
              )}

              <div className="border-t border-gray-200 my-2"></div>
              <a
                href="tel:905-522-8512"
                className="block px-4 py-2 bg-red-600 text-white font-bold rounded-lg mx-4 text-center transition-colors duration-200 hover:bg-red-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Call 905-522-8512
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
