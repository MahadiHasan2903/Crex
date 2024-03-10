"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Winning Probability",
      data: [73, 27],
      backgroundColor: ["rgba(108, 178, 64, 1)", "rgba(255, 117, 117, 1)"],
      borderColor: ["rgba(108, 178, 64, 1)", "rgba(255, 117, 117, 1)"],
    },
  ],
};

const VenueChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
  };

  return (
    <div className="w-1/2">
      <p className="mb-2 text-[14px] font-semibold">Venue Stats</p>
      <div className="flex flex-col items-center justify-center px-3 py-8 border border-black rounded-lg dark:border-white border-opacity-5 dark:border-opacity-5">
        <div className="relative">
          <Doughnut
            data={data}
            width={150}
            height={150}
            options={chartOptions}
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center mb-[80px] bg-transparent">
          <p className="text-[24px] font-bold">11</p>
          <p className="text-[14px]">Matches</p>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-[14px] ">Win Bat First</p>
            <p className="text-[#6CB240] font-bold text-[22px]">73%</p>
          </div>
          <div className="flex items-center justify-between gap-x-3">
            <p className="text-[14px] ">Win Bowl First</p>
            <p className="text-[#FF7575] font-bold text-[22px]">27%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueChart;
