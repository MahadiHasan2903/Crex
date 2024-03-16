import React from "react";
import {
  topTenODIBatsmen,
  topTenT20Batsmen,
  topTenTestBatsmen,
} from "@/lib/utils/data";
import PlayerRankingTable from "./PlayerRankingTable";

const BatsmanRanking = () => {
  return (
    <div className="my-5 dark:text-[#CFD1D3] text-black">
      <p className="text-[22px] my-2  font-bold">Men's Batsman Ranking</p>
      <div className="grid grid-cols-3 mt-5 gap-x-8">
        <PlayerRankingTable topPlayers={topTenODIBatsmen} format="ODI" />
        <PlayerRankingTable topPlayers={topTenT20Batsmen} format="T20" />
        <PlayerRankingTable topPlayers={topTenTestBatsmen} format="TEST" />
      </div>
    </div>
  );
};

export default BatsmanRanking;
