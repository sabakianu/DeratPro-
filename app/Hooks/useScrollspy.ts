import { useState, useEffect } from "react";

export function useScrollspy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds)]);

  return activeSection;
}

export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string,
) => {
  if (href.startsWith("#")) {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  }
};
