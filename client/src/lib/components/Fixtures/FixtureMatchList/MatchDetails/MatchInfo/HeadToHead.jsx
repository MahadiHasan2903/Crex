import React from "react";
import { matchData } from "@/lib/utils/data";
import Image from "next/image";

const HeadToHead = () => {
  return (
    <>
      <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
        <p className="text-[18px] font-medium mt-8 mb-4">
          Head to Head
          <span className="text-[14px] pl-2  opacity-70 font-normal">
            (Last 10 matches)
          </span>
        </p>

        <div className="flex items-center justify-between bg-[#F9F9F9] dark:bg-[#1A2938] p-5 rounded-lg">
          <div className="flex items-center gap-x-3">
            <Image src="/BD.png" width={64} height={64} />
            <p className="text-[16px]">BD</p>
          </div>
          <div className="text-[#CD333D] opacity-80 text-[28px] font-medium ">
            3 - 4
          </div>
          <div className="flex items-center gap-x-3">
            <p className="text-[16px]">BD</p>
            <Image src="/BD.png" width={64} height={64} />
          </div>
        </div>
      </div>

      <div>
        {matchData.map((match, index) => (
          <div
            key={index}
            className="flex pb-5 items-center justify-between my-8 dark:text-[#9FA3A7] text-black border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
          >
            <div>
              <p className="text-[16px]">{match.team}</p>
              <div className="flex items-center gap-x-2">
                <p className="font-medium text-[16px]">{match.score}</p>
                <p className="text-[14px]">{match.overs}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#CD333D] text-[16px]">{match.result}</p>
              <p className="text-[12px]">{match.description}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[16px]">{match.team}</p>
              <div className="flex items-center gap-x-2">
                <p className="text-[14px]">{match.overs}</p>
                <p className="font-medium text-[16px]">{match.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeadToHead;
