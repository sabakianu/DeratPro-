import Badge from "../Components/Badge";
import StepCard from "../Components/Cards/StepCard";

const stepsData = [
  {
    id: 1,
    icon: "phone_in_talk",
    title: "Ne Suni sau Trimiți Cererea",
    description:
      "Ne descrii problema, tipul spațiului și programăm intervenția în intervalul orar dorit sau în regim de urgență.",
    footerText: "Timp estimat: 2 minute",
    circleClasses: "bg-primary text-white",
  },
  {
    id: 2,
    icon: "search_insights",
    title: "Evaluare & Plan Personalizat",
    description:
      "Tehnicianul inspectează gradul de infestare, identifică focarele ascunse și alege substanțele optime pentru eficiență maximă.",
    footerText: "Inspecție la fața locului",
    circleClasses: "bg-primary text-white",
  },
  {
    id: 3,
    icon: "verified",
    title: "Intervenție & Certificat",
    description:
      "Aplicăm tratamentul rapid și silențios, eliberăm procesul-verbal oficial DDD și instrucțiunile post-tratament.",
    footerText: "Garanție scrisă inclusă",
    circleClasses: "bg-tertiary-fixed-dim text-black",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge text="PROCEDURĂ SIMPLĂ" />
          <h2 className="text-4xl font-bold text-on-surface font-['Plus_Jakarta_Sans',sans-serif]">
            Cum Funcționează Intervenția
          </h2>
          <p className="text-lg text-on-surface-variant">
            De la prima semnalare telefonică până la spațiul igienizat complet
            în 3 etape clare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stepsData.map((step) => (
            <StepCard
              key={step.id}
              stepNumber={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
              footerText={step.footerText}
              circleClasses={step.circleClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
