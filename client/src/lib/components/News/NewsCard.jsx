"use client";
import Image from "next/image";
import React from "react";

const NewsCard = ({ news }) => {
  const { coverImage, intro, headLine, description, pubTime, tags } = news;

  // Function to truncate the description to the first 15 words
  const truncateDescription = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const truncatedDescription = truncateDescription(description, 15);

  return (
    <div className="mt-3 mb-6 border-b-2 border-[#F0F0F0] dark:border-primary">
      <p className=" cursor-pointer font-bold text-[22px] dark:text-[#CFD1D3] text-black">
        {intro}
      </p>
      <div className="flex items-center justify-between mt-8 mb-12">
        <div className="w-[50%] overflow-hidden h-auto mr-8">
          <Image
            src={coverImage}
            alt="coverImage"
            width={800}
            height={250}
            className="overflow-hidden duration-500 ease-in-out scale-100 rounded-sm cursor-pointer hover:scale-125"
          />
        </div>
        <div className="w-[50%] text-left dark:text-[#CFD1D3] text-black  ">
          <p className="text-[13px] dark:text-[#6EB4EF] text-[#1860A6]">
            {tags}
          </p>
          <p className="text-[23px] mt-5 font-bold  cursor-pointer">
            {headLine}
          </p>
          <p className="mt-2 cursor-pointer">{truncatedDescription}</p>
          <p className="text-[13px] mt-6  cursor-pointer">{pubTime}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
