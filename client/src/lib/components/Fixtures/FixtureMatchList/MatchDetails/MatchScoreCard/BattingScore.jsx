import React from "react";
import { battingData } from "@/lib/utils/data";

const BattingScore = () => {
  return (
    <div className="w-full">
      <p className="dark:text-[#CFD1D3] text-black text-[18px] font-semibold">
        Batting
      </p>
      <div className="w-full text-[14px] flex items-center justify-between bg-[#F9F9F9] dark:bg-[#1A2938] p-5  mt-5">
        <div className="w-full">Batter</div>
        <div className="flex items-center w-1/2 gap-x-6">
          <p className="w-full">R</p>
          <p className="w-full">B</p>
          <p className="w-full">4s</p>
          <p className="w-full">6s</p>
          <p className="w-full">Sr</p>
        </div>
      </div>

      {battingData.map((data, index) => (
        <div
          key={index}
          className={`w-full text-[14px] flex items-center justify-between p-5 ${
            index !== battingData.length - 1
              ? "border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
              : ""
          }`}
        >
          <div
            className={`w-full ${
              data.battingStatus === "Not Out"
                ? "dark:text-[#6EB4EF] text-[#1860A6]"
                : "dark:text-[#CFD1D3] text-black"
            }`}
          >
            {data.player}
          </div>
          <div className="w-full text-[14px] dark:text-[#CFD1D380] text-black">
            {data.battingStatus}
          </div>
          <div className="flex items-center w-full gap-x-6">
            <p className="w-full font-bold">{data.runs}</p>
            <p className="w-full">{data.balls}</p>
            <p className="w-full">{data.fours}</p>
            <p className="w-full">{data.sixes}</p>
            <p className="w-full">{data.strikeRate}</p>
          </div>
        </div>
      ))}
      <div className="w-full dark:text-[#CFD1D3] text-black text-[14px] flex items-center justify-between p-5 border-y border-black dark:border-white border-opacity-5 dark:border-opacity-5">
        <div>Extras:</div>
        <div>4(b 0, lb 2, w 2, nb 0, p 0)</div>
      </div>
    </div>
  );
};

export default BattingScore;
