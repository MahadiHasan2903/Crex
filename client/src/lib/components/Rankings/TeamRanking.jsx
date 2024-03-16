import React from "react";
import TeamRankingTable from "./TeamRankingTable";
import {
  topTenODITeams,
  topTenT20Teams,
  topTenTestTeams,
} from "@/lib/utils/data";

const TeamRanking = () => {
  return (
    <div className="my-5 dark:text-[#CFD1D3] text-black">
      <p className="text-[22px] my-2  font-bold">Men's Teams Ranking</p>
      <div className="grid grid-cols-3 mt-5 gap-x-8">
        <TeamRankingTable topTeams={topTenODITeams} format="ODI" />
        <TeamRankingTable topTeams={topTenT20Teams} format="T20" />
        <TeamRankingTable topTeams={topTenTestTeams} format="TEST" />
      </div>
    </div>
  );
};

export default TeamRanking;
