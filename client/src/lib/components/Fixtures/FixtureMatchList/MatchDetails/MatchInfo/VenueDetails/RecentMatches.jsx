import React from "react";
import { matchData } from "@/lib/utils/data";
import Image from "next/image";

const RecentMatches = () => {
  return (
    <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
      <p className="text-[16px] font-medium mt-8 mb-4">
        Recent Matches on Venue
      </p>
      {matchData.map((match, index) => (
        <div
          key={index}
          className="flex pb-5 items-center justify-between my-8 dark:text-[#9FA3A7] text-black border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
        >
          <div className="flex items-center gap-x-2">
            <Image src="/BD.png" width={50} height={50} />
            <div>
              <p className="text-[16px]">{match.team}</p>
              <div className="flex items-center gap-x-2">
                <p className="font-medium text-[16px]">{match.score}</p>
                <p className="text-[14px]">{match.overs}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#CD333D] text-[16px]">{match.result}</p>
            <p className="text-[12px]">{match.description}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex flex-col items-end">
              <p className="text-[16px]">{match.team}</p>
              <div className="flex items-center gap-x-2">
                <p className="text-[14px]">{match.overs}</p>
                <p className="font-medium text-[16px]">{match.score}</p>
              </div>
            </div>
            <Image src="/BD.png" width={50} height={50} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentMatches;
