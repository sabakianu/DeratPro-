"use client"; // Obligatoriu în Next.js (App Router) pentru a folosi interactivitate

import { useEffect } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function LegalModal({
  isOpen,
  onClose,
  title,
  children,
}: LegalModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-bg-dark border border-white/10 rounded-xl shadow-2xl max-w-lg w-full p-6 text-text-light relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-light/60 hover:text-white transition-colors"
          aria-label="Închide"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

        <div className="text-sm text-text-light/80 space-y-4">{children}</div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-brand-accent text-bg-dark font-bold rounded-lg hover:opacity-90 transition-all"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
}
