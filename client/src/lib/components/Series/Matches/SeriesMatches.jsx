import React from "react";
import Image from "next/image";

export const matchDays = [
  {
    day: "Wednesday, February 2024",
    matches: [
      {
        type: "1st T20, PSL 2024",
        team1: { name: "PSZ", score: "199/5", overs: "20.00", logo: "/BD.png" },
        result: { outcome: "ISU Won", margin: "by 21 runs" },
        team2: {
          name: "ISU",
          score: "220/10",
          overs: "20.00",
          logo: "/BD.png",
        },
      },
      {
        type: "2nd T20, PSL 2024",
        team1: { name: "PSZ", score: "225/5", overs: "20.00", logo: "/BD.png" },
        result: { outcome: "PSZ Won", margin: "by 8 wickets" },
        team2: { name: "MS", score: "220/10", overs: "19.3", logo: "/BD.png" },
      },
    ],
  },
  {
    day: "Thursday, February 2024",
    matches: [
      {
        type: "3rd T20, PSL 2024",
        team1: { name: "KK", score: "180/7", overs: "20.00", logo: "/KK.png" },
        result: { outcome: "KK Won", margin: "by 10 runs" },
        team2: { name: "LQ", score: "170/8", overs: "20.00", logo: "/LQ.png" },
      },
      {
        type: "4th T20, PSL 2024",
        team1: { name: "QG", score: "205/5", overs: "20.00", logo: "/QG.png" },
        result: { outcome: "Match Tied", margin: "" },
        team2: { name: "MS", score: "205/5", overs: "20.00", logo: "/MS.png" },
      },
    ],
  },
  {
    day: "Friday, February 2024",
    matches: [
      {
        type: "5th T20, PSL 2024",
        team1: { name: "LQ", score: "190/6", overs: "20.00", logo: "/LQ.png" },
        result: { outcome: "LQ Won", margin: "by 5 wickets" },
        team2: { name: "KK", score: "185/7", overs: "20.00", logo: "/KK.png" },
      },
      {
        type: "6th T20, PSL 2024",
        team1: { name: "QG", score: "215/4", overs: "20.00", logo: "/QG.png" },
        result: { outcome: "QG Won", margin: "by 15 runs" },
        team2: { name: "PSZ", score: "200/9", overs: "20.00", logo: "/BD.png" },
      },
    ],
  },
];

const SeriesMatches = () => {
  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%]">
        <div className="w-[70%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="text-[24px] font-bold pt-10">PSL 2024 Matches</p>
          {matchDays.map((day) => (
            <div key={day.day}>
              <p className="text-[14px] mb-5 mt-10">{day.day}</p>
              {day.matches.map((match) => (
                <div
                  key={match.type}
                  className="dark:text-[#9FA3A7] text-[#4A4A4A] mt-10"
                >
                  <p className="text-[11px] text-[#4A4A4A] dark:text-[#9FA3A7] ">
                    {match.type}
                  </p>
                  <div className="px-2 pb-1 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
                    <div className="py-4 flex cursor-pointer mb-1 dark:hover:bg-[#16232F] rounded-md hover:bg-[#FBFBFB] items-center justify-between mt-2 dark:text-[#9FA3A7] text-[#4A4A4A]">
                      <div className="flex items-center gap-x-2">
                        <Image src="/BD.png" width={50} height={50} />
                        <div>
                          <p className="text-[16px]">{match.team1.name}</p>
                          <div className="flex items-center gap-x-2">
                            <p className="font-medium text-[16px] text-[#4A4A4A] dark:text-[#CFD1D3]">
                              {match.team1.score}
                            </p>
                            <p className="text-[14px]">{match.team1.overs}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[#BB7627] text-[16px]">
                          {match.result.outcome}
                        </p>
                        <p className="text-[12px]">{match.result.margin}</p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <div className="flex flex-col items-end">
                          <p className="text-[16px]">{match.team2.name}</p>
                          <div className="flex items-center gap-x-2">
                            <p className="font-medium text-[16px] text-[#4A4A4A] dark:text-[#CFD1D3]">
                              {match.team2.score}
                            </p>
                            <p className="text-[14px]">{match.team2.overs}</p>
                          </div>
                        </div>
                        <Image src="/BD.png" width={50} height={50} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SeriesMatches;
