/* Library Imports */
//React
import React from "react";

import Link from "next/link";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Bio = () => {
  //Function return statement
  return (
    <div className="Bio w-[95%] m-auto lg:w-[60%] text-center">
      {/* <h2 className="text-2xl lg:my-4 dark:text-black text-white">About</h2> */}
      <h1 className="text-white text-4xl my-3">Hi! I&apos;m Nick!</h1>
      <img
        src="/me.jpg"
        alt=""
        className="w-[50%] rounded-full mx-auto my-3 border-solid border-3 border-[#cf3838] dark:border-0 dark:shadow-blue"
      />
      <p className="my-3 text-white text-xl">
        I&apos;m a creator that is passionate about the digital arts and
        building useful web apps!
      </p>
      <div className="bioHeader">
        <div className="bioText text-white dark:text-black text-2xl text-left">
          <h2 className="mt-4">Background</h2>
          <p className="my-4">
            I knew from the time I was a child that I was going to end up in the
            technology space. I grew up playing all of the popular video games
            like Halo, Call of Duty, GTA, and more. Before I ever got into web
            development, I had dreamed of building my own video game.
          </p>
          <p className="my-4">
            Fast-forward many years and my life has gone an entirely different
            direction. I landed a job as a web developer and marketing
            specialist - and from here my tech skills really began to blossom.
          </p>
          <p className="my-4">
            I fell in love with building websites - especially with the
            JAMstack. There&apos;s something about building a snazzy website
            that looks exactly how I want and performs exactly as I need it to
            that really is satisfying to me.
          </p>
          <p className="my-4">
            When I was hired on I only knew HTML and CSS, and since then, I have
            expanded my toolset greatly. React is my framework of choice, and
            lately I&apos;m loving Next.js!
          </p>
          <h2>Right Now</h2>
          <p className="my-4">
            The last few months have been spent buttoning up my portfolio, as
            well as learning a handful of new web technologies. However, web
            development is not my only passion. I&apos;m founded Nick Leyland
            Media in 2019 as a vehicle to promote my photography and videography
            endeavors. Since founding the company, I have produced a full length
            film (with another on the way!), and amassed over 100 subscribers on
            YouTube.
          </p>
          <p className="my-4">
            Between learning programming, producing full-length films, and
            hunting for a job in the webdev space, life can certainly seem like
            a whirlwind at times. I take pride in every project I take on, and
            I&apos;d love to add value to yours. If you want to work together,{" "}
            <Link href="/contact" passHref>
              <span className="text-red-600 cursor-pointer">
                drop me a line!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Bio;
