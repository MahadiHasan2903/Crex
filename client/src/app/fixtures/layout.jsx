import React from "react";
import FeatureTopBar from "@/lib/components/Layout/FeatureTopBar";

export default async function FixtureLayout({ children }) {
  return (
    <div>
      {/* <FeatureTopBar /> */}
      {children}
    </div>
  );
}
