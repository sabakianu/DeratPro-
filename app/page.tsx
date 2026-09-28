import Navbar from "./Components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      {/* 1. Inițializarea Navbar-ului la începutul paginii */}
      <Navbar />

      {/* 2. Conținutul principal al paginii */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-on-surface mb-4">
          Protecție Clinică și Dezinsecție Profesională
        </h1>
        <p className="text-on-surface-variant">
          Bun venit în sistemul de management DeratPro.
        </p>
      </section>
    </main>
  );
}
