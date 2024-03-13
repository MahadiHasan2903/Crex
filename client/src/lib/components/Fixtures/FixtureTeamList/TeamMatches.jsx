import React from "react";
import Image from "next/image";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { matchesData } from "@/lib/utils/data";

const TeamMatches = () => {
  return (
    <div className="px-[400px] w-full my-6 text-[#9FA3A7] text-[16px]">
      <p className="font-medium">India Premier League 2024</p>

      <div className="mb-10">
        {matchesData.map((match, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full pb-5 mt-10 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
          >
            <div className="flex items-center w-full gap-x-2">
              <Image src={match.imageSrc} width={56} height={56} alt="Team" />
              <p>{match.team1}</p>
            </div>
            <div className="w-full text-center">
              <p>{match.date}</p>
              <p className="text-[12px] font-semibold opacity-60">
                {match.venue}
              </p>
            </div>
            <div className="flex items-center justify-end w-full gap-x-2">
              <p>{match.team2}</p>
              <Image src={match.imageSrc} width={56} height={56} alt="Team" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex text-[14px] items-center justify-center mt-10 gap-x-10 mb-[200px]">
        <button className="flex dark:text-[#6EB4EF] text-[#1860A6] items-center gap-x-2">
          <FaAngleDoubleLeft />
          Previous
        </button>

        <button className="flex dark:text-[#6EB4EF] text-[#1860A6] items-center gap-x-2">
          Next <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default TeamMatches;
