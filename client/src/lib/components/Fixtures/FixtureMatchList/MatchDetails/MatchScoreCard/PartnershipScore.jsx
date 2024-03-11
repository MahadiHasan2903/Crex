import React from "react";
import { partnerships } from "@/lib/utils/data";

const getInningsNumber = (number) => {
  const suffixes = ["TH", "ST", "ND", "RD"];
  const remainder10 = number % 10;
  const remainder100 = number % 100;

  return suffixes[
    remainder10 === 1 && remainder100 !== 11
      ? 1
      : remainder10 === 2 && remainder100 !== 12
      ? 2
      : remainder10 === 3 && remainder100 !== 13
      ? 3
      : 0
  ];
};

const PartnershipScore = () => {
  return (
    <div className="w-full mt-12">
      <p className="dark:text-[#CFD1D3] text-black text-[18px] font-semibold">
        PARTNERSHIP
      </p>
      <div>
        {partnerships.map((partnership, index) => {
          const batter1 = partnership.batter1;
          const batter2 = partnership.batter2;

          const totalRuns = parseInt(batter1.runs) + parseInt(batter2.runs);
          const batter1Percentage = (parseInt(batter1.runs) * 100) / totalRuns;
          const batter2Percentage = (parseInt(batter2.runs) * 100) / totalRuns;

          const gradientBackground = `linear-gradient(90deg, #6CB240 ${batter1Percentage}%, #6CB240 ${batter1Percentage}% ${
            100 - batter2Percentage
          }%, #FF7575 ${100 - batter2Percentage}% 100%)`;

          return (
            <div
              key={index}
              className="pb-5 mb-5 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5"
            >
              <p className="text-[14px] my-5">{`${index + 1}${getInningsNumber(
                index + 1
              )} WICKET`}</p>
              <div className="text-[16px] flex items-center justify-between ">
                <div className="w-[20%] flex flex-col items-start">
                  <p>{batter1.name}</p>
                  <p>
                    {batter1.runs}{" "}
                    <span className="14px">({batter1.balls})</span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="mb-1">
                    <span className="opacity-50">({totalRuns})</span>
                  </p>
                  <div
                    className="relative h-[6px] bg-[#6CB240] w-[200px] rounded-lg"
                    style={{ background: gradientBackground }}
                  >
                    <div className="absolute h-full text-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                  </div>
                </div>
                <div className="flex w-[20%] flex-col items-end">
                  <p>{batter2.name}</p>
                  <p>
                    {batter2.runs}{" "}
                    <span className="14px">({batter2.balls})</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnershipScore;
