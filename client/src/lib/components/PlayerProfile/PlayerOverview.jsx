"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";
import { MdChevronRight } from "react-icons/md";
import {
  FaChevronRight,
  FaChevronLeft,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import PlayerBio from "./PlayerBio";

const playerPerformance = [
  { matchId: 1, score: "1(4)", match: "RGR vs CV, BPL" },
  { matchId: 5, score: "5(9)", match: "RGR vs CV, BPL" },
  { matchId: 24, score: "24(19)", match: "RGR vs FRB, BPL" },
  { matchId: 29, score: "29(15)", match: "RGR vs CGC, BPL" },
  { matchId: 62, score: "62(39)", match: "RGR vs KT, BPL" },
  { matchId: 69, score: "69(31)", match: "RGR vs KT, BPL" },
  { matchId: 75, score: "75(48)", match: "RGR vs CV, BPL" },
  { matchId: 82, score: "82(27)", match: "RGR vs FRB, BPL" },
  { matchId: 89, score: "89(55)", match: "RGR vs CGC, BPL" },
  { matchId: 94, score: "94(42)", match: "RGR vs KT, BPL" },
  { matchId: 102, score: "102(36)", match: "RGR vs CV, BPL" },
];

const playerCareerStats = [
  {
    Format: "ODI",
    Mat: 247,
    Inn: 234,
    R: 7570,
    "100s": 9,
    "50s": 56,
    HS: 134,
    SR: 82.84,
    Avg: 37.11,
    Fours: 699,
    Sixes: 54,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "T20I",
    Mat: 117,
    Inn: 116,
    R: 2382,
    "100s": 0,
    "50s": 12,
    HS: 84,
    SR: 122.47,
    Avg: 23.58,
    Fours: 242,
    Sixes: 50,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "Test",
    Mat: 66,
    Inn: 121,
    R: 4455,
    "100s": 5,
    "50s": 31,
    HS: 217,
    SR: 61.97,
    Avg: 39.08,
    Fours: 539,
    Sixes: 27,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "IPL",
    Mat: 71,
    Inn: 52,
    R: 793,
    "100s": 0,
    "50s": 2,
    HS: 66,
    SR: 124.49,
    Avg: 19.82,
    Fours: 73,
    Sixes: 21,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "CPL",
    Mat: 36,
    Inn: 31,
    R: 448,
    "100s": 0,
    "50s": 2,
    HS: 54,
    SR: 109.54,
    Avg: 16.59,
    Fours: 36,
    Sixes: 11,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "BPL",
    Mat: 37,
    Inn: 33,
    R: 914,
    "100s": 0,
    "50s": 8,
    HS: 89,
    SR: 159.51,
    Avg: 30.47,
    Fours: 82,
    Sixes: 51,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "ABU DHABI",
    Mat: 6,
    Inn: 3,
    R: 46,
    "100s": 0,
    "50s": 0,
    HS: 17,
    SR: 158.62,
    Avg: 23.0,
    Fours: 4,
    Sixes: 3,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "PSL",
    Mat: 13,
    Inn: 13,
    R: 181,
    "100s": 0,
    "50s": 1,
    HS: 51,
    SR: 107.1,
    Avg: 16.45,
    Fours: 11,
    Sixes: 4,
    Duck: "--",
    Rank: "--",
  },
  {
    Format: "WC ODI",
    Mat: 36,
    Inn: 36,
    R: 1332,
    "100s": 2,
    "50s": 11,
    HS: 124,
    SR: 82.27,
    Avg: 41.63,
    Fours: 128,
    Sixes: 12,
    Duck: "--",
    Rank: "--",
  },
];

const playedFor = [
  "Bangladesh",
  "Worcestershire",
  "Kolkata Knight Riders",
  "Khulna Royal Bengals",
  "Uthura Rudras",
  "Dhaka Gladiators",
  "Leicestershire",
  "Barbados Tridents",
  "Adelaide Strikers",
  "Melbourne Renegades",
  "Rangpur Riders",
  "Karachi Kings",
  "Jamaica Tallawahs",
  "Dhaka Dynamites",
  "Peshawar Zalmi",
  "Sunrisers Hyderabad",
  "World XI",
  "Brampton Wolves",
];

const PlayerOverview = () => {
  const [activeButton, setActiveButton] = useState("Batting");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const itemsPerPage = 6;
  const maxIndex = playerPerformance.length - itemsPerPage;

  const handleNextClick = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
    if (currentIndex + itemsPerPage >= maxIndex) {
      setShowRightButton(false);
    }
    setShowLeftButton(true);
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
    if (currentIndex - itemsPerPage <= 0) {
      setShowLeftButton(false);
    }
    setShowRightButton(true);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const isButtonActive = (button) => {
    return activeButton === button
      ? "text-[#1860a6] bg-[#1860a614] border border-[#6EB4EF4D] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "border dark:border-white border-opacity-5 dark:border-opacity-5";
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="relative flex justify-center">
      <div className="w-[70%] flex items-start mt-10 text-[#4A4A4A] dark:text-[#CFD1D3]">
        <div className="border-r w-[70%] px-10 mr-10 border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="flex items-center justify-between pb-5 border-b dark:border-white border-opacity-5 dark:border-opacity-5">
            <p className="text-[24px] font-medium">Career & Stats </p>
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

          <div className="mt-10">
            <p className="text-[18px] font-medium">
              Shakib Al Hasan Recent Form
            </p>
            <div className="text-[14px] flex items-center justify-between my-5">
              <p>Batting</p>
              <Link href={`/player-profile/${1}/matches`}>
                <p className="dark:text-[#6EB4EF] text-[#1860A6] flex items-center gap-x-1">
                  Recent Form <MdChevronRight />
                </p>
              </Link>
            </div>

            <div className="relative grid grid-cols-6 transition-all duration-300 ease-in-out">
              <FaChevronLeft
                size={24}
                className={`absolute text-[#4B4B4B] dark:text-white -left-4 top-8 w-[30px] h-[30px] cursor-pointer p-2 rounded-full bg-[#eeeeee] dark:bg-primary ${
                  showLeftButton ? "" : "hidden"
                }`}
                onClick={handlePrevClick}
              />

              {playerPerformance
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((performance, index) => (
                  <div
                    key={index}
                    className="px-5 py-6 text-center border border-black dark:border-white border-opacity-5 dark:border-opacity-5"
                  >
                    <p className="dark:text-[#6EB4EF] text-[#1860A6] text-[18px]">
                      {performance.score}
                    </p>
                    <p className="text-[12px] text-[#9FA3A7]">
                      {performance.match}
                    </p>
                  </div>
                ))}
              <FaChevronRight
                size={24}
                className={`w-[30px] text-[#4B4B4B] dark:text-white absolute -right-4 top-8 h-[30px] cursor-pointer p-2 rounded-full bg-[#eeeeee] dark:bg-primary ${
                  showRightButton ? "" : "hidden"
                }`}
                onClick={handleNextClick}
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[18px] font-medium">
              Shakib Al Hasan Career Stats
            </p>
            <div className="text-[14px]  my-5">
              <p>Batting</p>
            </div>
            <div className="w-full overflow-auto ">
              <table className="w-full text-[14px] font-bold border border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <thead>
                  <tr className="">
                    <th className="py-2 bg-[#F8FAFC] dark:bg-[#0D1820]">
                      Format
                    </th>
                    <th className="px-10 py-2">Mat</th>
                    <th className="px-10 py-2">Inn</th>
                    <th className="px-10 py-2">R</th>
                    <th className="px-10 py-2">100s</th>
                    <th className="px-10 py-2">50s</th>
                    <th className="px-10 py-2">HS</th>
                    <th className="px-10 py-2">SR</th>
                    <th className="px-10 py-2">Avg</th>
                    <th className="px-10 py-2">Fours</th>
                    <th className="px-10 py-2">Sixes</th>
                    <th className="px-10 py-2">Duck</th>
                    <th className="px-10 py-2">Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {playerCareerStats.map((stat, index) => (
                    <tr
                      key={index}
                      className="text-[#4A4A4A] text-left  dark:text-[#9FA3A7] border border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5"
                    >
                      <td className="px-10 py-2 whitespace-nowrap bg-[#F8FAFC] dark:bg-[#0D1820]">
                        {stat.Format}
                      </td>
                      <td className="px-10 py-2">{stat.Mat}</td>
                      <td className="px-10 py-2">{stat.Inn}</td>
                      <td className="px-10 py-2">{stat.R}</td>
                      <td className="px-10 py-2">{stat["100s"]}</td>
                      <td className="px-10 py-2">{stat["50s"]}</td>
                      <td className="px-10 py-2">{stat.HS}</td>
                      <td className="px-10 py-2">{stat.SR}</td>
                      <td className="px-10 py-2">{stat.Avg}</td>
                      <td className="px-10 py-2">{stat.Fours}</td>
                      <td className="px-10 py-2">{stat.Sixes}</td>
                      <td className="px-10 py-2">{stat.Duck}</td>
                      <td className="px-10 py-2">{stat.Rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[18px] font-medium">Teams played for</p>
            <div className="flex flex-wrap items-center my-5">
              {playedFor.map((team, index) => (
                <React.Fragment key={index}>
                  <p className="py-1">{team}</p>
                  {index !== playedFor.length - 1 && (
                    <div className="w-[4px] mx-2 h-[4px] leading-[4px] rounded-full bg-[#ffffff4d]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="my-10">
            <div className="text-[14px] flex items-center justify-between my-5">
              <p>About Shakib Al Hasan</p>
              <Link href={`/player-profile/${1}/info`}>
                <p className="dark:text-[#6EB4EF] text-[#1860A6] flex items-center gap-x-1">
                  Player Info <MdChevronRight />
                </p>
              </Link>
            </div>

            <div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] w-1/3">Name</p>
                <p className="text-[16px] w-full">Shakib Al Hasan</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] w-1/3">Birth</p>
                <p className="text-[16px] w-full">24 Mar 1987</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] w-1/3">Birth Place</p>
                <p className="text-[16px] w-full">Magura, Jessore</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] w-1/3">Height</p>
                <p className="text-[16px] w-full">5 Ft 7 In</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] w-1/3">Nationality</p>
                <p className="text-[16px] w-full">Bangladeshi</p>
              </div>
            </div>
          </div>

          <div className="my-10">
            One of the top all-rounders across the cricketing landscape, Shakib
            Al Hasan is undoubtedly the best cricketer to come from the land of
            Bangladesh. His aggressive left-hand batting, slow left-arm
            orthodox, and athleticism on-field makes him a premier force in
            world cricket. The Jessore-born has also captained his national side
            and was named ICC’s Number 1 all-rounder across all formats in
            2015...{" "}
            <span
              className="dark:text-[#6EB4EF] text-[#1860A6] cursor-pointer"
              onClick={toggleModal}
            >
              continue reading
            </span>
          </div>
          <div className="flex items-center my-10 gap-x-10">
            <div className="flex items-center gap-x-2">
              <FaInstagramSquare size={20} className="text-[#B2B5B9]" />
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                shaki_b75
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaTwitter size={20} className="text-[#B2B5B9]" />
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                @Sah75official
              </p>
            </div>
          </div>
        </div>
        <div>right</div>
      </div>
      {showModal && <PlayerBio onClose={toggleModal} />}
    </div>
  );
};

export default PlayerOverview;
