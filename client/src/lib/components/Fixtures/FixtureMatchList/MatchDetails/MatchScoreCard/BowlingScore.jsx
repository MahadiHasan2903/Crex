import React from "react";
import { bowlingData } from "@/lib/utils/data";

const BowlingScore = () => {
  return (
    <div className="w-full mt-12">
      <p className="dark:text-[#CFD1D3] text-black text-[18px] font-semibold">
        BOWLING
      </p>
      <div className="w-full text-[14px] flex items-center justify-between bg-[#F9F9F9] dark:bg-[#1A2938] p-5  mt-5">
        <div className="w-full">Bowler</div>
        <div className="flex items-center w-1/2 gap-x-6">
          <p className="w-full ">O</p>
          <p className="w-full">M</p>
          <p className="w-full">R</p>
          <p className="w-full">W</p>
          <p className="w-full ">ER</p>
        </div>
      </div>

      {bowlingData.map((data, index) => (
        <div
          key={index}
          className={`w-full text-[14px] flex items-center justify-between p-5 ${
            index !== bowlingData.length - 1
              ? "border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
              : ""
          }`}
        >
          <div className="w-full dark:text-[#CFD1D3] text-black">
            {data.player}
          </div>

          <div className="flex items-center w-1/2 gap-x-6">
            <p className="w-full font-bold">{data.overs}</p>
            <p className="w-full">{data.maiden}</p>
            <p className="w-full">{data.runs}</p>
            <p className="w-full">{data.wickets}</p>
            <p className="w-full">{data.economyRate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BowlingScore;
