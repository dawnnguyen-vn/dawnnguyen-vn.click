import Link from "next/link";

type MenuItemProps = {
  href: string;
  lable: string;
  className?: string;
};

export function MenuItem({ href, lable, className = "" }: MenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={"hover:text-primary font-medium " + className}
      >
        {lable}
      </Link>
    </li>
  );
}
