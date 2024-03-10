import React from "react";
import Image from "next/image";
import VenueChart from "./VenuChart";
import VenueStats from "./VenueStats";
import PaceVsSpin from "./PaceVsSpin";
import RecentMatches from "./RecentMatches";

const VenueDetails = () => {
  return (
    <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
      <p className="text-[18px] font-medium mt-8 mb-4">
        Mission Road Ground, Hong Kong
      </p>

      <div className="flex items-center justify-between bg-[#F3F7FA] dark:bg-[#111B25] p-5 rounded-lg">
        <div className="flex items-center gap-x-5">
          <Image src="/cloud.svg" alt="cloud" width={72} height={72} />
          <div>
            <p className="text-[14px] pb-[4px]">
              Mission Road Ground, Hong Kong
            </p>
            <p className="text-[24px] font-semibold">15.9˚C</p>
          </div>
        </div>
        <div>
          <p className="text-[14px] pb-2 text-end">Overcast</p>
          <div className="flex items-center gap-x-10">
            <div className="flex items-center gap-x-1">
              <Image
                src="/humidity.svg"
                width={24}
                height={24}
                alt="humidity"
              />
              <p className="text-[14px]">86% (Humidity)</p>
            </div>
            <div className="flex items-center gap-x-1">
              <Image
                src="/cloudrainy.svg"
                width={24}
                height={24}
                alt="cloudrainy"
              />
              <p className="text-[14px]">55% Chance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 gap-x-10">
        <VenueChart />
        <VenueStats />
      </div>
      <PaceVsSpin />
      <RecentMatches />
    </div>
  );
};

export default VenueDetails;
