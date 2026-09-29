import React from "react";

interface HighlightBoxProps {
  icon: string;
  title: string;
  description: string;
  variant?: "muted" | "solid";
  className?: string;
}

export default function HighlightBox({
  icon,
  title,
  description,
  variant = "muted",
  className = "",
}: HighlightBoxProps) {
  const baseClasses = "p-5 rounded-xl space-y-2";

  const variants = {
    muted: "bg-bg-muted border border-border-dark/40",
    solid: "bg-bg-white border border-border-light shadow-sm",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <div className="flex items-center gap-2 text-primary text-sm">
        <span className="material-symbols-outlined text-[20px] text-brand-accent">
          {icon}
        </span>
        <span className="font-bold">{title}</span>
      </div>
      <p className="text-sm text-text-muted">{description}</p>
    </div>
  );
}
