import {
  X_RapidAPI_Host,
  X_RapidAPI_Key,
  base_url,
} from "@/lib/config/constants";
import { convertTimestampToFormattedDate } from "@/lib/utils/timeConverter";

const { fetchTyped } = require("../client");

//get all the live matches
const getLiveMatches = async () => {
  const response = await fetchTyped(`${base_url}/matches/v1/live`, {
    method: "GET",
    next: { revalidate: 5 },
    headers: {
      "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
      "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
    },
  });

  // Extract relevant match information
  const filteredLiveMatches = response.typeMatches?.map((matchType) => {
    return {
      matchType: matchType?.matchType,
      seriesMatches: matchType?.seriesMatches
        .map((seriesMatch) => {
          if (seriesMatch?.seriesAdWrapper) {
            return {
              seriesId: seriesMatch?.seriesAdWrapper?.seriesId,
              seriesName: seriesMatch?.seriesAdWrapper?.seriesName,
              matches: seriesMatch?.seriesAdWrapper?.matches?.map((match) => {
                return {
                  matchId: match?.matchInfo?.matchId,
                  matchDesc: match?.matchInfo?.matchDesc,
                  seriesName: match?.matchInfo?.seriesName,

                  matchFormat: match?.matchInfo?.matchFormat,
                  startDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.startDate
                  ),
                  endDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.endDate
                  ),
                  state: match?.matchInfo?.state,
                  status: match?.matchInfo?.status,
                  team1: {
                    teamId: match?.matchInfo?.team1?.teamId,
                    teamName: match?.matchInfo?.team1?.teamName,
                    teamSName: match?.matchInfo?.team1?.teamSName,
                    imageId: match?.matchInfo?.team1?.imageId,
                  },
                  team2: {
                    teamId: match?.matchInfo?.team2?.teamId,
                    teamName: match?.matchInfo?.team2?.teamName,
                    teamSName: match?.matchInfo?.team2?.teamSName,
                    imageId: match?.matchInfo?.team2?.imageId,
                  },
                  venueInfo: {
                    id: match?.matchInfo?.venueInfo?.id,
                    ground: match?.matchInfo?.venueInfo?.ground,
                    city: match?.matchInfo?.venueInfo?.city,
                    timezone: match?.matchInfo?.venueInfo?.timezone,
                    latitude: match?.matchInfo?.venueInfo?.latitude,
                    longitude: match?.matchInfo?.venueInfo?.longitude,
                  },
                  isFantasyEnabled: match?.matchInfo?.isFantasyEnabled,
                  matchScore: {
                    team1Score: match?.matchScore?.team1Score,
                    team2Score: match?.matchScore?.team2Score,
                  },
                };
              }),
            };
          } else {
            return null;
          }
        })
        .filter(Boolean),
    };
  });

  return filteredLiveMatches;
};

