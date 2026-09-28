interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs uppercase tracking-widest text-[rgb(0,76,34)] font-bold bg-[rgb(217,234,163)]/50 px-4 py-1.5 rounded-full ${className}`}
    >
      {text}
    </span>
  );
}
