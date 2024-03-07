import React from "react";
import api from "@/lib/api";
import MatchSlider from "@/lib/components/Matches/MatchSlider";
import NewsSlider from "@/lib/components/News/NewsSlider";
import { convertOvers } from "@/lib/utils/convertOvers";

const Home = async () => {
  // Fetching all the available live matches
  const liveMatches = await api.matchList.getLiveMatches();

  // Convert live matches according to Match Card structure
  const convertMatches = async (liveMatches) => {
    const convertedMatches = await Promise.all(
      liveMatches?.flatMap(async (matchType) => {
        return matchType.seriesMatches?.flatMap(async (seriesMatch) => {
          return await Promise.all(
            seriesMatch.matches?.map(async (match) => {
              // Fetch team logos using team1.imageId and team2.imageId
              const team1Logo = await api.images.getImage(match.team1.imageId);
              const team2Logo = await api.images.getImage(match.team2.imageId);

              return {
                id: match.matchId,
                state: match.state,
                seriesName: match.seriesName,
                status: match.status,
                matchDetails: `${match.matchDesc}, ${match.venueInfo.ground}, ${match.venueInfo.city}`,
                team1: {
                  logo: team1Logo, // Use the fetched team1Logo
                  abbreviation: match.team1?.teamSName,
                  runs: match.matchScore?.team1Score?.inngs1.runs,
                  wickets: match.matchScore?.team1Score?.inngs1.wickets,
                  overs: convertOvers(
                    match.matchScore?.team1Score?.inngs1.overs
                  ),
                },
                team2: {
                  logo: team2Logo, // Use the fetched team2Logo
                  abbreviation: match.team2?.teamSName,
                  runs: match.matchScore?.team2Score?.inngs1.runs,
                  wickets: match.matchScore?.team2Score?.inngs1.wickets,
                  overs: convertOvers(
                    match.matchScore?.team2Score?.inngs1.overs
                  ),
                },
                status: match.status,
              };
            })
          );
        });
      })
    );

    return convertedMatches.flat();
  };

  // Convert live matches when data is available
  const convertedMatches = await convertMatches(liveMatches);

  return (
    <>
      <MatchSlider liveMatches={convertedMatches} />
      <NewsSlider />
    </>
  );
};

export default Home;
