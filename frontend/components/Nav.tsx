/* Library Imports */
//React
import React from "react";
//React-Icons
import { BiMenu } from "react-icons/bi";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Nav = () => {
  //Function return statement
  return (
    <nav className="w-[95%] m-auto lg:w-[60%] h-[70px] flex flex-row justify-between">
      <img
        className="w-[50px] h-[50px] my-auto lg:ml-0"
        src="unboxed.svg"
        alt=""
      />
      <BiMenu className="h-[50px] w-[50px] text-white my-auto lg:hidden mr-[-8px]" />
      <div className="navLinks h-full w-[65%] flex-row justify-between leading-[60px] text-[20px] text-white hidden lg:flex">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a href="">Extras</a>
      </div>
    </nav>
  );
};

/* Export Statement */
export default Nav;
