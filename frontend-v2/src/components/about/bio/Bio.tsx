/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Bio.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const Bio: React.FC<Props> = () => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.Bio} darkGrayOverlay`}>
      <div className={styles.bioContent}>
        <h2 className={`primary ${styles.bioHeader} light`}>
          Hi! I&apos;m Nick!
        </h2>
        <div className={styles.bioInnerContent}>
          <Image
            src="/me.jpg"
            alt=""
            width={1280}
            height={720}
            className={styles.bioImage}
          />

          <p className={`center light`}>
            I&apos;m a creator that is passionate about the digital arts and
            building useful web apps!
          </p>
          <h2 className="primary light">Background</h2>
          <p className="light">
            I knew from the time I was a child that I was going to end up in the
            technology space. I grew up playing all of the popular video games
            like Halo, Call of Duty, GTA, and more. Before I ever got into web
            development, I had dreamed of building my own video game.
          </p>
          <p className="light">
            Fast-forward many years and my life has gone an entirely different
            direction. I landed a job as a web developer and marketing
            specialist - and from here my tech skills really began to blossom.
          </p>
          <p className="light">
            I fell in love with building websites - especially with the
            JAMstack. There&apos;s something about building a snazzy website
            that looks exactly how I want and performs exactly as I need it to
            that really is satisfying to me.
          </p>
          <p className="light">
            When I was hired on I only knew HTML and CSS, and since then, I have
            expanded my toolset greatly. React is my framework of choice, and
            lately I&apos;m loving Next.js!
          </p>
          <h2 className="primary light">Right Now</h2>
          <p className="light">
            The last few months have been spent buttoning up my portfolio, as
            well as learning a handful of new web technologies. However, web
            development is not my only passion. I&apos;m founded Nick Leyland
            Media in 2019 as a vehicle to promote my photography and videography
            endeavors. Since founding the company, I have produced a full length
            film (with another on the way!), and amassed over 100 subscribers on
            YouTube.
          </p>
          <p className="light">
            Between learning programming, producing full-length films, and
            hunting for a job in the webdev space, life can certainly seem like
            a whirlwind at times. I take pride in every project I take on, and
            I&apos;d love to add value to yours. If you want to work together,{" "}
            <Link href="/contact" passHref>
              <span className="">drop me a line!</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default Bio;
