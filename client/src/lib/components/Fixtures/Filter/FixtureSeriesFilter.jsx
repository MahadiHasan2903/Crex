"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { cricketSeries } from "@/lib/utils/data";

const FixtureSeriesFilter = ({ selectedSeries, onSeriesSelection }) => {
  const [isSeriesFilterOpen, setIsSeriesFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsSeriesFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const toggleSeriesFilter = () => {
    setIsSeriesFilterOpen((prev) => !prev);
  };

  const handleSeriesSelection = (seriesName) => {
    onSeriesSelection(seriesName);
    setIsSeriesFilterOpen(false);
  };

  const filteredSeries = cricketSeries.filter((series) =>
    series.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-2 " ref={filterRef}>
      <p className="pb-2 text-[15px]">Series</p>

      <div>
        <div
          onClick={toggleSeriesFilter}
          className="w-[400px] relative flex items-center justify-between text-[14px] text-[#1860A6] p-3 rounded-md bg-transparent border border-black border-opacity-5 dark:border-primary cursor-pointer"
        >
          {selectedSeries ? selectedSeries : "All Series"}
          <MdExpandMore size={20} />
        </div>
        {isSeriesFilterOpen && (
          <div className="rounded-lg z-[9991] -mt-3 shadow-lg absolute w-[300px] p-5 h-[250px] overflow-auto bg-white dark:bg-primary">
            <div className="flex items-center pb-3 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
              <IoSearch size={15} />
              <input
                type="text"
                placeholder="Search Series"
                className="bg-transparent text-[13px] w-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredSeries.length === 0 ? (
              <p className="text-[13px] text-gray-500">No match found</p>
            ) : (
              filteredSeries.map((series, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer hover:bg-[#FF7575] px-3 py-2 gap-x-2"
                  onClick={() => handleSeriesSelection(series.name)}
                >
                  <p>{series.name}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FixtureSeriesFilter;
