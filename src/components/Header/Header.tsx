"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../Container";
import { MenuItem } from "../MenuItem";
import { Separate } from "../Separate";
import { Close } from "../Icons/Close";
import { useState } from "react";
import { Bars } from "../Icons/Bars";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center md:h-[104px] h-20">
          <Link href="/">
            <span className="font-semibold text-2xl">Danh</span>
          </Link>
          <ul className="flex gap-10 max-md:hidden">
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
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <Close /> : <Bars />}
          </button>
        </div>
        {open ? (
          <ul className="flex flex-col items-center gap-8 pb-8 pt-4">
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
        ) : null}
        <Separate />
      </Container>
    </header>
  );
}