//get all the recent matches
const getRecentMatches = async () => {
  const response = await fetchTyped(`${base_url}/matches/v1/recent`, {
    method: "GET",
    next: { revalidate: 5 },
    headers: {
      "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
      "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
    },
  });

  // Extract relevant match information
  const filteredRecentMatches = response.typeMatches?.map((matchType) => {
    return {
      matchType: matchType?.matchType,
      seriesMatches: matchType?.seriesMatches
        .map((seriesMatch) => {
          if (seriesMatch?.seriesAdWrapper) {
            return {
              seriesId: seriesMatch?.seriesAdWrapper?.seriesId,
              seriesName: seriesMatch?.seriesAdWrapper?.seriesName,
              matches: seriesMatch?.seriesAdWrapper?.matches?.map((match) => {
                return {
                  matchId: match?.matchInfo?.matchId,
                  matchDesc: match?.matchInfo?.matchDesc,
                  seriesName: match?.matchInfo?.seriesName,

                  matchFormat: match?.matchInfo?.matchFormat,
                  startDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.startDate
                  ),
                  endDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.endDate
                  ),
                  state: match?.matchInfo?.state,
                  status: match?.matchInfo?.status,
                  team1: {
                    teamId: match?.matchInfo?.team1?.teamId,
                    teamName: match?.matchInfo?.team1?.teamName,
                    teamSName: match?.matchInfo?.team1?.teamSName,
                    imageId: match?.matchInfo?.team1?.imageId,
                  },
                  team2: {
                    teamId: match?.matchInfo?.team2?.teamId,
                    teamName: match?.matchInfo?.team2?.teamName,
                    teamSName: match?.matchInfo?.team2?.teamSName,
                    imageId: match?.matchInfo?.team2?.imageId,
                  },
                  venueInfo: {
                    id: match?.matchInfo?.venueInfo?.id,
                    ground: match?.matchInfo?.venueInfo?.ground,
                    city: match?.matchInfo?.venueInfo?.city,
                    timezone: match?.matchInfo?.venueInfo?.timezone,
                    latitude: match?.matchInfo?.venueInfo?.latitude,
                    longitude: match?.matchInfo?.venueInfo?.longitude,
                  },
                  isFantasyEnabled: match?.matchInfo?.isFantasyEnabled,
                  matchScore: {
                    team1Score: match?.matchScore?.team1Score,
                    team2Score: match?.matchScore?.team2Score,
                  },
                };
              }),
            };
          } else {
            return null;
          }
        })
        .filter(Boolean),
    };
  });

  return filteredRecentMatches;
};

//get all the upcoming matches
const getUpcomingMatches = async () => {
  const response = await fetchTyped(`${base_url}/matches/v1/upcoming`, {
    method: "GET",
    next: { revalidate: 5 },
    headers: {
      "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
      "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
    },
  });

  // Extract relevant match information
  const filteredUpcomingMatches = response.typeMatches?.map((matchType) => {
    return {
      matchType: matchType?.matchType,
      seriesMatches: matchType?.seriesMatches
        .map((seriesMatch) => {
          if (seriesMatch?.seriesAdWrapper) {
            return {
              seriesId: seriesMatch?.seriesAdWrapper?.seriesId,
              seriesName: seriesMatch?.seriesAdWrapper?.seriesName,
              matches: seriesMatch?.seriesAdWrapper?.matches?.map((match) => {
                return {
                  matchId: match?.matchInfo?.matchId,
                  matchDesc: match?.matchInfo?.matchDesc,
                  seriesName: match?.matchInfo?.seriesName,

                  matchFormat: match?.matchInfo?.matchFormat,
                  startDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.startDate
                  ),
                  endDate: convertTimestampToFormattedDate(
                    match?.matchInfo?.endDate
                  ),
                  state: match?.matchInfo?.state,
                  status: match?.matchInfo?.status,
                  team1: {
                    teamId: match?.matchInfo?.team1?.teamId,
                    teamName: match?.matchInfo?.team1?.teamName,
                    teamSName: match?.matchInfo?.team1?.teamSName,
                    imageId: match?.matchInfo?.team1?.imageId,
                  },
                  team2: {
                    teamId: match?.matchInfo?.team2?.teamId,
                    teamName: match?.matchInfo?.team2?.teamName,
                    teamSName: match?.matchInfo?.team2?.teamSName,
                    imageId: match?.matchInfo?.team2?.imageId,
                  },
                  venueInfo: {
                    id: match?.matchInfo?.venueInfo?.id,
                    ground: match?.matchInfo?.venueInfo?.ground,
                    city: match?.matchInfo?.venueInfo?.city,
                    timezone: match?.matchInfo?.venueInfo?.timezone,
                    latitude: match?.matchInfo?.venueInfo?.latitude,
                    longitude: match?.matchInfo?.venueInfo?.longitude,
                  },
                  isFantasyEnabled: match?.matchInfo?.isFantasyEnabled,
                  matchScore: {
                    team1Score: match?.matchScore?.team1Score,
                    team2Score: match?.matchScore?.team2Score,
                  },
                };
              }),
            };
          } else {
            return null;
          }
        })
        .filter(Boolean),
    };
  });

  return filteredUpcomingMatches;
};

const matches = {
  getLiveMatches,
  getRecentMatches,
  getUpcomingMatches,
};

export default matches;
