"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MatchFixtureCard = ({ match }) => {
  const { matchId, matchInfo, seriesName, matchStatus, team1, team2 } = match;
  return (
    <Link href={`/fixtures/match-list/${matchId}`}>
      <div className="px-5 cursor-pointer">
        <div className="border-b border-black border-opacity-5 dark:border-primary">
          <div className="flex items-center justify-between my-8">
            <div className="flex items-center gap-x-4">
              <div className="">
                <Image
                  src="/BD.png"
                  alt="match"
                  width={55}
                  height={55}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-[16px]">{team1?.subName}</p>
                <div className="flex items-center gap-x-2">
                  <p className="text-[14px] font-semibold">
                    {team1?.runs}/{team1?.wickets}
                  </p>
                  <p className="text-[12px]">{team1?.over}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="flex items-center justify-center gap-x-2">
                {/* <div className=" text-red-700 rounded-full font-bold text-[40px]">
                .
              </div> */}
                <p className="text-[16px] text-red-800">
                  {matchStatus === "In Progress" ? "Live" : matchStatus}
                </p>
              </div>
              <p className="text-[12px]">
                {matchInfo}, {seriesName}
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="">
                <Image
                  src="/BD.png"
                  alt="match"
                  width={55}
                  height={55}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-[16px]">{team2?.subName}</p>
                <div className="flex items-center gap-x-2">
                  <p className="text-[14px] font-semibold">
                    {team2?.runs}/{team2?.wickets}
                  </p>
                  <p className="text-[12px]">{team2?.over}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MatchFixtureCard;
