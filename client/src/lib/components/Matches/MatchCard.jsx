"use client";
import Image from "next/image";
import React from "react";
import { FaSquare } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import logo from "../../../../public/logo.webp";

const MatchCard = ({ match }) => {
  const { status, tournament, matchDetails, team1, team2, decision } = match;
  return (
    <div className="w-full border border-gray-300 rounded-lg border-opacity-40 dark:border-opacity-10">
      <div className="bg-[#f9f9f9] dark:bg-[#11171E] p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center text-[13px] text-[#AA0707] dark:text-[#FF7575] gap-x-1">
            <FaSquare size={5} />
            <p>{status} </p>
          </div>
          <p className="font-light text-gray-200">|</p>
          <p className="text-[12px] dark:text-tertiary font-medium">
            {tournament}
          </p>
        </div>
        <div>
          <FaChevronRight color="#9FA3A7" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-4 gap-y-1">
        <div className="pb-1 font-medium dark:text-tertiary flex items-center gap-x-1 text-[11px]">
          <p>{matchDetails}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={team1.logo} width={25} height={25} alt="team" />
          <p className="text-[14px] dark:text-tertiary">{team1.abbreviation}</p>
          <p className="text-[14px] dark:text-tertiary">{team1.score} </p>
          <p className="text-[12px] mt-[2px] dark:text-tertiary">
            {team1.overs}
          </p>
        </div>
        <div className="flex items-center my-3 gap-x-2">
          <Image src={team2.logo} width={25} height={25} alt="team" />
          <p className="text-[14px] dark:text-tertiary">{team2.abbreviation}</p>
          <p className="text-[14px] dark:text-tertiary">{team2.score} </p>
          <p className="text-[12px] mt-[2px] dark:text-tertiary">
            {team2.overs}
          </p>
        </div>
        {/* <p className="text-[#BA9B8E] dark:text-[#EAAE54] font-medium text-[11px] text-red"> */}
        <p className="text-[#3B5D26] dark:text-[#6CB240] font-medium text-[11px] text-red">
          {decision}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
