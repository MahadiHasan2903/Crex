"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const GenericFilter = ({ optionsArray, selectedValue, onSelection, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  const toggleFilter = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelection = (value) => {
    onSelection(value);
    setIsOpen(false);
  };

  const filteredOptions = optionsArray.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-2" ref={filterRef}>
      <p className="pb-2 text-[15px]">{label}</p>

      <div>
        <div
          onClick={toggleFilter}
          className="w-[400px] relative flex items-center justify-between text-[14px] text-[#1860A6] p-3 rounded-md bg-transparent border border-black border-opacity-5 dark:border-primary cursor-pointer"
        >
          {selectedValue ? selectedValue : `All ${label}`}
          <MdExpandMore size={20} />
        </div>
        {isOpen && (
          <div className="rounded-lg z-[9991] -mt-3 shadow-lg absolute w-[300px] p-5 h-[300px] overflow-auto bg-white dark:bg-primary">
            <div className="flex items-center pb-3 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
              <IoSearch size={15} />
              <input
                type="text"
                placeholder={`Search ${label}`}
                className="bg-transparent text-[13px] w-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredOptions.length === 0 ? (
              <p className="text-[13px] text-gray-500">No match found</p>
            ) : (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-[#FF7575] gap-x-2"
                  onClick={() => handleSelection(option.name)}
                >
                  <p>{option.name}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenericFilter;
