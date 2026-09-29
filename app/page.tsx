import Navbar from "./Sections/Navbar";
import ServicesSection from "./Sections/ServicesSection";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection";
import HowItWorksSection from "./Sections/HowItWorksSection";
import ContactSection from "./Sections/ContactSection";
import Footer from "./Sections/Footer";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-canvas">
      <Navbar />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
