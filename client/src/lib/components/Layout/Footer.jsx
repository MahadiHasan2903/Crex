"use client";
import React from "react";
import { footerItems } from "@/lib/utils/data";
import logo from "../../../../public/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-4 mt-3  bg-[#131E29] px-[400px] hidden md:block">
      <div className="flex items-center w-full py-5 font-medium border-b border-white mb-7 border-opacity-10 gap-x-3">
        <Image src={logo} alt="logo" width={30} height={30} />
        <p className="text-tertiary  text-[18px] font-medium">CREX</p>
      </div>
      <div className="w-full text-[18px] text-[#FCFCFC] ">
        <div className="flex items-center justify-between my-7">
          <p>About</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex items-center justify-between my-7">
          <p>Grievance</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="flex items-center justify-between my-7">
          <p>Refund Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
