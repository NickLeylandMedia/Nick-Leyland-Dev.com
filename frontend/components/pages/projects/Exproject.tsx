/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Exproject = () => {
  //Function return statement
  return (
    <div className="Exproject w-[95%] lg:w-3/5 m-auto">
      <h1 className="text-white text-2xl my-4">Food Review Base</h1>
      <div className="projDets flex flex-col w-full">
        <div className="projGraphic w-full">
          <img src="/foodGroup.svg" alt="" className="w-52 h-52  m-auto" />
        </div>
        <div className="projInfo w-full">
          <p className="text-white dark:text-black text-xl my-3">
            Food Review Base is a website where you can review your favorite
            food items from any restaurant! I started this project to keep track
            of restaurants and meals I eat at while I travel!
          </p>
          <h3 className="text-2xl text-white dark:text-black">Info</h3>
          <div className="infoRow flex flex-row">
            <h4 className="text-white dark:text-black">Published On:</h4>
            <span className="text-white dark:text-black">1-23-2022</span>
          </div>
          <div className="infoRow flex flex-row">
            <h4 className="text-white dark:text-black">Updated On:</h4>
            <span className="text-white dark:text-black">1-23-2022</span>
          </div>
          <h3 className="text-2xl text-white my-3 dark:text-black">
            Tech Stack
          </h3>
          <div className="stackRow grid grid-cols-5 w-full mx-auto my-2 lg:my-5 gap-3 relative mb-4">
            {/* STACK ITEM */}
            <div className="stackitem group">
              <img
                src="/next.svg"
                alt=""
                className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
              />
              <div className="StackName text-center w-full">
                <p className="text-white mt-1 dark:text-black">Next JS</p>
              </div>
            </div>
            {/* END STACK ITEM */}
            {/* STACK ITEM */}
            <div className="stackitem group">
              <img
                src="/postgres.svg"
                alt=""
                className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
              />
              <div className="StackName text-center w-full">
                <p className="text-white mt-1 dark:text-black">PostgreSQL</p>
              </div>
            </div>
            {/* END STACK ITEM */}
            {/* STACK ITEM */}
            <div className="stackitem group">
              <img
                src="/gcloud.svg"
                alt=""
                className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
              />
              <div className="StackName text-center w-full">
                <p className="text-white mt-1 dark:text-black">Google Cloud</p>
              </div>
            </div>
            {/* END STACK ITEM */}
            {/* STACK ITEM */}
            <div className="stackitem group">
              <img
                src="/node.svg"
                alt=""
                className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
              />
              <div className="StackName text-center w-full">
                <p className="text-white mt-1 dark:text-black">NodeJS</p>
              </div>
            </div>
            {/* END STACK ITEM */}
            {/* STACK ITEM */}
            <div className="stackitem group">
              <img
                src="/tailwindcss.svg"
                alt=""
                className="w-[60px] h-[60px] m-auto bg-white p-2 rounded-lg dark:shadow-blue"
              />
              <div className="StackName text-center w-full">
                <p className="text-white mt-1 dark:text-black">Tailwind CSS</p>
              </div>
            </div>
            {/* END STACK ITEM */}
          </div>
          <p className="stackDescription text-white dark:text-black text-xl">
            I used postgresql for the first time while building this project.
            The nodejs web application talks to postgres via the express
            framework.
          </p>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Exproject;
