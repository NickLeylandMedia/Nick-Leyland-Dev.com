/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./DevResources.module.scss";

/* Image Imports */

/* Component Imports */
import Link from "next/link";

/* Module Imports */
import { urlFor } from "@/modules/urlFor";

/* Component Interfaces */
interface Props {
  items: any[];
}

/* Component */
const DevResources: React.FC<Props> = ({ items }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedResources: any = "No items to display.";
  /* End Render Variables */

  /* Functions */
  //Logic to render resources
  if (items && items.length > 0) {
    renderedResources = items.map((item) => {
      return (
        <Link href={item.url} key={Math.random()} className={styles.resource}>
          <img src={urlFor(item.image).url()} alt="" />
          <h2 className="primary">{item.name}</h2>
          <p className="">{item.description}</p>
        </Link>
      );
    });
  }
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={styles.DevResources}>
      <h2 className="primary">Resources</h2>
      <p className={styles.resourceTagline}>
        Some of my favorite development resources.
      </p>
      <div className={styles.resourceContainer}>{renderedResources}</div>
    </div>
  );
};

/* Export Statement */
export default DevResources;
