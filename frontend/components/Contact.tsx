/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Contact = () => {
  //Function return statement
  return (
    <div className="Contact w-[95%] lg:w-[60%] text-white mx-auto mb-7">
      <div className="w-[95%] h-auto">
        <h2 className="text-2xl lg:my-4">Contact</h2>
      </div>

      <div className="contactBox flex flex-col lg:flex-row mx-auto mt-[-45px] lg:mt-0">
        <div className="contactText mt-[52px] pr-6">
          <h3 className="hidden lg:block lg:mt-[190px]">Wanna chat?</h3>
          <p className="text-lg mb-4">
            Feel free to shoot me a message! I'm always looking for new and
            interesting projects!
          </p>
        </div>
        <div className="contactForm bg-white text-black rounded-lg w-[90%] m-auto">
          <form action="" className="h-full my-6">
            <div className="formLeft w-full h-full flex flex-col justify-center">
              <div className="formInput w-4/5 mx-auto flex flex-col">
                <label htmlFor="" className="w-full my-2">
                  Name:
                </label>
                <input
                  type="text"
                  className="border border-black border-solid w-[90%] m-auto"
                />
              </div>
              <div className="formInput w-4/5 mx-auto flex flex-col">
                <label htmlFor="" className="my-2">
                  Email:
                </label>
                <input
                  type="text"
                  className="border border-black border-solid w-[90%] m-auto"
                />
              </div>
              <div className="formInput w-4/5 mx-auto flex flex-col">
                <label htmlFor="" className="my-2">
                  Subject:
                </label>
                <input
                  type="text"
                  className="border border-black border-solid w-[90%] m-auto"
                />
              </div>
              <div className="formInput w-4/5 mx-auto my-5 flex flex-col">
                <label htmlFor="" className="my-2">
                  Message:
                </label>
                <textarea
                  name=""
                  id=""
                  cols={20}
                  rows={50}
                  className="border border-black border-solid m-auto h-[200px] overflow-y-auto w-[90%] break-all"
                  wrap="hard"
                ></textarea>
              </div>
              <div className="formInput w-2/5 h-10 m-auto">
                <button className="bg-red-500 w-full h-full text-center text-white">
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Contact;
