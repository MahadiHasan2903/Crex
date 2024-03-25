"use client";
import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import PlayerBio from "./PlayerBio";

const playedFor = [
  "Bangladesh",
  "Worcestershire",
  "Kolkata Knight Riders",
  "Khulna Royal Bengals",
  "Uthura Rudras",
  "Dhaka Gladiators",
  "Leicestershire",
  "Barbados Tridents",
  "Adelaide Strikers",
  "Melbourne Renegades",
  "Rangpur Riders",
  "Karachi Kings",
  "Jamaica Tallawahs",
  "Dhaka Dynamites",
  "Peshawar Zalmi",
  "Sunrisers Hyderabad",
  "World XI",
  "Brampton Wolves",
];

const PlayerInfo = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="relative flex justify-center">
      <div className="w-[80%] px-5 my-10 flex items-start mt-10 text-[#4A4A4A] dark:text-[#CFD1D3]">
        <div className="w-[40%]">
          <div className="w-full ">
            <p className="text-[18px] font-medium">Personal Details</p>

            <div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                  Role
                </p>
                <p className="text-[16px] w-full">All Rounder</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                  Bats
                </p>
                <p className="text-[16px] w-full">Left Handed . Middle Order</p>
              </div>
              <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
                <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                  Bowls
                </p>
                <p className="text-[16px] w-full">
                  Left-Arm Orthodox Spin . Spinner
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <p className="text-[18px] font-medium">Teams played for</p>
            <div className="flex flex-wrap items-center my-5">
              {playedFor?.map((team, index) => (
                <React.Fragment key={index}>
                  <p className="py-1">{team}</p>
                  {index !== playedFor.length - 1 && (
                    <div className="w-[4px] mx-2 h-[4px] leading-[4px] rounded-full bg-[#ffffff4d]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[60%] ml-10">
          <p className="text-[18px] font-medium">Personal Details</p>

          <div>
            <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A] w-1/3">
                Name
              </p>
              <p className="text-[16px]  w-full">Shakib Al Hasan</p>
            </div>
            <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                Birth
              </p>
              <p className="text-[16px] w-full">24 Mar 1987</p>
            </div>
            <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                Birth Place
              </p>
              <p className="text-[16px] w-full">Magura, Jessore</p>
            </div>
            <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                Height
              </p>
              <p className="text-[16px] w-full">5 Ft 7 In</p>
            </div>
            <div className="flex items-center w-full py-5 border-b border-black custom-scrollbar dark:border-white border-opacity-5 dark:border-opacity-5">
              <p className="text-[14px] dark:text-[#9FA3A7] text-[#4A4A4A]  w-1/3">
                Nationality
              </p>
              <p className="text-[16px] w-full">Bangladeshi</p>
            </div>
          </div>

          <div className="my-10">
            One of the top all-rounders across the cricketing landscape, Shakib
            Al Hasan is undoubtedly the best cricketer to come from the land of
            Bangladesh. His aggressive left-hand batting, slow left-arm
            orthodox, and athleticism on-field makes him a premier force in
            world cricket. The Jessore-born has also captained his national side
            and was named ICC’s Number 1 all-rounder across all formats in
            2015...{" "}
            <span
              className="dark:text-[#6EB4EF] text-[#1860A6] cursor-pointer"
              onClick={toggleModal}
            >
              continue reading
            </span>
          </div>
          <div className="flex items-center my-10 gap-x-10">
            <div className="flex items-center gap-x-2">
              <FaInstagramSquare size={20} className="text-[#B2B5B9]" />
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                shaki_b75
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaTwitter size={20} className="text-[#B2B5B9]" />
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                @Sah75official
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {showModal && <PlayerBio onClose={toggleModal} />}
    </div>
  );
};

export default PlayerInfo;
