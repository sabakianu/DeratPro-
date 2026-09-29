import Link from "next/link";
import NavLink from "../Components/NavLink";
import Button from "../Components/Button";

export default function Navbar() {
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
        <NavLink text="Servicii" />
        <NavLink text="De Ce Noi" />
        <NavLink text="Cum Funcționează" />
        <NavLink text="Contact" />
      </nav>
      <div className="flex items-center gap-3 h-full">
        <Button variant="secondary" className="gap-2">
          <span className="material-symbols-outlined text-[18px] text-brand-accent">
            e911_emergency
          </span>
          <span>0700 000 000</span>
        </Button>

        <Button variant="primary">Cere Ofertă Rapidă</Button>
      </div>
    </header>
  );
}
