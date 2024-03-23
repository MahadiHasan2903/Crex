import React from "react";
import PlayerProfileBanner from "@/lib/components/PlayerProfile/PlayerProfileBanner";
import PlayerProfileContents from "@/lib/components/PlayerProfile/PlayerProfileContents";

const PlayerProfilePage = () => {
  return (
    <div className="w-full">
      <PlayerProfileBanner />
      <PlayerProfileContents />
    </div>
  );
};

export default PlayerProfilePage;
