"use client";

import React, { useState } from "react";
import Badge from "../Components/Badge";
import HighlightBox from "../Components/HighlightBox";
import ContactDetail from "../Components/ContactDetail";
import ContactForm from "../Components/ContactForm";

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Submit");
  };

  return (
    <section
      className="w-full bg-bg-main py-20 relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-4">
              <Badge variant="soft">STANDARDE RIDICATE</Badge>

              <h2 className="text-4xl font-bold text-text-main font-['Plus_Jakarta_Sans',sans-serif]">
                Cere Ofertă Rapidă
              </h2>
              <p className="text-lg text-text-muted">
                Primești o cotație exactă în cel mult 15 minute. Pentru urgențe
                majore, sună direct la numărul de dispecerat continuu.
              </p>
            </div>

            <div className="space-y-6">
              <ContactDetail
                icon="phone"
                label="Telefon Dispecerat 24/7"
                value="0722 123 456"
              />
              <ContactDetail
                icon="mail"
                label="Email Suport"
                value="contact@deratpro.ro"
              />
              <ContactDetail
                icon="schedule"
                label="Program Operativ"
                value="Non-Stop (Luni - Duminică)"
              />
            </div>

            <HighlightBox
              icon="visibility_off"
              title="Garanția Discreției"
              description="La cerere, intervenția se efectuează cu autoutilitare fără inscripții publicitare, pentru protejarea imaginii afacerii sau a locuinței dumneavoastră."
              variant="solid"
            />
          </div>

          <div className="lg:col-span-7 bg-bg-main p-8 md:p-12 rounded-2xl border border-border-light shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
