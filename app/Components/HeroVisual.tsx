import React from "react";

export default function HeroVisual() {
  return (
    <div className="w-full relative rounded-2xl bg-bg-muted p-2 shadow-lg border border-border-light">
      <div className="relative w-full h-[460px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-bg-white via-bg-muted to-bg-main flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center p-6 space-y-3 select-none">
          <div className="w-20 h-20 rounded-full bg-bg-white flex items-center justify-center shadow-level-1 border border-border-light text-primary">
            <span className="material-symbols-outlined text-4xl animate-pulse">
              security
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-border-dark font-semibold">
            Scenă Interactivă 3D
          </span>
        </div>

        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-white/90 backdrop-blur-md border border-border-light shadow-sm text-primary text-xs font-semibold">
          <span className="material-symbols-outlined text-[16px] text-brand-accent">
            verified
          </span>
          <span>ESCORTĂ BIO-SECURIZATĂ</span>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-dark/90 text-text-light backdrop-blur-md shadow-md text-xs font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
          <span>
            Dispecerat Mobil:{" "}
            <strong className="text-brand-accent font-bold">
              DISPONIBIL ACUM
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
