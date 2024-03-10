import React from "react";
import Image from "next/image";
import ProbabilityIndicator from "@/lib/components/atoms/ProbabilityIndicator";

const PaceVsSpin = () => {
  return (
    <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
      <p className="text-[16px] font-medium mt-8 mb-4">
        Pace vs Spin on Venue
        <span className="text-[14px] pl-2  opacity-70 font-normal">
          (Last 10 matches)
        </span>
      </p>
      <div className="flex items-center justify-between my-12">
        <div className="w-1/2 text-center">
          <p className="text-[16px] font-bold">Pace</p>
          <p className="text-[14px] text-[#6CB240]">74 Wickets</p>
        </div>
        <ProbabilityIndicator paceProbability={80} spinProbability={20} />
        <div className="w-1/2 text-center">
          <p className="text-[16px] font-bold">Spin</p>
          <p className="text-[14px] text-[#FF7575]">56 Wickets</p>
        </div>
      </div>
    </div>
  );
};

export default PaceVsSpin;
