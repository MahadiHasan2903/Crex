"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";

const StatisticsFilter = ({ title, data }) => {
  const [selectedLabel, setSelectedLabel] = useState(data[0]?.label);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const popUpRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
    setIsOpen(false);
  };

  return (
    <div className="text-[14px] relative">
      <p className="my-2">{title}</p>
      <div
        className="cursor-pointer px-4 max-w-[200px] py-2 flex items-center  text-[#1860A6] border border-black rounded-[5px] border-opacity-10 gap-x-5 overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="overflow-hidden whitespace-nowrap text-overflow-ellipsis">
          {selectedLabel.length > 10
            ? selectedLabel.slice(0, 10) + ".."
            : selectedLabel}
        </p>

        <MdExpandMore size={20} />
      </div>

      {isOpen && (
        <div
          ref={popUpRef}
          className="rounded-lg shadow-lg mt-3 absolute w-[300px] p-5 h-[300px] overflow-auto bg-white"
        >
          <div className="fixed flex items-center p-3 -mt-5 bg-white border-b gap-x-5">
            <IoSearch size={20} color="black" />
            <input
              type="text"
              placeholder="Search record"
              className="bg-transparent text-[13px] w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mt-5 overflow-auto text-[16px]">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center hover:bg-[#FF7575] p-3 rounded-md mt-1 gap-x-2 cursor-pointer"
                  onClick={() => handleLabelClick(item.value)}
                >
                  <label className="cursor-pointer" htmlFor={`item-${index}`}>
                    {item.label}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-[13px] text-gray-500 p-3">No match found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatisticsFilter;
