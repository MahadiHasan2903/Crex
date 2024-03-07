"use client";
import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeToggler = ({ styles, sunColor, moonColor }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${styles}`}>
      <button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <IoSunnySharp
          color={`${sunColor}`}
          className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <BsFillMoonStarsFill
          color={`${moonColor}`}
          className="absolute  h-[1.2rem] w-[1.2rem] rotate-0 scale-100 -mt-[18px] transition-all dark:rotate-90 dark:scale-0"
        />
      </button>
    </div>
  );
};

export default ThemeToggler;
