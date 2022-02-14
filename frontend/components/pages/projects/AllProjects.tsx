/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const AllProjects = () => {
  //Function return statement
  return (
    <div className="AllProjects w-[95%] lg:w-3/5 m-auto">
      <h1 className="text-white text-2xl mb-4 dark:text-black">My Projects</h1>
      <div className="projectFilters">
        <div className="filterOpts"></div>
        <div className="filterDrop"></div>
      </div>
      <div className="cardCont grid grid-cols-1 md:grid-cols-2 mb-5 w-full gap-4">
        {/* PROJECT CARD */}
        <div className="projectCard text-black bg-white h-[350px] p-4 w-full border-solid border-3  border-[#cf3838]">
          <div className="flex flex-row h-[50%]">
            <div className="projInfo w-[50%]">
              <h3 className="text-xl">Food Review Base</h3>
              <p className="text-xl">
                A database of restaurant and meal reviews!
              </p>
            </div>
            <div className="projGraphic w-[50%]">
              <img src="foodGroup.svg" alt="" className="h-full m-auto" />
            </div>
          </div>
          <div className="cardBottom">
            <h3>Tools</h3>
            <div className="projTools flex flex-row my-2">
              <div className="tool w-1/4">
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src="tailwindcss.svg"
                  alt=""
                />
              </div>
              <div className="tool w-1/4">
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src="next.svg"
                  alt=""
                />
              </div>
              <div className="tool w-1/4">
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src="node.svg"
                  alt=""
                />
              </div>
              <div className="tool w-1/4">
                <img
                  className="w-[70px] h-[70px] m-auto p-2"
                  src="node.svg"
                  alt=""
                />
              </div>
            </div>
            <a
              href=""
              className="bg-red-600 text-white px-5 py-2 block m-auto text-center"
            >
              More Info
            </a>
          </div>
        </div>
        {/* END PROJECT CARD */}
      </div>
    </div>
  );
};

/* Export Statement */
export default AllProjects;
