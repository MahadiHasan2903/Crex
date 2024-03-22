import Image from "next/image";
import React from "react";

const SeriesStates = () => {
  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%] pl-5">
        <div className="w-[70%] mt-10 dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="mb-8">
            <p className="text-[16px] font-medium mb-2">T20</p>
            <div className="flex items-center justify-between px-6 py-8 border border-black rounded-md gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
              <div className="flex items-center gap-x-2">
                <Image src="/BD.png" width={64} height={64} alt="Team" />
                <p className="text-[16px] font-bold">SL</p>
              </div>
              <div className="flex flex-col items-center gap-x-2 ">
                <p className="text-[28px] font-semibold opacity-50">
                  <span className="text-[43px] font-semibold text-[#3B5FB9]">
                    2
                  </span>{" "}
                  -
                  <span className="text-[43px] font-semibold text-[#B75A0E]">
                    1
                  </span>
                </p>
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]">
                  3/3 played{" "}
                  <span className="dark:text-[#6CB240] text-[#3B5D26]">
                    , SL won T20 series
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-[16px] font-bold">BAN</p>
                <Image src="/BD.png" width={64} height={64} alt="Team" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-[16px] font-medium mb-2">ODI</p>
            <div className="flex items-center justify-between px-6 py-8 border border-black rounded-md gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
              <div className="flex items-center gap-x-2">
                <Image src="/BD.png" width={64} height={64} alt="Team" />
                <p className="text-[16px] font-bold">BAN</p>
              </div>
              <div className="flex flex-col items-center gap-x-2 ">
                <p className="text-[28px] font-semibold opacity-50">
                  <span className="text-[43px] font-semibold text-[#3B5FB9]">
                    2
                  </span>{" "}
                  -
                  <span className="text-[43px] font-semibold text-[#B75A0E]">
                    1
                  </span>
                </p>
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]">
                  3/3 played{" "}
                  <span className="dark:text-[#6CB240] text-[#3B5D26]">
                    , BAN won ODI series
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-[16px] font-bold">SL</p>
                <Image src="/BD.png" width={64} height={64} alt="Team" />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-[16px] font-medium mb-2">TEST</p>
            <div className="flex items-center justify-between px-6 py-8 border border-black rounded-md gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
              <div className="flex items-center gap-x-2">
                <Image src="/BD.png" width={64} height={64} alt="Team" />
                <p className="text-[16px] font-bold">BAN</p>
              </div>
              <div className="flex flex-col items-center gap-x-2 ">
                <p className="text-[28px] font-semibold opacity-50">
                  <span className="text-[43px] font-semibold text-[#3B5FB9]">
                    0
                  </span>{" "}
                  -
                  <span className="text-[43px] font-semibold text-[#B75A0E]">
                    0
                  </span>
                </p>
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]">
                  0/2 played , Test series hasn't started yet
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-[16px] font-bold">SL</p>
                <Image src="/BD.png" width={64} height={64} alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesStates;
