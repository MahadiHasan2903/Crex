import PlayerNews from "@/lib/components/PlayerProfile/PlayerNews";
import PlayerProfileBanner from "@/lib/components/PlayerProfile/PlayerProfileBanner";
import PlayerProfileContents from "@/lib/components/PlayerProfile/PlayerProfileContents";
import React from "react";

const PlayerNewsPage = () => {
  return (
    <div className="w-full">
      <PlayerProfileBanner />
      <PlayerProfileContents />
      <PlayerNews />
    </div>
  );
};

export default PlayerNewsPage;
