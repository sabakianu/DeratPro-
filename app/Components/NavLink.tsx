interface NavItemProps {
  text: string;
}

export default function NavItem({ text }: NavItemProps) {
  return (
    <a className="group font-sans transition-colors cursor-pointer px-3 h-full flex items-center text-lg text-text-muted hover:text-primary">
      <span className="grid place-items-center">
        <span
          className="invisible font-bold col-start-1 row-start-1 select-none"
          aria-hidden="true"
        >
          {text}
        </span>

        <span className="visible font-medium group-hover:font-bold col-start-1 row-start-1 transition-all">
          {text}
        </span>
      </span>
    </a>
  );
}
