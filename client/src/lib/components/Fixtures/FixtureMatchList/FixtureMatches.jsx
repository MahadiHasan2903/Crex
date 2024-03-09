"use client";

import React, { useState } from "react";
import FixtureFormatsFilter from "../Filter/FixtureFormatFilter";
import FixtureTeamFilter from "../Filter/FixtureTeamFilter";
import FixtureMatchList from "./FixtureMatchList";
import FixtureSeriesFilter from "../Filter/FixtureSeriesFilter";

const FixtureMatches = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleFormatSelection = (formatName) => {
    setSelectedFormat(formatName);
  };

  const handleSeriesSelection = (seriesName) => {
    setSelectedSeries(seriesName);
  };

  const handleTeamSelection = (selectedTeams) => {
    setSelectedTeams(selectedTeams);
  };

  const removeSelectedFormat = () => {
    setSelectedFormat(null);
  };

  const removeSelectedSeries = () => {
    setSelectedSeries(null);
  };

  const removeSelectedTeam = (teamToRemove) => {
    const updatedTeams = selectedTeams.filter((team) => team !== teamToRemove);
    setSelectedTeams(updatedTeams);
  };

  return (
    <div className="flex px-[200px] mt-10">
      <FixtureMatchList
        selectedFormat={selectedFormat}
        selectedSeries={selectedSeries}
        selectedTeams={selectedTeams}
        removeSelectedFormat={removeSelectedFormat}
        removeSelectedSeries={removeSelectedSeries}
        removeSelectedTeam={removeSelectedTeam}
      />
      <div className="flex flex-col pl-10 ">
        <p className="mb-5 font-medium">Filter Fixture</p>
        <FixtureTeamFilter
          selectedTeams={selectedTeams}
          onTeamSelection={handleTeamSelection}
        />
        <FixtureFormatsFilter
          selectedFormat={selectedFormat}
          onFormatSelection={handleFormatSelection}
        />
        <FixtureSeriesFilter
          selectedSeries={selectedSeries}
          onSeriesSelection={handleSeriesSelection}
        />
      </div>
    </div>
  );
};

export default FixtureMatches;
