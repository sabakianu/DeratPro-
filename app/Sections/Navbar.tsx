"use client";

import Link from "next/link";
import NavLink from "../Components/NavLink";
import Button from "../Components/Button";
import { useScrollspy } from "../Hooks/useScrollspy";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const activeSection = useScrollspy([
    "home",
    "services",
    "why-us",
    "how-works",
    "contact",
  ]);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-white/90 backdrop-blur-md border-b border-border-light shadow-md h-20 px-6 flex items-center justify-between font-['Plus_Jakarta_Sans',sans-serif]">
      <Link href="/" className="flex items-center h-full outline-none">
        <img
          alt="DeratPro Logo"
          className="h-20 w-auto object-contain"
          src="/logo.png"
        />
      </Link>

      <nav className="hidden lg:flex items-center h-full gap-8 text-sm">
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

      <div className="flex items-center gap-3 h-full">
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
    </header>
  );
}
