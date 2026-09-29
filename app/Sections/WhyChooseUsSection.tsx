import Badge from "../Components/Badge";
import FeatureCard from "../Components/Cards/FeatureCard";
import HighlightBox from "../Components/HighlightBox";

const differentiators = [
  {
    id: "rapid",
    icon: "rocket_launch",
    title: "Intervenție Rapidă",
    description:
      "Echipajele noastre mobile ajung la locația ta în maxim 60-120 minute pentru situații de urgență semnalate.",
  },
  {
    id: "eco",
    icon: "eco",
    title: "Substanțe Avizate",
    description:
      "Utilizăm exclusiv biocide profesionale ecologice avizate de Ministerul Sănătății, inodore și sigure pentru copii și animale.",
  },
  {
    id: "autorizat",
    icon: "badge",
    title: "Personal Autorizat",
    description:
      "Tehnicieni DDD calificați, atestați profesional și instruiți continuu conform standardelor europene CEPA / EN 16636.",
  },
  {
    id: "garantie",
    icon: "assignment_turned_in",
    title: "Garanție & Proces-Verbal",
    description:
      "Oferim contract, fișă de execuție, proces-verbal conform cerințelor DSP/DSV și garanție extinsă pentru fiecare lucrare.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-surface-canvas py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge text="STANDARDE RIDICATE" />

            <h2 className="text-4xl font-bold text-on-surface font-['Plus_Jakarta_Sans',sans-serif]">
              De Ce Să Alegi DeratPro?
            </h2>

            <p className="text-lg text-on-surface-variant leading-relaxed">
              Ne diferențiem prin rigoare clinică, transparență totală și
              tehnologii care nu pun în pericol sănătatea mediului ambiant.
              Răspundem la orice solicitare cu profesionalism și discreție
              garantată.
            </p>

            <HighlightBox
              icon="health_and_safety"
              title="Standard European CEPA / EN 16636"
              description="Toate procedurile noastre respectă reglementările europene privitoare la managementul dăunătorilor și protecția alimentară HACCP."
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <FeatureCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
