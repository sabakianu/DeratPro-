import React from "react";

interface Badge {
  variant?: "soft" | "outline" | "dark";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "soft",
  children,
  className = "",
}: Badge) {
  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider";

  const variants = {
    soft: "bg-brand-light/50 text-primary",
    outline: "bg-transparent border border-border-dark text-text-main",
    dark: "bg-bg-dark text-text-light backdrop-blur-md shadow-md",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
