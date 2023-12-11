/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import styles from "./HomeHero.module.scss";

/* Image Imports */

/* Component Imports */
import Link from "next/link";

/* Module Imports */
import { deviceType } from "detect-it";

/* Component Interfaces */
interface Props {}

/* Component */
const HomeHero: React.FC<Props> = () => {
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
    <div className={`${styles.HomeHero} hero`}>
      <div className={styles.centralContent}>
        <h1 className={`${styles.homeTitlePrimary} primary`}>NICK LEYLAND</h1>
        <div className={styles.homeLinkMenu}>
          <Link href="/about" className={`${styles.homeLink} primary`}>
            ABOUT
          </Link>
          <hr className={styles.homeHR} />
          <Link href="/projects" className={`${styles.homeLink} primary`}>
            PROJECTS
          </Link>
          <hr className={styles.homeHR} />
          <Link href="/projects" className={`${styles.homeLink} primary`}>
            CONTACT
          </Link>
          <hr className={styles.homeHR} />
          <Link href="/blog" className={`${styles.homeLink} primary`}>
            BLOG
          </Link>
          <hr className={styles.homeHR} />
          <Link href="/links" className={`${styles.homeLink} primary`}>
            LINKS
          </Link>
          <hr className={styles.homeHR} />
          <Link href="/projects" className={`${styles.homeLink} primary`}>
            EXTRAS
          </Link>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default HomeHero;
