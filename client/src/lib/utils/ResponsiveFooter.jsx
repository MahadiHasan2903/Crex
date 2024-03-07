"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/lib/components/Layout/Footer";
import MobileFooter from "@/lib/components/Layout/MobileFooter";

const ResponsiveFooter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileFooter /> : <Footer />;
};

export default ResponsiveFooter;
