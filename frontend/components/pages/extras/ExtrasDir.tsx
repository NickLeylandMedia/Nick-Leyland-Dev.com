/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const ExtrasDir = () => {
  //Function return statement
  return (
    <div className="ExtrasDir w-[95%] lg:w-3/5 mx-auto my-10">
      <div className="dirItem text-white text-center w-3/5 md:w-2/5 mx-auto my-5">
        <a href="" className="py-2 px-5 block bg-red-600 hover:bg-red-800">
          Site Info
        </a>
        <p>Statistics and info about this website!</p>
      </div>
      <div className="dirItem text-white text-center w-3/5 md:w-2/5 mx-auto my-5">
        <a href="" className="py-2 px-5 block bg-red-600 hover:bg-red-800">
          Resources
        </a>
        <p>Some of my favorite web development and coding resources!</p>
      </div>
    </div>
  );
};

/* Export Statement */
export default ExtrasDir;
