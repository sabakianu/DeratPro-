interface FooterCheckItemProps {
  text: string;
}

export default function FooterCheckItem({ text }: FooterCheckItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="material-symbols-outlined text-brand-accent text-[18px]">
        check_circle
      </span>
      {text}
    </li>
  );
}
