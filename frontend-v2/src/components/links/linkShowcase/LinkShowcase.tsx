/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./LinkShowcase.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */
import { urlFor } from "@/modules/urlFor";

/* Component Interfaces */
interface Props {
  items: any[];
}

/* Component */
const LinkShowcase: React.FC<Props> = ({ items }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedLinkCategories: any = null;
  /* End Render Variables */

  /* Functions */
  //Logic to render links in their own categories
  if (items && items.length > 0) {
    renderedLinkCategories = items.map((item: any) => {
      if (item.links.length > 0) {
        const renderedLinks = item.links.map((link: any) => {
          return (
            <Link key={Math.random()} href={link.url}>
              <div className={styles.showcaseLink}>
                <div className={`${styles.iconContainer}`}>
                  <Image
                    alt=""
                    height={720}
                    width={1280}
                    src={urlFor(link.image).url()}
                    className={styles.showcaseIcon}
                  />
                </div>
                <h2 className={`primary ${styles.showcaseText}`}>
                  {link.name}
                </h2>
              </div>
            </Link>
          );
        });
        return (
          <div key={Math.random()} className={styles.linkCategory}>
            <h2 className={`${styles.linkCatHeader} primary`}>{item.name}</h2>
            <div className={styles.linkContainer}>{renderedLinks}</div>
          </div>
        );
      }
    });
  }
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.LinkShowcase} darkGrayOverlay`}>
      <h1 className={`primary ${styles.linkShowcaseHeader}`}>Links</h1>
      {renderedLinkCategories}
    </div>
  );
};

/* Export Statement */
export default LinkShowcase;
