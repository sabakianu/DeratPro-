interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex flex-col">
      <span className="text-xl md:text-2xl text-primary font-bold">
        {value}
      </span>
      <span className="text-sm text-text-muted font-medium">{label}</span>
    </div>
  );
}
