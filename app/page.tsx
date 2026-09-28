import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/ServicesSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Navbar />
      <ServicesSection />
    </main>
  );
}
