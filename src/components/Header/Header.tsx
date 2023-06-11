import Link from "next/link";
import { Container } from "../Container";
import { MenuItem } from "../MenuItem";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center h-[104px]">
          <Link href="/">
            <span className="font-semibold text-2xl">dawnnguyen-vn</span>
          </Link>
          <ul className="flex gap-10">
            <MenuItem href="#" lable="Projects" />
            <MenuItem active href="/posts" lable="Posts" />
            <MenuItem href="#" lable="Contact" />
          </ul>
        </div>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </Container>
    </header>
  );
}
