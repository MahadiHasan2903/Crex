"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { fixtureLinks } from "@/lib/utils/data";
import Link from "next/link";

const FeatureTopBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#0E1720] relative py-4">
      <div className="px-[200px] flex items-center  gap-x-5">
        {fixtureLinks.map((l, index) => (
          <Link
            key={index}
            href={l.to}
            className={`font-bold text-[14px] pb-[5px] ${
              pathname === l.to
                ? "text-[#CFD1D3]  border-b-2 border-[#FF7575]"
                : "text-[#CFD1D399]"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureTopBar;
