/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const ProjectFeature = () => {
  //Function return statement
  return (
    <div className="Projects w-[95%] lg:w-3/5 mx-auto my-7 text-2xl text-white ">
      <h2 className="text-2xl my-2 dark:text-black">Projects</h2>
      <a
        className="bg-white mt-2 mb-6 block w-[200px] p-2 rounded-md text-center text-black text-[16px]"
        href=""
      >
        See All Projects
      </a>
      <div className="projectShowcase w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
        {/* PROJECT */}
        <div className="project bg-white h-32 my-3 border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue flex flex-row justify-between md:justify-evenly xl:justify-center">
          <img
            className="w-[30%] h-auto ml-2 md:ml-0"
            src="foodGroup.svg"
            alt=""
          />
          <div className="projectInfo w-[70%] flex flex-col my-2 lg:my-3">
            <h4 className="text-black mx-7 md:text-[19px]">Food Review Base</h4>
            <p className="text-black text-[16px] md:text-[14px] lg:text-[20px] mx-7">
              Restaurant and meal review database.
            </p>
          </div>
        </div>
        {/* END PROJECT */}
        {/* PROJECT */}
        <a href="http://www.nick-leyland.com">
          <div className="project bg-white h-32 my-3 border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue flex flex-row justify-between md:justify-evenly xl:justify-center">
            <img className="w-[30%] h-auto ml-2 md:ml-0" src="ubn.svg" alt="" />
            <div className="projectInfo flex flex-col w-[70%]  my-2 lg:my-3">
              <h4 className="text-black mx-7 md:text-[19px]">
                Nick Leyland Media
              </h4>
              <p className="text-black text-[16px] md:text-[14px] lg:text-[20px] mx-7">
                My photo/videography website!
              </p>
            </div>
          </div>
        </a>
        {/* END PROJECT */}
      </div>
    </div>
  );
};

/* Export Statement */
export default ProjectFeature;
