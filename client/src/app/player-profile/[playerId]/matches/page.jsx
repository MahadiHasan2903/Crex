import PlayerMatches from "@/lib/components/PlayerProfile/PlayerMatches";
import PlayerProfileBanner from "@/lib/components/PlayerProfile/PlayerProfileBanner";
import PlayerProfileContents from "@/lib/components/PlayerProfile/PlayerProfileContents";
import React from "react";

const PlayersMatchesPage = () => {
  return (
    <div className="w-full">
      <PlayerProfileBanner />
      <PlayerProfileContents />
      <PlayerMatches />
    </div>
  );
};

export default PlayersMatchesPage;
