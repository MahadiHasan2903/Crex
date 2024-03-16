import React from "react";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

const PlayerRankingTable = ({ topPlayers, format }) => {
  return (
    <div className="w-full mb-[150px] border border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
      <div className="p-3 ">
        <p className="text-end text-[14px] mb-10 font-semibold">{format}</p>
        <div className="dark:bg-[#121c28] px-5 pt-2 bg-[#ECF0F6] relative flex items-center ml-6 my-2 rounded-[5px] justify-between">
          <div>
            <div className="absolute dark:bg-[#15222E] bg-[#F7F7F7] -ml-8 mt-7 z-[9999999] flex items-center justify-center rounded-[25px]">
              <Image src="/BD.png" width={30} height={30} alt="team" />
            </div>
            <div className="absolute -ml-4 -mt-9">
              <Image
                src="/player.png"
                width={76}
                height={74}
                className="-mb-5"
              />
              <Image
                src="/jersey.png"
                width={76}
                height={30}
                className="z-[9994]"
              />
            </div>
            <p className=" ml-[80px] dark:text-[#6EB4EF] text-[#1860A6] w-[40%] text-[14px]">
              {topPlayers[0].name}
            </p>
          </div>
          <div className="text-[#192430] ">|</div>
          <div className="flex flex-col items-center justify-center pr-5">
            <p className="text-[11px] font-medium opacity-70">RATING</p>
            <p className="text-[22px] font-semibold">{topPlayers[0].rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-left gap-x-5 text-[12px] font-light mt-5 mx-2">
          <div className="flex items-center w-[70%]">
            <p className="w-[40%]">Rank</p>
            <p className="w-full">Name</p>
          </div>
          <div className="flex items-center w-[40%] ml-5 gap-x-3">
            <p className="">Team</p>
            <p className="">Rating</p>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#15222E] bg-white  text-[12px] font-semibold pl-6 ">
        {topPlayers.slice(1).map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 text-left gap-x-5"
          >
            <div className="flex items-center w-[70%]">
              <p className="w-[20%] flex items-center gap-x-2">
                {player.rank}
                <LuMinus size={15} />
              </p>
              <p className="w-[80%] pl-3 opacity-60">{player.name}</p>
            </div>
            <div className="flex items-center w-[40%] gap-x-3">
              <p className="w-1/2 opacity-60">{player.team}</p>
              <p className="w-full opacity-60">{player.rating}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0A4270]  flex items-center justify-center text-[14px] py-2 text-white gap-x-1 text-center">
        <p>View Full List</p> <MdChevronRight size={25} color="white" />
      </div>
    </div>
  );
};

export default PlayerRankingTable;
