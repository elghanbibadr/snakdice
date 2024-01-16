"use client";

import Link from "next/link";
import { useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Whitepaper = () => {
  const [selected, setSelected] = useState(0);
  const handleSelected = (index: number) => {
    if (selected !== index) {
      setSelected(index);
    }
  };

  return (
    <>
      <section
        id="#whitepaper"
        className="relative z-10 overflow-hidden py-12 md:py-16 lg:py-24"
      >
        <div className="mb-[80px] mx-[10%]">
          <div className="xl:flex items-center space-x-3">
            <div className="xl:w-[70%] xl:mb-0 mb-4 flex flex-wrap">
              <div
                className="wow fadeInUp mx-auto text-center xl:text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 uppercase text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  ABOUT SNAKEDICE
                </h1>
                <p className="dark:text-body-color-dark mb-4 text-base !leading-relaxed text-body-color sm:text-md 2xl:text-lg 3xl:text-xl">
                  SnakeDice will be a revolutionary online social gaming ecosystem and decentralized autonomous organization (DAO) powered by the deﬂationary token $SNAKE. SnakeDice will take a unique approach by gradually decreasing the native $SNAKE token supply over time, creating scarcity and potential value appreciation. SnakeDice will perform “buyback and burn” with 60% of the social gaming platform revenue. The platform will oﬀer a wide range of traditional casino games and proprietary specialty games. It uses a house edge mechanism to buy and burn $SNAKE tokens, ensuring a deﬂationary eﬀect.
                </p>
              </div>
            </div>
            <div className="xl:w-[30%] xl:mb-0 mb-4 flex justify-center">
              <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] overflow-hidden flex flex-col items-center justify-center py-[15px] px-[30px] text-2xl">
                <div className="font-medium">
                  View Whitepaper
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-[10%]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
            {featuresData.map((card) => (
              <SingleFeature key={card.id} card={card} selected={card.id === selected} handleSelected={handleSelected} />
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default Whitepaper;
