"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import SeriesOverview from "./Overview/SeriesOverview";
import SeriesMatches from "./Matches/SeriesMatches";
import SeriesSquads from "./Squads/SeriesSquads";
import SeriesStates from "./States/SeriesStates";
import SeriesInfo from "./Info/SeriesInfo";

const SeriesBanner = () => {
  const tabNames = [
    "Overview",
    "Matches",
    "Squads",
    "Series States",
    "News",
    "Info",
  ];

  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="w-full relative text-[#FCFCFC] bg-[#0F1820] ">
        <div className="border-y border-[#797b7e] border-opacity-30 px-[150px]">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-x-8">
              <div className="p-[8px] cursor-pointer  bg-[#9fa3a733] border border-[#9fa3a733]">
                <MdOutlineChevronLeft size={15} color="#FCFCFC" />
              </div>
              <Image src="/psl.png" width={93} height={110} alt="series" />
              <div>
                <p className="text-[24px] font-medium opacity-80">
                  Sri Lanka tour of Bangladesh 2024
                </p>
                <p className="text-[14px] font-normal opacity-50">
                  Mar 4 - Apr 3
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-end">
                <p className="text-[14px] font-medium opacity-50">SL vs BD</p>
                <p className="text-[14px] font-normal opacity-50">2024</p>
              </div>
              <Image src="/psl.png" width={68} height={80} alt="series" />

              <div className="ml-3 p-[8px] cursor-pointer  bg-[#9fa3a733] border border-[#9fa3a733]">
                <MdOutlineChevronRight size={15} color="#FCFCFC" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full text-[#CFD1D399] bg-[#0E1720]  py-2">
            <div className="px-[280px]  flex items-center gap-x-8">
              {tabNames.map((tabName, index) => (
                <p
                  key={index}
                  onClick={() => handleTabClick(tabName)}
                  className={`relative font-bold  -mb-[10px] cursor-pointer text-[16px] pb-[10px] ${
                    activeTab === tabName
                      ? "border-b-2 border-[#FF7575] text-[#FCFCFCCC]"
                      : "text-[#FCFCFC4D]"
                  }`}
                >
                  {tabName}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {activeTab === "Overview" && <SeriesOverview />}
      {activeTab === "Matches" && <SeriesMatches />}
      {activeTab === "Squads" && <SeriesSquads />}
      {activeTab === "Series States" && <SeriesStates />}
      {activeTab === "News" && <SeriesNews />}
      {activeTab === "Info" && <SeriesInfo />}
    </>
  );
};

export default SeriesBanner;
