import Link from "next/link";

type MenuItemProps = {
  href: string;
  lable: string;
  active?: boolean;
};

export function MenuItem({ href, lable, active = false }: MenuItemProps) {
  const activeClass = active ? "active" : "";

  return (
    <li>
      <Link
        href={href}
        className={"hover:text-primary font-medium " + activeClass}
      >
        {lable}
      </Link>
    </li>
  );
}
