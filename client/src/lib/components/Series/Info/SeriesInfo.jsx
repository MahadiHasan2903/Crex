import Image from "next/image";
import React from "react";

const SeriesInfo = () => {
  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%] pl-5">
        <div className="w-[70%] mt-10 dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="w-full mb-5">
            <p className="text-[18px] font-medium mb-3">ODI</p>
            <div className="flex items-center w-full gap-x-5">
              <div className="dark:bg-[#251D18] bg-[#F4E6D8] w-full p-3 rounded-md">
                <p className="text-[14px] mb-2">Series Winner🏆</p>
                <div className="flex items-center gap-x-5">
                  <Image src="/BD.png" width={64} height={64} alt="Team" />
                  <p className="text-[16px] font-medium">Bangladesh</p>
                </div>
              </div>
              <div className="dark:bg-[#251D18] bg-[#F4E6D8] p-3 w-full rounded-md">
                <p className="text-[14px] mb-5">Player of the match</p>
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image
                      src="/player.png"
                      width={48}
                      height={47}
                      className="-mb-[12px]"
                    />
                    <Image
                      src="/jersey.png"
                      width={48}
                      height={19}
                      className="z-[9994]"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">N H Shanto</p>
                    <p className="text-[14px] text-[#9FA3A7]">Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-5">
            <p className="text-[18px] font-medium mb-3">T20</p>
            <div className="flex items-center w-full gap-x-5">
              <div className="dark:bg-[#131E32] bg-[#E2E7F5] w-full p-3 rounded-md">
                <p className="text-[14px] mb-2">Series Winner🏆</p>
                <div className="flex items-center gap-x-5">
                  <Image src="/BD.png" width={64} height={64} alt="Team" />
                  <p className="text-[16px] font-medium">Sri Lanka</p>
                </div>
              </div>
              <div className="dark:bg-[#131E32] bg-[#E2E7F5] p-3 w-full rounded-md">
                <p className="text-[14px] mb-5">Player of the match</p>
                <div className="flex items-center gap-x-3">
                  <div>
                    <Image
                      src="/player.png"
                      width={48}
                      height={47}
                      className="-mb-[12px]"
                    />
                    <Image
                      src="/jersey.png"
                      width={48}
                      height={19}
                      className="z-[9994]"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] font-medium">K Mendis</p>
                    <p className="text-[14px] text-[#9FA3A7]">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[24px] font-bold my-8">SL vs BAN 2024 Info</p>
            <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[#9FA3A7] text-[14px] w-[30%] font-normal ">
                Series
              </p>
              <p className="text-[16px] w-full font-medium">
                Sri Lanka tour of Bangladesh 2024
              </p>
            </div>
            <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[#9FA3A7] text-[14px] w-[30%] font-normal ">
                Duration
              </p>
              <p className="text-[16px] w-full font-medium">
                Feb 17 - Mar 18, 2024
              </p>
            </div>
            <div className="flex items-center justify-between w-full pb-3 my-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[#9FA3A7] text-[14px] w-[30%] font-normal ">
                Format
              </p>
              <p className="text-[16px] w-full font-medium">34 T20s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesInfo;
