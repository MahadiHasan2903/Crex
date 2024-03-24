import React from "react";
import PlayerProfileBanner from "@/lib/components/PlayerProfile/PlayerProfileBanner";
import PlayerProfileContents from "@/lib/components/PlayerProfile/PlayerProfileContents";
import PlayerOverview from "@/lib/components/PlayerProfile/PlayerOverview";

const PlayerProfilePage = () => {
  return (
    <div className="w-full">
      <PlayerProfileBanner />
      <PlayerProfileContents />
      <PlayerOverview />
    </div>
  );
};

export default PlayerProfilePage;
