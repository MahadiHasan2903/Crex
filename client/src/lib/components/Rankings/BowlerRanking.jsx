import React from "react";
import {
  topTenODIBowlers,
  topTenT20Bowlers,
  topTenTestBowlers,
} from "@/lib/utils/data";
import PlayerRankingTable from "./PlayerRankingTable";

const BowlerRanking = () => {
  return (
    <div className="my-5 dark:text-[#CFD1D3] text-black">
      <p className="text-[22px] my-2  font-bold">Men's Bowler Ranking</p>
      <div className="grid grid-cols-3 mt-5 gap-x-8">
        <PlayerRankingTable topPlayers={topTenODIBowlers} format="ODI" />
        <PlayerRankingTable topPlayers={topTenT20Bowlers} format="T20" />
        <PlayerRankingTable topPlayers={topTenTestBowlers} format="TEST" />
      </div>
    </div>
  );
};

export default BowlerRanking;
