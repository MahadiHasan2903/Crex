"use client";
import React, { useState } from "react";
import MatchCard from "./MatchCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const MatchSlider = ({ liveMatches }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const totalMatches = liveMatches?.length;
  console.log(totalMatches);

  const handlePrevClick = () => {
    setSliderPosition((prevPosition) => Math.max(prevPosition - 3, 0));
  };

  const handleNextClick = () => {
    if (sliderPosition + 3 < totalMatches) {
      setSliderPosition((prevPosition) => prevPosition + 3);
    }
  };

  return (
    <>
      {!totalMatches && (
        <div className="flex flex-col justify-center mx-5 lg:mx-[350px]">
          <p className="my-6 dark:text-tertiary text-[20px] font-medium text-left ml-[45px]">
            Matches For you
          </p>
          <div className="flex items-center gap-x-5">
            <FaChevronLeft
              size={25}
              color="#4B4B4B"
              className="cursor-pointer "
              onClick={handlePrevClick}
            />
            <div className="grid grid-cols-3 gap-x-5">
              {liveMatches
                ?.slice(sliderPosition, sliderPosition + 3)
                ?.map((match, index) => (
                  <MatchCard key={index} match={match} />
                ))}
            </div>
            <FaChevronRight
              size={25}
              color="#4B4B4B"
              className="cursor-pointer"
              onClick={handleNextClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MatchSlider;
