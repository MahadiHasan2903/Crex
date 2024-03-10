"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import MatchResultIndicator from "./MatchResultIndicator ";
import TeamFormDetails from "../Fixtures/FixtureMatchList/MatchDetails/MatchInfo/TeamFormDetails";

const TeamResultInfo = ({ teamName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
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
          <MatchResultIndicator
            backgroundColor="bg-[#AA0707]"
            textContent="L"
          />
          <MatchResultIndicator
            backgroundColor="bg-[#AA0707]"
            textContent="L"
          />
          <MatchResultIndicator
            backgroundColor="bg-[#418019]"
            textContent="W"
          />
          <MatchResultIndicator
            backgroundColor="bg-[#AA0707]"
            textContent="L"
          />

          <MatchResultIndicator
            backgroundColor="bg-[#418019]"
            textContent="W"
          />
          {isExpanded ? (
            <MdOutlineExpandLess
              size={25}
              onClick={handleExpandToggle}
              className="cursor-pointer"
            />
          ) : (
            <MdOutlineExpandMore
              size={25}
              onClick={handleExpandToggle}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {isExpanded && <TeamFormDetails />}
    </div>
  );
};

export default TeamResultInfo;
