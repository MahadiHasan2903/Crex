"use client";
import React, { useState } from "react";
import FixturesMatchListPage from "@/app/fixtures/match-list/page";
import FixturesSeriesListPage from "@/app/fixtures/series-list/page";
import FixturesTeamListPage from "@/app/fixtures/team-list/page";

const ToggleFixture = () => {
  const [activeTab, setActiveTab] = useState("Days");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="w-full text-[#CFD1D399] bg-[#0E1720] relative py-2">
        <div className="px-[250px] flex items-center gap-x-5">
          <p
            onClick={() => handleTabClick("Days")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Days" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Days
          </p>
          <p
            onClick={() => handleTabClick("Series")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Series" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Series
          </p>
          <p
            onClick={() => handleTabClick("Teams")}
            className={`font-bold cursor-pointer text-[14px] pb-[5px] ${
              activeTab === "Teams" ? "border-b-2 border-[#FF7575]" : ""
            }`}
          >
            Teams
          </p>
        </div>
      </div>
      {activeTab === "Days" && <FixturesMatchListPage />}
      {activeTab === "Series" && <FixturesSeriesListPage />}
      {activeTab === "Teams" && <FixturesTeamListPage />}
    </div>
  );
};

export default ToggleFixture;
