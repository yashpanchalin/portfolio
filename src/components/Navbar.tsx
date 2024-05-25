"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import GithubIcon from "../../public/github.svg";
import MailIcon from "../../public/mail.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import TwitterIcon from "../../public/twitter.svg";
import Link from "next/link";

import Image from "next/image";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("inset-x-0 max-w-2xl mx-auto z-50 font-title", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        <div className="flex flex-wrap md: flex-nowrap md:pl-28 gap-5 max-w-2xl mx-auto z-50 inset-x-0 ">
          <Link href={"https://github.com/yashpanchalin"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={
                <Image src={GithubIcon} alt="Github" width={24} height={24} />
              }
            ></MenuItem>
          </Link>
          <Link href={"https://mail.google.com/mail/u/1/#inbox?compose=new"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={<Image src={MailIcon} alt="Mail" width={24} height={24} />}
            ></MenuItem>
          </Link>
          <Link href={"https://www.linkedin.com/in/yashpanchaljs/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              }
            ></MenuItem>
          </Link>
          <Link href={"https://x.com/yashpanchaljs"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={
                <Image src={TwitterIcon} alt="Twitter" width={24} height={24} />
              }
            ></MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
