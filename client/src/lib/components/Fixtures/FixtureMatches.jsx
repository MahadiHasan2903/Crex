"use client";
import { useState, useEffect } from "react";
import FixtureFormatsFilter from "./Filter/FixtureFormatFilter";
import FixtureTeamFilter from "./Filter/FixtureTeamFilter";
import FixtureMatchList from "./FixtureMatchList";
import FixtureSeriesFilter from "./Filter/FixtureSeriesFilter";

const FixtureMatches = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    console.log("Selected Teams:", selectedTeams);
  }, [selectedTeams]);

  useEffect(() => {
    console.log("Selected Format:", selectedFormat);
  }, [selectedFormat]);

  useEffect(() => {
    console.log("Selected Series:", selectedSeries);
  }, [selectedSeries]);

  const handleSelectedSeries = (series) => {
    setSelectedSeries(series);
  };

  return (
    <div className="flex  px-[200px] mt-10">
      <FixtureMatchList
        selectedTeams={selectedTeams}
        selectedFormat={selectedFormat}
        selectedSeries={selectedSeries}
      />

      <div className="flex flex-col pl-10 ">
        <p className="mb-5 font-medium">Filter Fixture</p>
        <FixtureTeamFilter
          selectedTeams={selectedTeams}
          setSelectedTeams={setSelectedTeams}
        />
        <FixtureFormatsFilter
          selectedFormat={selectedFormat}
          setSelectedFormat={setSelectedFormat}
        />
        <FixtureSeriesFilter
          selectedSeries={selectedSeries}
          setSelectedSeries={handleSelectedSeries}
        />
      </div>
    </div>
  );
};

export default FixtureMatches;
