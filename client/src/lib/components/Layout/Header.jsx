"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.webp";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/utils/data";
import ThemeToggler from "@/lib/theme/ThemeToggler";
import SeriesSlider from "../Series/SeriesSlider";
import { MdOutlineExpandMore } from "react-icons/md";

const Header = ({ allSeries }) => {
  const pathName = usePathname();
  const firstBlock = pathName.split("/")[1];
  const [isSeriesSliderPopupOpen, setIsSeriesSliderPopupOpen] = useState(false);

  const handleSeriesSliderClick = (event) => {
    event.stopPropagation();
    setIsSeriesSliderPopupOpen((prev) => !prev);
  };

  const closeSeriesSliderPopup = () => {
    setIsSeriesSliderPopupOpen(false);
  };

  // Close the popup when clicking outside the SeriesSlider
  useEffect(() => {
    const handleClickOutside = (event) => {
      const seriesSliderPopup = document.getElementById("seriesSlider");

      if (
        seriesSliderPopup &&
        !seriesSliderPopup.contains(event.target) &&
        isSeriesSliderPopupOpen
      ) {
        closeSeriesSliderPopup();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSeriesSliderPopupOpen]);

  return (
    <div className="relative">
      <div className="flex justify-center pt-4 bg-primary">
        <div className="flex items-center justify-between w-full lg:w-[60%]">
          <div className="flex items-center w-full pb-4 ml-5 font-medium lg:ml-0 lg:w-1/6 gap-x-2">
            <Image src={logo} alt="logo" width={25} height={25} />
            <p className="text-tertiary text-[16px] font-bold">CREX</p>
          </div>
          <div className="items-center justify-end hidden w-full lg:flex">
            <ul className="flex text-white items-center gap-x-3 text-[14px]">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li
                    className={`pb-[17px] px-3 ${
                      item.href.split("/")[1] === firstBlock
                        ? "border-b-2 border-white"
                        : ""
                    } ${
                      item.icon ? "font-semibold flex items-center gap-x-2" : ""
                    }`}
                  >
                    {item.label}
                    {item.icon && item.icon}
                  </li>
                </Link>
              ))}
              <li
                className={`pb-[17px] px-3  cursor-pointer font-semibold flex items-center gap-x-2
                ${"series" === firstBlock ? "border-b-2 border-white" : ""}
                `}
                onClick={(e) => handleSeriesSliderClick(e)}
              >
                Series <MdOutlineExpandMore />
              </li>
            </ul>
            <ThemeToggler
              styles="flex items-center pb-4 ml-5 text-white"
              sunColor="white"
              moonColor="white"
            />
          </div>
        </div>
      </div>
      {isSeriesSliderPopupOpen && (
        <div id="seriesSlider">
          <SeriesSlider
            onClosePopup={closeSeriesSliderPopup}
            allSeries={allSeries}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
