"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import TeamForm from "./TeamForm";
import HeadToHead from "./HeadToHead";
import TeamComparison from "./TeamComparison";
import VenueDetails from "./VenueDetails/VenueDetails";
import MatchUmpireInfo from "./MatchUmpireInfo";
import PlayersInfo from "./PlayersInfo";
import { australianCricketTeam, bangladeshCricketTeam } from "@/lib/utils/data";

const MatchInfo = () => {
  const [activeButton, setActiveButton] = useState("Team1");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const isButtonActive = (button) => {
    return activeButton === button
      ? "text-[#1860a6] bg-[#1860a614] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "";
  };
  return (
    <div className="flex justify-center">
      <div className="flex w-[60%]  ml-3 mt-12">
        <div className="w-[60%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="flex items-center pb-8 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
            <Image src="/psl.png" width={50} height={55} />
            <div className="">
              <p className="text-[14px]  font-normal opacity-80">7th Match</p>
              <div className="flex items-center gap-x-2">
                <p className="text-[18px] dark:text-[#CFD1D3] text-black font-medium">
                  Malaysia T20 2024
                </p>

                <div className="dark:text-[#6EB4EF] text-[#1860A6]">
                  <MdChevronRight size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="flex items-center mb-5 gap-x-3">
              <BiCalendarEvent size={25} />
              <p className="text-[14px]">Mar 10, 2024, 7:15:00 AM</p>
            </div>
            <div className="flex items-center gap-x-3">
              <FaLocationDot size={25} />
              <p className="dark:text-[#6EB4EF] text-[14px] text-[#1860A6]">
                Bayuemas Oval
              </p>
            </div>
          </div>

          <TeamForm />
          <HeadToHead />
          <TeamComparison />
          <VenueDetails />
          <MatchUmpireInfo />
        </div>

        <div className="flex flex-col items-start m-5 dark:text-[#9FA3A7] text-black">
          <div className="text-[14px] mb-5 flex items-center gap-x-1 bg-[#131E29] py-3 px-5 rounded-lg">
            <span className="text-[18px] ">🪙</span> NEP won the toss and chose
            to bowl
          </div>
          <p className="text-[18px] my-4">Playing XI</p>
          <div className="flex items-center gap-x-3">
            <button
              className={`px-12 py-2 border rounded-md text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
                "Team1"
              )}`}
              onClick={() => handleButtonClick("Team1")}
            >
              Team1
            </button>
            <button
              className={`px-12 py-2 border rounded-md text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
                "Team2"
              )}`}
              onClick={() => handleButtonClick("Team2")}
            >
              Team2
            </button>
          </div>

          {activeButton === "Team1" && (
            <PlayersInfo cricketTeam={bangladeshCricketTeam} />
          )}
          {activeButton === "Team2" && (
            <PlayersInfo cricketTeam={australianCricketTeam} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
