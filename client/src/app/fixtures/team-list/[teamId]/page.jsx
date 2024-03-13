import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import TeamMatches from "@/lib/components/Fixtures/FixtureTeamList/TeamMatches";
const TeamDetailsPage = () => {
  return (
    <div>
      <div className="w-full text-[#CFD1D399] bg-[#0E1720] relative py-2">
        <div className="px-[200px] flex items-center gap-x-5">
          <p className=" cursor-pointer text-[14px] p-1 flex items-center gap-x-2 font-bold pb-[5px] text-[#FFFFFFCC]">
            <FaArrowLeft size={20} /> Mumbai Indians Matches
          </p>
        </div>
      </div>
      <TeamMatches />
    </div>
  );
};

export default TeamDetailsPage;
