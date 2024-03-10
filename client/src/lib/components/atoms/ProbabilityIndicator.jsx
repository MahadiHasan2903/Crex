"use client";
import React, { useState, useEffect } from "react";

const ProbabilityIndicator = ({ paceProbability, spinProbability }) => {
  const [paceWidth, setPaceWidth] = useState(0);
  const [spinWidth, setSpinWidth] = useState(0);

  useEffect(() => {
    setPaceWidth(paceProbability);
    setSpinWidth(spinProbability);
  }, [paceProbability, spinProbability]);

  const gradientBackground = `linear-gradient(90deg, #6CB240 ${paceWidth}%, #6CB240 ${paceWidth}% ${
    100 - spinWidth
  }%, #FF7575 ${100 - spinWidth}% 100%)`;

  return (
    <div
      className="relative h-[6px] bg-[#6CB240] w-full  rounded-lg"
      style={{ background: gradientBackground }}
    >
      <div className="absolute text-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
      <div className="flex items-center justify-between m-1">
        <p className="text-[14px]">{paceProbability}%</p>
        <p className="text-[14px]">{spinProbability}%</p>
      </div>
    </div>
  );
};

export default ProbabilityIndicator;
