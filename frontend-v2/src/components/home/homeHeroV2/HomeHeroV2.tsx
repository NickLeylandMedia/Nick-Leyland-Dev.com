/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./HomeHeroV2.module.scss";

/* Image Imports */
import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const HomeHeroV2: React.FC<Props> = () => {
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
    <div className={`${styles.HomeHeroV2} hero`}>
      <div className={styles.contentBox}>
        <h1 className="primary light">NICK LEYLAND</h1>
        <div className={styles.gridMenu}>
          <Link className="whiteRoundedLink primary" href={"/about"}>
            ABOUT
          </Link>
          <Link className="whiteRoundedLink primary" href={"/projects"}>
            PROJECTS
          </Link>
          <Link
            className="whiteRoundedLink primary"
            href={"https://github.com/NickLeylandMedia"}
          >
            GITHUB
          </Link>
          <Link className="whiteRoundedLink primary" href={"/blog"}>
            BLOG
          </Link>
          <Link className="whiteRoundedLink primary" href={"/links"}>
            LINKS
          </Link>
          <Link className="whiteRoundedLink primary" href={"/extras"}>
            EXTRAS
          </Link>
        </div>
        <Link href={""} className="orangeRoundedLink primary">
          WORK WITH ME
        </Link>
      </div>
      <div className={styles.wideContentBox}>
        <h1 className="primary light">NICK LEYLAND</h1>
        <div className={styles.linkLine}>
          <Link className="whiteRoundedLink" href={"/about"}>
            ABOUT
          </Link>
          <Link className="whiteRoundedLink" href={"/projects"}>
            PROJECTS
          </Link>
          <Link
            className="whiteRoundedLink"
            href={"https://github.com/NickLeylandMedia"}
          >
            GITHUB
          </Link>
          <Link className="whiteRoundedLink" href={"/blog"}>
            BLOG
          </Link>
          <Link className="whiteRoundedLink" href={"/links"}>
            LINKS
          </Link>
          <Link className="whiteRoundedLink" href={"/extras"}>
            EXTRAS
          </Link>
        </div>
        <div className={styles.wideLinkBox}>
          <Link href={"/contact"} className="orangeRoundedLink">
            WORK WITH ME
          </Link>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default HomeHeroV2;
