"use client";

import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

interface NavLinkItem {
  name: string;
  id: string;
}

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks: NavLinkItem[] = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-gray-100 hover:text-purple-400 transition-colors duration-300"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/40 transition-all duration-300 transform hover:scale-105"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/ParthDedhia_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                download
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-purple-900/40 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-zinc-900/90 backdrop-blur-lg shadow-lg transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/40 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/ParthDedhia_Resume_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-900/40 transition-all duration-300 flex items-center gap-2"
            download
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
