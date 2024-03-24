"use client";
import React, { useState } from "react";
import TeamRanking from "./TeamRanking";
import BatsmanRanking from "./BatsmanRanking";
import BowlerRanking from "./BowlerRanking";
import AllRounderRanking from "./AllRounderRanking";

const Rankings = () => {
  const [activeButton, setActiveButton] = useState("Team");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const isButtonActive = (button) => {
    return activeButton === button
      ? "text-[#1860a6] bg-[#1860a614] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
      : "text-[#4A4A4A] dark:text-[#9FA3A7]";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60%]">
        <div className="flex items-center mt-5 gap-x-3">
          <button
            className={`px-[20px] py-[8px] border rounded-[5px] text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "Team"
            )}`}
            onClick={() => handleButtonClick("Team")}
          >
            Team
          </button>
          <button
            className={`px-[20px] py-[8px] border rounded-[5px] text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "Batter"
            )}`}
            onClick={() => handleButtonClick("Batter")}
          >
            Batter
          </button>
          <button
            className={`px-[20px] py-[8px] border rounded-[5px] text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "Bowler"
            )}`}
            onClick={() => handleButtonClick("Bowler")}
          >
            Bowler
          </button>
          <button
            className={`px-[20px] py-[8px] border rounded-[5px] text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${isButtonActive(
              "AllRounder"
            )}`}
            onClick={() => handleButtonClick("AllRounder")}
          >
            All Rounder
          </button>
        </div>

        {activeButton === "Team" && <TeamRanking />}
        {activeButton === "Batter" && <BatsmanRanking />}
        {activeButton === "Bowler" && <BowlerRanking />}
        {activeButton === "AllRounder" && <AllRounderRanking />}
      </div>
    </div>
  );
};
export default Rankings;
