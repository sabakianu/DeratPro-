import Link from "next/link";
import FooterCheckItem from "../Components/FooterCheckItem";
import FooterLink from "../Components/FooterLink";
import Badge from "../Components/Badge";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-accent text-[28px]">
                verified_user
              </span>
              <span className="text-2xl text-white font-bold tracking-tight">
                DeratPro DDD
              </span>
            </div>
            <p className="text-sm text-text-light/80 leading-relaxed">
              Servicii integrate de Deratizare, Dezinsecție și Dezinfecție la
              standarde clinice și industriale. Soluții certificate pentru
              spații rezidențiale, comerciale și agroalimentare.
            </p>
            <div className="pt-2">
              <Badge
                variant="dark"
                className="border border-white/10 bg-white/5 text-brand-accent shadow-none px-3"
              >
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                24/7 Urgențe DDD Active
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">
              Certificări & Acreditări
            </h4>
            <ul className="space-y-3 text-sm text-text-light/80">
              <FooterCheckItem text="Autorizat DSP" />
              <FooterCheckItem text="Acreditat ANSVSA" />
              <FooterCheckItem text="Certificare ISO 9001:2015" />
              <FooterCheckItem text="Standard Mediu ISO 14001:2015" />
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Navigare Rapidă</h4>
            <ul className="space-y-2 text-sm text-text-light/80">
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

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">
              Dispecerat & Program
            </h4>
            <div className="space-y-2 text-sm text-text-light/80">
              <p className="text-white font-semibold mb-3">
                Intervenții Rapide: {siteConfig.schedule.emergency}
              </p>
              <p>
                Program Administrativ:
                <br />
                {siteConfig.schedule.administrative}
              </p>
              <p className="pt-2">
                Telefon Urgențe:{" "}
                <a
                  href={siteConfig.contact.emergencyPhone.href}
                  className="text-brand-accent font-bold hover:underline transition-all"
                >
                  {siteConfig.contact.emergencyPhone.display}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={siteConfig.contact.dispatchEmail.href}
                  className="text-white hover:underline transition-all"
                >
                  {siteConfig.contact.dispatchEmail.display}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-text-light/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-light/60">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DeratPro Servicii DDD S.R.L. Toate
            drepturile rezervate.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 font-semibold">
            <Link
              href="#"
              className="hover:text-brand-accent transition-colors"
            >
              Termeni și Condiții
            </Link>
            <Link
              href="#"
              className="hover:text-brand-accent transition-colors"
            >
              Politică Confidențialitate
            </Link>
            <Link
              href="#"
              className="hover:text-brand-accent transition-colors"
            >
              ANPC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
