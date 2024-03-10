"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const PlayersInfo = ({ cricketTeam }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };
  // Filter the cricket team to include only players with playerType "Playing"
  const playingPlayers = cricketTeam.filter(
    (player) => player.playerType === "Playing"
  );

  // Filter the cricket team to include only players with playerType "Bench"
  const benchPlayers = cricketTeam.filter(
    (player) => player.playerType === "Bench"
  );

  return (
    <div>
      <div className="grid grid-cols-2">
        {playingPlayers.map((player, index) => (
          <div key={index} className="flex items-center justify-between w-full">
            <div className="flex items-center m-5 gap-x-3">
              <div className="relative">
                <Image
                  src="/player.png"
                  width={36}
                  height={20}
                  className="-mb-2.5"
                />
                <Image
                  src="/jersey.png"
                  width={36}
                  height={20}
                  className="z-[9994]"
                />
              </div>
              <div>
                <p className="text-[14px] text-[#CFD1D3]">
                  {player.playerName}
                </p>
                <p className="text-[12px] text-[#9FA3A7]">
                  {player.playerRole}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-5">
        <div
          className="flex items-center justify-between py-3 cursor-pointer border-y dark:border-white border-opacity-5 dark:border-opacity-5"
          onClick={handleExpandToggle}
        >
          <p className="dark:text-[#6EB4EF] text-[#1860A6] text-[14px]">
            On Bench
          </p>
          <div>
            {isExpanded ? (
              <MdOutlineExpandLess size={25} />
            ) : (
              <MdOutlineExpandMore size={25} />
            )}
          </div>
        </div>
        {isExpanded && (
          <div className="grid grid-cols-2">
            {benchPlayers.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center m-5 gap-x-3">
                  <div className="relative">
                    <Image
                      src="/player.png"
                      width={36}
                      height={20}
                      className="-mb-2.5"
                    />
                    <Image
                      src="/jersey.png"
                      width={36}
                      height={20}
                      className="z-[9994]"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#CFD1D3]">
                      {player.playerName}
                    </p>
                    <p className="text-[12px] text-[#9FA3A7]">
                      {player.playerRole}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersInfo;
