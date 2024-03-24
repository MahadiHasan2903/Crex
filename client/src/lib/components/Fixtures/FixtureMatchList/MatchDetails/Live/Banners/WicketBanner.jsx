import Image from "next/image";
import React from "react";

const WicketBanner = ({ player }) => {
  const { name, runs, ballPlayed, wicket, fours, sixes, SR } = player;

  return (
    <div className="flex items-center justify-between my-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#8E2A18] to-[#A11E17]">
      <div className="flex justify-center item-center gap-x-8">
        <div>
          <Link href={`/player-profile/${1}`}>
            <div className="relative bg-[#722213] px-4 rounded-t-lg pt-2">
              <Image
                src="/player.png"
                width={65}
                height={62}
                className="-mb-4"
              />
              <Image
                src="/jersey.png"
                width={65}
                height={25}
                className="z-[9994]"
              />
            </div>
          </Link>
          <div className="bg-[#BC2F20] text-[#F8D78F] text-center font-bold rounded-b-lg">
            Out
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex items-center gap-x-3">
            <p className="text-[24px] text-[#F2F9FE] font-bold">{name}</p>
            <p className="text-[18px] font-semibold text-[#F2D58D]">{`${runs}(${ballPlayed})`}</p>
          </div>
          <p className="text-[16px] text-[#F2F9FE]">{wicket}</p>
        </div>
      </div>
      <div className="flex item-center gap-x-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[14px] opacity-80 font-medium text-[#F2F9FE]">
            4s/6s
          </p>
          <p className="text-[24px] opacity-90 font-semibold text-[#F2F9FE]">{`${fours}/${sixes}`}</p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-[14px] opacity-80 font-medium text-[#F2F9FE]">
            SR
          </p>
          <p className="text-[24px] opacity-90 font-semibold text-[#F2F9FE]">
            {SR}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WicketBanner;
