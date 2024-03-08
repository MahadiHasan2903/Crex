"use client";
import React from "react";
import { Link, usePathname } from "next/navigation";
import { fixtureLinks } from "@/lib/utils/data";

const FeatureTopBar = () => {
  const { pathname } = usePathname();
  return (
    <div className="w-full bg-[#122638] py-2">
      <div className="px-[200px] flex items-center gap-x-5">
        {fixtureLinks.map((index, l) => (
          <Link key={index} href={l.href}>
            <p
              className={`active:${
                pathname === l.href ? "[#CFD1D3]" : "[#CFD1D399]"
              } text-[#CFD1D399]`}
            >
              {l.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureTopBar;
