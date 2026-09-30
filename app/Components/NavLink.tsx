"use client";

import Link from "next/link";
import { handleSmoothScroll } from "../Hooks/useScrollspy";

interface NavLinkProps {
  text: string;
  href: string;
  isActive?: boolean;
}

export default function NavLink({
  text,
  href,
  isActive = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => handleSmoothScroll(e, href)}
      className={`group font-sans transition-colors cursor-pointer px-3 h-full flex items-center text-lg ${
        isActive ? "text-primary" : "text-text-muted hover:text-primary"
      }`}
    >
      <span className="grid place-items-center">
        {/* text ascuns pt dim. bold */}
        <span
          className="invisible font-bold col-start-1 row-start-1 select-none"
          aria-hidden="true"
        >
          {text}
        </span>

        {/* text activ*/}
        <span
          className={`visible col-start-1 row-start-1 transition-all
             ${isActive ? "font-bold" : "font-medium group-hover:font-bold"}`}
        >
          {text}
        </span>
      </span>
    </Link>
  );
}
