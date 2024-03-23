import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const teams = [
  {
    name: "Peshawar Zalmi",
    playersCount: 27,
    imageUrl: "/peshawar_zalmi_logo.png",
  },
  {
    name: "Karachi Kings",
    playersCount: 25,
    imageUrl: "/karachi_kings_logo.png",
  },
  {
    name: "Islamabad United",
    playersCount: 23,
    imageUrl: "/islamabad_united_logo.png",
  },
  {
    name: "Lahore Qalandars",
    playersCount: 26,
    imageUrl: "/lahore_qalandars_logo.png",
  },
  {
    name: "Quetta Gladiators",
    playersCount: 24,
    imageUrl: "/quetta_gladiators_logo.png",
  },
  {
    name: "Multan Sultans",
    playersCount: 22,
    imageUrl: "/multan_sultans_logo.png",
  },
  {
    name: "Karachi Kings",
    playersCount: 25,
    imageUrl: "/karachi_kings_logo.png",
  },
];

export const players = [
  { name: "Babar Azam", type: "Batsman" },
  { name: "Shaheen Afridi", type: "Bowler" },
  { name: "Shadab Khan", type: "All-Rounder" },
  { name: "Kamran Akmal", type: "Batsman" },
  { name: "Wahab Riaz", type: "Bowler" },
  { name: "Darren Sammy", type: "All-Rounder" },
  { name: "Haider Ali", type: "Batsman" },
  { name: "Mohammad Amir", type: "Bowler" },
  { name: "Imran Tahir", type: "Bowler" },
  { name: "David Miller", type: "Batsman" },
  { name: "Chris Gayle", type: "Batsman" },
  { name: "Kieron Pollard", type: "All-Rounder" },
  { name: "Shoaib Malik", type: "All-Rounder" },
  { name: "Tom Banton", type: "Batsman" },
  { name: "Carlos Brathwaite", type: "All-Rounder" },
  { name: "Umar Akmal", type: "Batsman" },
  { name: "Liam Livingstone", type: "All-Rounder" },
  { name: "Mujeeb Ur Rahman", type: "Bowler" },
  { name: "Rahat Ali", type: "Bowler" },
  { name: "Mohammad Irfan", type: "Bowler" },
  { name: "Liam Dawson", type: "All-Rounder" },
];

const SeriesSquads = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTeamClick = (index) => {
    console.log("Active Index:", index);
    setActiveIndex(index);
  };

  const selectedTeam = activeIndex !== null ? teams[activeIndex] : teams[0];

  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%] pl-5">
        <p className="text-[24px] font-bold pt-10">PSL 2024 Squads</p>
        <div className="flex items-start mt-4 gap-x-5">
          <div className="w-1/3 my-5 overflow-y-scroll">
            {teams.map((team, index) => (
              <div
                key={index}
                className={`flex w-full items-center py-4 px-5 gap-x-5 cursor-pointer  ${
                  activeIndex === index
                    ? "bg-[#E7EFF6] dark:bg-[#10202B] border-r-[2px] border-[#1860A6]"
                    : "bg-transparent border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
                }`}
                onClick={() => handleTeamClick(index)}
              >
                <Image src="/team.png" width={48} height={48} alt="team" />
                <div>
                  <p className="text-[16px] ">{team.name}</p>
                  <p className="text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                    {team.playersCount} players
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[#4A4A4A] dark:text-[#9FA3A7] w-full mx-5 mt-5">
            <div className="flex items-center py-2 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
              <Image src="/team.png" width={72} height={72} alt="team" />
              <div>
                <p className="text-[18px] font-medium">{selectedTeam.name}</p>
                <p className="text-[14px] opacity-70 ">
                  {selectedTeam.playersCount} Players
                </p>
              </div>
            </div>
            <div className="w-full my-10">
              <p className="text-[16px] font-medium">
                Bat (
                {players.filter((player) => player.type === "Batsman").length})
              </p>
              <div className="grid w-full grid-cols-3 my-4 ">
                {players.map((player, index) => {
                  if (player.type === "Batsman") {
                    return (
                      <div
                        key={index}
                        className="flex items-center pb-2 my-2 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5"
                      >
                        <Link href="/player-profile">
                          <div>
                            <Image
                              src="/player.png"
                              width={77}
                              height={75}
                              className="-mb-5"
                            />
                            <Image
                              src="/jersey.png"
                              width={77}
                              height={30}
                              className="z-[9994]"
                            />
                          </div>
                        </Link>
                        <div className="mt-5">
                          <p className="text-[16px] dark:text-[#EAAE54] text-[#9E6105]">
                            {player.name}
                          </p>
                          <p className="text-[15px]">Batsman</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="w-full my-10">
              <p className="text-[16px] font-medium">
                Bowl (
                {players.filter((player) => player.type === "Bowler").length})
              </p>
              <div className="grid w-full grid-cols-3 my-4 ">
                {players.map((player, index) => {
                  if (player.type === "Bowler") {
                    return (
                      <div
                        key={index}
                        className="flex items-center pb-2 my-2 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5"
                      >
                        <Link href="/player-profile">
                          <div>
                            <Image
                              src="/player.png"
                              width={77}
                              height={75}
                              className="-mb-5"
                            />
                            <Image
                              src="/jersey.png"
                              width={77}
                              height={30}
                              className="z-[9994]"
                            />
                          </div>
                        </Link>
                        <div className="mt-5">
                          <p className="text-[16px] dark:text-[#EAAE54] text-[#9E6105]">
                            {player.name}
                          </p>
                          <p className="text-[15px]">Batsman</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="w-full my-10">
              <p className="text-[16px] font-medium">
                AR (
                {
                  players.filter((player) => player.type === "All-Rounder")
                    .length
                }
                )
              </p>
              <div className="grid w-full grid-cols-3 my-4 ">
                {players.map((player, index) => {
                  if (player.type === "All-Rounder") {
                    return (
                      <div
                        key={index}
                        className="flex items-center pb-2 my-2 border-b border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5"
                      >
                        <Link href="/player-profile">
                          <div>
                            <Image
                              src="/player.png"
                              width={77}
                              height={75}
                              className="-mb-5"
                            />
                            <Image
                              src="/jersey.png"
                              width={77}
                              height={30}
                              className="z-[9994]"
                            />
                          </div>
                        </Link>
                        <div className="mt-5">
                          <p className="text-[16px] dark:text-[#EAAE54] text-[#9E6105]">
                            {player.name}
                          </p>
                          <p className="text-[15px]">Batsman</p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesSquads;
