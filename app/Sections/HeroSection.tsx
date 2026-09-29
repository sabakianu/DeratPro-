import Button from "../Components/Button";
import StatBlock from "../Components/StatBlock";
import HeroVisual from "../Components/HeroVisual";
import Badge from "../Components/Badge";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-main py-16 lg:py-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-120 h-120 rounded-full bg-brand-accent/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <Badge
              variant="soft"
              className="bg-bg-muted border-secondary/30 text-primary"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              <span>
                SERVICII PROFESIONALE DDD AUTORIZATE • DISPONIBILITATE 24/7
              </span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight">
              DeratPro –{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-brand-accent bg-clip-text text-transparent">
                Protecție Totală
              </span>{" "}
              Împotriva Dăunătorilor
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
              Servicii profesionale certificate de deratizare, dezinsecție și
              dezinfecție pentru locuințe, spații comerciale și depozite
              industriale. Intervenție rapidă în maxim 2 ore cu substanțe
              ecologice avizate de Ministerul Sănătății.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                className="gap-2 px-8 py-3.5 text-sm sm:text-base font-bold shadow-md group"
              >
                <span>Cere Ofertă Gratuită</span>
                <span className="material-symbols-outlined text-[20px] text-brand-accent group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Button>

              <Button
                href="tel:0722123456"
                variant="secondary"
                className="gap-2 px-8 py-3.5 text-sm sm:text-base font-bold shadow-sm text-primary border border-border-light bg-bg-white"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">
                  call
                </span>
                <span>Sună Acum: 0722 123 456</span>
              </Button>
            </div>

            <div className="w-full pt-8 mt-2 border-t border-border-light grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <StatBlock value="100%" label="Garanție Rezultat" />
              <StatBlock value="24/7" label="Intervenții Urgență" />
              <StatBlock value="12+ Ani" label="Experiență DDD" />
              <StatBlock value="DSP / MS" label="Avizat Oficial" />
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
