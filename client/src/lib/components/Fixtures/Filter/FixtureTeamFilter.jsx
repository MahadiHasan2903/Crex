"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdExpandMore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { cricketTeams } from "@/lib/utils/data";

const FixtureTeamFilter = ({ selectedTeams, onTeamSelection }) => {
  const [isTeamFilterOpen, setIsTeamFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRef = useRef(null);

  const toggleTeamFilter = () => {
    setIsTeamFilterOpen((prev) => !prev);
  };

  const handleCheckboxChange = (teamName) => {
    if (selectedTeams.includes(teamName)) {
      onTeamSelection(
        selectedTeams.filter((selectedTeam) => selectedTeam !== teamName)
      );
    } else {
      onTeamSelection([...selectedTeams, teamName]);
    }
  };

  const filteredTeams = cricketTeams.filter((team) =>
    team.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsTeamFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);
  return (
    <div className="py-2" ref={filterRef}>
      <p className="pb-2 text-[15px]">Team</p>

      <div>
        <div
          onClick={toggleTeamFilter}
          className="w-[400px] relative flex items-center justify-between text-[14px] text-[#1860A6] p-3 rounded-md bg-transparent cursor-pointer border border-black border-opacity-5 dark:border-primary"
        >
          {selectedTeams.length === 0
            ? "All Teams"
            : `${selectedTeams.length} Team${
                selectedTeams.length > 1 ? "s" : ""
              } selected`}
          <MdExpandMore size={20} />
        </div>
        {isTeamFilterOpen && (
          <div className="rounded-lg z-[9993] -mt-3 shadow-lg absolute w-[300px] p-5 h-[350px] overflow-auto bg-white dark:bg-primary">
            <div className="flex items-center pb-3 border-b border-black gap-x-2 dark:border-white border-opacity-10 dark:border-opacity-10">
              <IoSearch size={15} />
              <input
                type="text"
                placeholder="Search Teams"
                className="bg-transparent text-[13px] w-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredTeams.length === 0 ? (
              <p className="text-[13px] text-gray-500">No match found</p>
            ) : (
              filteredTeams.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center hover:bg-[#FF7575] px-3 py-2 gap-x-2"
                >
                  <input
                    type="checkbox"
                    id={`teamSubName${index}`}
                    name={team.Name}
                    value={team.Name}
                    checked={selectedTeams.includes(team.Name)}
                    onChange={() => handleCheckboxChange(team.Name)}
                    className="cursor-pointer"
                  />
                  <label
                    className="cursor-pointer"
                    htmlFor={`teamSubName${index}`}
                  >
                    {team.Name}
                  </label>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FixtureTeamFilter;
