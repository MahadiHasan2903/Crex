"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const PlayerBio = ({ onClose }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)]   fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className=" w-[800px] text-[16px] text-[#4A4A4A] rounded-md dark:text-[#CFD1D3] h-[90vh] dark:bg-[#15222E] bg-white p-8">
        <div className="flex items-center justify-between pb-4 border-b border-black dark:border-white border-opacity-5 dark:border-opacity-5">
          <p className="text-[18px] font-semibold">Player Bio</p>
          <RxCross1
            size={24}
            className="w-[30px] text-[#4B4B4B] dark:text-white  -right-4 top-8 h-[30px] cursor-pointer p-2 rounded-full bg-[#eeeeee] dark:bg-primary"
            onClick={onClose}
          />
        </div>
        <div className="overflow-y-scroll h-[80vh] pt-2">
          <p className="my-5">
            One of the top all-rounders across the cricketing landscape, Shakib
            Al Hasan is undoubtedly the best cricketer to come from the land of
            Bangladesh. His aggressive left-hand batting, slow left-arm
            orthodox, and athleticism on-field makes him a premier force in
            world cricket. The Jessore-born has also captained his national side
            and was named ICC’s Number 1 all-rounder across all formats in 2015.{" "}
          </p>
          <p className="my-5">
            Shakib started playing cricket at a very young age and before making
            his first-class debut was often contacted by different teams to play
            for them. He made his first-class debut against Zimbabwe in 2005 and
            a year later, made his International debut against the same team in
            an ODI. In the same series, the all-rounder made his T20I debut and
            then he got his maiden Test cap.
          </p>
          <p className="my-5">
            A young Shakib smacked his maiden ODI ton against Canada, just
            before the 2007 World Cup and then featured in the global event.
            During Bangladesh’s historic victory against India in the World Cup,
            Shakib scored a well-composed 50 and bowled an economical 10-over
            spell.
          </p>
          <p className="my-5">
            Due to his ability to change the game with both bat and ball, Shakib
            got his maiden Test cap against India in 2007. From there on, the
            national selectors persisted with the all-rounder and the cricketer
            also started delivering.
          </p>
          <p className="my-5">
            In 2009, Shakib was named the vice-captain of his national side.
            Then, with back-to-back injuries to Mashrafe Mortaza, the premier
            all-rounder was handed the captaincy role for his country. He proved
            himself by staying calm under pressure. Bangladesh won 22 out of 47
            games under his captaincy, including their victory over England in
            the 2011 World Cup. However, after a disappointing tour of Zimbabwe,
            Shakib was removed as captain.
          </p>
          <p className="my-5">
            The all-rounder has also had his fair share of disciplinary issues
            too. In 2010, during an ODI against New Zealand, Shakib the then
            captain, while batting threatened to hit a person who walked through
            the sightscreen. While in February 2014, BCB handed Shakib a fine
            BDT 3 lakh and a 3-ODIs suspension, because he made an indecent
            gesture towards his crotch during an ODI against Sri Lanka. Also
            during the 2018 Nidahas Trophy, ICC fined Shakib with 25% of the
            match fees, when he pressurized the authorities by walking-off the
            field to denote the umpiring errors.
          </p>
          <p className="my-5">
            In 2015, when Bangladesh had the best year in ODIs, Shakib was
            proven to be their trump-card. In the 2015 World Cup, his
            performances with both bat and ball helped his side to get into the
            quarter-finals of the tournament for the first time. He also played
            a major role in the series wins over India, Pakistan, and South
            Africa.
          </p>
          <p className="my-5">
            In 2017, post Mortaza’s retirement from the shortest format, Shakib
            took the captaincy role in T20Is for the first time and then after
            Mushfizur Rahim’s removal, he was appointed as skipper for the Test
            format. However, in the same year, he took a sabbatical from the
            longest format to concentrate on white-ball cricket.
          </p>
          <p className="my-5">
            The 2019 ICC World Cup proved to be the watershed moment in Shakib’s
            career. He scored 606 runs and finished as the third highest
            run-scorer in the event. In addition to that, he scalped 11 wickets
            and became the first all-rounder to score over 600 runs and take ten
            wickets in a single World Cup. Shakib also equalled Yuvraj Singh’s
            record of scoring a fifty and taking a fifer in a World Cup game
            when he achieved the feat against West Indies. However, post the
            multilateral series, his career took a hindrance when ICC banned him
            for one year.
          </p>
          <p className="my-10">(As of March 2021)</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerBio;
