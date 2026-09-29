import Link from "next/link";
import FooterCheckItem from "../Components/FooterCheckItem";
import FooterLink from "../Components/FooterLink";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* DeratPro DDD */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px]">
                verified_user
              </span>
              <span className="text-2xl text-white font-bold tracking-tight">
                DeratPro DDD
              </span>
            </div>
            <p className="text-sm text-inverse-on-surface/80 leading-relaxed">
              Servicii integrate de Deratizare, Dezinsecție și Dezinfecție la
              standarde clinice și industriale. Soluții certificate pentru
              spații rezidențiale, comerciale și agroalimentare.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-tertiary-fixed-dim font-semibold text-xs uppercase tracking-wider border border-white/5">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                24/7 Urgențe DDD Active
              </div>
            </div>
          </div>

          {/* Certificări & Acreditări */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">
              Certificări & Acreditări
            </h4>
            <ul className="space-y-3 text-sm text-inverse-on-surface/80">
              <FooterCheckItem text="Autorizat DSP" />
              <FooterCheckItem text="Acreditat ANSVSA" />
              <FooterCheckItem text="Certificare ISO 9001:2015" />
              <FooterCheckItem text="Standard Mediu ISO 14001:2015" />
            </ul>
          </div>

          {/* Navigare Rapidă */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Navigare Rapidă</h4>
            <ul className="space-y-2 text-sm text-inverse-on-surface/80">
              <FooterLink href="#servicii" text="Deratizare Profesională" />
              <FooterLink href="#servicii" text="Dezinsecție Ecologică" />
              <FooterLink href="#servicii" text="Dezinfecție Nebulizare ULV" />
              <FooterLink
                href="#cum-functioneaza"
                text="Protocol HACCP & Proces-Verbal"
              />
              <FooterLink href="#de-ce-deratpro" text="Garanția Intervenției" />
            </ul>
          </div>

          {/* Dispecerat & Program */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">
              Dispecerat & Program
            </h4>
            <div className="space-y-2 text-sm text-inverse-on-surface/80">
              <p className="text-white font-semibold mb-3">
                Intervenții Rapide: Non-Stop 24/7
              </p>
              <p>
                Program Administrativ:
                <br />
                Luni - Vineri: 08:00 - 18:00
              </p>
              <p className="pt-2">
                Telefon Urgențe:{" "}
                <span className="text-tertiary-fixed-dim font-bold">
                  0700 000 000
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="text-white">dispecerat@deratpro.ro</span>
              </p>
            </div>
          </div>
        </div>

        {/* Linia de jos (Copyright & Legal) */}
        <div className="pt-8 border-t border-inverse-on-surface/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-inverse-on-surface/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DeratPro Servicii DDD S.R.L. Toate
            drepturile rezervate.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 font-semibold">
            <Link
              href="#"
              className="hover:text-tertiary-fixed-dim transition-colors"
            >
              Termeni și Condiții
            </Link>
            <Link
              href="#"
              className="hover:text-tertiary-fixed-dim transition-colors"
            >
              Politică Confidențialitate
            </Link>
            <Link
              href="#"
              className="hover:text-tertiary-fixed-dim transition-colors"
            >
              ANPC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
