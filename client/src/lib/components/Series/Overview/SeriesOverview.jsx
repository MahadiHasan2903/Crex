import React from "react";
import Image from "next/image";
import FeaturedMatches from "./FeaturedMatches";
import PointsTable from "./PointsTable";
import Teams from "./Teams";
import SeriesInfo from "./SeriesInfo";
import Link from "next/link";

const statsData = [
  {
    title: "Most Runs",
    playerName: "B Azam",
    team: "Peshawar Zalmi",
    value: 569,
  },
  {
    title: "Most Wickets",
    playerName: "U Mir",
    team: "Multan Sultans",
    value: 23,
  },
  {
    title: "Most Sixes",
    playerName: "S Ayub",
    team: "Peshawar Zalmi",
    value: 21,
  },
  {
    title: "Best Strike Rate",
    playerName: "C Jordan",
    team: "Multan Sultans",
    value: 228.57,
  },
];

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

        <div className="flex flex-col items-start m-5 dark:text-[#CFD1D3] text-black mt-12 w-[25%]">
          <p className="text-[18px] font-medium">Key Stats</p>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="dark:bg-[#15222E] bg-white w-full my-3 py-2  rounded-[3px]"
            >
              <p className="text-[14px] w-full text-[#9FA3A7] pl-3 pb-3 pt-1 border-b border-black  dark:border-white border-opacity-5 dark:border-opacity-5">
                {stat.title}
              </p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center ">
                  <Link href="/player-profile">
                    <div className="mt-2 ml-4 -mb-2">
                      <Image
                        src="/player.png"
                        width={78}
                        height={76}
                        className="-mb-5"
                      />
                      <Image
                        src="/jersey.png"
                        width={78}
                        height={30}
                        className="z-[9994]"
                      />
                    </div>
                  </Link>
                  <div className="mt-2">
                    <p className="text-[16px] font-semibold">
                      {stat.playerName}
                    </p>
                    <p className="text-[12px] text-[#9FA4A7]">{stat.team}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pr-5">
                  <p className="text-[30px] font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesOverview;
