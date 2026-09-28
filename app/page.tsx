import Navbar from "./Sections/Navbar";
import ServicesSection from "./Sections/ServicesSection";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Navbar />
      <ServicesSection />
      <WhyChooseUsSection />
    </main>
  );
}
