import IconBox from "./IconBox";

interface ContactDetailProps {
  icon: string;
  label: string;
  value: string;
  href?: string; // Adăugăm href ca proprietate opțională
}

export default function ContactDetail({
  icon,
  label,
  value,
  href,
}: ContactDetailProps) {
  return (
    <div className="flex items-start gap-4">
      <IconBox icon={icon} className="shrink-0 w-10 h-10" />
      <div>
        <span className="text-xs uppercase tracking-wider text-border-dark font-semibold">
          {label}
        </span>

        {href ? (
          <a
            href={href}
            className="block text-xl text-text-main font-bold mt-1 hover:text-brand-accent hover:underline transition-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-xl text-text-main font-bold mt-1">{value}</p>
        )}
      </div>
    </div>
  );
}
