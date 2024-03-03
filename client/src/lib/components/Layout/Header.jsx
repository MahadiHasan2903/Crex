"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo.webp";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/utils/data";
import ThemeToggler from "@/lib/theme/ThemeToggler";

const Header = () => {
  const pathName = usePathname();
  const firstBlock = pathName.split("/")[1];

  return (
    <div className="bg-primary flex justify-center pt-4">
      <div className="section flex items-center justify-between">
        <div className="flex font-medium items-center pb-4 gap-x-2 w-1/6">
          <Image src={logo} alt="logo" width={25} height={25} />
          <p className="text-tertiary text-[16px] font-bold">CREX</p>
        </div>
        <div className="w-full flex justify-end items-center">
          <ul className="flex text-white  items-center gap-x-3 text-[14px]">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <li
                  className={` pb-[17px] px-3 ${
                    item.href.split("/")[1] === firstBlock
                      ? " border-b-2 border-white"
                      : ""
                  } ${
                    item.icon ? " font-semibold flex items-center gap-x-2" : ""
                  }`}
                >
                  {item.label}
                  {item.icon && item.icon}
                </li>
              </Link>
            ))}
          </ul>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default Header;
