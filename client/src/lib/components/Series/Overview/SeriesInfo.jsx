import React from "react";

const SeriesInfo = () => {
  return (
    <div className="mt-12 dark:text-[#CFD1D3] text-[#4A4A4A]">
      <p className="text-[18px]  font-medium">Series Info</p>
      <div>
        <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="text-[#9FA3A7] text-[14px] w-[20%] font-normal ">
            Series
          </p>
          <p className="text-[16px] w-full font-medium">
            Pakistan Super League 2024
          </p>
        </div>
        <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="text-[#9FA3A7] text-[14px] w-[20%] font-normal ">
            Duration
          </p>
          <p className="text-[16px] w-full font-medium">
            Feb 17 - Mar 18, 2024
          </p>
        </div>
        <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="text-[#9FA3A7] text-[14px] w-[20%] font-normal ">
            Format
          </p>
          <p className="text-[16px] w-full font-medium">34 T20s</p>
        </div>
      </div>
    </div>
  );
};

export default SeriesInfo;
