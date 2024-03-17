import React from "react";
import { matchData } from "@/lib/utils/data";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FeaturedMatches = () => {
  return (
    <div className="my-8 text-[#CFD1D3]">
      <div className="flex items-center justify-between">
        <p className="text-[18px] text-[#4A4A4A] dark:text-[#CFD1D3] font-medium">
          Featured Matches
        </p>
        <p className="dark:text-[#6EB4EF] cursor-pointer text-[14px] flex items-center font-medium text-[#1860A6]">
          All matches
          <MdOutlineKeyboardArrowRight size={20} />
        </p>
      </div>
      {matchData.slice(0, 3).map((match, index) => (
        <div
          key={index}
          className="py-1 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
        >
          <div className="flex cursor-pointer mb-1 dark:hover:bg-[#16232F] py-6 rounded-md  hover:bg-[#FBFBFB]   items-center justify-between mt-2 dark:text-[#9FA3A7] text-[#4A4A4A]">
            <div className="flex items-center gap-x-2">
              <Image src="/BD.png" width={50} height={50} />
              <div>
                <p className="text-[16px]">{match.team}</p>
                <div className="flex items-center gap-x-2">
                  <p className="font-medium text-[16px] text-[#4A4A4A] dark:text-[#CFD1D3]">
                    {match.score}
                  </p>
                  <p className="text-[14px]">{match.overs}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#BB7627] text-[16px]">{match.result}</p>
              <p className="text-[12px]">{match.description}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex flex-col items-end">
                <p className="text-[16px]">{match.team}</p>
                <div className="flex items-center gap-x-2">
                  <p className="text-[14px]">{match.overs}</p>
                  <p className="font-medium text-[16px] text-[#4A4A4A] dark:text-[#CFD1D3]">
                    {match.score}
                  </p>
                </div>
              </div>
              <Image src="/BD.png" width={50} height={50} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedMatches;
