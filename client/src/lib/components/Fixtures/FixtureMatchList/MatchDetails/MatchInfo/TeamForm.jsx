import React from "react";
import TeamResultInfo from "@/lib/components/atoms/TeamResultInfo";

const TeamForm = () => {
  return (
    <div className="mt-[80px] text-black dark:text-[#CFD1D3] ">
      <p className="text-[18px] font-medium mt-8 mb-4">
        Team Form
        <span className="text-[14px] pl-2  opacity-70 font-normal">
          (Last 5 matches)
        </span>
      </p>
      <TeamResultInfo teamName="Bangladesh" />
      <TeamResultInfo teamName="Australia" />
    </div>
  );
};

export default TeamForm;
