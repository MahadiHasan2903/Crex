"use client";
import React, { useState } from "react";
import Switch from "../../atoms/Switch";
import Image from "next/image";
import { seriesPointTable } from "@/lib/utils/data";

const PointsTable = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (event) => {
    setShowDetails(event.target.checked);
    console.log("showDetails:", event.target.checked);
  };

  return (
    <div className="my-8 dark:text-[#9FA3A7] text-[#4A4A4A]">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[18px] text-[#4A4A4A] dark:text-[#CFD1D3] font-medium">
          PSL 2024 Points Table
        </p>
        <div className="flex items-center gap-x-3">
          <p className=" cursor-pointer text-[14px]  flex items-center font-medium ">
            Team Form
          </p>
          <Switch checked={showDetails} onChange={handleChange} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between w-full text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A] dark:bg-[#131E29] bg-[#FCFCFC] py-2 px-4">
          <div className="">
            <p>Team</p>
          </div>

          {!showDetails ? (
            <div className="flex items-center justify-between w-1/2">
              <div className="flex items-center gap-x-10">
                <p>P</p>
                <p>W</p>
                <p>L</p>
                <p>NR</p>
              </div>
              <div>NRR</div>
              <div>Pts</div>
            </div>
          ) : (
            <div>Form</div>
          )}
        </div>
        {seriesPointTable.map((team, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full text-[16px] dark:text-[#9FA3A7] text-[#4A4A4A] py-2 px-4 border-b border-black  dark:border-white border-opacity-5 dark:border-opacity-5"
          >
            <div className="flex items-center gap-x-3">
              <Image
                src="/BD.png"
                width={40}
                height={40}
                alt="team"
                className="bg-transparent"
              />
              <p className="font-medium">{team.name}</p>
            </div>
            {!showDetails ? (
              <div className="flex items-center justify-between w-1/2 font-bold">
                <div className="flex items-center gap-x-10">
                  <p>{team.matches}</p>
                  <p>{team.wins}</p>
                  <p>{team.losses}</p>
                  <p>{team.noResult}</p>
                </div>
                <div>{team.NRR}</div>
                <div className="text-[#9E6105] dark:text-[#EAAE54] text-[20px]">
                  {team.points}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <div className="w-[16] rounded-sm px-2 py-1 h-[16px] text-[#418019] bg-[#418019]"></div>
                <div className="w-[16] rounded-sm px-2 py-1 h-[16px] bg-[#AA0707] text-[#AA0707]"></div>
                <div className="w-[16] rounded-sm px-2 py-1 h-[16px] text-[#418019] bg-[#418019]"></div>
                <div className="w-[16] rounded-sm px-2 py-1 h-[16px] text-[#418019] bg-[#418019]"></div>
                <div className="w-[16] rounded-sm px-2 py-1 h-[16px] bg-[#AA0707] text-[#AA0707]"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      {showDetails && (
        <div className="flex items-center pl-3 my-5">
          <div className="flex items-center mr-3 gap-x-1">
            <div className="w-[16] rounded-sm px-2 py-1 h-[16px] text-[#418019] bg-[#418019] border border-[#418019]"></div>
            <p className="text-[12px]">Win</p>
          </div>
          <div className="flex items-center mr-3 gap-x-1">
            <div className="w-[16] rounded-sm px-2 py-1 h-[16px] bg-[#AA0707] text-[#AA0707] border border-[#AA0707]"></div>
            <p className="text-[12px]">Lose</p>
          </div>
          <div className="flex items-center mr-3 gap-x-1">
            <div className="w-[16] rounded-sm px-2 py-1 h-[16px] bg-[#9E6105] text-[#9E6105] border border-[#9E6105]"></div>
            <p className="text-[12px]">Tie/ Draw</p>
          </div>
          <div className="flex items-center mr-3 gap-x-1">
            <div className="w-[16] rounded-sm px-2 py-1 h-[16px] bg-transparent text-transparent border border-black dark:border-white"></div>
            <p className="text-[12px]">Yet to play</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PointsTable;
