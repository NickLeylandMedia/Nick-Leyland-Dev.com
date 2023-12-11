/* Library Imports */
//React
import React from "react";
import Link from "next/link";

//Redux
import { useAppDispatch, useAppSelector } from "../modules/redux/hooks";
import {
  setInvis,
  selectDispState,
} from "../modules/redux/slices/dispModeSlice";

/* Stylesheet Imports */

/* Image Imports */
import { IoMdClose } from "react-icons/io";

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectDispState);
  let showVar;
  if (data) {
    showVar = "flex";
  } else {
    showVar = "hidden";
  }
  //Function return statement
  return (
    <div
      className={`Sidebar ${showVar} fixed h-full right-0 top-0 w-2/5 bg-slate-600 text-white flex-col text-left`}
    >
      <IoMdClose
        className="sidebarClose m-2 p-3 h-[60px] w-[60px] relative right-[-62%] cursor-pointer"
        onClick={() => dispatch(setInvis())}
      />
      {/* <input
        type="text"
        className="border border-black border-solid w-4/5 mx-auto my-2 bg-white"
      /> */}
      <Link href="/">
        <a href="" className="m-2 p-3 text-2xl">
          Home
        </a>
      </Link>
      <Link href="/about">
        <a href="" className="m-2 p-3 text-2xl">
          About
        </a>
      </Link>
      <Link href="/contact">
        <a href="" className="m-2 p-3 text-2xl">
          Contact
        </a>
      </Link>
      <Link href="/projects">
        <a href="" className="m-2 p-3 text-2xl">
          Projects
        </a>
      </Link>
      <Link href="/">
        <a href="" className="m-2 p-3 text-2xl">
          Extras
        </a>
      </Link>
    </div>
  );
};

/* Export Statement */
export default Sidebar;
