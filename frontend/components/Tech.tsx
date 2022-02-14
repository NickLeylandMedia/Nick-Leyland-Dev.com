/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Tech = () => {
  //Function return statement
  return (
    <div className="Tech w-[95%] lg:w-3/5 mx-auto my-5">
      <h1 className="text-white text-2xl dark:text-black">My Tools</h1>
      <p className="text-white text-xl border my-4 dark:text-black">
        Over the years I've gained experience with many different web
        technologies. These are the tools I use most frequently!
      </p>
      <a
        className="bg-white mt-2 mb-6 block w-[200px] p-2 rounded-md text-center"
        href=""
      >
        See All Tech/Projects
      </a>
      <div className="toolShowcase w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* TOOL */}
        <a href="http://www.nextjs.org">
          <div className="techtool bg-white text-center w-full lg:w-[75%] m-auto h-44 lg:h-48 xl:h-48 relative border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
            <div className="toolInfo w-full h-full relative top-[35%]">
              <img
                className="w-auto h-[50px] m-auto max-w-[50%]"
                src="next.svg"
                alt=""
              />
              <h4 className="mt-2">Next.js</h4>
            </div>
          </div>
        </a>
        {/* END TOOL */}
        {/* TOOL */}
        <a href="http://www.tailwindcss.com">
          <div className="techtool bg-white text-center w-full lg:w-[75%] m-auto h-44 lg:h-48 xl:h-48 relative border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
            <div className="toolInfo w-full h-full relative top-[35%]">
              <img
                className="w-auto h-[50px] m-auto max-w-[50%]"
                src="tailwindcss.svg"
                alt=""
              />
              <h4 className="mt-2">Tailwind CSS</h4>
            </div>
          </div>
        </a>
        {/* END TOOL */}
        {/* TOOL */}
        <a href="http://www.sanity.io">
          <div className="techtool bg-white text-center w-full lg:w-[75%] m-auto h-44 lg:h-48 xl:h-48 relative border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
            <div className="toolInfo w-full h-full relative top-[35%]">
              <img
                className="w-auto h-[50px] m-auto max-w-[50%]"
                src="sanity.svg"
                alt=""
              />
              <h4 className="mt-2">Sanity.io</h4>
            </div>
          </div>
        </a>
        {/* END TOOL */}
        {/* TOOL */}
        <a href="https://cloud.google.com/">
          <div className="techtool bg-white text-center w-full lg:w-[75%] m-auto h-44 lg:h-48 xl:h-48 relative border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
            <div className="toolInfo w-full h-full relative top-[35%]">
              <img
                className="w-auto h-[50px] m-auto max-w-[50%]"
                src="gcloud.svg"
                alt=""
              />
              <h4 className="mt-2">Google Cloud</h4>
            </div>
          </div>
        </a>
        {/* END TOOL */}
      </div>
    </div>
  );
};

/* Export Statement */
export default Tech;
