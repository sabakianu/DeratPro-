import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted" | "outlined";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-soft px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white shadow-level-1 hover:brightness-110 focus:shadow-glow-primary",
    secondary:
      "bg-bg-muted text-text-main hover:bg-border-light shadow-level-1",
    inverted: "bg-bg-dark text-text-light shadow-level-1 hover:opacity-90",
    outlined:
      "bg-transparent border border-border-dark text-text-main hover:bg-bg-muted",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
