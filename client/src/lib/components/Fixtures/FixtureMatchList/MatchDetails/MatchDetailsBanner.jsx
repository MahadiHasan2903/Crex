"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import MatchInfo from "./MatchInfo/MatchInfo";
import LiveMatch from "./Live/LiveMatch";
import MatchScoreCard from "./MatchScoreCard/MatchScorecard";

const MatchDetailsBanner = () => {
  const [activeTab, setActiveTab] = useState("MatchInfo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex bg-[#0E1720] justify-center border-black border-y border-opacity-5 dark:border-primary ">
        <div className="w-[60%] ">
          <div className="text-[#9FA3A7]  ">
            <p className=" text-[16px] my-5">
              BHR vs VAN 9th Match, Malaysia T20 2024
            </p>
            <div className="flex items-center justify-between my-12">
              <div className="flex items-center ">
                <Image src="/BD.png" alt="Team1" width={60} height={60} />
                <div>
                  <p className="text-[24px] font-medium">VAN</p>
                  <div className="flex items-center gap-x-4">
                    <p className="text-[28px] font-semibold">110-10</p>
                    <p className="text-[20px] mt-[5px]  font-medium">18.5</p>
                  </div>
                </div>
              </div>
              <div className="text-[28px] font-bold cursor-pointer text-yellow-600 flex flex-col items-center justify-center">
                <p>Bahrain won by 56 runs</p>
                <p>🏆</p>
              </div>
              <div className="flex items-center ">
                <div>
                  <p className="text-[24px] text-end font-medium">VAN</p>
                  <div className="flex items-center gap-x-4">
                    <p className="text-[20px] mt-[5px]  font-medium ">18.5</p>
                    <p className="text-[28px] font-semibold">110-10</p>
                  </div>
                </div>
                <Image src="/BD.png" alt="Team1" width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-[#CFD1D399] bg-[#0E1720] relative py-2 pl-[140px]">
        <div className="px-[250px] flex items-center gap-x-5">
          <p
            onClick={() => handleTabClick("MatchInfo")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "MatchInfo" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Match Info
          </p>
          <p
            onClick={() => handleTabClick("Live")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Live" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Live
          </p>
          <p
            onClick={() => handleTabClick("Scorecard")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Scorecard" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Scorecard
          </p>
        </div>
      </div>
      {activeTab === "MatchInfo" && <MatchInfo />}
      {activeTab === "Live" && <LiveMatch />}
      {activeTab === "Scorecard" && <MatchScoreCard />}
    </div>
  );
};

export default MatchDetailsBanner;
