interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  return (
    <a className="group font-sans transition-colors cursor-pointer px-3 h-full flex items-center text-lg text-on-surface-variant hover:text-primary">
      <span className="grid place-items-center">
        <span
          className="invisible font-black col-start-1 row-start-1 select-none"
          aria-hidden="true"
        >
          {text}
        </span>

        <span className="visible font-normal group-hover:font-black col-start-1 row-start-1 transition-all">
          {text}
        </span>
      </span>
    </a>
  );
}
