import ServiceCard from "../Components/Cards/ServiceCard";
import Badge from "../Components/Badge";

const servicesData = [
  {
    id: "deratizare",
    icon: "pest_control",
    subtitle: "Protocol Anti-Rozătoare",
    title: "Deratizare",
    description:
      "Combaterea eficientă a rozătoarelor (șoareci, șobolani). Stații de intoxicare securizate, capcane mecanice ecologice, tratamente perimetrice cu rodenticide de generație nouă. Certificat de garanție inclus.",
    features: [
      "Stații de momeală securizate cu cheie",
      "Risc zero de contaminare accidentală",
      "Certificat de execuție și garanție",
    ],
  },
  {
    id: "dezinsectie",
    icon: "coronavirus",
    subtitle: "Tratament Insecticid",
    title: "Dezinsecție",
    description:
      "Eliminarea completă a insectelor târâtoare și zburătoare (gândaci de bucătărie, ploșnițe, purici, viespi, țânțari). Tratamente prin nebulizare ULV, termonebulizare și geluri insecticide cu remanență ridicată.",
    features: [
      "Nebulizare ULV particule ultra-fine",
      "Geluri inodore fără părăsirea locuinței",
      "Eficacitate 100% de la prima pulverizare",
    ],
  },
  {
    id: "dezinfectie",
    icon: "sanitizer",
    subtitle: "Sterilizare Clinică",
    title: "Dezinfecție",
    description:
      "Distrugerea virușilor, bacteriilor, sporilor și fungilor. Biocide de nivel spitalicesc avizate de Comisia Națională pentru Produse Biocide. Ideal pentru birouri, clinici, restaurante și locuințe.",
    features: [
      "Spectru complet: bactericid, virucid, fungicid",
      "Acreditare sanitară pentru spații HoReCa",
      "Timp minim de reactivare a spațiului",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-bg-muted py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="soft">SOLUȚII COMPLETE</Badge>

          <h2 className="text-4xl font-bold text-text-main font-['Plus_Jakarta_Sans',sans-serif]">
            Servicii Specializate de Pest Control
          </h2>
          <p className="text-lg text-text-muted">
            Protocoale stricte, substanțe de ultimă generație și siguranță
            absolută pentru oameni și animale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              subtitle={service.subtitle}
              title={service.title}
              description={service.description}
              features={service.features}
              serviceValue={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
