interface HighlightBoxProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function HighlightBox({
  icon,
  title,
  description,
  className = "",
}: HighlightBoxProps) {
  return (
    <div
      className={`p-5 rounded-xl bg-surface-container-low border border-surface-border space-y-2 ${className}`}
    >
      <div className="flex items-center gap-2 text-primary text-base">
        <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">
          {icon}
        </span>
        <span className="font-bold">{title}</span>
      </div>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
