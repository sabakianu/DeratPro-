import Button from "../Button";
import IconBox from "../IconBox";

interface ServiceCardProps {
  icon: string;
  subtitle: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  subtitle,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between bg-bg-white rounded-xl p-8 border border-border-light shadow-level-1 hover:shadow-md transition-all group">
      <div className="space-y-4">
        <IconBox icon={icon} />

        {/* title */}
        <div>
          <span className="text-xs uppercase tracking-wider text-border-dark font-semibold">
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-text-main mt-1">{title}</h3>
        </div>

        {/* descriere */}
        <p className="text-base text-text-muted leading-relaxed">
          {description}
        </p>

        {/* lista beneficii */}
        <ul className="space-y-2 pt-2 text-sm text-text-main">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="material-symbols-outlined  text-brand-accent text-[18px] mt-0.5">
                check_circle
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* buton */}
      <div className="pt-6 mt-6 border-t border-border-light">
        <Button
          variant="secondary"
          className="w-full gap-2 text-primary hover:bg-primary hover:text-white"
        >
          <span>Solicită intervenție</span>
          <span className="material-symbols-outlined text-[18px]">
            north_east
          </span>
        </Button>
      </div>
    </div>
  );
}
