"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nume: "",
    telefon: "",
    email: "",
    serviciu: "",
    mesaj: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "error" | "success">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("idle");
    setErrorMessage("");

    if (formData.telefon.length < 10) {
      setFormStatus("error");
      setErrorMessage("Numărul de telefon pare invalid. Te rugăm să verifici.");
      return;
    }

    console.log("Date trimise valid:", formData);

    setFormStatus("success");
    setFormData({ nume: "", telefon: "", email: "", serviciu: "", mesaj: "" });

    setTimeout(() => setFormStatus("idle"), 5000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="nume"
            className="text-sm text-on-surface font-semibold"
          >
            Nume complet *
          </label>
          <input
            id="nume"
            value={formData.nume}
            onChange={handleChange}
            type="text"
            required
            placeholder="ex. Popescu Ion"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-outline/30 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="telefon"
            className="text-sm text-on-surface font-semibold"
          >
            Număr de telefon *
          </label>
          <input
            id="telefon"
            value={formData.telefon}
            onChange={handleChange}
            type="tel"
            required
            placeholder="07xxxxxxxx"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-outline/30 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm text-on-surface font-semibold"
          >
            Adresă de Email
          </label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="nume@exemplu.ro"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-outline/30 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="serviciu"
            className="text-sm text-on-surface font-semibold"
          >
            Tipul Serviciului *
          </label>
          <select
            id="serviciu"
            value={formData.serviciu}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-surface border border-outline/30 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <option value="">Alegeți serviciul dorit</option>
            <option value="deratizare">
              Deratizare (Rozătoare / Șoareci / Șobolani)
            </option>
            <option value="dezinsectie">
              Dezinsecție (Insecte / Gândaci / Ploșnițe)
            </option>
            <option value="dezinfectie">
              Dezinfecție (Viruși / Bacterii / ULV)
            </option>
            <option value="pachet_complet">
              Pachet Complet DDD (Autorizare / HoReCa)
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="mesaj"
          className="text-sm text-on-surface font-semibold"
        >
          Mesaj sau descrierea problemei
        </label>
        <textarea
          id="mesaj"
          value={formData.mesaj}
          onChange={handleChange}
          rows={4}
          placeholder="Specificați tipul spațiului (ex: apartament 2 camere, depozit 400mp) și detalii despre dăunător..."
          className="w-full px-4 py-3 rounded-lg bg-surface border border-outline/30 text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {formStatus === "error" && (
        <div className="text-sm text-red-600 font-semibold">{errorMessage}</div>
      )}

      <button
        type="submit"
        className="w-full py-4 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-[#003618] transition-all shadow-md flex items-center justify-center gap-2 group"
      >
        <span>Trimite Solicitarea de Ofertă</span>
        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
          send
        </span>
      </button>

      {formStatus === "success" && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">
            check_circle
          </span>
          <span className="text-sm font-semibold">
            Cererea a fost trimisă cu succes! Un dispecer vă va contacta în
            scurt timp.
          </span>
        </div>
      )}

      <p className="text-xs text-outline text-center">
        Datele dvs. sunt protejate conform legislației GDPR. Fără apeluri de
        marketing spam.
      </p>
    </form>
  );
}
