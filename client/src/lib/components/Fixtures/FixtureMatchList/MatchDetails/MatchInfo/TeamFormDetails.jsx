"use client";
import React from "react";
import Image from "next/image";
import { teamFormData } from "@/lib/utils/data";
import MatchResultIndicator from "@/lib/components/atoms/MatchResultIndicator ";

const TeamFormDetails = () => {
  return (
    <div className="p-4 text-black dark:text-[#CFD1D3]">
      {teamFormData.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between pb-5 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5"
        >
          <div className="flex items-center w-[30%] gap-x-2">
            <Image src={`/BD.png`} width={50} height={50} />
            <p className="text-[16px]">{data.team1}</p>
            <p className="text-[16px]">{data.score1}</p>
            <p className="text-[14px]">{data.overs1}</p>
          </div>
          <div className="mx-2">|</div>
          <div className="flex w-[30%] items-center gap-x-2">
            <Image src={`/BD.png`} width={50} height={50} />
            <p className="text-[16px]">{data.team2}</p>
            <p className="text-[16px]">{data.score2}</p>
            <p className="text-[14px]">{data.overs2}</p>
          </div>
          <div className="mx-2">|</div>

          <div className="flex items-center justify-end w-[30%] gap-x-2">
            <div className="text-[12px]">
              <p className="pb-1 text-end">{data.matchType}</p>
              <p className="opacity-60 text-end">{data.tournament}</p>
            </div>
            <MatchResultIndicator
              backgroundColor="bg-[#418019]"
              textContent="W"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamFormDetails;
