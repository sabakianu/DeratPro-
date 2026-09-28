import IconBox from "./IconBox";

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
    <div className="bg-surface p-6 rounded-xl border border-surface-border shadow-level-1 space-y-4 hover:border-primary transition-all group">
      <IconBox icon={icon} />

      <div>
        <h4 className="text-xl text-on-surface font-bold mb-1">{title}</h4>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
