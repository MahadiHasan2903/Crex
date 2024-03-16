"use client";
import React, { useState } from "react";
import MenRankings from "./Rankings";
import Rankings from "./Rankings";

const ToggleRankings = () => {
  const [activeTab, setActiveTab] = useState("Men");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="w-full flex items-center px-[200px]  text-[#CFD1D399] bg-[#0E1720] relative pb-3 pt-2 gap-x-12">
        <p className="font-regular -mb-3 text-[#CFD1D3] cursor-pointer text-[14px] pb-[5px] mr-[1px]">
          Category
        </p>
        <p className="h-full -mb-3">|</p>

        <div className="flex items-center -mb-3 gap-x-12">
          <p
            onClick={() => handleTabClick("Men")}
            className={`font-bold  cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Men"
                ? "border-b-2 border-[#FF7575] text-[#FCFCFCCC]"
                : "text-[#FCFCFC4D]"
            }`}
          >
            Men
          </p>
          <p
            onClick={() => handleTabClick("Women")}
            className={`font-bold  cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Women"
                ? "border-b-2 border-[#FF7575] text-[#FCFCFCCC]"
                : "text-[#FCFCFC4D]"
            }`}
          >
            Women
          </p>
        </div>
      </div>
      {activeTab === "Men" && <Rankings />}
      {activeTab === "Women" && <Rankings />}
    </div>
  );
};

export default ToggleRankings;
