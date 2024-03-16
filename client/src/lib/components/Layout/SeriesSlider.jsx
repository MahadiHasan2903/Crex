"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { allSeries } from "@/lib/utils/data";
import Link from "next/link";

const SeriesSlider = ({ onClosePopup }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const itemsToShow = 7;

  const handlePrevClick = () => {
    const newPosition = Math.max(sliderPosition - itemsToShow, 0);
    setSliderPosition(newPosition);
  };

  const handleNextClick = () => {
    const remainingSeries = totalSeries - (sliderPosition + itemsToShow);
    const nextPosition = Math.min(
      sliderPosition + itemsToShow,
      totalSeries - (remainingSeries % itemsToShow)
    );
    setSliderPosition(nextPosition);
  };

  const totalSeries = allSeries?.length;
  const canShowNext = sliderPosition + itemsToShow < totalSeries;
  const canShowPrev = sliderPosition - itemsToShow >= 0;

  return (
    <>
      <div className="absolute z-[999] popup  bg-primary w-full h-[250px] border-t border-secondary border-opacity-50">
        {totalSeries ? (
          <div className="flex items-center justify-between px-[150px] pt-5 gap-x-5">
            <FaChevronLeft
              size={25}
              color="white"
              className={`cursor-pointer ${
                canShowPrev ? "" : "opacity-50 pointer-events-none"
              }`}
              onClick={canShowPrev ? handlePrevClick : undefined}
            />
            <div className="box-border flex items-start gap-x-3">
              {allSeries
                .slice(sliderPosition, sliderPosition + itemsToShow)
                .map((series) => (
                  <Link
                    href={`/series/${series.id}`}
                    key={series.id}
                    onClick={onClosePopup}
                  >
                    <div className="flex flex-col box-border  bg-transparent cursor-pointer transition-all rounded-md hover:bg-[#212529] px-5 py-3">
                      <Image
                        src="/psl.png"
                        alt="series"
                        width={100}
                        height={120}
                      />
                      <p className="text-[#FAFAFA] w-[100px] text-center text-[14px] mt-3 font-medium">
                        {series.name}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
            <FaChevronRight
              size={25}
              color="white"
              className={`cursor-pointer ${
                canShowNext ? "" : "opacity-50 pointer-events-none"
              }`}
              onClick={canShowNext ? handleNextClick : undefined}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center mt-[100px]">
            <p className="text-[30px] font-bold text-white">
              Currently no series is going on.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SeriesSlider;
