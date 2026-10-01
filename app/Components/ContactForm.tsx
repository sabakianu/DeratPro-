"use client";

import React, { useEffect, useState, useRef } from "react";

const serviciiOptions = [
  { value: "deratizare", label: "Deratizare (Rozătoare / Șoareci / Șobolani)" },
  { value: "dezinsectie", label: "Dezinsecție (Insecte / Gândaci / Ploșnițe)" },
  { value: "dezinfectie", label: "Dezinfecție (Viruși / Bacterii / ULV)" },
  {
    value: "pachet_complet",
    label: "Pachet Complet DDD (Autorizare / HoReCa)",
  },
];

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePreselect = (e: CustomEvent) => {
      setFormData((prev) => ({ ...prev, serviciu: e.detail }));
    };
    window.addEventListener(
      "preselectService",
      handlePreselect as EventListener,
    );
    return () => {
      window.removeEventListener(
        "preselectService",
        handlePreselect as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("idle");
    setErrorMessage("");

    const numeRegex = /^[a-zA-ZăâîșțĂÂÎȘȚ\s\-]+$/;
    if (!numeRegex.test(formData.nume.trim())) {
      setFormStatus("error");
      setErrorMessage(
        "Numele este invalid. Folosiți doar litere, spații sau cratime.",
      );
      return;
    }

    const numarCuratat = formData.telefon.replace(/\s/g, "");
    const telefonRegex = /^0[0-9]{9}$/;
    if (!telefonRegex.test(numarCuratat)) {
      setFormStatus("error");
      setErrorMessage(
        "Numărul de telefon este invalid. Acesta trebuie să conțină 10 cifre.",
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formData.email.trim() !== "" &&
      !emailRegex.test(formData.email.trim())
    ) {
      setFormStatus("error");
      setErrorMessage("Adresa de email nu are un format valid.");
      return;
    }

    if (!formData.serviciu) {
      setFormStatus("error");
      setErrorMessage("Vă rugăm să selectați un tip de serviciu.");
      return;
    }

    if (formData.mesaj.trim() === "") {
      setFormStatus("error");
      setErrorMessage(
        "Vă rugăm să ne oferiți un scurt mesaj sau o descriere a problemei.",
      );
      return;
    }

    console.log("Date trimise valid:", formData);
    setFormStatus("success");
    setFormData({ nume: "", telefon: "", email: "", serviciu: "", mesaj: "" });
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const selectedLabel =
    serviciiOptions.find((opt) => opt.value === formData.serviciu)?.label ||
    "Alegeți serviciul dorit";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="nume"
            className="text-sm text-text-main font-semibold"
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
            className="w-full px-4 py-3 rounded-lg bg-bg-white border border-border-dark/30 text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="telefon"
            className="text-sm text-text-main font-semibold"
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
            className="w-full px-4 py-3 rounded-lg bg-bg-white border border-border-dark/30 text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm text-text-main font-semibold"
          >
            Adresă de Email
          </label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="nume@exemplu.ro"
            className="w-full px-4 py-3 rounded-lg bg-bg-white border border-border-dark/30 text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 relative z-50" ref={dropdownRef}>
          <label className="text-sm text-text-main font-semibold">
            Tipul Serviciului *
          </label>

          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-bg-white border border-border-dark/30 text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-left"
          >
            <span className="truncate pr-2">{selectedLabel}</span>
            <span className="text-xs opacity-60 shrink-0">
              {isDropdownOpen ? "▲" : "▼"}
            </span>
          </button>

          <div
            className={`absolute left-0 right-0 top-[calc(100%+8px)] bg-white border border-border-dark/30 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-200 origin-top ${
              isDropdownOpen
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            {serviciiOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, serviciu: opt.value }));
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm hover:bg-bg-muted transition-colors border-b border-border-light/50 last:border-0"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="mesaj" className="text-sm text-text-main font-semibold">
          Mesaj sau descrierea problemei
        </label>
        <textarea
          id="mesaj"
          value={formData.mesaj}
          onChange={handleChange}
          rows={4}
          placeholder="Specificați tipul spațiului (ex: apartament 2 camere, depozit 400mp) și detalii despre dăunător..."
          className="w-full px-4 py-3 rounded-lg bg-bg-white border border-border-dark/30 text-text-main focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {formStatus === "error" && (
        <div className="text-sm text-red-600 font-semibold">{errorMessage}</div>
      )}

      <button
        type="submit"
        className="w-full py-4 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all shadow-md flex items-center justify-center gap-2 group"
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

      <p className="text-xs text-border-dark text-center">
        Datele dvs. sunt protejate conform legislației GDPR. Fără apeluri de
        marketing spam.
      </p>
    </form>
  );
}
