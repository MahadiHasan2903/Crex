import Image from "next/image";
import React from "react";

const headings = [
  {
    author: "SANJAY SEN ∙ 21 Mar 2024",
    title:
      "BAN vs SL: 1st Test Fantasy Predictions, Tips, Teams, Pitch Report & Top Picks",
  },
  {
    author: "RAHUL MEHRA ∙ 22 Mar 2024",
    title: "IND vs AUS: 2nd ODI Match Preview, Key Players, and Match Analysis",
  },
  {
    author: "EMMA JONES ∙ 23 Mar 2024",
    title: "ENG Women vs SA Women: T20 World Cup Semif",
  },
  {
    author: "SANJAY SEN ∙ 21 Mar 2024",
    title:
      "BAN vs SL: 1st Test Fantasy Predictions, Tips, Teams, Pitch Report & Top Picks",
  },
];

const newsData = [
  {
    id: 1,
    author: "John Doe",
    date: "20 Mar 2024",
    title: "Scientists Discover New Species of Orchid in the Amazon Rainforest",
    description:
      "A team of botanists has identified a previously unknown species of orchid in the depths of the Amazon Rainforest. This discovery sheds light on the incredible biodiversity of the region and highlights the importance of conservation efforts.",
    imageSrc: "/orchid.jpg",
  },
  {
    id: 2,
    author: "Jane Smith",
    date: "21 Mar 2024",
    title:
      "SpaceX Successfully Launches Crewed Mission to the International Space Station",
    description:
      "SpaceX has achieved another milestone with the successful launch of a crewed mission to the International Space Station. The spacecraft, carrying astronauts from multiple countries, docked safely at the ISS, marking a new chapter in space exploration.",
    imageSrc: "/spacex.jpg",
  },
  {
    id: 3,
    author: "Michael Johnson",
    date: "22 Mar 2024",
    title: "New Study Suggests Benefits of Mediterranean Diet for Heart Health",
    description:
      "A comprehensive study has found that adhering to a Mediterranean diet can significantly reduce the risk of heart disease. The diet, rich in fruits, vegetables, olive oil, and fish, has long been associated with various health benefits.",
    imageSrc: "/mediterranean-diet.jpg",
  },
  {
    id: 4,
    author: "Emily Williams",
    date: "23 Mar 2024",
    title:
      "Artificial Intelligence Breakthrough: AI System Beats World Chess Champion",
    description:
      "In a groundbreaking development, an artificial intelligence system has defeated the reigning world chess champion in a series of matches. This achievement showcases the rapid advancements in AI technology and its potential applications.",
    imageSrc: "/ai-chess.jpg",
  },
];

const SeriesNews = () => {
  return (
    <div className="flex justify-center text-[#4A4A4A] dark:text-[#CFD1D3]">
      <div className="w-[75%] pl-3">
        <div className="my-10 ">
          <p className="text-[24px] font-bold">SL vs BAN 2024 News</p>
          <div className="grid grid-cols-2 mb-12">
            {headings.map((news, index) => (
              <div key={index} className=" my-10 gap-x-[150px] ">
                <div className="flex items-start gap-x-5 ">
                  <Image src="/cover.png" width={124} height={124} alt="News" />
                  <div>
                    <p className="text-[15px] dark:text-[#9FA3A7] text-[#4A4A4A]">
                      {news.author}
                    </p>
                    <p className="text-[20px] font-bold">{news.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="flex items-start py-10 border-t border-black gap-x-5 dark:border-white border-opacity-10 dark:border-opacity-10"
              >
                <Image
                  width={360}
                  height={275}
                  alt="NewsImage"
                  src="/cover.png"
                />
                <div>
                  <p className="text-[15px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                    {item.author} ∙ {item.date}
                  </p>
                  <p className="text-[28px] mb-5 font-bold">{item.title}</p>
                  <p className="text-[18px] text-[#4A4A4A] dark:text-[#9FA3A7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesNews;
