import React from "react";
import MatchFixtureCard from "@/lib/components/Fixtures/MatchFixtureCard";
import { matchList } from "@/lib/utils/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FixtureMatchList = ({
  selectedTeams,
  selectedFormat,
  selectedSeries,
}) => {
  console.log("Selected Format:", selectedFormat);
  console.log("Selected Series:", selectedSeries);
  console.log("Selected Teams:", selectedTeams);

  return (
    <div className="p-5 w-[70%] border-r border-black border-opacity-5 dark:border-primary">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-10 gap-x-3">
          <div className="flex items-center px-2 py-1 border rounded-md enter gap-x-2">
            <p>Bangladesh</p>
            <RxCross2 />
          </div>
          <div className="flex items-center px-2 py-1 border rounded-md enter gap-x-2">
            <p>Bangladesh</p>
            <RxCross2 />
          </div>
          <div className="flex items-center px-2 py-1 border rounded-md enter gap-x-2">
            <p>Bangladesh</p>
            <RxCross2 />
          </div>
          <div className="flex items-center px-2 py-1 border rounded-md enter gap-x-2">
            <p>Bangladesh</p>
            <RxCross2 />
          </div>
          <div className="flex items-center px-2 py-1 border rounded-md enter gap-x-2">
            <p>Bangladesh</p>
            <RxCross2 />
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <FaChevronLeft
            size={24}
            color="#4B4B4B"
            className="w-[30px] h-[30px] cursor-pointer p-2 rounded-full bg-[#eeeeee] dark:bg-primary"
          />
          <FaChevronRight
            size={24}
            color="#4B4B4B"
            className="w-[30px] h-[30px] cursor-pointer p-2 rounded-full bg-[#eeeeee] dark:bg-primary"
          />
        </div>
      </div>
      {matchList.map(({ date, matches }) => (
        <div key={date}>
          <div className="pl-5 pt-4 pb-8 border-b border-black border-opacity-5 dark:border-primary text-[14px] m-4 font-semibold">
            {date}
          </div>
          {matches.map((match, index) => (
            <MatchFixtureCard key={index} match={match} />
          ))}
        </div>
      ))}
      <div className="flex text-[14px] items-center justify-center my-10 gap-x-10">
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

export default FixtureMatchList;
