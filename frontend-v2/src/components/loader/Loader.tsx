/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Loader.module.scss";

/* Image Imports */
import { FaReact } from "react-icons/fa";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const Loader: React.FC<Props> = () => {
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
    <div className={styles.Loader}>
      <FaReact className={styles.loaderIcon} />
      <h2 className={`${styles.loaderText} primary`}>Loading</h2>
    </div>
  );
};

/* Export Statement */
export default Loader;
