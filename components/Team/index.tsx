"use client";

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

const Team = () => {
  const [selected, setSelected] = useState(0);
  const handleSelected = (index: number) => {
    if (selected !== index) {
      setSelected(index);
    }
  };

  return (
    <>
      <section
        id="#Team"
        className="relative z-10 overflow-hidden py-12 md:py-16 lg:py-24"
      >
        <div className="mx-[10%]">
          {/* <div className="flex justify-between px-[20px] items-center">
            <div className="w-auto">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                MEET OUR TEAM
              </h1>
            </div>
            <div className="w-auto flex justify-end">
              <div className="flex space-x-12 text-3xl">
                <div className="opacity-70">
                  <Image src="/images/snakedice/icon/previous.png" width="30px" />
                </div>
                <div>
                  <Image src="/images/snakedice/icon/next.png" width="30px" />
                </div>
              </div>
            </div>
          </div> */}

          <SectionTitle
            title="MEET OUR TEAM"
            paragraph=""
            center
            mb="40px"
            width="100%"
          />
        </div>
        <div className="mx-[10%] hidden xl:block">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            selectedItem={selected}
            onClickItem={handleSelected}
            centerMode centerSlidePercentage={33.33}
          >
            {teamData.map((team) => (
              <SingleTeam key={team.id} team={team} selected={team.id === selected} />
            ))}
          </Carousel>
        </div>
        <div className="mx-[10%] block xl:hidden">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={selected}
            onClickItem={handleSelected}
            centerMode centerSlidePercentage={80}
          >
            {teamData.map((team) => (
              <SingleTeam key={team.id} team={team} selected={team.id === selected} />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Team;
