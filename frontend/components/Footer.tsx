/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* module Imports */
import { footerLinks } from "../modules/componentData";

/* Component Interfaces */

/* Component/Functions */
const Footer = () => {
  let renderedLinks = footerLinks.map(({ Name, URL }) => {
    return (
      <a key={`${Name}${URL}`} href={URL} className="m-auto dark:text-black">
        {Name}
      </a>
    );
  });

  //Function return statement
  return (
    <div className="Footer w-[95%] m-auto lg:w-[60%]">
      <hr className="bg-white dark:bg-black h-1 w-full my-2 mx-auto block" />
      <div className="footBox flex flex-col h-full md:flex-row">
        <div className="linksBox w-full  grid grid-rows-3 gap-7 grid-cols-3 text-white h-[70%] mx-auto my-3 font text-center">
          {renderedLinks}
        </div>
        <div className="badgeBox m-2">
          <h4 className="text-white mb-2 dark:text-black">Powered by:</h4>
          <div className="badgeList grid grid-cols-3 w-full">
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[150px] h-[44px] m-auto p-2 md:w-[250px] md:h-[73px]"
                src="tailword.svg"
                alt=""
              />
            </div>
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[150px] h-[44px] m-auto p-2"
                src="next.svg"
                alt=""
              />
            </div>
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[150px] h-[44px] m-auto p-2"
                src="sanity.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Footer;
