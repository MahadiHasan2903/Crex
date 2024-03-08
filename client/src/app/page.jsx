import api from "@/lib/api";
import MatchSlider from "@/lib/components/Matches/MatchSlider";
import NewsSlider from "@/lib/components/News/NewsSlider";
import { convertOvers } from "@/lib/utils/convertOvers";
import React from "react";

const Home = async () => {
  // Fetching all the available live matches
  const liveMatches = await api.matches.getLiveMatches();

  // Convert live matches according to Match Card structure
  const convertMatches = (liveMatches) => {
    return liveMatches?.flatMap((matchType) => {
      return matchType?.seriesMatches?.flatMap((seriesMatch) => {
        return seriesMatch?.matches?.map((match) => {
          return {
            id: match?.matchId,
            state: match?.state,
            seriesName: match?.seriesName,
            status: match?.status,
            matchDetails: `${match?.matchDesc}, ${match?.venueInfo?.ground}, ${match?.venueInfo?.city}`,
            team1: {
              logo: match?.team1?.imageId,
              abbreviation: match?.team1?.teamSName,
              runs: match?.matchScore?.team1Score?.inngs1?.runs,
              wickets: match?.matchScore?.team1Score?.inngs1?.wickets,
              overs: convertOvers(match?.matchScore?.team1Score?.inngs1?.overs),
            },
            team2: {
              logo: match?.team2?.imageId,
              abbreviation: match?.team2?.teamSName,
              runs: match?.matchScore?.team2Score?.inngs1?.runs,
              wickets: match?.matchScore?.team2Score?.inngs1?.wickets,
              overs: convertOvers(match?.matchScore?.team2Score?.inngs1?.overs),
            },
            status: match?.status,
          };
        });
      });
    });
  };

  // Convert live matches when  data is available
  const convertedMatches = convertMatches(liveMatches);

  return (
    <>
      <MatchSlider liveMatches={convertedMatches} />
      <NewsSlider />
    </>
  );
};

export default Home;
