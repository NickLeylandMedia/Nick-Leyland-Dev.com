/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Intro = () => {
  //Function return statement
  return (
    <div className="Intro w-[95%] h-[300px] rounded-lg lg:w-[60%] mx-auto my-2 bg-white p-4 flex flex-row border-solid border-3  border-[#cf3838] dark:border-0 dark:shadow-blue">
      <div className="introText w-full text-center">
        <h1 className="my-1 text-xl">Hi! I'm Nick</h1>
        <h2 className="my-2 text-transparent bg-clip-text bg-gradient-to-br from-red-200 dark:from-blue-200 to-red-600 dark:to-blue-600">
          Fullstack Developer
        </h2>
        <img
          className="rounded-full h-[100px] w-[100px] mx-auto my-5"
          src="me.jpg"
          alt=""
        />
        <p className="border text-xl">
          A photographer, editor, and creator that loves building web apps that
          make life easier!
        </p>
      </div>
      <img className="rounded-full m-10 hidden" src="me.jpg" alt="" />
    </div>
  );
};

/* Export Statement */
export default Intro;
