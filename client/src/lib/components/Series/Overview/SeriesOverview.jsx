import React from "react";
import FeaturedMatches from "./FeaturedMatches";
import PointsTable from "./PointsTable";
import Teams from "./Teams";
import SeriesInfo from "./SeriesInfo";

const SeriesOverview = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex w-[75%]  ml-3">
        <div className="w-[72%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <FeaturedMatches />
          <PointsTable />
          <Teams />
          <SeriesInfo />
        </div>

        <div className="flex flex-col items-start m-5 dark:text-[#9FA3A7] text-black">
          Right
        </div>
      </div>
    </div>
  );
};

export default SeriesOverview;
