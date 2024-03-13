"use client";
import React from "react";
import MatchFixtureCard from "@/lib/components/Fixtures/FixtureMatchList/MatchFixtureCard";
import { matchList } from "@/lib/utils/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FixtureMatchList = ({
  selectedFormat,
  selectedSeries,
  selectedTeams,
  removeSelectedFormat,
  removeSelectedSeries,
  removeSelectedTeam,
}) => {
  const handleRemoveTeam = (team) => {
    removeSelectedTeam(team);
  };

  return (
    <div className="p-5 w-[70%] dark:text-[#CFD1D3] text-black border-r border-black border-opacity-5 dark:border-primary">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center ml-10 gap-x-3">
          {selectedTeams.map((team, index) => (
            <div
              key={index}
              className="flex items-center px-2 py-1 mb-2 border rounded-md cursor-pointer enter gap-x-2"
            >
              <p>{team}</p>
              <RxCross2
                size={20}
                className="cursor-pointer hover:text-red-500"
                onClick={() => handleRemoveTeam(team)}
              />
            </div>
          ))}
          {selectedSeries && (
            <div className="flex items-center px-2 py-1 mb-2 border rounded-md enter gap-x-2">
              <p>{selectedSeries}</p>
              <RxCross2
                size={20}
                className="cursor-pointer hover:text-red-500"
                onClick={removeSelectedSeries}
              />
            </div>
          )}
          {selectedFormat && (
            <div className="flex items-center px-2 py-1 mb-2 border rounded-md cursor-pointer enter gap-x-2">
              <p>{selectedFormat}</p>
              <RxCross2
                size={20}
                className="cursor-pointer hover:text-red-500"
                onClick={removeSelectedFormat}
              />
            </div>
          )}
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
