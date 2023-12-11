/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Navbar.module.scss";

/* Image Imports */
import { IoHome } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  setter: any;
  showMenu: boolean;
}

/* Component */
const Navbar: React.FC<Props> = ({ setter, showMenu }) => {
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
    <div className={styles.Navbar}>
      <div className={styles.mobileNav}>
        <IoHome className={styles.icon} />

        {showMenu ? (
          <AiOutlineClose
            className={styles.icon}
            onClick={() => setter(false)}
          />
        ) : (
          <AiOutlineMenu className={styles.icon} onClick={() => setter(true)} />
        )}
      </div>
      <div className={styles.fullNav}>
        <Link className="textLinkWithBackground" href={"/"}>
          HOME
        </Link>
        <Link className="textLinkWithBackground" href={"/about"}>
          ABOUT
        </Link>
        <Link className="textLinkWithBackground" href={"/projects"}>
          PROJECTS
        </Link>
        <Link className="textLinkWithBackground" href={"/contact"}>
          CONTACT
        </Link>
        <Link className="textLinkWithBackground" href={"/blog"}>
          BLOG
        </Link>
        <Link className="textLinkWithBackground" href={"/links"}>
          LINKS
        </Link>
        <Link className="textLinkWithBackground" href={"/extras"}>
          EXTRAS
        </Link>
      </div>
    </div>
  );
};

/* Export Statement */
export default Navbar;
