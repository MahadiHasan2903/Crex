"use client";
import Image from "next/image";
import React, { useState } from "react";
import WicketBanner from "./Banners/WicketBanner";
import MilestoneBanner from "./Banners/MilestoneBanner";
import PlayerSpotlightBanner from "./Banners/PlayerSpotlightBanner";
import { cricketPlayers, players } from "@/lib/utils/data";

const LiveMatch = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttons = [
    { name: "All", content: <div>All Content</div> },
    { name: "Highlights", content: <div>Highlights Content</div> },
    { name: "Overs", content: <div>Overs Content</div> },
    { name: "W", content: <div>Wicket Content</div> },
    { name: "6", content: <div>6 Content</div> },
    { name: "4", content: <div>4 Content</div> },
    { name: "Inn1", content: <div>Inn1 Content</div> },
    { name: "Inn2", content: <div>Inn2 Content</div> },
    { name: "Milestone", content: <div>Milestone Content</div> },
  ];
  return (
    <div className="flex justify-center">
      <div className="flex w-[60%]  ml-3 mt-12">
        <div className="w-[70%] dark:text-[#9FA3A7] text-black pr-10 border-r border-black gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
          <div className="flex items-center justify-between py-8 border-black gap-x-6 border-y dark:border-white border-opacity-10 dark:border-opacity-10">
            <div className="flex items-center gap-x-2">
              <div className="text-[16px]">st Over:</div>
              <div className="flex items-center gap-x-2 text-[14px]">
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  1
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  0
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  2
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  0
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  2
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  1
                </p>
                <p className="text-[#CFD1D3]"> = 6 </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-[16px]">This Over:</div>
              <div className="flex items-center gap-x-3 text-[14px]">
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  1
                </p>
                <p className="w-[30px] bg-yellow-600  font-bold text-white flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  4
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  2
                </p>
                <p className="w-[30px] bg-[#FF7575] font-bold text-white flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  W
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  2
                </p>
                <p className="w-[30px] flex items-center justify-center h-[30px]  leading-[30px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                  1
                </p>
                <p className="text-[#CFD1D3]"> = 6 </p>
              </div>
            </div>
          </div>

          <div className="mt-12 font-medium text-[18px] text-[#CFD1D3]">
            <p>Commentary</p>
            <div className="flex items-center my-5 font-normal gap-x-3">
              {buttons.map((button) => (
                <button
                  key={button.name}
                  className={`px-4 py-1 border rounded-md text-[14px] dark:border-white border-opacity-5 dark:border-opacity-5 ${
                    activeButton === button.name
                      ? "text-[#1860a6] bg-[#1860a614] dark:text-[#6Eb4EF] dark:bg-[#6Eb4EF14]"
                      : ""
                  }`}
                  onClick={() => handleButtonClick(button.name)}
                >
                  {button.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-start mt-5 dark:text-[#9FA3A7] text-black">
              {buttons.find((button) => button.name === activeButton)?.content}
            </div>

            <div className="mt-10">
              <div className="flex items-center my-7 gap-x-5">
                <p className="pb-5 text-[16px] font-medium">14.5</p>
                <div className="flex items-center w-full pb-5 border-b gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
                  <p className="w-[25px] bg-yellow-600 text-[16px] font-medium text-white flex items-center justify-center h-[25px]  leading-[25px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                    4
                  </p>
                  <p className="text-[14px] font-normal">Sakib Al Hasan</p>
                </div>
              </div>
              <div className="flex items-center my-7 gap-x-5">
                <p className="pb-5 text-[16px] font-medium">14.4</p>
                <div className="flex items-center w-full pb-5 border-b gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
                  <p className="w-[25px] bg-yellow-600 text-[16px] font-medium text-white flex items-center justify-center h-[25px]  leading-[25px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                    4
                  </p>
                  <p className="text-[14px] font-normal">Sakib Al Hasan</p>
                </div>
              </div>
              <div className="flex items-center my-7 gap-x-5">
                <p className="pb-5 text-[16px] font-medium">14.3</p>
                <div className="flex items-center w-full pb-5 border-b gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
                  <p className="w-[25px] bg-yellow-600 text-[16px] font-medium text-white flex items-center justify-center h-[25px]  leading-[25px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                    4
                  </p>
                  <p className="text-[14px] font-normal">Sakib Al Hasan</p>
                </div>
              </div>
              <div className="flex items-center my-7 gap-x-5">
                <p className="pb-5 text-[16px] font-medium">14.2</p>
                <div className="flex items-center w-full pb-5 border-b gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
                  <p className="w-[25px] bg-yellow-600 text-[16px] font-medium text-white flex items-center justify-center h-[25px]  leading-[25px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                    4
                  </p>
                  <p className="text-[14px] font-normal">Sakib Al Hasan</p>
                </div>
              </div>
              <div className="flex items-center my-7 gap-x-5">
                <p className="pb-5 text-[16px] font-medium">14.1</p>
                <div className="flex items-center w-full pb-5 border-b gap-x-5 dark:border-white border-opacity-5 dark:border-opacity-5">
                  <p className="w-[25px] bg-yellow-600 text-[16px] font-medium text-white flex items-center justify-center h-[25px]  leading-[25px] border border-black rounded-full dark:border-white border-opacity-10  dark:border-opacity-10 ">
                    4
                  </p>
                  <p className="text-[14px] font-normal">Sakib Al Hasan</p>
                </div>
              </div>
            </div>
            {cricketPlayers.map((player, index) => (
              <WicketBanner key={index} player={player} />
            ))}
            <MilestoneBanner />

            {players.map((player, index) => (
              <PlayerSpotlightBanner key={index} player={player} />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-5 dark:text-[#CFD1D3] text-black">
          <p className="text-[18px] font-medium">Player of the Match</p>

          <div className="flex items-center mt-5 gap-x-5">
            <div className="relative">
              <Image
                src="/player.png"
                width={82}
                height={80}
                className="-mb-5"
              />
              <Image
                src="/jersey.png"
                width={82}
                height={30}
                className="z-[9994]"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Chadwick Walton</p>
              <p className="text-[14px] my-2">NY Superstar Strikers</p>
              <p className="text-[14px]">73(33)</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-x-3">
              <Image src="/BD.png" width={32} height={32} alt="team" />
              <div className="flex items-center gap-x-2 dark:text-[#CFD1D3] text-black">
                <p className="text-[18px] ">NSS</p>
                <span className="text-[14px] opacity-70">- 1st Innings</span>
              </div>
            </div>
            <div>
              <div className="mt-5 dark:text-[#9FA3A7B3] text-black text-[14px] w-[350px] flex items-center justify-between dark:bg-[#111921] bg-[#F5F5F5] px-4 py-3">
                <p>Session</p>
                <p>Open</p>
                <p>PASS</p>
              </div>
              <div className=" border-b dark:border-white border-opacity-5 dark:border-opacity-5  dark:text-[#9FA3A7B3] text-black text-[14px] w-[350px] flex items-center justify-between  px-4 py-3">
                <p className="dark:text-[#9FA3A7] text-black">5 Over</p>
                <p className="text-[#CFD1D2]">52</p>
                <p className="text-[#CFD1D2]">51</p>
              </div>
              <div className="   dark:text-[#9FA3A7] text-black text-[14px] w-[350px] flex items-center justify-between  px-4 py-3">
                <p className="dark:text-[#9FA3A7] text-black">10 Over</p>
                <p className="text-[#CFD1D2]">104</p>
                <p className="text-[#CFD1D2]">84</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-x-3">
              <Image src="/BD.png" width={32} height={32} alt="team" />
              <div className="flex items-center gap-x-2 dark:text-[#CFD1D3] text-black">
                <p className="text-[18px] ">PR</p>
                <span className="text-[14px] opacity-70">- 2nd Innings</span>
              </div>
            </div>
            <div>
              <div className="mt-5 dark:text-[#9FA3A7B3] text-black text-[14px] w-[350px] flex items-center justify-between dark:bg-[#111921] bg-[#F5F5F5] px-4 py-3">
                <p>Session</p>
                <p>Open</p>
                <p>PASS</p>
              </div>
              <div className=" border-b dark:border-white border-opacity-5 dark:border-opacity-5  dark:text-[#9FA3A7B3] text-black text-[14px] w-[350px] flex items-center justify-between  px-4 py-3">
                <p className="dark:text-[#9FA3A7] text-black">5 Over</p>
                <p className="text-[#CFD1D2]">52</p>
                <p className="text-[#CFD1D2]">51</p>
              </div>
              <div className=" border-b dark:border-white border-opacity-5 dark:border-opacity-5  dark:text-[#9FA3A7] text-black text-[14px] w-[350px] flex items-center justify-between  px-4 py-3">
                <p className="dark:text-[#9FA3A7] text-black">10 Over</p>
                <p className="text-[#CFD1D2]">104</p>
                <p className="text-[#CFD1D2]">84</p>
              </div>
              <div className=" dark:text-[#9FA3A7] text-black text-[14px] w-[350px] flex items-center justify-between  px-4 py-3">
                <p className="dark:text-[#9FA3A7] text-black">15 Over</p>
                <p className="text-[#CFD1D2]">179</p>
                <p className="text-[#CFD1D2]">175</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
