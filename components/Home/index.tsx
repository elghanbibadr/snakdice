"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import OutlineSVG from "@/assets/svg/outline-ico.svg";
import OutlineMobileSVG from "@/assets/svg/outline-ico-mobile.svg";
import SnakeSVG from "@/assets/svg/snakedice.svg";
import SnakeMobileSVG from "@/assets/svg/snake-1-mobile.svg";
import DiceRozaSVG from "@/assets/svg/dice-roza-1.svg";

const Home = () => {
  const [selected, setSelected] = useState(0);
  const handleSelected = (index: number) => {
    if (selected !== index) {
      setSelected(index);
    }
  };

  const startTime = 1705294800 * 1000;

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {

    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = startTime - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })

    return () => {
      clearInterval(updateTime);
    }

  }, [startTime]);

  return (
    <>
      <section
        id="#Home"
        className="relative z-10 h-full pt-[50%] md:pt-[60%] lg:pt-[15%] 2xl:pt-[20%] pb-[-2%]"
      >
        <div className="mx-[10%]">
          <div
            className="wow fadeInUp mx-auto max-w-[800px] 2xl:max-w-[1000px] text-center"
            data-wow-delay=".2s"
          >
            <h1 className="mb-12 lg:mb-8 text-3xl uppercase font-bolder sm:text-4xl sm:leading-tight text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-5xl xl:text-6xl md:leading-tight">
              THE FIRST CASINO WITH DEFLATIONARY TOKENOMICS AVAILABLE IN THE US
            </h1>
            <div className="flex justify-center">
              <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="rounded-lg [background:linear-gradient(94.73deg,_#c1c1c1,_#fff_28.7%,_#fff_69.99%,_#c1c1c1)] overflow-hidden flex flex-col items-center justify-center py-[0.94rem] px-[1.88rem]">
                <div className="leading-[2rem] text-black text-2xl capitalize font-medium">
                  View Whitepaper
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="4xl:mt-[40%] xl:mt-[30%] lg:mt-[25%] md:mt-[170%] mt-[150%]">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mx-[10%] flex justify-end">
              <div
                className="wow fadeInUp xl:w-[55%] text-center xl:text-left"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                NFT Project
                                </h1>
                <p className="text-body-color-dark mb-4 text-base !leading-relaxed sm:text-md 2xl:text-lg 3xl:text-xl">
                  Join our transparent pre-sale at a 60 ETH valuation, followed by two stages of the main ICO, ending at a 600 ETH valuation. Buy through MetaMask with instant token delivery. Trading will begin on SushiSwap.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="4xl:mt-[100px] lg:mt-[70px] mt-[60px]">
          <div className="flex flex-wrap relative">
            <div className="relative w-full flex items-center text-center uppercase mb-4 px-[10%]">
              <div className="w-1/3">
                <b
                  onClick={() => handleSelected(0)}
                  className={`text-md cursor-pointer ${selected === 0 ? "md:text-3xl text-transparent !bg-clip-text [background:linear-gradient(207.06deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" : "md:text-xl"}`}>
                  Pre-Sale
                </b>
              </div>
              <div className="w-1/3">
                <b
                  onClick={() => handleSelected(1)}
                  className={`text-md cursor-pointer ${selected === 1 ? "md:text-3xl text-transparent !bg-clip-text [background:linear-gradient(207.06deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" : "md:text-xl"}`}>
                  ICO Stage 1
                </b>
              </div>
              <div className="w-1/3">
                <b
                  onClick={() => handleSelected(2)}
                  className={`text-md cursor-pointer ${selected === 2 ? "md:text-3xl text-transparent !bg-clip-text [background:linear-gradient(207.06deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" : "md:text-xl"}`}>
                  ICO Stage 2
                </b>
              </div>
            </div>
            <div className="relative w-full flex">
              <div className={`absolute top-[10%] items-center w-full px-[10%] ${selected === 0 ? "block" : "hidden"}`}>
                <div className="flex justify-center mb-[7%] lg:hidden">
                  <DiceRozaSVG />
                </div>
                <div className="text-center mb-[4%]">
                  <b className="text-4xl lg:text-5xl uppercase text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Coming Soon
                  </b>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-12 text-center">
                  <div className="flex justify-center space-x-12 mb-[4%] lg:mb-0">
                    <div className="w-auto">
                      <b className="clock-time uppercase font-flanders-art-sans text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                        -
                      </b>
                      <div className="clock-unit opacity-[0.6]">
                        Months
                      </div>
                    </div>
                    <div className="w-auto">
                      <b className="clock-time uppercase font-flanders-art-sans text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                        {days}
                      </b>
                      <div className="clock-unit opacity-[0.6]">
                        Days
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-12">
                    <div className="w-auto">
                      <b className="clock-time uppercase font-flanders-art-sans text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                        {hours}
                      </b>
                      <div className="clock-unit opacity-[0.6]">
                        Hours
                      </div>
                    </div>
                    <div className="w-auto">
                      <b className="clock-time uppercase font-flanders-art-sans text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                        {minutes}
                      </b>
                      <div className="clock-unit opacity-[0.6]">
                        Minutes
                      </div>
                    </div>
                    <div className="w-auto">
                      <b className="clock-time uppercase font-flanders-art-sans text-transparent !bg-clip-text [background:linear-gradient(92.8deg,_#fff,_#dadada)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                        {seconds}
                      </b>
                      <div className="clock-unit opacity-[0.6]">
                        Seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`absolute top-[10%] items-center w-full px-[12%] xl:px-[18%] ${selected === 1 ? "block" : "hidden"}`}>
                <div className="flex justify-between items-end w-full pb-4 xs:pb-10 md:pb-14 lg:pb-4 3xl:pb-12">
                  <div className="w-auto">Purchase Price</div>
                  <div className="w-auto">
                    <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      0.003 ETH PER TOKEN
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-[5rem] gap-y-4 xs:gap-y-10 md:gap-y-14 lg:gap-y-4 3xl:gap-y-12 lg:grid-cols-2">
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Valuation</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        300 ETH
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Maximum # of tokens per wallet</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        500
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Tokens Allocated</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        4,500
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">% of Total Supply</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        4.5%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full py-12 xs:py-16 md:py-20 lg:py-12 3xl:py-16">
                  <div className="absolute rounded-3xl bg-black opacity-10 w-full h-3"></div>
                  <div className="absolute rounded-3xl [background:linear-gradient(236.09deg,_#00e1ff,_#ff00da)] w-[4.5%] h-3"></div>
                </div>
                <div className="hidden w-full xxs:flex lg:hidden xl:flex justify-center lg:justify-start">
                  <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="rounded-lg [background:linear-gradient(94.73deg,_#c1c1c1,_#fff_28.7%,_#fff_69.99%,_#c1c1c1)] overflow-hidden flex flex-col items-center justify-center py-[0.94rem] px-[1.88rem]">
                    <div className="leading-[2rem] text-black text-2xl capitalize font-medium">
                      View Whitepaper
                    </div>
                  </Link>
                </div>
              </div>
              <div className={`absolute top-[10%] items-center w-full px-[12%] xl:px-[18%] ${selected === 2 ? "block" : "hidden"}`}>
                <div className="flex justify-between items-end w-full pb-4 xs:pb-10 md:pb-14 lg:pb-4 3xl:pb-12">
                  <div className="w-auto">Purchase Price</div>
                  <div className="w-auto">
                    <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      0.006 ETH PER TOKEN
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-[5rem] gap-y-4 xs:gap-y-10 md:gap-y-14 lg:gap-y-4 3xl:gap-y-12 lg:grid-cols-2">
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Valuation</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        600 ETH
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Maximum # of tokens per wallet</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        500
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">Tokens Allocated</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        20,000
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="w-auto">% of Total Supply</div>
                    <div className="w-auto">
                      <p className="font-bold text-lg md:text-2xl xl:text-3xl text-transparent !bg-clip-text [background:linear-gradient(200deg,_#00e1ff,_#ff00da_70.83%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        20%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full py-12 xs:py-16 md:py-20 lg:py-12 3xl:py-16">
                  <div className="absolute rounded-3xl bg-black opacity-10 w-full h-3"></div>
                  <div className="absolute rounded-3xl [background:linear-gradient(236.09deg,_#00e1ff,_#ff00da)] w-[20%] h-3"></div>
                </div>
                <div className="hidden w-full xxs:flex lg:hidden xl:flex justify-center lg:justify-start">
                  <Link href="https://drive.google.com/file/d/15QA8mkUw47ZYIGqhaqPxlbqnbJ-L_xR4/view?usp=sharing" target="_blank" className="rounded-lg [background:linear-gradient(94.73deg,_#c1c1c1,_#fff_28.7%,_#fff_69.99%,_#c1c1c1)] overflow-hidden flex flex-col items-center justify-center py-[0.94rem] px-[1.88rem]">
                    <div className="leading-[2rem] text-black text-2xl capitalize font-medium">
                      View Whitepaper
                    </div>
                  </Link>
                </div>
              </div>
              <div className="absolute top-[80%] md:top-[75%] lg:top-[53%] right-[6%] lg:right-[12%]">
                <div className="w-full flex space-x-8 items-center text-center uppercase mb-4 px-[10%]">
                  <Link href="https://snakedice.medium.com" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt=""
                      src="/images/snakedice/social/medium.png"
                    />
                  </Link>
                  <Link href="https://t.me/snakedicedao" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt=""
                      src="/images/snakedice/social/telegram.png"
                    />
                  </Link>
                  <Link href="https://discord.gg/FkdnBTVK" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt=""
                      src="/images/snakedice/social/discord.png"
                    />
                  </Link>
                  <Link href="https://twitter.com/snakedicedao" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt=""
                      src="/images/snakedice/social/twitter.png"
                    />
                  </Link>
                </div>
              </div>
              <div className="relative w-full z-[-1] hidden lg:block">
                <OutlineSVG />
              </div>
              <div className="relative w-full z-[-1] block lg:hidden">
                <OutlineMobileSVG />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1] w-full hidden lg:block">
          <SnakeSVG />
        </div>
        <div className="absolute left-0 top-0 z-[-1] w-full block lg:hidden">
          <SnakeMobileSVG />
        </div>
      </section >
    </>
  );
};

export default Home;
