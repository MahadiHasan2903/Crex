"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const playerId = "1";

const tabNames = [
  {
    name: "Overview",
    link: `/${playerId}`,
  },
  {
    name: "Matches",
    link: `/${playerId}/matches`,
  },
  {
    name: "News",
    link: `/${playerId}/news`,
  },
  {
    name: "Info",
    link: `/${playerId}/info`,
  },
];

const PlayerProfileContents = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="w-full text-[#CFD1D399] dark:bg-[#131E29] bg-primary py-2">
        <div className="px-[200px] flex items-center gap-x-8">
          {tabNames.map((tabName, index) => (
            <Link href={`/player-profile${tabName.link}`} key={index}>
              <p
                className={`relative font-bold -mb-[10px] cursor-pointer text-[16px] pb-[10px] ${
                  pathName === `/player-profile${tabName.link}`
                    ? "border-b-2 border-[#FF7575] text-[#FCFCFCCC]"
                    : "text-[#FCFCFC4D]"
                }`}
              >
                {tabName.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerProfileContents;
