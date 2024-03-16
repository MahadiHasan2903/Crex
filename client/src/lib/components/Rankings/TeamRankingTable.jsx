import React from "react";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";

const TeamRankingTable = ({ topTeams, format }) => {
  return (
    <div className="w-full mb-[150px] border border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
      <div className="p-3 ">
        <p className="text-end text-[14px] font-semibold">{format}</p>
        <div className="dark:bg-[#121c28]  px-5 pt-2 bg-[#ECF0F6] relative flex items-center ml-6 my-2 rounded-[5px] justify-between">
          <div className="flex items-center -mt-2  -ml-[50px]">
            <div className="absolute dark:bg-[#15222E] bg-[#F7F7F7] flex items-center justify-center rounded-[25px]">
              <Image src="/BD.png" width={56} height={56} alt="team" />
            </div>
          </div>
          <p className="text-black ml-5 dark:text-[#9FA3A7] text-[16px]">
            {topTeams[0].name}
          </p>
          <div className="text-[#192430] ">|</div>
          <div className="flex flex-col items-center justify-center pr-5">
            <p className="text-[11px] font-medium opacity-70">RATING</p>
            <p className="text-[22px] font-semibold">{topTeams[0].rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-left gap-x-5 text-[12px] font-light mt-5 mx-2">
          <p className="w-[40%]">Rank</p>
          <p className="w-full ">Team</p>
          <p className="w-1/3">Rating</p>
        </div>
      </div>
      <div className="dark:bg-[#15222E] bg-white  text-[12px] font-semibold pl-6 ">
        {topTeams.slice(1).map((team, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 text-left"
          >
            <p className="w-1/3">{team.rank}</p>
            <div className="flex items-center w-full pl-3 gap-x-1">
              <Image src="/BD.png" width={20} height={20} alt="team" />
              <p className="opacity-60">{team.name}</p>
            </div>
            <p className="w-1/3 opacity-60">{team.rating}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0A4270]  flex items-center justify-center text-[14px] py-2 text-white gap-x-1 text-center">
        <p>View Full List</p> <MdChevronRight size={25} color="white" />
      </div>
    </div>
  );
};

export default TeamRankingTable;
