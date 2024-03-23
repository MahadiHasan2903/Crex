"use client";
import React, { useState } from "react";
import { playersStats, tournaments } from "@/lib/utils/data";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import Link from "next/link";

const StatesTable = () => {
  const [activeTournament, setActiveTournament] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[60%]">
        {/* Table */}
        <table className="w-full">
          <thead>
            <tr className="dark:text-[#9FA3A7] text-left text-black w-full dark:bg-[#121920] bg-[#F7F7F7] border-b border-black justify-between border-opacity-5 dark:border-primary px-2 py-3 flex items-center text-[14px]">
              <th className="ml-2 w-[5%]">No.</th>
              <th className="w-[20%]">Players</th>
              <th className="w-[10%]">Team</th>
              <th className="w-[5%]">Runs</th>
              <th className="w-[5%]">Mat</th>
              <th className="w-[5%]">Inns</th>
              <th className="w-[5%]">Hs</th>
              <th className="w-[10%]">Avg</th>
              <th className="w-[10%]">SR</th>
              <th className="w-[5%]">100</th>
              <th className="w-[5%]">50</th>
              <th className="w-[5%]">4s</th>
              <th className="w-[5%]">6s</th>
            </tr>
          </thead>
          <tbody>
            {playersStats.map((player) => (
              <tr
                key={player.id}
                className="text-black dark:text-[#9FA3A7] w-full px-2 text-left border-b border-black border-opacity-5 dark:border-primary py-4 flex items-center justify-between text-[14px]"
              >
                <td className="w-[5%]">{player.id}</td>
                <td className="flex items-center w-[20%] gap-x-1">
                  <Link href="/player-profile">
                    <div className="relative">
                      <Image
                        src="/player.png"
                        width={30}
                        height={29}
                        className="-mb-2"
                      />
                      <Image
                        src="/jersey.png"
                        width={30}
                        height={12}
                        className="z-[9994]"
                      />
                    </div>
                  </Link>
                  {player.Player}
                </td>
                <td className="flex items-center w-[10%]">
                  <Image src="/BD.png" width={22} height={22} alt="team" />
                  {player.Team}
                </td>
                <td className="w-[5%]">{player.Runs}</td>
                <td className="w-[5%]">{player.Mat}</td>
                <td className="w-[5%]">{player.Inns}</td>
                <td className="w-[5%]">{player.HS}</td>
                <td className="w-[10%]">{player.Avg}</td>
                <td className="w-[10%]">{player.SR}</td>
                <td className="w-[5%]">{player.centuries}</td>
                <td className="w-[5%]">{player.fifties}</td>
                <td className="w-[5%]">{player.fours}</td>
                <td className="w-[5%]">{player.sixes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center my-3">
          <button className="dark:text-[#6EB4EF] cursor-pointer text-[#1860A6] font-normal my-2 text-[16px]">
            Load More
          </button>
        </div>
      </div>

      {/* Statistics Footer */}

      <div className="flex items-center justify-center w-full text-white bg-black">
        <div className="w-[60%] my-12">
          <p className="text-[28px]">Top Cricket Tournament</p>
          <div className="flex items-center w-full my-10 mr-10 overflow-y-scroll border-b border-black gap-x-5 dark:border-white border-opacity-20 dark:border-opacity-20">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className={`flex cursor-pointer flex-col items-center  w-[100px] h-[200px] ${
                  activeTournament === index
                    ? " border-b border-white"
                    : "border border-transparent"
                }`}
                onClick={() => setActiveTournament(index)}
              >
                <Image
                  src={tournament.image}
                  width={90}
                  height={100}
                  alt="tournament"
                  className={`p-2 rounded-md  ${
                    activeTournament === index
                      ? " border border-[#6eb4ef]"
                      : "border border-transparent"
                  }`}
                />
                <p
                  className={`${
                    activeTournament === index
                      ? "text-[#6eb4ef]"
                      : "text-[#9FA3A7]"
                  } text-center text-[14px] mt-2`}
                >
                  {tournament.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full ">
            <div className="flex items-center w-full my-5 gap-x-10">
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Runs{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Sixes{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
            </div>
            <div className="flex items-center w-full my-5 gap-x-10">
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Wickets{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Fours{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
            </div>
            <div className="flex items-center w-full my-5 gap-x-10">
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Strike Rate{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Fifties{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
            </div>
            <div className="flex items-center w-full my-5 gap-x-10">
              <div className="flex items-center pb-5 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
                <p className="text-[18px] font-bold text-[#CFD1D3]">
                  Most Hundreds{" "}
                  <span className="font-normal text-[#9FA3A7]">
                    in {tournaments[activeTournament]?.name}{" "}
                  </span>
                </p>
                <MdChevronRight size={25} color="#9FA3A7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesTable;
