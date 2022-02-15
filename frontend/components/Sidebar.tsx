/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Sidebar = () => {
  //Function return statement
  return (
    <div className="Sidebar fixed h-full right-0 top-0 w-2/5 bg-slate-600 text-white flex flex-col text-right">
      <a href="" className="m-2 p-3 text-2xl">
        Home
      </a>
      <a href="" className="m-2 p-3 text-2xl">
        About
      </a>
      <a href="" className="m-2 p-3 text-2xl">
        Contact
      </a>
      <a href="" className="m-2 p-3 text-2xl">
        Projects
      </a>
      <a href="" className="m-2 p-3 text-2xl">
        Extras
      </a>
    </div>
  );
};

/* Export Statement */
export default Sidebar;
