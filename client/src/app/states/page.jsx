import React from "react";
import StateCornerBanner from "@/lib/components/StateCorner/StateCornerBanner";
import StatesTable from "@/lib/components/StateCorner/StatesTable";

const StatesPage = () => {
  return (
    <div className="w-full">
      <StateCornerBanner />
      <StatesTable />
    </div>
  );
};

export default StatesPage;
