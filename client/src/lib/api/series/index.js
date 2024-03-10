import {
  X_RapidAPI_Host,
  X_RapidAPI_Key,
  base_url,
} from "@/lib/config/constants";

const { fetchTyped } = require("../client");

//get all the international series
const getInternationalSeries = async () => {
  try {
    const response = await fetchTyped(`${base_url}/series/v1/international`, {
      method: "GET",
      next: { revalidate: 5 },
      headers: {
        "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
        "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
      },
    });

    const formattedInternationalSeries = response.seriesMapProto?.flatMap(
      (month) =>
        month.series?.map((series) => ({
          ...series,
          date: month.date,
        }))
    );

    return formattedInternationalSeries;
  } catch (error) {
    console.error("Error fetching international series:", error);
    throw error;
  }
};

//get all the League series
const getLeagueSeries = async () => {
  try {
    const response = await fetchTyped(`${base_url}/series/v1/league`, {
      method: "GET",
      next: { revalidate: 5 },
      headers: {
        "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
        "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
      },
    });

    const formattedLeagueSeries = response.seriesMapProto?.flatMap((month) =>
      month.series?.map((series) => ({
        ...series,
        date: month.date,
      }))
    );

    return formattedLeagueSeries;
  } catch (error) {
    console.error("Error fetching League series:", error);
    throw error;
  }
};

//get all the Women series
const getWomenSeries = async () => {
  try {
    const response = await fetchTyped(`${base_url}/series/v1/women`, {
      method: "GET",
      next: { revalidate: 5 },
      headers: {
        "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
        "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
      },
    });

    const formattedWomenSeries = response.seriesMapProto?.flatMap((month) =>
      month.series?.map((series) => ({
        ...series,
        date: month.date,
      }))
    );

    return formattedWomenSeries;
  } catch (error) {
    console.error("Error fetching Women series:", error);
    throw error;
  }
};

const series = {
  getInternationalSeries,
  getLeagueSeries,
  getWomenSeries,
};

export default series;
