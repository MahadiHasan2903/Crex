"use client";
import Image from "next/image";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { BiCalendarEvent } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import TeamResultInfo from "@/lib/components/atoms/TeamResultInfo";

const MatchInfo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[60%]  ml-3 mt-12">
        <div className="w-[70%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="flex items-center pb-8 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
            <Image src="/psl.png" width={50} height={55} />
            <div className="">
              <p className="text-[14px]  font-normal opacity-80">7th Match</p>
              <div className="flex items-center gap-x-2">
                <p className="text-[18px] dark:text-[#CFD1D3] text-black font-medium">
                  Malaysia T20 2024
                </p>

                <div className="dark:text-[#6EB4EF] text-[#1860A6]">
                  <MdChevronRight size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="flex items-center mb-5 gap-x-3">
              <BiCalendarEvent size={25} />
              <p className="text-[14px]">Mar 10, 2024, 7:15:00 AM</p>
            </div>
            <div className="flex items-center gap-x-3">
              <FaLocationDot size={25} />
              <p className="dark:text-[#6EB4EF] text-[14px] text-[#1860A6]">
                Bayuemas Oval
              </p>
            </div>
          </div>

          <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
            <p className="text-[18px] font-medium mt-8 mb-4">
              Team Form
              <span className="text-[14px] pl-2  opacity-70 font-normal">
                (Last 5 matches)
              </span>
            </p>
            <TeamResultInfo teamName="Bangladesh" />
            <TeamResultInfo teamName="Australia" />
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default MatchInfo;
