"use client";
import React from "react";
import NewsCard from "./NewsCard";
import { dummyNews } from "@/lib/utils/data";

const NewsSlider = ({ allNews }) => {
  return (
    <div className="flex flex-col justify-center mx-[395px] mt-10">
      <div>
        {dummyNews.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
      <p className="mb-12 text-center font-bold text-[18px] dark:text-[#6EB4EF] text-[#1860A6]">
        Read More
      </p>
    </div>
  );
};

export default NewsSlider;
