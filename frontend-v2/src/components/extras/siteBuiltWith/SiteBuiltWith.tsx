/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SiteBuiltWith.module.scss";

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
const SiteBuiltWith: React.FC<Props> = ({ items }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedBuildTools: any = "No items to display.";
  /* End Render Variables */

  /* Functions */
  //Logic to render build tools
  if (items && items.length > 0) {
    renderedBuildTools = items.map((item, index) => {
      return (
        <Link href={item.url} key={index} className={styles.buildTool}>
          <Image
            height={720}
            width={1280}
            className={styles.buildToolImg}
            src={urlFor(item.image).url()}
            alt=""
          />
        </Link>
      );
    });
  }
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={styles.SiteBuiltWith}>
      <h2 className="primary">Built With:</h2>
      <div className={styles.toolContainer}>{renderedBuildTools}</div>
    </div>
  );
};

/* Export Statement */
export default SiteBuiltWith;
