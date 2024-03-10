import React from "react";

const MatchResultIndicator = ({
  backgroundColor,
  textContent,
  additionalStyles,
}) => {
  return (
    <div
      className={`${backgroundColor} flex items-center justify-center w-[30px] h-[30px] leading-[30px] p-2 rounded-md ${additionalStyles}`}
    >
      <p className="text-[12px] font-bold text-white">{textContent}</p>
    </div>
  );
};

export default MatchResultIndicator;
