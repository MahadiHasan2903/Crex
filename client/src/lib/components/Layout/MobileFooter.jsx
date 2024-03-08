import ThemeToggler from "@/lib/theme/ThemeToggler";
import React from "react";
import { GiCricketBat } from "react-icons/gi";

const MobileFooter = () => {
  return (
    <div className="lg:hidden flex  bottom-0 items-center   gap-x-12 pl-12 w-full py-2 bg-white dark:bg-[#131E29] text-[12px]">
      <p>Fixtures</p>
      <p className="flex items-center gap-x-2">
        <GiCricketBat color="#F3AD61" /> Stats Corner
      </p>

      <ThemeToggler
        styles="flex items-center text-black"
        sunColor="white"
        moonColor="black"
      />
    </div>
  );
};

export default MobileFooter;
