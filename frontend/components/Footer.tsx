/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Footer = () => {
  //Function return statement
  return (
    <div className="Footer w-[95%] m-auto lg:w-[60%]">
      <hr className="bg-white h-1 w-full my-2 mx-auto block" />
      <div className="footBox flex flex-col h-full md:flex-row">
        <div className="linksBox w-full  grid grid-rows-3 gap-7 grid-cols-3 text-white h-[70%] mx-auto my-3 font text-center">
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
          <a href="" className="m-auto">
            Projects
          </a>
        </div>
        <div className="badgeBox m-2">
          <h4 className="text-white mb-2">Powered by:</h4>
          <div className="badgeList grid grid-cols-3 w-full">
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[60%] h-[auto] max-h-[44px] md:max-h-[70px] xl:max-h-[100px] m-auto p-2"
                src="tailword.svg"
                alt=""
              />
            </div>
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[80%] h-[auto] max-h-[40px] m-auto md:max-h-[70px] xl:max-h-[100px] p-2"
                src="next.svg"
                alt=""
              />
            </div>
            <div className="badge my-[1px] flex flex-col bg-white text-center border border-black border-solid rounded-lg">
              <img
                className="w-[80%] h-[auto] max-h-[40px] m-auto md:max-h-[70px] xl:max-h-[100px] p-2"
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
