"use client";
import React, { useState } from "react";
import FixtureSeriesList from "./FixtureSeriesList";
import GenericFilter from "../Filter/GenericFilter";
import { cricketFormats, cricketSeries } from "@/lib/utils/data";

const FixtureSeries = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const handleFormatSelection = (formatName) => {
    setSelectedFormat(formatName);
  };

  const handleSeriesSelection = (seriesName) => {
    setSelectedSeries(seriesName);
  };

  const removeSelectedFormat = () => {
    setSelectedFormat(null);
  };

  const removeSelectedSeries = () => {
    setSelectedSeries(null);
  };

  return (
    <div className="flex px-[200px] mt-10">
      <FixtureSeriesList
        selectedFormat={selectedFormat}
        selectedSeries={selectedSeries}
        removeSelectedFormat={removeSelectedFormat}
        removeSelectedSeries={removeSelectedSeries}
      />
      <div className="flex flex-col pl-10 ">
        <p className="mb-5 font-medium">Filter Fixtures</p>

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

export default FixtureSeries;
