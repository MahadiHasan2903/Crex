import React from "react";

const statsData = [
  { label: "Highest Total", team: "by HK vs NEP", score: "212-6" },
  { label: "Lowest Total", team: "by HK vs SCO", score: "66-7" },
  { label: "Highest Chased", team: "by MLY vs KUW", score: "163-7" },
  { label: "Lowest Defended", team: "by HK vs SCO", score: "161-9" },
];

const VenueStats = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex items-center justify-between pb-6 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
        <p className="text-[14px]">
          Avg 1st Inns
          <span className="ml-2 text-[18px] font-medium">152</span>
        </p>
        <p className="text-[14px]">
          Avg 2st Inns
          <span className=" ml-2 text-[18px] font-medium">133</span>
        </p>
      </div>
      {statsData.map((stat, index) => (
        <div className="flex items-center justify-between my-7" key={index}>
          <div className="text-[14px]">{stat.label}</div>
          <div className="text-[14px] opacity-70">{stat.team}</div>
          <div className="text-[18px] font-bold">{stat.score}</div>
        </div>
      ))}
    </div>
  );
};

export default VenueStats;
