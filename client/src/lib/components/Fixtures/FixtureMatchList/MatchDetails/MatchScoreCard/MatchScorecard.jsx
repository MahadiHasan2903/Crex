"use client";
import Image from "next/image";
import React, { useState } from "react";
import BattingScore from "./BattingScore";
import BowlingScore from "./BowlingScore";
import FallOfWickets from "./FallOfWickets";
import PartnershipScore from "./PartnershipScore";
import { bangladeshCricketTeam } from "@/lib/utils/data";

const MatchScoreCard = () => {
  const [activeButton, setActiveButton] = useState("BD");

  const handleButtonClick = (team) => {
    setActiveButton(team);
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-[60%]  ml-3 mt-12">
        <div className="w-[60%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="dark:text-[#CFD1D3] text-black text-[24px] font-semibold">
            Scorecard
          </p>
          <div className="flex items-center my-5 gap-x-3">
            <div
              className={`flex cursor-pointer items-center p-3 border rounded-md gap-x-1 bg-[#EDF3F8] dark:bg-[#15222E]  border-opacity-20 dark:border-opacity-20 ${
                activeButton === "BD"
                  ? "border-blue-400"
                  : "border-black dark:border-white"
              }`}
              onClick={() => handleButtonClick("BD")}
            >
              <Image src="/BD.png" width={25} height={25} alt="team" />
              <p className="text-[14px] font-bold mx-1">BD</p>
              <p className="text-[14px] font-bold">134-6</p>
              <p className="text-[14px] ">(14.2)</p>
            </div>
            <div
              className={`flex cursor-pointer items-center p-3 border rounded-md gap-x-1 bg-[#EDF3F8] dark:bg-[#15222E]  border-opacity-20 dark:border-opacity-20 ${
                activeButton === "IND"
                  ? "border-blue-400"
                  : "border-black dark:border-white"
              }`}
              onClick={() => handleButtonClick("IND")}
            >
              <Image src="/BD.png" width={25} height={25} alt="team" />
              <p className="text-[14px] font-bold mx-1">IND</p>
              <p className="text-[14px] font-bold">132-10</p>
              <p className="text-[14px] ">(19.2)</p>
            </div>
          </div>
          <div className="flex flex-col items-start mt-10 dark:text-[#9FA3A7] text-black">
            {activeButton === "BD" && (
              <>
                <BattingScore />
                <BowlingScore />
                <FallOfWickets />
                <PartnershipScore />
              </>
            )}
            {activeButton === "IND" && (
              <>
                <BattingScore />
                <BowlingScore />
                <FallOfWickets />
                <PartnershipScore />
              </>
            )}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start m-5 dark:text-[#9FA3A7] text-black">
            <p className="text-[18px] my-4 ml-5">Yet to Bat</p>

            <div className="grid grid-cols-2">
              {bangladeshCricketTeam.slice(0, 3).map((player, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center m-5 gap-x-3">
                    <div className="relative">
                      <Image
                        src="/player.png"
                        width={36}
                        height={20}
                        className="-mb-2.5"
                      />
                      <Image
                        src="/jersey.png"
                        width={36}
                        height={20}
                        className="z-[9994]"
                      />
                    </div>
                    <div>
                      <p className="text-[14px] text-[#CFD1D3]">
                        {player.playerName}
                      </p>
                      <p className="text-[12px] text-[#9FA3A7]">
                        {player.playerRole}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScoreCard;
