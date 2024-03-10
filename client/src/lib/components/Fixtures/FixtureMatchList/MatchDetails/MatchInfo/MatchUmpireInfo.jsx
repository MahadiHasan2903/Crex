import React from "react";

const MatchUmpireInfo = () => {
  return (
    <div className="mt-[80px] text-black dark:text-[#CFD1D3] mb-10">
      <p className="text-[18px] font-medium mt-8 mb-4">Umpires</p>
      <div className="text-[14px] ">
        <div className="mt-5">
          <p>On-field Umpire</p>
          <p className="font-semibold">John Prakash, Shelton J D'Cruz</p>
        </div>
        <div className="mt-5">
          <p>Third Umpire</p>
          <p className="font-semibold">Niaz Ali</p>
        </div>
        <div className="mt-5">
          <p>Referee</p>
          <p className="font-semibold">Gandhimathinathan Sankaranarayanan</p>
        </div>
      </div>
    </div>
  );
};

export default MatchUmpireInfo;
