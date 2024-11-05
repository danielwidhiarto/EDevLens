// src/components/Navbar.js
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl px-8 py-4 rounded-lg transition-all duration-300 ${
        isOpen ? "bg-white shadow-lg" : "bg-white bg-opacity-80 shadow-md"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="#top"
          className="text-xl font-bold text-gray-800 hover:text-blue-500"
        >
          EDevLens
        </Link>
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`md:flex space-x-6 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="#about"
            className={`block mt-2 md:mt-0 text-gray-700 hover:text-blue-500 ${
              activeSection === "about" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={`block mt-2 md:mt-0 text-gray-700 hover:text-blue-500 ${
              activeSection === "projects" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`block mt-2 md:mt-0 text-gray-700 hover:text-blue-500 ${
              activeSection === "contact" ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
