import Link from "next/link";
import Image from "next/image";
import Roadmap1SVG from '@/assets/svg/roadmap-1.svg';
import Roadmap2SVG from '@/assets/svg/roadmap-2.svg';
import Roadmap3SVG from '@/assets/svg/roadmap-3.svg';
import Roadmap4SVG from '@/assets/svg/roadmap-4.svg';

const Roadmap = () => {
  return (
    <>
      <section
        id="#Roadmap"
        className="relative z-10 overflow-hidden py-12 md:py-16 lg:py-24"
      >
        <div className="mx-[10%] mb-[40px]">
          <div className="lg:flex items-center space-x-3">
            <div className="lg:w-[70%] lg:mb-0 mb-4 text-center lg:text-left">
              <div
                className="wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 lg:pl-10 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  ROAD MAP
                </h1>
              </div>
            </div>
            <div className="lg:w-[30%] lg:mb-0 mb-4 lg:flex justify-center hidden">
              <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="py-[15px] px-[30px] text-2xl border-gradient">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-[10%] mb-[40px] lg:mb-0 overflow-x-scroll lg:overflow-hidden pb-2">
          <div className="min-w-[800px]">
            <div className="flex flex-row justify-between w-full">
              <div className="w-1/4">
                <Roadmap1SVG className="mx-auto" />
                <div className="text-center">
                  <b className="text-[1.31rem] leading-[40px]">Q1 2024</b>
                </div>
              </div>
              <div className="w-1/4">
                <Roadmap2SVG className="mx-auto" />
                <div className="text-center">
                  <b className="text-[1.31rem] leading-[40px]">Q2 2024</b>
                </div>
              </div>
              <div className="w-1/4">
                <Roadmap3SVG className="mx-auto" />
                <div className="text-center">
                  <b className="text-[1.31rem] leading-[40px]">Q3 2024</b>
                </div>
              </div>
              <div className="w-1/4">
                <Roadmap4SVG className="mx-auto" />
                <div className="text-center">
                  <b className="text-[1.31rem] leading-[40px]">Q4 2024</b>
                </div>
              </div>
            </div>
            <div className="ml-[3%] my-2">
              <Image
                width={100}
                height={100}
                className="w-full object-cover"
                alt=""
                src="/images/snakedice/line.png"
              />
            </div>
            <div className="flex flex-row justify-between w-full text-body-color">
              <div className="w-1/4">
                <div className="ml-[20%]">
                 
                Launch the website, release our NFT Project, and launch the dice game. In addition, we will begin our marketing and awareness campaigns.
                </div>
              </div>
              <div className="w-1/4">
                <div className="ml-[20%]">
                Begin the development of the SnakeDice gaming platform, continue marketing the project, incorporate in Cyprus and hire additional core members to ensure regulatory compliance.
                </div>
              </div>
              <div className="w-1/4">
                <div className="ml-[20%]">
                Launch the beta version of the SnakeDice gaming platform, gather feedback from users and make necessary improvements. We may also run the airdrop and/or NFT project during this quarter.


                </div>
              </div>
              <div className="w-1/4">
                <div className="ml-[20%]">
                Continue development of the gaming platform and prepare for full launch in Q1 of 2025, potentially sooner if possible.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[10%]">
          <div className="mb-4 flex lg:hidden justify-center">
            <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="py-[15px] px-[30px] text-2xl border-gradient">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
