import React from "react";
import Image from "next/image";
import { BiCricketBall } from "react-icons/bi";
import { GiCricketBat } from "react-icons/gi";

const PlayerSpotlightBanner = ({ player }) => {
  return (
    <div
      className="relative h-auto my-2 rounded-lg"
      style={{
        background:
          player.playerType === "Batsman"
            ? "linear-gradient(260.96deg, rgb(202, 130, 53) -19.65%, rgb(10, 31, 113) 128.37%)"
            : "linear-gradient(260.96deg, rgb(238, 71, 209) -19.65%, rgb(25, 22, 31) 128.37%)",
      }}
    >
      <div className="flex items-center justify-between w-full ">
        <div
          className="py-2 w-[75%] px-6 flex items-center gap-x-3 text-[14px] bg-[#00000066]"
          style={{
            clipPath: "polygon(0 0,100% 0,96% 100%,0 100%)",
          }}
        >
          {player.playerType === "Batsman" ? (
            <GiCricketBat color="white" />
          ) : (
            <BiCricketBall color="white" />
          )}

          <p className="text-[14px]">
            {player.playerType === "Batsman"
              ? "New batsman on crease"
              : "New bowling Spell"}
          </p>
        </div>
        <div className="px-6 text-[16px]">Career</div>
      </div>
      <div className="flex items-center justify-between px-5 pb-6 mt-2 border-b dark:border-white border-opacity-15 dark:border-opacity-15">
        <div className="absolute left-0 mt-2 opacity-20">
          <Image src="/team.png" width={150} height={150} />
        </div>
        <div className="flex items-center gap-x-8">
          <div className="relative -mb-8">
            <Image src="/player.png" width={80} height={78} className="-mb-5" />
            <Image
              src="/jersey.png"
              width={80}
              height={30}
              className="z-[9994]"
            />
          </div>
          <div className="flex flex-col justify-center mt-3 item-center ">
            <p className="text-[20px] font-bold text-[white] mb-1 opacity-90">
              {player.name}
            </p>
            <p className="text-[16px]  text-[white] opacity-80">{player.age}</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-[14px] opacity-80 font-medium text-[#F2F9FE]">
            Best
          </p>
          <p className="text-[24px] opacity-90 font-semibold text-[#F2F9FE]">
            {player.best}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-2">
        <div className="text-[12px] pr-2">
          MATCHES
          <span className="text-[16px] font-bold"> {player.matches}</span>
        </div>
        <p className="font-thin opacity-50">|</p>
        <div className="text-[12px] pr-2">
          {player.playerType === "Batsman" ? "Runs" : "WICKETS"}
          <span className="text-[16px] font-bold">
            {" "}
            {player.playerType === "Batsman" ? player.runs : player.wickets}
          </span>
        </div>
        <p className="font-thin opacity-50">|</p>
        <div className="text-[12px] pr-2">
          {player.playerType === "Batsman" ? "SR" : "ECON"}
          <span className="text-[16px] font-bold">
            {" "}
            {player.playerType === "Batsman" ? player.SR : player.Econ}
          </span>
        </div>
        <p className="font-thin opacity-50">|</p>
        <div className="text-[12px] pr-2">
          AVG <span className="text-[16px] font-bold"> {player.avg}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerSpotlightBanner;
