"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Toggler from "@/assets/svg/toggler.svg"

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

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
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0.59)_55.14%,_rgba(0,_0,_0,_0))] ${sticky
          ? "fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="w-full mx-4">
          <div className="relative mx-4 2xl:mx-[100px] flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
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
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden"
                >
                  <Toggler className={`${navbarOpen ? " top-[-8px] -rotate-45" : " "}`} />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 rounded border-[.5px] px-6 py-4 duration-300 border-body-color/20 bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12 lg:border-0 border-b lg:mb-0 mb-4 border-body-color/50">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {<ScrollLink activeClass="active" href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                            }`}
                          to={menuItem.path} spy={true} smooth={true} duration={500} >{menuItem.title}</ScrollLink>}
                      </li>
                    ))}
                  </ul>
                  <Link href="https://discord.gg/r2wBDTmZc5" target="_blank" className={`lg:hidden rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] shrink-0 flex flex-row items-center justify-start text-left text-[1.31rem] ${navbarOpen
                    ? "visibility"
                    : "invisible"
                    }`}>
                    <div className="rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] overflow-hidden flex flex-col items-center justify-center py-[0.5rem] px-[2rem]">
                      <div className="relative leading-[2rem] font-medium">
                        Join Discord
                      </div>
                    </div>
                  </Link>
                </nav>
              </div>
              <div className="hidden lg:flex items-center justify-end pr-16 xl:pr-0">
                <Link href="https://discord.gg/r2wBDTmZc5" target="_blank" className="rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] shrink-0 flex flex-row items-center justify-start text-left text-[1.31rem]">
                  <div className="rounded-lg [background:linear-gradient(99.85deg,_#4631d6,_#d535ef)] overflow-hidden flex flex-col items-center justify-center py-[0.5rem] px-[2rem]">
                    <div className="relative leading-[2rem] font-medium">
                      Join Discord
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
