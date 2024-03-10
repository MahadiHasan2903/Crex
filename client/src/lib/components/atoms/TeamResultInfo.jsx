"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineExpandMore } from "react-icons/md";
import MatchResultIndicator from "./MatchResultIndicator ";

const TeamResultInfo = ({ teamName }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
      <div className="flex items-center gap-x-2">
        <Image src={`/BD.png`} width={40} height={40} alt="team" />
        <p className="text-[16px] font-medium">{teamName}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <MatchResultIndicator
          backgroundColor="bg-transparent"
          textContent="."
          additionalStyles="bg-transparent border border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5"
        />
        <MatchResultIndicator backgroundColor="bg-[#AA0707]" textContent="L" />
        <MatchResultIndicator backgroundColor="bg-[#AA0707]" textContent="L" />
        <MatchResultIndicator backgroundColor="bg-[#418019]" textContent="W" />
        <MatchResultIndicator backgroundColor="bg-[#AA0707]" textContent="L" />

        <MatchResultIndicator backgroundColor="bg-[#418019]" textContent="W" />
        <MdOutlineExpandMore size={25} />
      </div>
    </div>
  );
};

export default TeamResultInfo;
