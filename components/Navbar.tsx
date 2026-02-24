"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "الرئيسية", sectionId: "home" },
  { href: "#about", label: "من نحن", sectionId: "about" },
  { href: "#sectors", label: "مجالات العمل", sectionId: "sectors" },
  { href: "#steel", label: "توريد الحديد", sectionId: "steel" },
  { href: "https://molansteel.com/news/", label: "الأخبار", external: true },
  { href: "#clients", label: "عملائنا", sectionId: "clients" },
  { href: "#contact", label: "تواصل معنا", sectionId: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

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

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 h-[72px] flex items-center justify-between px-14 shadow-sm">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3.5">
        <div className="w-11 h-11 bg-forest-800 flex items-center justify-center text-white font-bold text-lg rounded-sm font-body">
          م
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-extrabold text-ink tracking-tight">مُلان</span>
          <span className="text-[10px] tracking-[3px] text-forest-700 uppercase mt-0.5 font-semibold">
            MOLAN STEEL
          </span>
        </div>
      </a>

      {/* Links */}
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

      {/* CTA */}
      <a
        href="https://molansteel.com/en/"
        className="hidden md:block bg-forest-800 text-white px-6 py-2.5 text-[13px] font-semibold rounded-sm border-2 border-forest-800 hover:bg-transparent hover:text-forest-800 transition-all duration-200 font-body"
      >
        English
      </a>
    </nav>
  );
}
