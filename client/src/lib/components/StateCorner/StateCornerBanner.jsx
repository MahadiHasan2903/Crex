"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  record,
  seasonData,
  tournament,
  playingCountry,
  venueData,
  cricketFormatData,
} from "@/lib/utils/data";
import StatisticsFilter from "./StatisticsFilter";
import Link from "next/link";

const StateCornerBanner = () => {
  const [showFilters, setShowFilters] = useState(false);
  const filtersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openFiltersTab = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full">
      {showFilters && (
        <div className="relative text-black">
          <div className="fixed top-0 z-50 flex items-center justify-center w-full h-full -mt-[100px] bg-black bg-opacity-50 ">
            <div
              ref={filtersRef}
              className="flex items-center gap-x-12 w-[55%] p-8 mx-12 bg-white rounded-lg"
            >
              <StatisticsFilter data={record} title="Most" />
              <StatisticsFilter data={tournament} title="In" />
              <StatisticsFilter data={seasonData} title="Season" />
              <StatisticsFilter data={playingCountry} title="Playing for" />
              <StatisticsFilter data={venueData} title="At Venue" />
              <StatisticsFilter data={cricketFormatData} title="In Format" />
            </div>
          </div>
        </div>
      )}
      <div className="relative bg-state-corner-hero bg-cover bg-no-repeat bg-right w-full h-[300px]">
        <div
          class=" w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent"
          style={{
            backgroundImage:
              "linear-gradient(142.96deg, #000 21.5%, transparent 315.43%",
          }}
        >
          <div className="absolute flex items-center justify-between w-full ">
            <div className=" flex items-center w-full justify-between px-[25rem] pt-[3rem] pb-[5rem] gap-x-12">
              <div className=" border-l-[2px] border-yellow-200">
                <div className="ml-8">
                  <p className="  text-white text-[35px] font-medium">
                    Most Hundreds in World Cup 2023
                  </p>
                  <button
                    className="px-5 py-1 mt-8 text-blue-300 bg-transparent border border-blue-300 rounded-[3px]"
                    onClick={openFiltersTab}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
              <div className="relative right-0 flex items-end justify-center w-1/2 ml-[50px] mt-12 ">
                <div className="flex flex-col justify-center ">
                  <p className="text-[23px] font-semibold opacity-70 ">
                    S Hasan
                  </p>
                  <Link href={`/player-profile/${1}`}>
                    <div className="relative">
                      <Image
                        src="/player.png"
                        width={110}
                        height={106}
                        className="-mb-7"
                      />
                      <Image
                        src="/jersey.png"
                        width={110}
                        height={43}
                        className="z-[9994]"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col justify-center ">
                  <p className="text-[23px] font-semibold opacity-70 pl-5 ">
                    S Hasan
                  </p>

                  <Link href={`/player-profile/${1}`}>
                    <div className="relative">
                      <Image
                        src="/player.png"
                        width={150}
                        height={145}
                        className="-mb-9"
                      />
                      <Image
                        src="/jersey.png"
                        width={150}
                        height={58}
                        className="z-[9994]"
                      />
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col justify-center ">
                  <p className="text-[23px] font-semibold opacity-70 ">
                    S Hasan
                  </p>
                  <Link href={`/player-profile/${1}`}>
                    <div className="relative">
                      <Image
                        src="/player.png"
                        width={110}
                        height={106}
                        className="-mb-7"
                      />
                      <Image
                        src="/jersey.png"
                        width={110}
                        height={43}
                        className="z-[9994]"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCornerBanner;
