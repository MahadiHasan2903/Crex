"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const leagues = [
  {
    name: "BPL 2024",
    team: "RGR",
    schedule: "Jan 19 - Mar 1",
  },

  {
    name: "IPL 2024",
    team: "CSK",
    schedule: "Apr 5 - May 25",
  },

  {
    name: "Big Bash League 2024",
    team: "SYD",
    schedule: "Dec 20 - Feb 2",
  },

  {
    name: "Pakistan Super League 2024",
    team: "LHR",
    schedule: "Mar 10 - Apr 15",
  },

  {
    name: "Caribbean Premier League 2024",
    team: "TKR",
    schedule: "Aug 8 - Sep 21",
  },
];

const tournamentPerformance = [
  {
    Match: "Qualifier-2 T20 vs FRB",
    Date: "28 Feb",
    Score: "1 (4)",
    Action: "View",
  },
  {
    Match: "Qualifier-1 T20 vs CV",
    Date: "26 Feb",
    Score: "5 (9)",
    Action: "View",
  },
  {
    Match: "40th T20 vs CV",
    Date: "20 Feb",
    Score: "24 (19)",
    Action: "View",
  },
  {
    Match: "38th T20 vs FRB",
    Date: "19 Feb",
    Score: "29 (15)",
    Action: "View",
  },
  {
    Match: "34th T20 vs CGC",
    Date: "16 Feb",
    Score: "62 (39)",
    Action: "View",
  },
  {
    Match: "30th T20 vs KT",
    Date: "13 Feb",
    Score: "69 (31)",
    Action: "View",
  },
  {
    Match: "27th T20 vs CGC",
    Date: "10 Feb",
    Score: "27 (16)",
    Action: "View",
  },
  {
    Match: "21st T20 vs DD",
    Date: "6 Feb",
    Score: "34 (20)",
    Action: "View",
  },
  {
    Match: "20th T20 vs SYS",
    Date: "3 Feb",
    Score: "0 (1)",
    Action: "View",
  },
  {
    Match: "9th T20 vs KT",
    Date: "26 Jan",
    Score: "2 (4)",
    Action: "View",
  },
  {
    Match: "3rd T20 vs FRB",
    Date: "20 Jan",
    Score: "2 (3)",
    Action: "View",
  },
];

