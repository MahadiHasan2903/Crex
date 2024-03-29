"use client";
import React, { useState } from "react";
import GenericFilter from "../Filter/GenericFilter";
import FixtureMatchList from "./FixtureMatchList";
import { cricketFormats, cricketSeries } from "@/lib/utils/data";
import FixtureTeamFilter from "../Filter/FixtureTeamFilter";

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
        <p className="mb-5 font-medium">Filter Fixtures</p>
        <FixtureTeamFilter
          selectedTeams={selectedTeams}
          onTeamSelection={handleTeamSelection}
        />
        <GenericFilter
          optionsArray={cricketFormats}
          selectedValue={selectedFormat}
          onSelection={handleFormatSelection}
          label="Formats"
        />
        <GenericFilter
          optionsArray={cricketSeries}
          selectedValue={selectedSeries}
          onSelection={handleSeriesSelection}
          label="Series"
        />
      </div>
    </div>
  );
};

export default FixtureMatches;
