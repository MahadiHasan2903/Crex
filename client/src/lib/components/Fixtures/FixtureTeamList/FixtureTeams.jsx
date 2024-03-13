"use client";
import { cricketTeams } from "@/lib/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const FixtureTeams = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pairedTeams = cricketTeams.reduce((acc, team, index) => {
    const pairIndex = Math.floor(index / 2);
    acc[pairIndex] = acc[pairIndex] || [];
    acc[pairIndex].push(team);
    return acc;
  }, []);

  return (
    <div className="pl-[200px] mt-10">
      <div className="flex items-center w-full pb-3 border-b border-black gap-x-2 dark:border-white border-opacity-5 dark:border-opacity-5">
        <IoSearch size={15} />
        <input
          type="text"
          placeholder="Search Team"
          className="bg-transparent text-[13px] w-full outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="w-[70%]  border-r dark:border-white border-opacity-5 dark:border-opacity-5">
        {pairedTeams.map((teamPair, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap mr-10 border-b dark:border-white border-opacity-5 dark:border-opacity-5"
          >
            {teamPair.map((team, cardIndex) => (
              <Link
                key={cardIndex}
                href={`fixtures/team-list/${team.id}`}
                className={`flex items-center justify-start p-5 w-[50%] ${
                  cardIndex === 1
                    ? ""
                    : "border-r dark:border-white border-opacity-5 dark:border-opacity-5"
                }`}
              >
                <Image src="/BD.png" alt={team.Name} width={45} height={45} />
                <p className="text-[15px] text-[#9FA3A7]">{team.Name}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixtureTeams;
