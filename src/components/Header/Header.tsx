"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../Container";
import { Separate } from "../Separate";
import { Close } from "../Icons/Close";
import { useState } from "react";
import { Bars } from "../Icons/Bars";
import { MenuListItem } from "../MenuListItem";

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
          <MenuListItem
            className="flex gap-10 max-md:hidden"
            pathname={pathname}
          />
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <Close /> : <Bars />}
          </button>
        </div>
        {open ? (
          <MenuListItem
            className="flex flex-col items-center gap-8 pb-8 pt-4"
            pathname={pathname}
          />
        ) : null}
        <Separate />
      </Container>
    </header>
  );
}
