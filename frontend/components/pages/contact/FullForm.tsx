/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const FullForm = () => {
  //Function return statement
  return (
    <div className="FullForm w-[95%] lg:w-[60%] text-white mx-auto mb-7">
      <h1 className="text-xl">Let&apos;s Talk!</h1>
      <p className="text-xl">
        Have a question about my work? Want to hire me? Or do you just wanna
        chat? Whatever it is, drop me a line and I&apos;ll respond as soon as I
        can!
      </p>
      <div className="contactForm bg-white text-black rounded-lg w-full md:w-[50%] m-auto  dark:border-0 dark:shadow-blue">
        <form
          action="https://cform.rac-0.fr/f/f3e318b220fa9fa6709b90f2862f8050"
          method="POST"
          className="h-full my-6"
        >
          <div className="formLeft w-full h-full flex flex-col justify-center">
            <div className="formInput w-4/5 mx-auto flex flex-col mt-4">
              <label htmlFor="name" className="w-full my-2">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-black border-solid w-[90%] m-auto"
              />
            </div>
            <div className="formInput w-4/5 mx-auto flex flex-col">
              <label htmlFor="email" className="my-2">
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="border border-black border-solid w-[90%] m-auto"
              />
            </div>
            <div className="formInput w-4/5 mx-auto flex flex-col">
              <label htmlFor="subject" className="my-2">
                Subject:
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="border border-black border-solid w-[90%] m-auto"
              />
            </div>
            <div className="formInput w-4/5 mx-auto my-5 flex flex-col">
              <label htmlFor="message" className="my-2">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols={20}
                rows={50}
                className="border border-black border-solid m-auto h-[200px] overflow-y-auto w-[90%] break-all"
                wrap="hard"
              ></textarea>
            </div>
            <div className="formInput w-2/5 h-10 mx-auto mb-5">
              <button className="bg-red-500 dark:bg-blue-600 w-full h-full text-center text-white">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Export Statement */
export default FullForm;
