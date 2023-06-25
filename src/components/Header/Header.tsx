"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../Container";
import { MenuItem } from "../MenuItem";
import { Separate } from "../Separate";

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Container>
        <div className="flex justify-between items-center h-[104px]">
          <Link href="/">
            <span className="font-semibold text-2xl">dawnnguyen-vn</span>
          </Link>
          <ul className="flex gap-10">
            <MenuItem
              className={pathname == "/projects" ? "active" : ""}
              href="/projects"
              lable="Projects"
            />
            <MenuItem
              className={pathname == "/posts" ? "active" : ""}
              href="/posts"
              lable="Posts"
            />
            <MenuItem
              className={pathname == "/contact" ? "active" : ""}
              href="#"
              lable="Contact"
            />
          </ul>
        </div>
        <Separate />
      </Container>
    </header>
  );
}
