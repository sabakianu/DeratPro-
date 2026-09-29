import Link from "next/link";

interface FooterLinkProps {
  href: string;
  text: string;
}

export default function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <li className="py-1">
      <Link
        href={href}
        className="hover:text-tertiary-fixed-dim transition-colors"
      >
        {text}
      </Link>
    </li>
  );
}
