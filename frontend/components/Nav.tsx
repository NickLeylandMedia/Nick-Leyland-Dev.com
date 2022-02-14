/* Library Imports */
//React
import React, { useEffect } from "react";

//React-Icons
import { BiMenu } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
//Next Components
import Link from "next/link";
import Image from "next/image";

/* module Imports */
import { swapStyle } from "../modules/StyleFunction";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Module Imports */
import { navLinks } from "../modules/componentData";

/* Component Interfaces */

/* Component/Functions */
const Nav = () => {
  // useEffect(() => {
  //   const check = document.documentElement.classList.contains("light");
  //   const targ = document.querySelector(".navLogo") as HTMLImageElement;
  //   if (check) {
  //     targ.src = "unboxed.svg";
  //   } else {
  //     targ.src = "ubn.svg";
  //   }
  // }, []);

  const renderedNavLinks = navLinks.map(({ Name, URL, Active }) => {
    if (Active) {
      return (
        <div key={`navli${Name}${URL}`} className="navLinkCont">
          <Link href={URL}>
            <a className="hover:bg-red-600 dark:hover:bg-blue-600 py-2 px-4 rounded-lg dark:text-black">
              {Name}
            </a>
          </Link>
        </div>
      );
    } else {
      return;
    }
  });
  //Function return statement
  return (
    <nav className="w-[95%] m-auto lg:w-[60%] h-[70px] flex flex-row justify-between">
      <img
        className="navLogo w-[50px] h-[50px] my-auto lg:ml-0 dark:hidden"
        src="unboxed.svg"
        alt=""
      />
      <img
        className="navLogo w-[50px] h-[50px] my-auto lg:ml-0 hidden dark:block"
        src="ubn.svg"
        alt=""
      />
      <BiMenu className="h-[50px] w-[50px] text-white my-auto lg:hidden mr-[-8px]" />
      <div className="navLinks h-full w-[65%] flex-row justify-between leading-[60px] text-[20px] text-white hidden lg:flex">
        {renderedNavLinks}
        <BsFillSunFill
          className="w-[40px] h-[40px] text-white mt-3 mx-2 dark:hidden"
          onClick={swapStyle}
        />
        <BsFillMoonFill
          className="w-[40px] h-[40px] text-black mt-3 mx-2 hidden dark:block"
          onClick={swapStyle}
        />
      </div>
    </nav>
  );
};

/* Export Statement */
export default Nav;
