"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Social1SVG from "@/assets/svg/social/sosmed-1.svg";
import Social2SVG from "@/assets/svg/social/sosmed-2.svg";
import Social3SVG from "@/assets/svg/social/sosmed-3.svg";
import Social4SVG from "@/assets/svg/social/sosmed-4.svg";

const Footer = () => {

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();

  return (
    <>
      <footer
        className="wow fadeInUp !bg-opacity-80 absolute bottom-0 w-full z-10"
        data-wow-delay=".1s"
      >
        <div className="px-4 lg:mt-0 backdrop-blur-sm transition border-t border-body-color/50">
          <div className="relative mx-4 2xl:mx-[100px] flex flex-col lg:flex-row items-center justify-between lg:border-b border-body-color/50">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-5"
                  } `}
              >
                <Image
                  src="/images/snakedice/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full hidden"
                />
                <Image
                  src="/images/snakedice/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full block"
                />
              </Link>
            </div>
            <div className="flex w-full justify-center lg:justify-end px-4">
              <ul className="flex flex-col lg:flex-row lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {<ScrollLink activeClass="active" href={menuItem.path}
                      className={`flex justify-center py-3 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                        }`}
                      to={menuItem.path} spy={true} smooth={true} duration={500} >{menuItem.title}</ScrollLink>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative mx-4 2xl:mx-[100px] flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full flex justify-center lg:justify-start px-4 xl:mr-12 text-xs py-6">
              Copyright © 2023. All rights reserved.
            </div>
            <div className="w-full flex justify-center lg:justify-end lg:pr-16 xl:pr-4 py-6 lg:py-0 border-b lg:border-0 border-body-color/50">
              <div className="flex space-x-4 items-center">
                <Link href="https://snakedice.medium.com" target="_blank">
                  <Social1SVG />
                </Link>
                <Link href="https://t.me/snakedicedao" target="_blank">
                  <Social2SVG />
                </Link>
                <Link href="https://discord.gg/FkdnBTVK" target="_blank">
                  <Social3SVG />
                </Link>
                <Link href="https://twitter.com/snakedicedao" target="_blank">
                  <Social4SVG />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
