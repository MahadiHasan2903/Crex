"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { seriesArray } from "@/lib/utils/data";
import { convertTimestampToFormattedDate } from "@/lib/utils/timeConverter";

const FixtureSeriesList = ({
  selectedFormat,
  selectedSeries,
  removeSelectedFormat,
  removeSelectedSeries,
}) => {
  return (
    <div className="p-5 w-[70%] border-r border-black border-opacity-5 dark:border-primary">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center ml-10 gap-x-3">
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

      {seriesArray?.map((series, index) => (
        <div
          key={series.id}
          className={`flex items-center py-5 mt-3 border-t ${
            index === seriesArray.length - 1 ? "border-b" : ""
          } border-black gap-x-5 border-opacity-5 dark:border-primary`}
        >
          <div>
            <Image src="/psl.png" width={55} height={65} />
          </div>
          <div className="">
            <p className="dark:text-[#6EB4EF] text-[16px] text-[#1860A6]">
              {series.name}
            </p>
            <p className="text-[14px] mt-2">
              {convertTimestampToFormattedDate(series.startDt)} -{" "}
              {convertTimestampToFormattedDate(series.endDt)}
            </p>
          </div>
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

export default FixtureSeriesList;
