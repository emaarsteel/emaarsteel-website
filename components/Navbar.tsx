"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "الرئيسية", sectionId: "home" },
  { href: "#about", label: "من نحن", sectionId: "about" },
  { href: "#sectors", label: "مجالات العمل", sectionId: "sectors" },
  { href: "#steel", label: "توريد الحديد", sectionId: "steel" },
  { href: "https://emaarsteel.com/news/", label: "الأخبار", external: true },
  { href: "#clients", label: "عملائنا", sectionId: "clients" },
  { href: "#contact", label: "تواصل معنا", sectionId: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const onScroll = () => {
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 h-[72px] flex items-center justify-between px-4 md:px-14 shadow-sm">
        {/* Logo */}
        <a href="#home" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src="/logos/logo_black.png"
            alt="إعمار للحديد والصلب"
            width={200}
            height={70}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="desktop-nav flex list-none">
          {navLinks.map(({ href, label, sectionId, external }) => (
            <li key={href}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`nav-link block px-4 h-[72px] leading-[72px] text-[13.5px] font-medium text-gray-600 hover:text-forest-800 transition-colors${
                  sectionId && active === sectionId ? " active" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://emaarsteel.com/en/"
            className="hidden md:block bg-forest-800 text-white px-6 py-2.5 text-[13px] font-semibold rounded-sm border-2 border-forest-800 hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
          >
            English
          </a>
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[72px] right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Links */}
          <ul className="flex flex-col list-none pt-6">
            {navLinks.map(({ href, label, sectionId, external }) => (
              <li key={href}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={handleLinkClick}
                  className={`block px-6 py-4 text-base font-medium text-gray-700 hover:bg-forest-50 hover:text-forest-800 transition-colors border-r-4 ${
                    sectionId && active === sectionId
                      ? "bg-forest-50 text-forest-800 border-forest-800"
                      : "border-transparent"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-auto p-6 border-t border-gray-200">
            <a
              href="https://emaarsteel.com/en/"
              onClick={handleLinkClick}
              className="block w-full text-center bg-forest-800 text-white px-6 py-3 text-sm font-semibold rounded-sm border-2 border-forest-800 hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
            >
              English
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
