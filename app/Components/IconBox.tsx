interface IconBoxProps {
  icon: string;
  className?: string;
}

export default function IconBox({ icon, className = "" }: IconBoxProps) {
  return (
    <div
      className={`w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors ${className}`}
    >
      <span className="material-symbols-outlined text-[32px]">{icon}</span>
    </div>
  );
}
