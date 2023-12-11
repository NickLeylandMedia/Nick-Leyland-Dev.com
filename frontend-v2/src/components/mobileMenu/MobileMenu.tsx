/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./MobileMenu.module.scss";

/* Image Imports */
import { FaHome, FaCode, FaLink, FaPlus } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { FaPencil } from "react-icons/fa6";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const MobileMenu: React.FC<Props> = () => {
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
    <div className={`${styles.MobileMenu}  darkGrayOverlay`}>
      <Link href={"/"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>HOME</h2>
        <FaHome className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/about"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>ABOUT</h2>
        <TbUserQuestion className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/projects"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>PROJECTS</h2>
        <FaCode className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/contact"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>CONTACT</h2>
        <SiMinutemailer className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/blog"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>BLOG</h2>
        <FaPencil className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/links"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>LINKS</h2>
        <FaLink className={styles.mobileMenuLinkIcon} />
      </Link>
      <Link href={"/extras"} className={styles.mobileMenuLink}>
        <h2 className={styles.mobileMenuLinkText}>EXTRAS</h2>
        <FaPlus className={styles.mobileMenuLinkIcon} />
      </Link>
    </div>
  );
};

/* Export Statement */
export default MobileMenu;
