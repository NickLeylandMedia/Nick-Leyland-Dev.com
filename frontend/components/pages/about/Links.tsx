/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Links = () => {
  //Function return statement
  return (
    <div className="Links w-[95%] m-auto lg:w-[60%] text-center">
      <h1>My Links</h1>
      <div className="linkContainer w-full grid grid-cols-5">
        {/* LINK */}
        <div className="bioLink w-full">
          <img
            src="/facebook.svg"
            alt=""
            className="w-[75px] h-[75px] m-auto"
          />
          <a href="" className="text-white text-md mx-auto w-full block">
            Facebook
          </a>
        </div>
        {/* END LINK */}
      </div>
    </div>
  );
};

/* Export Statement */
export default Links;
