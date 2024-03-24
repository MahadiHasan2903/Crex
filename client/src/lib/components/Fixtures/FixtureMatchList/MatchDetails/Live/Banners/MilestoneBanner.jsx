import Image from "next/image";
import Link from "next/link";
import React from "react";

const MilestoneBanner = () => {
  return (
    <div
      className="relative flex items-center justify-between p-8 my-2 rounded-lg"
      style={{
        background: "linear-gradient(260.6deg, #5a44ca 16.17%, #0a1f71)",
      }}
    >
      <div className="absolute left-0 opacity-20">
        <Image src="/team.png" width={195} height={195} />
      </div>
      <div className="flex items-center gap-x-8">
        <Link href={`/player-profile/${1}`}>
          <div className="relative -mb-8">
            <Image src="/player.png" width={82} height={80} className="-mb-5" />
            <Image
              src="/jersey.png"
              width={82}
              height={30}
              className="z-[9994]"
            />
          </div>
        </Link>

        <div className="flex flex-col justify-center item-center ">
          <p className="text-[20px] font-bold text-[white] mb-1">
            Sakib Al Hasan
          </p>
          <p className="text-[16px]  text-[white]">Score 50 in 23 balls</p>
        </div>
      </div>
      <div className="flex item-center gap-x-8">
        <p className="text-[30px]  text-yellow-700 mb-1">100</p>
      </div>
    </div>
  );
};

export default MilestoneBanner;
