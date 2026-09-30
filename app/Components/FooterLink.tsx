"use client";

import Link from "next/link";
import { handleSmoothScroll } from "../Hooks/useScrollspy";

interface FooterLinkProps {
  href: string;
  text: string;
}

export default function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => handleSmoothScroll(e, href)}
      className="block hover:text-brand-accent transition-colors"
    >
      {text}
    </Link>
  );
}
