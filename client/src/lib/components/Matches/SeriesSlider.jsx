"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const SeriesSlider = ({ allSeries }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const itemsToShow = 6;

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
      <div className="absolute z-[999999] popup  bg-primary w-full h-[250px] border-t border-secondary border-opacity-50">
        {totalSeries ? (
          <div className="flex items-center justify-center gap-x-5 ">
            <FaChevronLeft
              size={25}
              color="#4B4B4B"
              className={`cursor-pointer ${
                canShowPrev ? "" : "opacity-50 pointer-events-none"
              }`}
              onClick={canShowPrev ? handlePrevClick : undefined}
            />
            <div className="flex items-center justify-center">
              {allSeries
                .slice(sliderPosition, sliderPosition + itemsToShow)
                .map((series) => (
                  <div
                    key={series.seriesName}
                    className="flex flex-col items-center justify-center p-4 bg-transparent cursor-pointer transition-all rounded-sm hover:bg-[#212529]"
                  >
                    <Image
                      src="/psl.png"
                      alt="series"
                      width={100}
                      height={120}
                    />
                    <p className="text-[#FAFAFA] text-[16px] mt-3 font-medium">
                      {series.name}
                    </p>
                  </div>
                ))}
            </div>
            <FaChevronRight
              size={25}
              color="#4B4B4B"
              className={`cursor-pointer ${
                canShowNext ? "" : "opacity-50 pointer-events-none"
              }`}
              onClick={canShowNext ? handleNextClick : undefined}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center mt-[100px]">
            <p className="text-[30px] font-bold">
              Currently no series is going on.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SeriesSlider;
