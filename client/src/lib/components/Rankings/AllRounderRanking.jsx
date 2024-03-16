import React from "react";
import {
  topTenODIAllRounders,
  topTenTestAllRounders,
  topTenT20AllRounders,
} from "@/lib/utils/data";
import PlayerRankingTable from "./PlayerRankingTable";

const AllRounderRanking = () => {
  return (
    <div className="my-5 dark:text-[#CFD1D3] text-black">
      <p className="text-[22px] my-2  font-bold">Men's All-rounder Ranking</p>
      <div className="grid grid-cols-3 mt-5 gap-x-8">
        <PlayerRankingTable topPlayers={topTenODIAllRounders} format="ODI" />
        <PlayerRankingTable topPlayers={topTenTestAllRounders} format="T20" />
        <PlayerRankingTable topPlayers={topTenT20AllRounders} format="TEST" />
      </div>
    </div>
  );
};

export default AllRounderRanking;