const PlayerMatches = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState("Batting");
  const [activeFormat, setActiveFormat] = useState("All");

  const handleLeagueClick = (index) => {
    setActiveIndex(index);
  };

  // Function to handle button click and set active button
  const handleFormatClick = (format) => {
    setActiveFormat(format);
  };

  // Function to determine active Format styles
  const isFormatActive = (format) => {
    return activeFormat === format
      ? "text-[#1860a6] bg-[#1860a614] border border-[#6EB4EF4D] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "border dark:border-white border-opacity-5 dark:border-opacity-5";
  };

  // Function to handle button click and set active button
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  // Function to determine active button styles
  const isButtonActive = (button) => {
    return activeButton === button
      ? "text-[#1860a6] bg-[#1860a614] border border-[#6EB4EF4D] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "border dark:border-white border-opacity-5 dark:border-opacity-5";
  };

  const selectedLeague =
    activeIndex !== null ? leagues[activeIndex] : leagues[0];
  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%] ml-5 pt-10">
        <div className="flex items-start my-5 gap-x-5">
          <div className="w-[45%] my-5  ">
            <div className="flex items-center gap-x-10">
              <p className="text-[24px] font-medium ">Matches</p>
              <div className="flex items-center ">
                <button
                  className={`flex items-center gap-x-2 px-5 py-2  rounded-l-md text-[14px]  ${isButtonActive(
                    "Batting"
                  )}`}
                  onClick={() => handleButtonClick("Batting")}
                >
                  <GiCricketBat /> Batting
                </button>
                <button
                  className={`flex items-center gap-x-2 px-5 py-2  rounded-r-md text-[14px]  ${isButtonActive(
                    "Bowling"
                  )}`}
                  onClick={() => handleButtonClick("Bowling")}
                >
                  <BiCricketBall /> Bowling
                </button>
              </div>
            </div>

            <div className="mt-10 ">
              <div className="flex items-center gap-x-3">
                <button
                  className={` px-4 py-1  rounded-md text-[14px]  ${isFormatActive(
                    "All"
                  )}`}
                  onClick={() => handleFormatClick("All")}
                >
                  All
                </button>
                <button
                  className={` px-4 py-1  rounded-md text-[14px]  ${isFormatActive(
                    "ODI"
                  )}`}
                  onClick={() => handleFormatClick("ODI")}
                >
                  ODI
                </button>
                <button
                  className={` px-4 py-1  rounded-md text-[14px]  ${isFormatActive(
                    "T20"
                  )}`}
                  onClick={() => handleFormatClick("T20")}
                >
                  T20
                </button>
                <button
                  className={` px-4 py-1  rounded-md text-[14px]  ${isFormatActive(
                    "TEST"
                  )}`}
                  onClick={() => handleFormatClick("TEST")}
                >
                  TEST
                </button>
              </div>
            </div>

            <div className="my-5 w-[90%] rounded-md text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A] bg-[#F8F8F8] dark:bg-[#111921] flex items-center gap-x-3 p-3">
              <BsSearch />
              <input
                type="text"
                placeholder="Search in Series or against Team"
                className="w-full bg-transparent outline-none opacity-70"
              />
            </div>
            <div className="overflow-y-scroll">
              {leagues.map((league, index) => (
                <div
                  key={index}
                  className={`flex w-full items-center py-4 pr-5 gap-x-5 cursor-pointer  ${
                    activeIndex === index
                      ? "bg-[#E7EFF6] dark:bg-[#10202B] border-r-[2px] border-[#1860A6]"
                      : "bg-transparent border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
                  }`}
                  onClick={() => handleLeagueClick(index)}
                >
                  <Image src="/psl.png" width={55} height={65} alt="team" />
                  <div>
                    <p className="text-[16px] dark:text-[#6EB4EF] text-[#1860A6]">
                      {league.name}
                    </p>
                    <div className="flex mt-2 items-center  text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                      <p> {league.schedule}</p>
                      <div className="w-[4px] mx-2 h-[4px] leading-[4px] rounded-full bg-[#ffffff4d]"></div>

                      <p> Played for {league.team}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[#4A4A4A] dark:text-[#9FA3A7] w-full  mt-5">
            <div className="flex items-center pt-12 pb-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
              <Image src="/psl.png" width={70} height={80} alt="team" />
              <div className="ml-5">
                <p className="text-[20px] font-medium dark:text-[#6EB4EF] text-[#1860A6]">
                  {selectedLeague.name}
                </p>
                <div className="mt-2 flex items-center  text-[16px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                  <p> {selectedLeague.schedule}</p>
                  <div className="w-[4px] mx-2 h-[4px] leading-[4px] rounded-full bg-[#ffffff4d]"></div>

                  <p>Played for {selectedLeague.team}</p>
                </div>
              </div>
            </div>
            <p className="mt-10 font-medium">T20</p>
            <div className="my-3 rounded-md border border-[#6EB4EF4D] flex items-center justify-between py-3 dark:bg-[#121C28] bg-[#ECF0F6]">
              <div className="flex flex-col items-center justify-center w-1/4 px-12 border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[22px] font-semibold ">255 </p>
                <p className="text-[14px] font-semibold text-[4A4A4A] dark:text-[9FA3A7]">
                  Runs
                </p>
              </div>
              <div className="flex flex-col w-1/4 items-center justify-center px-[50px] border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[22px] font-semibold ">11</p>
                <p className="text-[14px] font-semibold text-[4A4A4A] dark:text-[9FA3A7]">
                  Inns
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/4 px-12 border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[22px] font-semibold "> 23.18 </p>
                <p className="text-[14px] font-semibold text-[4A4A4A] dark:text-[9FA3A7]">
                  Average{" "}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-1/4">
                <p className="text-[22px] font-semibold "> 158.39 </p>
                <p className="text-[14px] font-semibold text-[4A4A4A] dark:text-[9FA3A7]">
                  Strike rate
                </p>
              </div>
            </div>

            <div className="w-full">
              <table className="w-full">
                <thead className="w-full">
                  <tr className="w-full dark:bg-[#151E28] bg-[#ECF0F6] text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                    <th className="w-1/4 py-2 font-normal">Match</th>
                    <th className="w-1/4 py-2 font-normal">Date</th>
                    <th className="w-1/4 py-2 font-normal">Score</th>
                    <th className="w-1/4 py-2 font-normal">Action</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {tournamentPerformance.map((performance, index) => (
                    <tr
                      key={index}
                      className="w-full border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
                    >
                      <th className="w-1/4 py-4 text-[16px] font-normal text-[#4A4A4A] dark:text-[#CFD1D3]">
                        {performance.Match}
                      </th>
                      <th className="w-1/4 py-4 text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7] font-normal">
                        {performance.Date}
                      </th>
                      <th className="w-1/4 py-4 text-[16px] font-normal text-[#4A4A4A] dark:text-[#CFD1D3]">
                        {performance.Score}
                      </th>
                      <th className="w-1/4 py-4 text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7] font-normal">
                        {performance.Action}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatches;
