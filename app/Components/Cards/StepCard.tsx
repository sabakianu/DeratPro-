import React from "react";

interface StepCardProps {
  stepNumber: string | number;
  icon: string;
  title: string;
  description: string;
  footerText: string;
  circleClasses?: string;
}

export default function StepCard({
  stepNumber,
  icon,
  title,
  description,
  footerText,
  circleClasses = "bg-primary text-white",
}: StepCardProps) {
  return (
    <div className="relative bg-bg-white p-8 rounded-xl border border-border-light shadow-level-1 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span
            className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center text-xl ${circleClasses}`}
          >
            {stepNumber}
          </span>
          <span className="material-symbols-outlined text-border-dark text-[28px]">
            {icon}
          </span>
        </div>
        <h3 className="text-xl text-text-main font-semibold pt-2">{title}</h3>
        <p className="text-base text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
      <div className="pt-6 text-primary text-sm uppercase tracking-wider font-semibold">
        {footerText}
      </div>
    </div>
  );
}
