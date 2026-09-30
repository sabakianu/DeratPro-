"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLink from "../Components/NavLink";
import Button from "../Components/Button";
import { useScrollspy, handleSmoothScroll } from "../Hooks/useScrollspy";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const activeSection = useScrollspy([
    "home",
    "services",
    "why-us",
    "how-works",
    "contact",
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-bg-white/90 backdrop-blur-md border-b border-border-light shadow-md font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="h-20 px-6 flex items-center justify-between">
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="flex items-center h-full outline-none"
        >
          <img
            alt="DeratPro Logo"
            className="h-20 w-auto object-contain"
            src="/logo.png"
          />
        </Link>

        {/* desktop */}
        <nav className="hidden xl:flex items-center h-full gap-8 text-sm">
          <NavLink
            text="Servicii"
            href="#services"
            isActive={activeSection === "services"}
          />
          <NavLink
            text="De Ce Noi"
            href="#why-us"
            isActive={activeSection === "why-us"}
          />
          <NavLink
            text="Cum Funcționează"
            href="#how-works"
            isActive={activeSection === "how-works"}
          />
          <NavLink
            text="Contact"
            href="#contact"
            isActive={activeSection === "contact"}
          />
        </nav>

        <div className="hidden xl:flex items-center gap-3 h-full">
          <Button
            href={siteConfig.contact.emergencyPhone.href}
            variant="secondary"
            className="gap-2"
          >
            <span className="material-symbols-outlined text-[18px] text-brand-accent">
              e911_emergency
            </span>
            <span>{siteConfig.contact.emergencyPhone.display}</span>
          </Button>
          <Button variant="primary" href="#contact">
            Cere Ofertă Rapidă
          </Button>
        </div>

        {/* buton mobile */}
        <button
          className="flex xl:hidden items-center text-primary p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-bg-white border-b border-border-light shadow-xl xl:hidden flex flex-col px-6 py-8 gap-6 animate-in slide-in-from-top-2">
          <nav
            className="flex flex-col gap-6"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <NavLink
              text="Servicii"
              href="#services"
              isActive={activeSection === "services"}
            />
            <NavLink
              text="De Ce Noi"
              href="#why-us"
              isActive={activeSection === "why-us"}
            />
            <NavLink
              text="Cum Funcționează"
              href="#how-works"
              isActive={activeSection === "how-works"}
            />
            <NavLink
              text="Contact"
              href="#contact"
              isActive={activeSection === "contact"}
            />
          </nav>

          <hr className="border-border-light" />

          <div className="flex flex-col gap-3">
            <Button
              href={siteConfig.contact.emergencyPhone.href}
              variant="secondary"
              className="w-full justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-brand-accent">
                e911_emergency
              </span>
              <span>{siteConfig.contact.emergencyPhone.display}</span>
            </Button>
            <Button
              variant="primary"
              href="#contact"
              className="w-full justify-center"
            >
              Cere Ofertă Rapidă
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
