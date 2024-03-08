"use client";
import Image from "next/image";
import React from "react";
import { FaSquare } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import logo from "../../../../public/logo.webp";

const MatchCard = ({ match }) => {
  const { status, state, seriesName, matchDetails, team1, team2 } = match;
  return (
    <div className="w-full border border-gray-300 rounded-lg border-opacity-40 dark:border-opacity-10">
      <div className="bg-[#f9f9f9] dark:bg-[#11171E] p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center text-[13px] text-[#AA0707] dark:text-[#FF7575] gap-x-1">
            {state === "In Progress" && (
              <>
                <FaSquare size={5} />
                <p>Live </p>
                <p className="font-light text-gray-200">|</p>
              </>
            )}
          </div>
          <p className="text-[12px] dark:text-tertiary font-medium whitespace-nowrap text-ellipsis overflow-hidden">
            {seriesName}
          </p>
        </div>
        <div>
          <FaChevronRight color="#9FA3A7" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-4 gap-y-1">
        <div className=" mb-2 font-medium dark:text-tertiary flex items-center gap-x-1 text-[11px]">
          <p>{matchDetails}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={logo} width={25} height={25} alt="team" />
          <p className="text-[14px] dark:text-tertiary">{team1.abbreviation}</p>
          {!team1.runs && !team1.wickets && !team1.overs ? (
            <p className="text-[14px] dark:text-tertiary">Yet to bat</p>
          ) : (
            <>
              <p
                className={`text-[14px] dark:text-tertiary
          ${
            state === "In Progress"
              ? "text-[18px] font-bold"
              : "text-[14px] font-normal"
          }
          `}
              >
                {!team1.runs ? "0" : team1.runs} /{" "}
                {!team1.wickets ? "0" : team1.wickets}
              </p>
              <p className="text-[12px] mt-[2px] dark:text-tertiary">
                {team1.overs}
              </p>
            </>
          )}
        </div>
        <div className="flex items-center my-4 gap-x-2">
          <Image src={logo} width={25} height={25} alt="team" />
          <p className="text-[14px] dark:text-tertiary">{team2.abbreviation}</p>
          {!team2.runs && !team2.wickets && !team2.overs ? (
            <p className="text-[14px] dark:text-tertiary">Yet to bat</p>
          ) : (
            <>
              <p
                className={`text-[14px] dark:text-tertiary
          ${
            state === "In Progress"
              ? "text-[18px] font-bold"
              : "text-[14px] font-normal"
          }
          `}
              >
                {!team2.runs ? "0" : team2.runs} /{" "}
                {!team2.wickets ? "0" : team2.wickets}
              </p>
              <p className="text-[12px] mt-[2px] dark:text-tertiary">
                {team2.overs}
              </p>
            </>
          )}
        </div>
        <p
          className={`font-medium text-[11px] ${
            state === "In Progress"
              ? "text-[#BA9B8E] dark:text-[#EAAE54]"
              : "text-[#3B5D26] dark:text-[#6CB240]"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
