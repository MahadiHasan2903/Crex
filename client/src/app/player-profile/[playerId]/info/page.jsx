import PlayerInfo from "@/lib/components/PlayerProfile/PlayerInfo";
import PlayerProfileBanner from "@/lib/components/PlayerProfile/PlayerProfileBanner";
import PlayerProfileContents from "@/lib/components/PlayerProfile/PlayerProfileContents";
import React from "react";

const PlayerInfoPage = () => {
  return (
    <div className="w-full">
      <PlayerProfileBanner />
      <PlayerProfileContents />
      <PlayerInfo />
    </div>
  );
};

export default PlayerInfoPage;
