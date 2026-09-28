import IconBox from "./IconBox";

interface ContactDetailProps {
  icon: string;
  label: string;
  value: string;
}

export default function ContactDetail({
  icon,
  label,
  value,
}: ContactDetailProps) {
  return (
    <div className="flex items-start gap-4">
      <IconBox icon={icon} className="shrink-0 w-10 h-10" />
      <div>
        <span className="text-xs uppercase tracking-wider text-outline font-semibold">
          {label}
        </span>
        <p className="text-xl text-on-surface font-bold mt-1">{value}</p>
      </div>
    </div>
  );
}
