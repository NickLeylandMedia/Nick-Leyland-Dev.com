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
      <div className="projFilters flex flex-col text-center my-4 w-full">
        <h5 className="text-white dark:text-black leading my-2">Filter By:</h5>
        <div className="filterFlex grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {/* FILTER */}
          <div className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer">
            <img
              src="/react.svg"
              alt=""
              className="w-[75px] h-[75px] m-auto p-1"
            />
            <p className="filterTitle">React</p>
          </div>
          {/* END FILTER */}
          {/* FILTER */}
          <div className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer">
            <img
              src="/tailwindcss.svg"
              alt=""
              className="w-[75px] h-[75px] m-auto p-1"
            />
            <p className="filterTitle">Tailwind</p>
          </div>
          {/* END FILTER */}
          {/* FILTER */}
          <div className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer">
            <img
              src="/next.svg"
              alt=""
              className="w-[75px] h-[75px] m-auto p-1"
            />
            <p className="filterTitle">Next</p>
          </div>
          {/* END FILTER */}
          {/* FILTER */}
          <div className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer">
            <img
              src="/gcloud.svg"
              alt=""
              className="w-[75px] h-[75px] m-auto p-1"
            />
            <p className="filterTitle">Google Cloud</p>
          </div>
          {/* END FILTER */}
          {/* FILTER */}
          <div className="filter bg-white rounded-lg flex flex-col border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue opacity-40 hover:opacity-100 transition ease-in-out duration-500 cursor-pointer">
            <img
              src="/postgres.svg"
              alt=""
              className="w-[75px] h-[75px] m-auto p-1"
            />
            <p className="filterTitle">PostgreSQL</p>
          </div>
          {/* END FILTER */}
        </div>
      </div>
      <div className="cardCont grid grid-cols-1 md:grid-cols-2 mb-5 w-full gap-4">
        {/* PROJECT CARD */}
        <div className="projectCard text-black bg-white h-[350px] p-4 w-full border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
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
              className="bg-red-600 dark:bg-blue-600 text-white px-5 py-2 block m-auto text-center"
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
