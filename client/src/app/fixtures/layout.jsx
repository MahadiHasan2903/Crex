import React from "react";
import FeatureTopBar from "@/lib/components/Layout/FeatureTopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <FeatureTopBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
