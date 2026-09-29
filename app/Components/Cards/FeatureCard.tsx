import IconBox from "../IconBox";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-bg-white p-6 rounded-xl border border-border-light shadow-level-1 space-y-4 hover:border-primary transition-all group">
      <IconBox icon={icon} />

      <div>
        <h4 className="text-xl text-text-main font-bold mb-1">{title}</h4>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
