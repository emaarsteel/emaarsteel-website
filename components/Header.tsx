"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = {
  ar: [
    { href: "#home", label: "الرئيسية", sectionId: "home" },
    { href: "#about", label: "من نحن", sectionId: "about" },
    { href: "#sectors", label: "مجالات العمل", sectionId: "sectors" },
    { href: "#steel", label: "منتجاتنا", sectionId: "steel" },
    { href: "https://emaarsteel.com/news/", label: "الأخبار", external: true },
    { href: "#clients", label: "عملائنا", sectionId: "clients" },
    { href: "#contact", label: "تواصل معنا", sectionId: "contact" },
  ],
  en: [
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#about", label: "About Us", sectionId: "about" },
    { href: "#sectors", label: "Services", sectionId: "sectors" },
    { href: "#steel", label: "Products", sectionId: "steel" },
    { href: "https://emaarsteel.com/news/", label: "News", external: true },
    { href: "#clients", label: "Our Clients", sectionId: "clients" },
    { href: "#contact", label: "Contact", sectionId: "contact" },
  ],
};

export default function Header() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = navLinks[lang];

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "home";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* TopBar — collapses on scroll */}
        <div
          className={`hidden md:flex items-center justify-between text-xs px-14 border-b overflow-hidden transition-all duration-300 ${
            scrolled
              ? "max-h-0 opacity-0 border-transparent"
              : "max-h-10 opacity-100 bg-transparent border-white/10 text-white/60"
          }`}
          style={{ height: scrolled ? 0 : "2.5rem" }}
        >
          {/* Contact info */}
          <div className="flex items-center gap-7 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <svg className="text-forest-300" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.99 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.14 6.14l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <a href="tel:+966530018050" className="hover:text-forest-300 transition-colors">+966530018050</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-forest-300" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:info@emaarsteel.com" className="hover:text-forest-300 transition-colors">info@emaarsteel.com</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-forest-300" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{lang === "ar" ? "الرياض - السلي - شارع هارون الرشيد" : "Riyadh - Al-Sali - Harun Al-Rashid St."}</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-1.5">
            <a href="https://www.facebook.com/emaarsteel.co" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="https://twitter.com/EmaarSteel_co" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
            </a>
            <a href="https://www.instagram.com/emaarsteel.co/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /></svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+966530018050" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/emaarsteelco/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all duration-200">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>

        {/* Navbar */}
        <nav
          className={`h-18 flex items-center justify-between px-4 md:px-14 transition-all duration-300 ${
            scrolled
              ? "bg-white border-b border-gray-200 shadow-sm"
              : "bg-transparent border-b border-white/10"
          }${!scrolled ? " nav-transparent" : ""}`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src={scrolled ? "/logos/logo_black.png" : "/logos/logo_white.png"}
              alt="إعمار للحديد والصلب"
              width={200}
              height={70}
              className="h-16 w-auto object-contain transition-opacity duration-300"
              priority
            />
          </a>

          {/* Desktop Links */}
          <ul className="desktop-nav flex list-none">
            {links.map(({ href, label, sectionId, external }) => (
              <li key={href}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`nav-link block px-4 h-18 leading-18 text-[13.5px] font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-600 hover:text-forest-800"
                      : "text-white/80 hover:text-white"
                  }${sectionId && active === sectionId ? " active" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className={`hidden md:flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold rounded-sm border-2 transition-all duration-300 font-body ${
                scrolled
                  ? "bg-forest-800 text-white border-forest-800 hover:bg-transparent hover:text-forest-800"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              {lang === "ar" ? "English" : "عربي"}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-forest-800" : "bg-white"} ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-forest-800" : "bg-white"} ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-forest-800" : "bg-white"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

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
        className={`fixed right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <ul className="flex flex-col list-none pt-6">
            {links.map(({ href, label, sectionId, external }) => (
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
          <div className="mt-auto p-6 border-t border-gray-200">
            <button
              onClick={() => { toggle(); handleLinkClick(); }}
              className="flex items-center justify-center gap-2 w-full bg-forest-800 text-white px-6 py-3 text-sm font-semibold rounded-sm border-2 border-forest-800 hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              {lang === "ar" ? "English" : "عربي"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
