"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const playerRankings = [
  "#49 Batter in ODI",
  "#1 All Rounder in T20",
  "#2 All Rounder in ODI",
  "#31 Bowler in ODI",
  "#31 Bowler in T20",
  "#76 Batter in T20",
  "#40 Batter in TEST",
  "#27 Bowler in TEST",
  "#3 All Rounder in TEST",
];

const PlayerProfileBanner = () => {
  return (
    <>
      <div className="w-full ">
        <div className=" flex justify-center  w-full h-[320px] text-[#FCFCFC] bg-[#122638] dark:bg-[#0F1820]">
          <div className="w-[75%]">
            <div className="flex items-start justify-between mt-5">
              <div className="w-1/3 mt-4 mr-12">
                <Link href={`/player-profile/${1}`}>
                  <div className="mt-2 ml-4 -mb-2">
                    <Image
                      src="/player.png"
                      width={260}
                      height={252}
                      className="-mb-[75px]"
                    />
                    <Image
                      src="/jersey.png"
                      width={260}
                      height={100}
                      className="z-[9994]"
                    />
                  </div>
                </Link>
              </div>
              <div className="ml-12">
                <p className="font-[300] text-[48px] ">Shakib Al</p>
                <p className="font-medium text-[48px] ">Hasan</p>
                <div className="flex items-center my-2 text-[18px] font-normal">
                  <div className="flex items-center gap-x-1 ">
                    <Image src="/BD.png" width={28} height={27} alt="team" />
                    <p>BAN</p>
                  </div>
                  <div className="w-[4px] mx-2 h-[4px] leading-[4px] rounded-full bg-[#ffffff4d]"></div>
                  <p className="pr-5 border-r border-black gap-x-5 dark:border-white border-opacity-10 dark:border-opacity-10">
                    36 years
                  </p>
                  <p className="pl-5 text-[14px]">🏏 All Rounder</p>
                </div>
                <div className="text-[13px] flex-wrap font-normal flex items-center gap-x-3 mb-10 mt-5">
                  {playerRankings.map((ranking, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 my-1 border border-black rounded-md dark:border-white border-opacity-5 dark:border-opacity-5"
                    >
                      <p className="opacity-80">{ranking}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerProfileBanner;
