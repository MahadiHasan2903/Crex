"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeamComparison = () => {
  const [activeButton, setActiveButton] = useState("Overall");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const isButtonActive = (button) => {
    return activeButton === button
      ? "text-[#1860a6] bg-[#1860a614] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "";
  };

  return (
    <div className="mt-[50px] text-black dark:text-[#CFD1D3] ">
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-medium mt-8 mb-4">
          Team Comparison
          <span className="text-[14px] pl-2  opacity-70 font-normal">
            (Last 10 matches)
          </span>
        </p>
        <div className="flex items-center gap-x-3">
          <button
            className={`px-3 py-1 border rounded-md text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "Overall"
            )}`}
            onClick={() => handleButtonClick("Overall")}
          >
            Overall
          </button>
          <button
            className={`px-3 py-1 border rounded-md text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "On Venue"
            )}`}
            onClick={() => handleButtonClick("On Venue")}
          >
            On Venue
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#F9F9F9] dark:bg-[#1A2938] p-5 rounded-lg">
        <div className="flex items-center gap-x-3">
          <Image src="/BD.png" width={50} height={50} />
          <div>
            <p className="text-[16px] mb-1">BD</p>
            <p className="text-[12px] opacity-80 ">vs all teams</p>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex flex-col items-end">
            <p className="text-[16px] mb-1">BD</p>
            <p className="text-[12px] opacity-80 ">vs all teams</p>
          </div>
          <Image src="/BD.png" width={50} height={50} />
        </div>
      </div>

      {activeButton === "Overall" && (
        <div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px]">10</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Match Played
            </p>
            <p className="text-[16px]">10</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">80%</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">Win</p>
            <p className="text-[16px]">40%</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">164</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Average Score
            </p>
            <p className="text-[16px]">161</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">229</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Highest Score
            </p>
            <p className="text-[16px]">186</p>
          </div>

          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#FF7575]">42</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Lowest Score
            </p>
            <p className="text-[16px] ">121</p>
          </div>
        </div>
      )}

      {activeButton === "On Venue" && (
        <div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px]">10</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Match Played
            </p>
            <p className="text-[16px]">10</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">100%</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">Win</p>
            <p className="text-[16px]">0%</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">157</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Average Score
            </p>
            <p className="text-[16px]">139</p>
          </div>
          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#6CB240]">219</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Highest Score
            </p>
            <p className="text-[16px]">139</p>
          </div>

          <div className="flex items-center justify-between px-5 pb-3 my-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[16px] text-[#FF7575]">42</p>
            <p className="text-[14px] dark:text-[#9FA3A7] text-black">
              Lowest Score
            </p>
            <p className="text-[16px] ">139</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamComparison;
