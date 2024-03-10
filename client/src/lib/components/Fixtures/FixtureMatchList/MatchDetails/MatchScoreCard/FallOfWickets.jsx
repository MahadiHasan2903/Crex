import React from "react";
import { fallOfWicketsData } from "@/lib/utils/data";

const FallOfWickets = () => {
  return (
    <div className="w-full mt-12">
      <p className="dark:text-[#CFD1D3] text-black text-[18px] font-semibold">
        FALL OF WICKETS
      </p>
      <div className="w-full text-[14px] flex items-center justify-between bg-[#F9F9F9] dark:bg-[#1A2938] p-5  mt-5">
        <div className="w-full">Batsman</div>
        <div className="flex items-center justify-end w-1/2 gap-x-6">
          <p className="w-full ">Score</p>
          <p className="w-full">Over</p>
        </div>
      </div>

      {fallOfWicketsData.map((data, index) => (
        <div
          key={index}
          className={`w-full text-[14px] flex items-center justify-between p-5 ${
            index !== fallOfWicketsData.length - 1
              ? "border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
              : ""
          }`}
        >
          <div className="w-full dark:text-[#CFD1D3] text-black">
            {data.batsman}
          </div>

          <div className="flex items-center justify-end w-1/2 gap-x-6">
            <p className="w-full font-bold">{data.score}</p>
            <p className="w-full">{data.over}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FallOfWickets;
