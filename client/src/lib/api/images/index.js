import {
  X_RapidAPI_Host,
  X_RapidAPI_Key,
  base_url,
} from "@/lib/config/constants";

const { fetchTyped } = require("../client");

const getImage = async (imageId) => {
  console.log("Get Image:", imageId);
  const response = await fetchTyped(`${base_url}/img/v1/i1/c${imageId}/i.jpg`, {
    method: "GET",
    next: { revalidate: 5 },
    headers: {
      "X-RapidAPI-Key": `${X_RapidAPI_Key}`,
      "X-RapidAPI-Host": `${X_RapidAPI_Host}`,
    },
  });
};

const images = {
  getImage,
};

export default images;
